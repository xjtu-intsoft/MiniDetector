# 此文件用于生成词袋相关的分类模型

# 搭建模型
from keras.engine.saving import load_model
from keras.layers import Embedding, Conv1D, MaxPooling1D, Flatten, Dropout, BatchNormalization, Dense, Convolution1D, MaxPool1D, LSTM
from keras.models import Sequential
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.model_selection import train_test_split, cross_val_score, KFold
from keras.utils import to_categorical
from keras import backend as K
from sklearn.decomposition import PCA

# from ltp import LTP
import os
import numpy as np
import pandas as pd

os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"
os.environ["CUDA_VISIBLE_DEVICES"] = "0,1,2,3"


type_vocab_v1_path = '/data1/wy/tosem/privacyPolicyAnalyze/vocab_type_v1_exist.txt'
type_vocab_v2_path = '/data1/wy/tosem/privacyPolicyAnalyze/vocab_type_v2_exist.txt'
action_vocab_path = '/data1/wy/tosem/privacyPolicyAnalyze/vocab_act_exist.txt'

act_dict = {}
with open(action_vocab_path, "r", encoding="utf-8") as reader:
    for line in reader:
        token = line.strip()
        act_dict[token] = len(act_dict)
act_dict['DELETE_LEFT'] = len(act_dict)


def get_dependent_dict(version = "1", act=False):
    token_dict = {}
    if version == "1":
        with open(type_vocab_v1_path, "r", encoding="utf-8") as reader:
            for line in reader:
                token = line.strip()
                token_dict[token] = len(token_dict)

    elif version == "2":
        with open(type_vocab_v2_path, "r", encoding="utf-8") as reader:
            for line in reader:
                token = line.strip()
                token_dict[token] = len(token_dict)

    if act:
        with open(action_vocab_path, "r", encoding="utf-8") as reader:
            for line in reader:
                token = line.strip()
                token_dict[token] = len(token_dict)


    return token_dict

def update_token_dict(vacab_path):
    old_vocab = []
    with open(vacab_path, "r", encoding="utf-8") as reader:
        for line in reader:
            token = line.strip()
            old_vocab.append(token)

    df = pd.read_csv('/data1/wy/tosem/privacyPolicyAnalyze/labelSentences.csv', encoding='utf_8_sig').fillna(value="")
    new_vocab_list = []
    
    for idx, i in df.iterrows():
        for v in old_vocab:
            if v in i["sentence"] and v not in new_vocab_list:
                new_vocab_list.append(v)
 
    return new_vocab_list
    

# token_list = update_token_dict(vacab_path=type_vocab_v1_path)
# with open("/data2/wy/248/PrivacyPolicyAnalyze/vocab_type_v1_exist.txt", "w", encoding="utf-8") as vb:
#     for token in token_list:
#         vb.write(token+"\n")
        
# token_list = update_token_dict(vacab_path=type_vocab_v2_path)
# with open("/data2/wy/248/PrivacyPolicyAnalyze/vocab_type_v2_exist.txt", "w", encoding="utf-8") as vb:
#     for token in token_list:
#         vb.write(token+"\n")

# token_list = update_token_dict(vacab_path=action_vocab_path)
# with open("/data2/wy/248/PrivacyPolicyAnalyze/vocab_act_exist.txt", "w", encoding="utf-8") as vb:
#     for token in token_list:
#         vb.write(token+"\n")


def sentence2vector(sentence, token_dict, method = "dependent"):
    if method == "dependent" or method == "dependent-add":
        vector = np.zeros(len(token_dict))
        for token in token_dict:
            if token in sentence:
                vector[token_dict[token] - 1] = 1
                
    elif method == "combine":
        vector = np.zeros([len(token_dict) * len(act_dict)])
        for token_idx, token in enumerate(token_dict):
            if token in sentence:
                for act_idx, act in enumerate(act_dict):
                    if act in sentence:
                        vector[act_idx * len(token_dict)  + token_dict[token], ] = 1
      
    # print(vector.shape)

    return vector
    

def reduce_length(arr):
    return arr[:, [not np.all(arr[:, i] == 0) for i in range(arr.shape[1])]]


def train_and_test(model_type, token_dict, method):
    model_name = "/data1/wy/tosem/privacyPolicyAnalyze/model/bow/method=%s_model=%s_dictVerison=%s.h5" % (method, model_type, dict_version)
    save_model_name = "method=%s_model=%s_dictVerison=%s.h5" % (method, model_type, dict_version)
    print(save_model_name)
    
    if os.path.exists(model_name):
        return
    
    df = pd.read_csv('/data1/wy/tosem/privacyPolicyAnalyze/labelSentences.csv', encoding='utf_8_sig').fillna(value="")
    rawX = df["sentence"].apply(lambda x: sentence2vector(x, token_dict=token_dict, method=method)).values
    X = np.array(rawX.tolist())
    print(X.shape)
    
    if model_type == "LSTM" and method == "combine":
        X = reduce_length(X)
        print("reduce", X.shape)
    
    vector_length = X.shape[1]
    
    Y = df["label"].values
    
    model = Sequential()
    if model_type == "MLP":
        model.add(Flatten())
        model.add(Dense(512, input_shape=(vector_length,), activation='relu'))
        model.add(Dropout(0.5))
        model.add(Dense(1, activation='sigmoid'))
    elif model_type == "CNN":
        model.add(Flatten())
        model.add(Embedding(100, 32, input_length=vector_length))
        model.add(Convolution1D(256, 3, padding='same'))
        model.add(MaxPool1D(3, 3, padding='same'))
        model.add(Convolution1D(128, 3, padding='same'))
        model.add(MaxPool1D(3, 3, padding='same'))
        model.add(Convolution1D(64, 3, padding='same'))
        model.add(Dropout(0.1))
        model.add(Dense(256, activation='relu'))
        model.add(Dropout(0.1))
        model.add(Dense(1, activation='sigmoid'))
    elif model_type == "LSTM":
        model.add(Flatten())
        model.add(Embedding(100, 32, input_length=vector_length))
        model.add(Convolution1D(256, 3, padding='same'))
        model.add(MaxPool1D(3, 3, padding='same'))
        model.add(Convolution1D(128, 3, padding='same'))
        model.add(MaxPool1D(3, 3, padding='same'))
        model.add(Convolution1D(64, 3, padding='same'))
        model.add(LSTM(128, input_shape = (64,3), dropout=0.2, recurrent_dropout=0.1))
        model.add(Dense(1, activation='sigmoid'))

    model.compile(loss='binary_crossentropy',
                  optimizer='adam',
                  metrics=['accuracy'])
    # model.summary()

    # kf = KFold(n_splits=2, shuffle=True, random_state=100)
    acc = 0
    pre = 0
    rec = 0
    f1 = 0

    kf = KFold(n_splits=5, shuffle=True, random_state=100)
    for train_index, test_index in kf.split(X):
        x_train, x_test = X[train_index], X[test_index]
        y_train, y_test = Y[train_index], Y[test_index]
    
        model.fit(x_train, y_train,
            batch_size=30,
            epochs=5,
            validation_data=(x_train, y_train))
        
    y_pred = model.predict(X, batch_size=32)
    
    Y_pred = []
    for i in y_pred:
        Y_pred.append(np.round(i[0]))

    acc += accuracy_score(Y, Y_pred)
    pre += precision_score(Y, Y_pred)
    rec += recall_score(Y, Y_pred)
    f1 += f1_score(Y, Y_pred)

    print("accuracy", acc)
    print("precision", pre)
    print("recall", rec)
    print("f1", f1)
    
    existModel = False
    for m in model_result:
        if m["model_name"] == save_model_name:
            existModel = True
            m["accuracy"] = acc
            m["precision"] = pre
            m["recall"] = rec
            m["f1"] = f1
            
    if not existModel:
        model_result.append({
            "model_name": save_model_name,
            "accuracy": acc,
            "precision": pre,
            "recall": rec,
            "f1": f1
        })
    
    model.save(model_name)
    
    json.dump(model_result, open("/data1/wy/tosem/privacyPolicyAnalyze/bow_model_result.json", "w", encoding="utf-8"))

import json
model_result = json.load(open("/data1/wy/tosem/privacyPolicyAnalyze/bow_model_result.json","r",encoding="utf-8"))

def train():
    for m in ["MLP", "CNN", "LSTM"]:
        for dict_version in ["1", "2"]:
            token_not_act = get_dependent_dict(version = dict_version, act = False)
            token_add_act = get_dependent_dict(version = dict_version, act = True)
            train_and_test(model_type=m, token_dict=token_not_act, method="dependent")
            train_and_test(model_type=m, token_dict=token_not_act, method="combine")
            train_and_test(model_type=m, token_dict=token_add_act, method="dependent-add")

def predict():
    input_sentence_path = "/data1/wy/tosem/privacyPolicyAnalyze/popular_policy_split_and_triple.json"
    input_sentences = json.load(open(input_sentence_path, "r", encoding="utf-8"))
    best_bow_model_path = "/data1/wy/tosem/privacyPolicyAnalyze/model/bow/method=dependent-add_model=MLP_dictVerison=1.h5"
    model = load_model(best_bow_model_path)
    token_add_act = get_dependent_dict(version = "1", act = True)
    for item in input_sentences:
        for sentence in item["sentences"]:
            sentence_text = sentence["sentence_text"]
            rawX = [sentence2vector(sentence_text,  token_dict=token_add_act, method="dependent-add")]
            X = np.array(rawX)
            predict_result = model.predict(X)[0][0]
            
            if "predict" not in sentence:
                sentence["predict"] = [{"model": "bow", "possibility": predict_result}]
            else:
                sentence["predict"].append({"model": "bow", "possibility": predict_result})
    
    output_sentence_path = "/data1/wy/tosem/privacyPolicyAnalyze/popular_policy_split_and_triple_and_predict.json"
    json.dump(open(output_sentence_path, "w", encoding="utf-8"), input_sentences, ensure_ascii = False)

predict()
import codecs
import json
import os
from ast import literal_eval

import numpy
import numpy as np
import pandas as pd

# 搭建模型
from keras.engine.saving import load_model
from keras.layers import Embedding, Conv1D, MaxPooling1D, Flatten, Dropout, BatchNormalization, Dense, Convolution1D, MaxPool1D, LSTM
from keras.models import Sequential
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, recall_score, f1_score
from sklearn.model_selection import train_test_split, cross_val_score, KFold
from keras.utils import to_categorical

from ltp import LTP

os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"
os.environ["CUDA_VISIBLE_DEVICES"] = "0"

type_vocab_path = '/data1/wy/bert/vocab_type.txt'
action_vocab_path = '/data1/wy/bert/vocab_act.txt'


def get_token_dict(act=False):
    token_dict = {}
    with open(type_vocab_path, "r", encoding="utf-8") as reader:
        for line in reader:
            token = line.strip()
            token_dict[token] = len(token_dict)

    if act:
        with open(action_vocab_path, "r", encoding="utf-8") as reader:
            for line in reader:
                token = line.strip()
                token_dict[token] = len(token_dict)

    return token_dict


act_dict = {}
with open(action_vocab_path, "r", encoding="utf-8") as reader:
    for line in reader:
        token = line.strip()
        act_dict[token] = len(act_dict)
act_dict['*'] = len(act_dict)

print('act_len', len(act_dict))


def find_index(token, sentence):
    pl = []
    for each in range(len(sentence) - len(token)):
        if sentence[each:each + len(token)] == token:  # 找出与子字符串首字符相同的字符位置
            pl.append(each)
    return pl


def sentence_to_vector2D(sentence, token_dict):
    vector = np.zeros([len(token_dict), len(sentence)])
    for token in token_dict:
        if token in sentence:
            for index in find_index(token, sentence):
                vector[token_dict[token], index] = 1
    return vector.T


def sentence_to_vector(sentence, token_dict):
    vector = np.zeros(len(token_dict))
    for token in token_dict:
        if token in sentence:
            vector[token_dict[token]] = 1
    return pd.Series(vector)


def sentence_to_vector1D(sentence, token_dict):
    vector = np.zeros(len(sentence)).tolist()
    for token in token_dict:
        if token in sentence:
            for index in find_index(token, sentence):
                vector[index] = token_dict[token]
    return vector


def sentence_to_vectorLTP(sentence, token_dict):
    ltp = LTP()
    seg, hidden = ltp.seg([sentence])
    srl = ltp.srl(hidden, keep_empty=False)
    ltp_result = {"*": []}
    for type_word in token_dict:
        if type_word in sentence:
            ltp_result['*'].append(type_word)

    for sentence_index, sentence_srl in enumerate(srl):
        for triple in sentence_srl:
            action_word_index = triple[0]
            action_word = seg[sentence_index][action_word_index]
            ltp_result[action_word] = []
            args = triple[1]
            for arg in args:
                pos = arg[0]
                if pos in ['A0', 'A1']:
                    start_index = arg[1]
                    end_index = arg[2]
                    arg_seg_part = seg[sentence_index][start_index:end_index + 1]
                    for type_word in token_dict:
                        if type_word in arg_seg_part:
                            ltp_result[action_word].append(type_word)

    print(ltp_result)

    vector = np.zeros(len(token_dict))
    for act in ltp_result:
        if act in act_dict:
            for tp in ltp_result[act]:
                if tp in token_dict:
                    vector[token_dict[tp]] = act_dict[act]

    return pd.DataFrame(vector)


def in_target_label(target_label, input_label):
    for tlb in target_label:
        if tlb in input_label:
            return True

    return False


def ltp_to_vec(ltp_result, token_dict):
    ltp_result = eval(ltp_result)

    vector = np.zeros(len(token_dict))
    for act in ltp_result:
        if act in act_dict:
            for tp in ltp_result[act]:
                if tp in token_dict:
                    vector[token_dict[tp]] = act_dict[act]

    return vector


def ltp_to_vec_len(ltp_result, token_dict):
    ltp_result = eval(ltp_result)

    vector = np.zeros([len(act_dict), len(token_dict)])
    for act in ltp_result:
        if act in act_dict:
            for tp in ltp_result[act]:
                if tp in token_dict:
                    vector[act_dict[act]][token_dict[tp]] = 1

    return vector


import keras.backend as K


def getRecall(y_true, y_pred):
    TP = K.sum(K.round(K.clip(y_true * y_pred, 0, 1)))  # TP
    P = K.sum(K.round(K.clip(y_true, 0, 1)))
    FN = P - TP  # FN=P-TP
    recall = TP / (TP + FN + K.epsilon())  # TP/(TP+FN)
    return recall


def reshape(x):
    it_sum = x[0]
    unzero_row = []
    unzero_column = []
    for it in x:
        it_sum = it_sum + it

    for i in range(it_sum.shape[0]):
        if not np.all(it_sum[i, :] == 0):
            unzero_row.append(i)

    for i in range(it_sum.shape[1]):
        if not np.all(it_sum[:, i] == 0):
            unzero_column.append(i)

    reshape_x = []
    for k, it in enumerate(x):
        new_item = it[unzero_row, :]
        new_item = new_item[:, unzero_column]
        reshape_x.append(new_item)

    return np.array(reshape_x)


def train_and_test(model_type, token_dict):
    preprocess_data = pd.read_csv("/data1/wy/bert/consistency/processed_data.csv", encoding='utf_8_sig')

    Y = preprocess_data['ltp']
    # here change the vector mode
    load_x = preprocess_data['label_bin'].apply(lambda x: ltp_to_vec_len(x, token_dict)).tolist()

    X = reshape(np.array(load_x))
    Y = Y.values

    print(X.shape)
    print(model_type)

    model = Sequential()
    if model_type == "mlp":
        model.add(Flatten())
        # 全连接层
        model.add(Dense(512, input_shape=(1539,), activation='relu'))
        # DropOut层
        model.add(Dropout(0.5))
        # 全连接层+分类器
        model.add(Dense(1, activation='sigmoid'))
    elif model_type == "cnn":
        model.add(Flatten())
        model.add(Embedding(2, 300, input_length=63 * 532))
        model.add(Convolution1D(256, 3, padding='same'))
        model.add(MaxPool1D(3, 3, padding='same'))
        model.add(Convolution1D(128, 3, padding='same'))
        model.add(MaxPool1D(3, 3, padding='same'))
        model.add(Convolution1D(64, 3, padding='same'))
        model.add(Flatten())
        model.add(Dropout(0.1))
        model.add(BatchNormalization())
        model.add(Dense(256, activation='relu'))
        model.add(Dropout(0.1))
        model.add(Dense(1, activation='sigmoid'))
    elif model_type == "lstm":
        model.add(Flatten())
        model.add(Embedding(1, 300, input_length=63 * 532))
        model.add(LSTM(256, dropout=0.2, recurrent_dropout=0.1))
        model.add(Dense(1, activation='sigmoid'))

    # x_train, x_test, y_train, y_test = train_test_split(X, Y, test_size=0.1, random_state=100)
    model.compile(loss='binary_crossentropy',
                  optimizer='adam',
                  metrics=['accuracy'])

    kf = KFold(n_splits=10, shuffle=True, random_state=100)
    acc = 0
    rec = 0
    f1 = 0

    for train_index, test_index in kf.split(X):
        x_train, x_test = X[train_index], X[test_index]
        y_train, y_test = Y[train_index], Y[test_index]

        model.fit(x_train, y_train,
                  batch_size=30,
                  epochs=10,
                  validation_data=(x_test, y_test))

        y_pred = model.predict(X, batch_size=5)
        Y_pred = []
        for i in y_pred:
            Y_pred.append(round(i[0]))
        acc = accuracy_score(Y, Y_pred)
        rec = recall_score(Y, Y_pred)
        f1 = f1_score(Y, Y_pred)
        print("acc", acc)
        print("rec", rec)
        print("f1", f1)
    print("----")

    y_pred = model.predict(X, batch_size=5)
    Y_pred = []
    for i in y_pred:
        Y_pred.append(round(i[0]))

    acc += accuracy_score(Y, Y_pred)
    rec += recall_score(Y, Y_pred)
    f1 += f1_score(Y, Y_pred)
    print("acc", acc)
    print("rec", rec)
    print("f1", f1)

    model.save("/data1/wy/bert/consistency/model_triple_len_%s.h5" % model_type)


def test(model_type, token_dict):
    preprocess_data = pd.read_csv("/data1/wy/bert/consistency/processed_data.csv", encoding='utf_8_sig')

    Y = preprocess_data['ltp']
    load_x = preprocess_data['label_bin'].apply(lambda x: ltp_to_vec(x, token_dict)).tolist()

    X = np.array(load_x)
    Y = Y.values

    model = load_model("/data1/wy/bert/consistency/model_triple_len_%s.h5" % model_type)

    y_pred = model.predict(X, batch_size=5)
    Y_pred = []
    for i in y_pred:
        Y_pred.append(round(i[0]))

    acc = accuracy_score(Y, Y_pred)
    rec = recall_score(Y, Y_pred)
    f1 = f1_score(Y, Y_pred)
    print("acc", acc)
    print("rec", rec)
    print("f1", f1)


td = get_token_dict()
# train_and_test('mlp', token_dict=td)
train_and_test('cnn', token_dict=td)
# train_and_test('lstm', token_dict=td)
# test('cnn', token_dict=td)

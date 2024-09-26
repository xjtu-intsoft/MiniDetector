import os
import openai
import json
import time
import tiktoken
import re
encoding = tiktoken.get_encoding("cl100k_base")

openai.api_key = "XXX"
openai.api_base = "XXX"

typeOntologyFilePath = r"ontology\type.json"
operationOntologyFilePath = r"ontology\operation.json"
# load ontology
typeOntology = json.load(open(typeOntologyFilePath,"r",encoding="utf-8"))
typeCategoryList = []
for to in typeOntology:
    typeCategoryList.append(to["information_type"])

operationOntology = json.load(open(operationOntologyFilePath,"r",encoding="utf-8"))
operationCategoryList = []
for oo in operationOntology:
    operationCategoryList.append(oo["type"])


def getPracticeByCompletion(content):
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system", 
                "content": "你是一位隐私政策文档检查员，拥有自然语言处理模型知识，能够完成自然语言处理的一些基本任务，包括阅读理解隐私政策内容和提取隐私政策中的实体词语关系。\n你需要从每篇给定的隐私政策中提取数据实践实体。数据实践是应用程序处理数据的行为，包含数据类型和数据操作两个元素。它被表示为二元组（o，t），其中o表示数据处理的操作，t表示数据类型。约定（1） 数据操作o包括：%s。（2） 数据类型t类别包括：%s\n建议提取步骤：首先对隐私政策进行分句，然后判断每个句子是否包含数据处理行为，最后提取数据实践实体。\n要求：1.输出格式为一个列表，列表中的每个元素为二元组；2.从给定的文章中抽取，不要自行创造不属于文章中的词语或关系。" % (typeCategoryList, operationCategoryList)
            },
            {
                "role": "user",
                "content": "我们会收集您的姓名和手机号码。"
            },
            {
                "role": "assistant",
                "content": "[(收集,个人姓名),(收集,手机号码)]"
            },
            {
                "role": "user",
                "content": "我们会使用和分享您的个人信息，例如姓名和性别。"
            },
            {
                "role": "assistant",
                "content": "[(使用,个人姓名),(使用,性别)]"
            },
            {
                "role": "user",
                "content": "您的收件地址将被用于发送货物。"
            },
            {
                "role": "assistant",
                "content": "[(使用,居住地址)]"
            },
            {
                "role": "user",
                "content": "我们不会收集您的驾驶证信息"
            },
            {
                "role": "assistant",
                "content": "[]"
            },
            {
                "role": "user",
                "content": content
            }
        ]
    )
    return completion


def selfVerificationType(inputType):
    print("Create Request at " + time.strftime("%Y-%m-%d %H:%M:%S"), "Request for " + str(inputType))
    completion = openai.ChatCompletion.create(
    # completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system", 
                "content": "你是一位数据隐私实体词语的分类员，擅长对数据类型相关的实体词语进行分类判断。\n给定一词语列表WordList，你需要判别列表中的每个词语是否属于如下范畴列表CategoryList中的某一类或某几类。如果属于一类，返回最接近的实体词语的类别；如果属于多类，返回MULTI；如果不属于任何一类，返回NULL。给定列表CategoryList为%s。\n要求：1.输出格式为一个列表，列表中的元素格式为'(实体词语,词语类别)'，实体词语为WordList中的元素，词语类别为CategoryList中的元素或者NULL或者MULTI；2.从给定的列表中进行分类，不要自行创造不属于WordList和CategoryList中的词语。" % typeCategoryList
            },
            {
                "role": "user",
                "content": "[手机号码, 邮箱账号]"
            },
            {
                "role": "assistant",
                "content": "[(手机号码,电话号码), (邮箱账号,电子邮件地址)]"
            },
            {
                "role": "user",
                "content": "[自动更新]"
            },
            {
                "role": "assistant",
                "content": "[(自动更新,NULL)]"
            },
            {
                "role": "user",
                "content": "[个人信息,注册信息]"
            },
            {
                "role": "assistant",
                "content": "[(个人信息,MULTI),(注册信息, MULTI)]"
            },
            {
                "role": "user",
                "content": str(inputType)
            }
        ]
    )
    responseContent = completion.choices[0].message
    responseType = str(responseContent["content"].encode("utf-8"), "utf-8")
    print("->")
    print("Get Request at " + time.strftime("%Y-%m-%d %H:%M:%S"), "Response: " + str(responseType))
    return responseType


def selfVerificationOperation(inputOperation):
    print("Create Request at " + time.strftime("%Y-%m-%d %H:%M:%S"), "Request for " + str(inputOperation))
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system", 
                "content": "你是一位数据隐私实体词语的分类员，擅长对数据操作相关的实体词语进行分类判断。\n给定一词语列表WordList，你需要判别列表中的每个词语是否属于如下范畴列表CategoryList中的某一类，，如果属于，返回实体词语的类别，如果不属于，返回NULL。给定列表CategoryList为%s。如果实体词语与数据的采集、获取相关，则它的词语类别为'收集'；如果实体词语与数据的使用、存储和分析相关，则它的词语类别为'使用'；如果给定的词语与数据的共享、传输、发送相关，则它的词语类别为'发送'；如果与数据无关，则它的词语类别为'NULL'。\n要求：1.输出格式为一个列表，列表中的元素格式为'(实体词语,词语类别)'，实体词语为WordList中的元素，词语类别为CategoryList中的元素或NULL；2.从给定的列表中进行分类，不要自行创造不属于WordList和CategoryList中的词语。" % operationCategoryList
            },
            {
                "role": "user",
                "content": "[获取, 共享]"
            },
            {
                "role": "assistant",
                "content": "[(获取,收集),(共享,发送)]"
            },
            {
                "role": "user",
                "content": "[关闭]"
            },
            {
                "role": "assistant",
                "content": "[(关闭,NULL)]"
            },
            {
                "role": "user",
                "content": str(inputOperation)
            }
        ]
    )
    responseContent = completion.choices[0].message
    responseOperation = str(responseContent["content"].encode("utf-8"), "utf-8")
    print("Get Request at " + time.strftime("%Y-%m-%d %H:%M:%S"), "Response: " + str(responseOperation))
    return responseOperation


def getEntity(policyContent):
    print(time.strftime("%Y-%m-%d %H:%M:%S"))
    
    segParts = []
    segLength = 2000
    if len(policyContent) > segLength:
        segPartNum = round(len(encoding.encode(policyContent)) / segLength)
        for pn in range(segPartNum):
            segParts.append(policyContent[pn*segLength:pn*segLength+segLength])
    else:
        segParts.append(policyContent)

    responseList = []  
    errorList = []  
    try:
        for sp_i, sp in enumerate(segParts):
            print("Now Processing: part%s, Length: %s" % (sp_i, len(sp)))
            response = getPracticeByCompletion(sp)
            newResponse = {
                "id": response["id"],
                "object": response["object"],
                "created": response["created"],
                "model": response["model"],
                "choices":[],
                "usage": {
                    "prompt_tokens": response["usage"]["prompt_tokens"],
                    "completion_tokens": response["usage"]["completion_tokens"],
                    "total_tokens": response["usage"]["total_tokens"]
                }
            }
            newResponse["choices"].append({
                "message":{
                    "role": "assistant",
                    "content": str(response["choices"][0]["message"]["content"].encode("utf-8"), "utf-8")
                },
                "finish_reason": response["choices"][i]["finish_reason"]
            })
            responseList.append(newResponse)
    except Exception as e:
            print(str(e))
            errorList.append({
                "error": str(e)
            })
    return responseList

def sti(policyContent):
    formatResultDict = {}
    for segPart in policyContent:
        for c in segPart["choices"]:
            content = c["message"]["content"].replace("（", "(").replace("）",")").replace("，",",").replace("'","").replace("\\","").replace(" ","")
            searchResult = re.findall(r"\((.*?)\)", content)
            for sr in searchResult:
                splitSR = sr.split(",")
                if len(splitSR) == 2:
                    x = splitSR[0]
                    y = splitSR[1]
                    # 将原有的结果转换为字典
                    practiceTuple = (x, y)
                    if str(practiceTuple) not in formatResultDict:
                        formatResultDict[str(practiceTuple)] = 1
                    else:
                        formatResultDict[str(practiceTuple)] += 1
        
  # 处理方式1：不在列表的删去
    newResultUsingDelete = []
    for fr in formatResultDict:
        formatTuple = eval(fr)
        formatOperation = formatTuple[0]
        formatType = formatTuple[1]
        if formatType in typeCategoryList and formatOperation in operationCategoryList and fr not in newResultUsingDelete:
            newResultUsingDelete.append(fr)   
                        
    # 处理方式2：不在列表的问GPT
    waitingForTwiceAskingTypeWord = []
    waitingForTwiceAskingOperationWord = []
    for fr in formatResultDict:
        formatTuple = eval(fr)
        formatOperation = formatTuple[0]
        formatType = formatTuple[1]
        if formatOperation not in operationCategoryList and formatOperation not in operationOntology and formatOperation not in waitingForTwiceAskingOperationWord:
            waitingForTwiceAskingOperationWord.append(formatOperation)
        if formatType not in typeCategoryList and formatType not in typeOntology and formatType not in waitingForTwiceAskingTypeWord:
            waitingForTwiceAskingTypeWord.append(formatType)
    # 统一问一次，减小开销
    # 可能会超长度，分段
    
    # 截断
    cutListTW = []
    cutListOW = []
    currentList = []
    while len(waitingForTwiceAskingTypeWord) > 0:
        popString = waitingForTwiceAskingTypeWord.pop(0)
        if len(str(currentList)) < 2000:
            currentList.append(popString)
        else:
            cutListTW.append(copy.deepcopy(currentList))
            currentList = []
    
    while len(waitingForTwiceAskingOperationWord) > 0:
        popString = waitingForTwiceAskingOperationWord.pop(0)
        if len(str(currentList)) < 2000:
            currentList.append(popString)
        else:
            cutListOW.append(copy.deepcopy(currentList))
            currentList = []
        
    print("Cut Finished, seg: %s, %s" % (len(cutListTW), len(cutListOW)))
    print("Second Turn.")
    for cltw in cutListTW:
        time.sleep(20)
        askingResultType = selfVerificationType(inputType=cltw)
            # 处理结果
        typeAnswerContent = askingResultType.replace("（", "(").replace("）",")").replace("，",",").replace("'","").replace("\\","").replace(" ","")
        typeResultFind = re.findall(r"\((.*?)\)", typeAnswerContent)
        for trs in typeResultFind:
            splitTRS = trs.split(",")
            if len(splitTRS) == 2:
                x = splitTRS[0]
                y = splitTRS[1]
                if x not in typeOntology and y in typeCategoryList:
                    typeOntology[x] = y

    for clow in cutListOW:
        time.sleep(20)
        askingResultOperation = selfVerificationOperation(inputOperation=clow)

        operationAnswerContent = askingResultOperation.replace("（", "(").replace("）",")").replace("，",",").replace("'","").replace("\\","").replace(" ","")
        operationResultFind = re.findall(r"\((.*?)\)", operationAnswerContent)
        for ors in operationResultFind:
            splitORS = ors.split(",")
            if len(splitORS) == 2:
                x = splitORS[0]
                y = splitORS[1]
                if x not in operationOntology and y in operationCategoryList:
                    operationOntology[x] = y

        # 重新计算结果
        newResultUsingAskingTwice = []
        for fr in formatResultDict:
            formatTuple = eval(fr)
            formatOperation = formatTuple[0]
            formatType = formatTuple[1]
            if formatType in typeCategoryList and formatOperation in operationCategoryList:
                if fr not in newResultUsingAskingTwice:
                    newResultUsingAskingTwice.append(fr)
            if formatType in typeOntology and formatOperation in operationOntology and fr not in newResultUsingAskingTwice:
                newPractice = str((operationOntology[formatOperation],typeOntology[formatType]))
                if not newPractice in newResultUsingAskingTwice:
                    newResultUsingAskingTwice.append(newPractice)           
    
        # 过滤统计
        newFormatDictThresholdDict = {}
        newFormatDictThreshold = []
        for fmr in formatResultDict:
            formatTuple = eval(fmr)
            formatOperation = formatTuple[0]
            formatType = formatTuple[1]
            if formatType in typeCategoryList and formatOperation in operationCategoryList:
                if fmr not in newFormatDictThresholdDict:
                    newFormatDictThresholdDict[fmr] = formatResultDict[fmr]
                    continue
                else:
                    newFormatDictThresholdDict[fmr] += formatResultDict[fmr]
                    continue
            elif formatType in typeOntology and formatOperation in operationOntology:
                newPractice = str((operationOntology[formatOperation],typeOntology[formatType]))
                if not str(newPractice) in newFormatDictThresholdDict:
                    newFormatDictThresholdDict[str(newPractice)] = formatResultDict[fmr]
                    continue
                else:
                    newFormatDictThresholdDict[str(newPractice)] += formatResultDict[fmr]
                    continue
        print(newFormatDictThreshold)
        
        for xft in newFormatDictThresholdDict:
            if newFormatDictThresholdDict[xft] >= 3 and xft not in newFormatDictThreshold:
                newFormatDictThreshold.append(xft)    
        
        processedResult = [
            {
                "delete": newResultUsingDelete,
                "askingTwice": newResultUsingAskingTwice,
                "threshold": newFormatDictThreshold
            }
        ]
        
        return processedResult
    
ee = getEntity("XXX")
eep = sti(ee)
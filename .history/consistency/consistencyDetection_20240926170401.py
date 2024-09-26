import os
import json
import re

apiSource = {
    'Avatar': ['wx.getUserInfo'], 
    'Nick name': ['wx.getUserInfo'], 
    'Gender': ['wx.getUserInfo'], 
    'Living address': ['wx.getUserInfo', 'wx.chooseAddress'], 
    'Facial recognition': ['wx.startSoterAuthentication', 'wx.checkIsSoterEnrolledInDevice'], 
    'Fingerprint': ['wx.startSoterAuthentication', 'wx.checkIsSoterEnrolledInDevice'], 
    'Sports record': ['wx.getWeRunData', 'wx.getPerformance'], 
    'Invoice': ['wx.chooseInvoiceTitle', 'wx.chooseInvoice'], 
    'Transaction record': ['wx.addCard'], 
    'Subscription record': ['wx.openSetting', 'wx.getSetting', 'wx.requestSubscribeMessage'], 
    'Photo': ['wx.getImageInfo', 'wx.compressImage', 'wx.chooseImage', 'wx.chooseMedia', 'wx.onUserCaptureScreen'], 
    'Audio': ['wx.playVoice', 'wx.getAvailableAudioSources', 'wx.getBackgroundAudioPlayerState', 'wx.startRecord', 'RecorderManager.start'], 
    'Video': ['wx.chooseVideo', 'wx.chooseMedia', 'wx.openVideoEditor', 'wx.getVideoInfo', 'wx.onVoIPVideoMembersChanged', 'wx.compressVideo', 'wx.createLivePlayerContextwx.onVoIPChatMembersChanged', 'wx.joinVoIPChat', 'VideoDecoder.getFrameData', 'wx.onVoIPChatSpeakersChanged'], 
    'File': ['wx.env', 'wx.downloadFile', 'wx.chooseMessageFile', 'wx.saveFile', 'wx.getSavedFileList', 'wx.getSavedFileInfo', 'wx.getFileInfo', 'FileSystemManager.getFileInfo', 'FileSystemManager.getSavedFileList', 'FileSystemManager.readdir', 'FileSystemManager.readFile', 'FileSystemManager.readFileSync', 'FileSystemManager.saveFile', 'FileSystemManager.stat', 'FileSystemManager.statSync', 'FileSystemManager.unzip'], 
    'device model': ['wx.getSystemInfo', 'wx.getSystemInfoSync', 'wx.getBatteryInfoSync', 'wx.getBatteryInfo', 'wx.getScreenBrightness', 'wx.onAccelerometerChange', 'wx.onCompassChange', 'wx.onDeviceMotionChange', 'wx.onGyroscopeChange', 'wx.onMemoryWarning'], 
    'Camera': ['wx.scanCode', 'CameraContext.onCameraFrame', 'CameraContext.setZoom', 'CameraContext.startRecord', 'CameraContext.takePhoto'], 
    'Bluetooth': ['wx.getBeacons', 'wx.onBeaconUpdate', 'wx.onBLEPeripheralConnectionStateChanged', 'wx.offBLEPeripheralConnectionStateChanged', 'wx.onBeaconServiceChange', 'BLEPeripheralServer.onCharacteristicReadRequest', 'wx.startBeaconDiscovery', 'BLEPeripheralServer.onCharacteristicSubscribed', 'wx.getBLEDeviceRSSI', 'BLEPeripheralServer.onCharacteristicWriteRequest', 'wx.readBLECharacteristicValue', 'wx.onBLEConnectionStateChange', 'wx.onBLECharacteristicValueChange', 'wx.getBLEDeviceServices', 'wx.getBLEDeviceCharacteristics', 'wx.startBluetoothDevicesDiscovery', 'wx.onBluetoothDeviceFound', 'wx.onBluetoothAdapterStateChange', 'wx.getConnectedBluetoothDevices', 'wx.getBluetoothDevices', 'wx.getBluetoothAdapterState'], 
    'Clipboard': ['wx.getClipboardData'], 
    'Network status': ['wx.onWifiConnected', 'wx.onGetWifiList', 'wx.getWifiList', 'wx.getConnectedWifi', 'wx.onNetworkStatusChange', 'wx.getNetworkType'], 
    'Nfc': ['MifareClassic.getMaxTransceiveLength', 'MifareClassic.isConnected', 'MifareClassic.transceive', 'MifareUltralight.getMaxTransceiveLength', 'MifareUltralight.isConnected', 'MifareUltralight.transceive', 'IsoDep.getHistoricalBytes', 'IsoDep.getMaxTransceiveLength', 'IsoDep.isConnected', 'IsoDep.transceive', 'Ndef.isConnected', 'NfcA.getAtqa', 'NfcA.getMaxTransceiveLength', 'NfcA.getSak', 'NfcA.isConnected', 'NfcA.transceive', 'NFCAdapter.getIsoDep', 'NFCAdapter.getMifareClassic', 'NFCAdapter.getMifareUltralight', 'NFCAdapter.getNdef', 'NFCAdapter.getNfcA', 'NFCAdapter.getNfcB', 'NFCAdapter.getNfcF', 'NFCAdapter.getNfcV', 'NFCAdapter.onDiscovered', 'NfcB.getMaxTransceiveLength', 'NfcB.isConnected', 'NfcB.transceive', 'NfcF.getMaxTransceiveLength', 'NfcF.isConnected', 'NfcF.transceive', 'NfcV.getMaxTransceiveLength', 'NfcV.isConnected', 'wx.getNFCAdapter', 'wx.getHCEState'], 
    'latitude and longitude': ['wx.onLocationChange', 'wx.getLocation', 'wx.chooseLocation'], 
    'Editor data': ['EditorContext.getContents', 'EditorContext.getSelectionText'], 
    'Storage data': ['wx.getStorageSync', 'wx.getStorageInfoSync', 'wx.getStorageInfo', 'wx.getStorage'], 
    'Network data': ['wx.getLaunchOptionsSync', 'wx.getEnterOptionsSync', 'wx.request', 'wx.onSocketMessage', 'wx.connectSocket', 'wx.getShareInfo', 'wx.authPrivateMessage', 'wx.login', 'wx.checkSession', 'wx.getAccountInfoSync', 'wx.getGroupEnterInfo', 'wx.getExtConfig', 'Worker.onMessage', 'SocketTask.onMessage']
    }
    
typeListEn = {
    "个人姓名": "Real name",
    "生日": "Birthday",
    "性别": "Gender",
    "民族": "Ethnicity",
    "国籍": "Nationality",
    "家庭关系": "Family relationship",
    "居住地址": "Living address",
    "电话号码": "Phone number",
    "电子邮件地址": "E-mail address",
    "车辆信息": "Vehicle information",
    "身份证": "ID number",
    "军官证": "Military ID",
    "护照": "Passport",
    "驾驶证": "Driving license",
    "工作证": "Employee ID",
    "社保卡": "Social security",
    "居住证": "Living permit",
    "指纹": "Fingerprint",
    "声纹": "Voiceprint",
    "面部识别特征": "Facial recognition",
    "昵称": "Nick name",
    "头像": "Avatar",
    "口令密码": "Password",
    "IP地址": "IP address",
    "用户个人信息标识": "Network PII",
    "医疗记录": "Medical record",
    "运动记录": "Sports record",
    "身体指标": "Physical indicators",
    "职业": "Work occupation",
    "职位": "Work position",
    "工作地址": "Work address",
    "工作经历": "Work experience",
    "教育经历": "Education experience",
    "成绩单": "Transcript",
    "银行账户": "Bank account",
    "存款信息": "Deposit",
    "征信记录": "Credit",
    "发票": "Invoice",
    "交易记录": "Transaction record",
    "通信记录和内容": "Chat record",
    "短信": "SMS",
    "通讯录": "Address book",
    "好友列表": "Friend list",
    "访问记录": "Access record",
    "点击记录": "Click record",
    "照片": "Photo",
    "音频": "Audio",
    "视频": "Video",
    "文件": "File",
    "设备识别码": "Device ID",
    "设备型号": "Device model",
    "网络连接": "Network status",
    "收藏列表": "Favorite list",
    "订阅记录": "Subscription record",
    "摄像头": "Camera",
    "麦克风": "Microphone",
    "蓝牙": "Bluetooth",
    "剪切板": "Clipboard",
    "近场通信": "NFC",
    "行踪轨迹": "Travel trajectory",
    "经纬度": "Latitude and longitude",
    "婚史": "Marriage"
}

apiSink = {
    'Debug': ['console.debug', 'console.error', 'console.group', 'console.info', 'console.log', 'console.warn', 'LogManager.debug', 'LogManager.info', 'LogManager.log', 'LogManager.warn', 'RealtimeLogManager.error', 'RealtimeLogManager.in', 'RealtimeLogManager.info', 'RealtimeLogManager.warn'], 
    'Toast': ['wx.showToast', 'wx.showModal', 'wx.showLoading', 'wx.showActionSheet', 'wx.enableAlertBeforeUnload'], 
    'Store': ['wx.setStorageSync', 'wx.setStorage', 'wx.removeStorageSync', 'wx.removeStorage', 'wx.clearStorageSync', 'wx.clearStorage'], 
    'Media process': ['wx.saveImageToPhotosAlbum', 'wx.previewMedia', 'wx.previewMedia', 'wx.getImageInfo', 'wx.compressImage', 'wx.chooseMessageFile', 'wx.chooseImage', 'wx.saveVideoToPhotosAlbum', 'wx.openVideoEditor', 'wx.getVideoInfo', 'wx.compressVideo', 'wx.chooseVideo', 'wx.chooseMedia', 'wx.playVoice', 'AudioContext.setSrc', 'MediaAudioPlayer.addAudioSource', 'wx.playBackgroundAudio', 'LivePusherContext.playBGM', 'RecorderManager.start', 'CameraContext.setZoom', 'CameraContext.takePhoto', 'EditorContext.insertImage', 'EditorContext.insertText', 'MediaContainer.addTrack', 'MediaContainer.export', 'wx.updateVoIPChatMuteConfig', 'wx.joinVoIPChat', 'VideoDecoder.start', 'wx.scanCode'], 
    'Locate': ['wx.openLocation'], 
    'Request': ['wx.request', 'wx.downloadFile', 'wx.uploadFile', 'wx.sendSocketMessage', 'wx.connectSocket', 'SocketTask.send', 'UDPSocket.send', 'Worker.postMessage', 'wx.getExtConfigSync'], 
    'Share': ['wx.updateShareMenu', 'wx.showShareMenu', 'wx.authPrivateMessage'], 
    'File process': ['wx.saveFileToDisk', 'wx.saveFile', 'wx.removeSavedFile', 'wx.openDocument', 'wx.getFileInfo', 'FileSystemManager.appendFile', 'FileSystemManager.appendFileSync', 'FileSystemManager.copyFile', 'FileSystemManager.copyFileSync', 'FileSystemManager.getFileInfo', 'FileSystemManager.readdir', 'FileSystemManager.readFile', 'FileSystemManager.readFileSync', 'FileSystemManager.removeSavedFile', 'FileSystemManager.rename', 'FileSystemManager.renameSync', 'FileSystemManager.rmdir', 'FileSystemManager.rmdirSync', 'FileSystemManager.saveFile', 'FileSystemManager.saveFileSync', 'FileSystemManager.stat', 'FileSystemManager.statSync', 'FileSystemManager.unlink', 'FileSystemManager.unlinkSync', 'FileSystemManager.unzip', 'FileSystemManager.writeFile', 'FileSystemManager.writeFileSync'], 
    'Navigate': ['wx.navigateToMiniProgram', 'wx.navigateBackMiniProgram'], 
    'Monitor': ['wx.reportMonitor', 'wx.reportAnalytics', 'wx.reportPerformance'], 
    'Pay': ['wx.requestPayment', 'wx.openCard', 'wx.addCard'], 
    'Authenticate': ['wx.startSoterAuthentication', 'wx.checkIsSoterEnrolledInDevice'], 
    'Communicate': ['BLEPeripheralServer.addService', 'BLEPeripheralServer.startAdvertising', 'BLEPeripheralServer.writeCharacteristicValue', 'wx.startBeaconDiscovery', 'wx.onBeaconUpdate', 'wx.onBeaconServiceChange', 'wx.startHCE', 'wx.onHCEMessage', 'IsoDep.transceive', 'MifareClassic.transceive', 'MifareUltralight.transceive', 'Ndef.writeNdefMessage', 'NfcA.transceive', 'NfcB.transceive', 'NfcF.transceive', 'NfcV.transceive', 'wx.setWifiList', 'wx.connectWifi', 'wx.writeBLECharacteristicValue', 'wx.notifyBLECharacteristicValueChange', 'wx.makeBluetoothPair', 'wx.createBLEConnection'], 
    'Configure': ['wx.setClipboardData', 'wx.setScreenBrightness'], 
    'Call': ['wx.addPhoneContact', 'wx.makePhoneCall']}
    
# 统计source - sink 区分UI
import pickle

def sourceAPIType(sourceAPI, visitedContent, visitedContentType, uiString, uiStringType):
    uiTypeRes = []  
    apiSingleTypeRes = []
    apiMultiTypeRes = []
    
    # 是否是UI类API
    if uiString:
        for uiType in uiStringType:
            if uiType in typeListEn and typeListEn[uiType] not in uiTypeRes:
                uiTypeRes.append(typeListEn[uiType])
    else:
        # 是否是多种类型API
        for t in apiSource:
            if t not in ['editor data', 'storage data', 'network data']:
                if sourceAPI in apiSource[t] and t not in apiSingleTypeRes:
                    apiSingleTypeRes.append(t)
            elif t in ['editor data', 'storage data', 'network data'] and visitedContent:
                for vcType in visitedContentType:
                    if vcType in typeListEn and typeListEn[vcType] not in apiMultiTypeRes:
                        apiMultiTypeRes.append(typeListEn[vcType])
    
    return uiTypeRes, apiSingleTypeRes, apiMultiTypeRes

def getOrigin(source):
    for t in apiSource:
        if source in apiSource[t]:
            return "API"
    return "UI"

def getUsage(sink):
    for s in apiSink:
        if sink in apiSink[s]:
            return s
    
    return None


def getBehaviorCompareData(mpDir):
    behaviorData = pickle.load(open(mpDir, "rb"))
    # 所有出现的source
    sourceList = []
    # 成对的source
    sourceInPairList = []  
    # 成对的flow
    flowList = []
    # 成对的type-operation
    practiceList = []

    for res in behaviorData["result"]:
        for sourceApi in res["source2sink"]["source"]:
            if sourceApi not in sourceList:
                sourceList.append(sourceApi)      
       
        for pair in res["source2sink"]["pairsOfSource2Sink"]:
            if not "source" in pair or not "sink" in pair or not "visitedContent" in pair or not "uiString" in pair:
                continue
            origin = getOrigin(pair["source"])
            usage = getUsage( pair["sink"])
            if not pair["source"] or pair["source"] == "null" or not usage:
                continue
            
            if pair["source"] not in sourceInPairList:
                sourceInPairList.append(pair["source"])
        
            
            uit, singlet, multit = sourceAPIType(pair["source"], pair["visitedContent"], pair["visitedContentType"], pair["uiString"], pair["uiStringType"])

            sumT = []
            for t1 in uit:
                if t1 not in sumT:
                    sumT.append(t1)
            for t2 in singlet:
                if t2 not in sumT:
                    sumT.append(t2)
            for t3 in multit:
                if t3 not in sumT:
                    sumT.append(t3)
                    
            for st in sumT:
                newFlow = str((origin, st, usage))
                if not newFlow in flowList:
                    flowList.append(newFlow)
            
            for st in sumT:
                newPractice = str((st, "use"))
                if newPractice not in practiceList:
                    practiceList.append(newPractice)
        
        for sc in sourceList:
            uit2, singlet2, multit2 = sourceAPIType(sc,[],[],[],[])
            # print(sc, uit2, singlet2, multit2)
            for st2 in singlet2:
                newPractice = str((st2, "collect"))
                if newPractice not in practiceList:
                    practiceList.append(newPractice)
                    
                
            
            if sc not in sourceInPairList:
                for stt in singlet2:
                    newFlow = str((getOrigin(sc), stt, "[No usage]"))
                    if newFlow not in flowList:
                        flowList.append(newFlow)
                
    # print("sourceList:", sourceList)
    # print("sourceInPairs:", sourceInPairList)
    # print("flow:", flowList)
    # print("practice:", practiceList)

    return flowList, practiceList


def getPolicyCompareData(mpDir):
    policyData = json.load(open(mpDir, "r", encoding="utf-8"))[0]
    # print(policyData)
    
    bestMethodData = policyData["xxx"]
    
    practiceList = []
    
    for p in bestMethodData:
        ptuple = eval(p)
       
        ptype = None
        poperation = None
        
        if ptuple[0] == "收集":
            poperation = "collect"
        elif ptuple[0] in ["使用", "发送"]:
            poperation = "use"
        
        if ptuple[1] in typeListEn:
            ptype = typeListEn[ptuple[1]]
        
        if ptype and poperation:
            newPractice = str((ptype, poperation))
            if newPractice not in practiceList:
                practiceList.append(newPractice)
    # print(practiceList)
    return practiceList
        
def compareData(cD, pD):
    consistency = None
    strength = None
    
    sameItem = []
    
    for c in cD:
        if c in pD:
            sameItem.append(c)
    
    # 没有重合
    if len(sameItem) == len(cD) and len(sameItem) == len(pD):
        consistency = "Consistent"
    # 完全重合=一致
    elif len(sameItem) == 0 and cD and pD:
        consistency = "Separation"
    # 部分一致
    elif len(sameItem) > 0 and len(sameItem) < len(cD) and len(sameItem) < len(pD):
        consistency = "Intersection"
    # 未告知
    elif len(sameItem) >= 0 and len(sameItem) < len(cD) and len(sameItem) == len(pD):
        consistency = "Uninformed"
    # 冗余
    elif len(sameItem) >= 0 and len(sameItem) == len(cD) and len(sameItem) < len(pD):
        consistency = "Redundant"
    
    diffItem = []
    for c in cD:
        if c not in pD:
            diffItem.append(c)
    for p in pD:
        if p not in cD:
            diffItem.append(p)
    
    cType = []
    pType = []
    
    for c in cD:
        if eval(c)[0] not in cType:
            cType.append(eval(c)[0])
    for p in pD:
        if eval(p)[0] not in pType:
            pType.append(eval(p)[0])
            
    diffType = []
    sameType = []
    for ct in cType:
        if ct not in pType and ct not in diffType:
            diffType.append(ct)
        if ct in pType and ct not in sameType:
            sameType.append(ct)
    
    for pt in pType:
        if pt not in cType and pt not in diffType:
            diffType.append(pt)

    if consistency == "Consistent":
        strength = "none"
    else:       
        if len(diffType) > 0 and len(diffItem) > 0 and len(sameType) == 0:
            strength = "Strong"
        elif len(diffType) > 0 and len(diffItem) > 0 and len(sameType) > 0:
            strength = "Strong&Weak"
        elif len(diffType) == 0 and len(diffItem) > 0:
            strength = "Weak"
    
                
    # print("-"*200)
    # print(cD)
    # print(pD)
    # print(diffItem)
    # print(diffType)
    # print(consistency, strength)
    

    return consistency, strength


def practiceDictToHeatMapData(dictData, csvPath):
    practiceHeatmapDataFrame = pandas.DataFrame(columns=["Data type", "Collect", "Use"])
    cpCount = {}
    for cp in dictData:
        if eval(cp)[0] not in cpCount:
            cpCount[eval(cp)[0]] = {"collect": 0, "use": 0}
        if eval(cp)[1] == "collect":
            cpCount[eval(cp)[0]]["collect"] = dictData[cp]
        elif eval(cp)[1] == "use":
            cpCount[eval(cp)[0]]["use"] = dictData[cp]
    
    for cpc in cpCount:
        practiceHeatmapDataFrame.loc[practiceHeatmapDataFrame.shape[0]] = {
            "Data type": cpc,
            "Collect": cpCount[cpc]["collect"],
            "Use": cpCount[cpc]["use"]
        }
    
    practiceHeatmapDataFrame.to_csv(csvPath, index=False)
    

def sumBehavior():
    behaviorDir = r"D:\WORK\2023\PAPER\TSE24\data\behavior-3k-v2"
    policyDir = r"D:\WORK\2023\PAPER\TSE24\data\policy-3k"
    
    # sumFlowDict = {}
    sumCodePracticeDict = {}
    sumDocPracticeDict = {}
    sumConsistencyDict = {}
    
    sumSankeyNode = []
    sumSankeyLink = []
    sourceTypes = ["API", "UI"]
    for sourceType in sourceTypes:
        sumSankeyNode.append({"name": sourceType})
    for infoType in typeListEn:
        sumSankeyNode.append({"name": typeListEn[infoType]})
    for usageType in apiSink:
        sumSankeyNode.append({"name": usageType})
    sumSankeyNode.append({"name": "[No usage]"})
        
    for st in sourceTypes:
        for int in typeListEn:
            sumSankeyLink.append({"source": st, "target": typeListEn[int], "value":0})
    for int in typeListEn:
        for ut in usageType:
            sumSankeyLink.append({"source": typeListEn[int], "target": ut, "value":0})
        
        sumSankeyLink.append({"source": typeListEn[int], "target": "[No usage]", "value":0})
    
    
    totalMPNum = 0
    
    for mp in os.listdir(behaviorDir):
        if not mp.endswith(".pickle"):

            mpcodeDir = os.path.join(behaviorDir, mp, "behavior(processed).pickle")
            mpdocDir = os.path.join(policyDir, mp, "completion(processed).json")
            
            if not os.path.exists(mpdocDir):
                continue
            else:
                totalMPNum += 1
            
            fl, pl = getBehaviorCompareData(mpDir=mpcodeDir)
            
            for link in sumSankeyLink:
                # print(link)
                existFirstLink = False
                for f in fl:
                    feval = eval(f)
                    if feval[0] == link["source"] and feval[1] == link["target"]:
                        existFirstLink = True
                
                if existFirstLink:
                    link["value"] += 1
                
                existSecondLink = False
                for f in fl:
                    feval = eval(f)
                    if feval[1] == link["source"] and feval[2] == link["target"]:
                        existSecondLink = True
                
                if existSecondLink:
                    link["value"] += 1
                
            # for f in fl:
            #     if f not in sumFlowDict:
            #         sumFlowDict[f] = 1
            #     else:
            #         sumFlowDict[f] += 1
            
            for p in pl:
                if p not in sumCodePracticeDict:
                    sumCodePracticeDict[p] = 1
                else:
                    sumCodePracticeDict[p] += 1

            dl = getPolicyCompareData(mpDir=mpdocDir)
            
            for d in dl:
                if d not in sumDocPracticeDict:
                    sumDocPracticeDict[d] = 1
                else:
                    sumDocPracticeDict[d] += 1
       
            consistency, strength = compareData(cD=pl, pD=dl)
            cstuple = str((consistency, strength))
            
            if cstuple not in sumConsistencyDict:
                sumConsistencyDict[cstuple] = 1
            else:
                sumConsistencyDict[cstuple] += 1
            
    # print(sumFlowDict)
    print(sumCodePracticeDict)
    print(sumDocPracticeDict)
    print(totalMPNum)
    print(sumConsistencyDict)
    
    json.dump(sumSankeyNode, open(r"flowSankeyNodes-2.json", "w", encoding="utf-8"), ensure_ascii=False)
    json.dump(sumSankeyLink, open(r"flowSankeyLinks-2.json", "w", encoding="utf-8"), ensure_ascii=False)

    
    practiceDictToHeatMapData(dictData=sumCodePracticeDict, csvPath=r"codePracticeHeatmap.csv")
    
    practiceDictToHeatMapData(dictData=sumDocPracticeDict, csvPath=r"policyPracticeHeatmap.csv")
    
sumBehavior()
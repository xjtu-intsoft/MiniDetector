# MiniApp Consistency Detection System
A Consistency Detection System for WeChat Mini-Apps

## Structure
* /benchmark:
  * dataflow_7miniapps: The calibration dataset used in this paper. 7 mini-apps for data flow calibration. The calibration result file is in \_\_log\_\_/label.csv under each mini-app folder.
  * tuple_306sentences.json: The calibration dataset used in this paper. 306 privacy policy sentences with detailed annotations.

* /dataset:
   * Because github has a size limit of single file, we upload the dataset at zenodo:https://doi.org/10.5281/zenodo.7159718.
   * vocabulary_datatype.json & vocabulary_dataoperation.json: The vocabularies used in data practice, include data types and data operations.
   * privacy_2136labeledSentences.csv: Sentences for classifier training.
   * wechatAPIs_sourceandsink.json: WeChat mini-app APIs, includes source and sink.
   * MiniApp_PrivacyPolicy_2998: 2998 privacy policies extracted from the miniapp dataset.
   * MiniApp_Package_2998: 2998 WeChat miniapp packages dataset.
   * Due to the large volume of all mini-apps, only 2998 mini-apps with privacy policies are provided here. If you need the 100,000 mini-app packages, please contact us at wy0724@stu.xjtu.edu.cn.
   
* /classifier:
  * model.py: Train file for sentence classification.

* /dfjs:
The taint analysis data flow tool for wechat-miniapp.
The entry file is main.js. Modify the incoming mini-app file directory. After the analysis is completed, a \_\_res\_\_ result file will be generated in the directory.

* /extract:
Get the privacy policy from the static program code or automated tests.

## Environment
For code analysis, we used the NodeJS development environment, version 12.19.0. Abstract syntax trees are parsed using the esprima library. 
For the privacy policy analysis, we used Python development environment, version 3.6.13. The basic module of neural network for sentence classification is provided by Keras library.

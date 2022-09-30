# Miniapp Consistency Detection System
A Consistency Detection System for WeChat Mini-Apps

## Structure
* /benchmark: 
The calibration dataset used in this paper includes 7 mini-apps for data flow calibration and 306 privacy policy sentences with detailed annotations.
The calibration result file is in \_\_log\_\_/label.csv under each mini-app folder.

* /dataset:
   * /dataset/vocalulary: The vocabularies used in data practice, include data types and data operations.
   * /dataset/privacy_2136sentences.csv: Sentences for classifier training.
   * /dataset/wechatAPIs.json: WeChat mini-app APIs, includes source and sink.
   * /dataset/miniapp: Due to the large volume of all mini-apps, only 2998 privacy policies are provided here. If you need the 100,000 mini-app packages, please contact us at wy0724@stu.xjtu.edu.cn.

* /dfjs:
The taint analysis data flow tool for wechat-miniapp.
The entry file is main.js. Modify the incoming mini-app file directory. After the analysis is completed, a \_\_res\_\_ result file will be generated in the directory.

* /extract:
We get the privacy policy from the static program code and automated tests.

## Environment
For code analysis, we used the NodeJS development environment, version 12.19.0. Abstract syntax trees are parsed using the esprima library. 
For the privacy policy analysis, we used Python development environment, version 3.6.13. The basic module of neural network for sentence classification is provided by Keras library.

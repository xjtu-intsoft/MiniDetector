# MiniDetector

This repository contains the MiniDetector system, designed for detecting consistency issues within Mini-Apps. It provides tools for analyzing data flow, extracting entities from privacy policies, and conducting consistency detection.

## Structure

* `data`
  * `groundtruth`: contains the groundtruth of our approach, including 70 mini-apps (data flow and privacy policy). Due to the size restriction of the GitHub repo, only 5 samples are included. For more samples, please download from [Google Drive](https://drive.google.com/file/d/1J0bUYwh6puWTtIAEi8423QWLfyMw1Y4U/view?usp=sharing).
  * `policies`: contains 100 privacy policies from 50 popular apps (both Android and mini-apps).

* `ontology`: includes two ontologies, covering data types and operations.
* `flow`: analyzes data flow. This tool performs taint analysis for data flow in WeChat mini-apps.
* `entity`: entity extraction in privacy policies. 
  - `llm.py`: retrieves practical entities from privacy policies.
  - `extract.py`: extracts privacy policies from static program code.
* `consistency`: consistency detection module.
  

## How to Use

* Step 1. Use `flow` to obtain data flow results. 
  * For analyzing a single mini program, its entry file is `main.js`, and you can modify the corresponding configuration properties `__cfg__`, such as the mini program directory. 
  * For batch analysis, please refer to the `batch.js` file.
  * After the analysis is completed, a `__res__` result file will be generated in the directory.

* Step 2. Use `entity` to extract privacy policies from code or data practices from privacy policies.
  * The file `llm.py` contains the main code for querying data practices using a LLM. You need to configure the corresponding API token and select an appropriate model.
* Step 3. Utilize `consistency` for consistency detection.
  * The file `detection.py` contains a predefined list corresponding to the API-data practice. You can use this file to compare and analyze the data stream results with the LLM query results, ultimately obtaining the consistency comparison results for the mini-app.
## Environment

* `Node.js 12.19.0`
* `esprima`
* `Python 3.6.13`

For further inquiries or assistance, feel free to contact us.

Wang, wyin.official@foxmail.com

# MiniDetector: MiniApp Consistency Detection System

A Consistency Detection System for Mini-Apps

## Overview

This repository contains the MiniDetector system, designed for detecting consistency issues within Mini-Apps. It provides tools for analyzing data flow, extracting entities from privacy policies, and conducting consistency detection.

## Structure

* `/baseline`: 
  Contains the baseline of our approach, including 70 mini-apps (data flow and privacy policy). Due to the size restriction of the GitHub repo, only 5 samples are included.

* `/ontology`: 
  Includes two ontologies, covering types and operations.

* `/dataset`: 
  As GitHub has a size limit for single files, for more samples, please download from [Google Drive](https://drive.google.com/file/d/1J0bUYwh6puWTtIAEi8423QWLfyMw1Y4U/view?usp=sharing).

* `/dfjs`:
  Analyzes data flow in Mini-App JavaScript. This tool performs taint analysis for data flow in WeChat mini-apps. The entry file is `main.js`. Modify the incoming mini-app file directory as needed. After the analysis is completed, a `__res__` result file will be generated in the directory.

* `/eepp`:
  Entity extraction in privacy policies. 
  - `llm.py`: Retrieves practical entities from privacy policies.
  - `extract.py`: Extracts privacy policies from static program code.

* `/cdet`:
  Consistency detection module.

## How to Use

1. Use `/dfjs` to obtain data flow results.
2. Use `/eepp` to extract data practices from privacy policies.
3. Utilize `/cdet` for consistency detection.

## Environment

For code analysis, we utilized the Node.js development environment, version 12.19.0. Abstract syntax trees are parsed using the esprima library. 
For privacy policy analysis, we employed the Python development environment, version 3.6.13. 

For further inquiries or assistance, feel free to contact us. 

# Contact

Yin Wang, wy0724@stu.xjtu.edu.cn

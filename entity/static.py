# coding:utf-8

import json
import os
import re
import sys
from bs4 import BeautifulSoup

sys.setrecursionlimit(3000)


def miniapp_contain_policy(miniapp_dir):
    target_list = []
    contain = False
    string_list = []
    for root, dirs, files in os.walk(miniapp_dir, topdown=False):
        for item in files:
            item_path = os.path.join(root, item)
            if os.path.getsize(item_path) < 1024 * 300 and (item_path.endswith(".js") or item_path.endswith(".wxml")):
                content = open(item_path, "r", encoding="utf-8").read()
                key_num = 0
                for key_word in ["隐私", "收集", "隐私政策", "协议", "用户协议"]:
                    if content.count(key_word) > 0:
                        key_num = key_num + content.count(key_word)
                if key_num > 5:
                    target_list.append(os.path.join(root, item).replace("\\", "/"))
                    chinese = "".join(re.findall('[\u4e00-\u9fa5]', content))
                    if len(chinese) > 200:
                        if item_path.endswith(".wxml"):
                            contain = "wxml"
                            soup = BeautifulSoup(content, "html.parser")
                            for child in soup.descendants:
                                if child.string:
                                    new_string = child.string.replace(" ", "").replace("\n", "")
                                    if new_string not in string_list:
                                        string_list.append(new_string)
                        else:
                            contain = "js"
                            string_list.append(item_path)

    if contain:
        find_text = "".join(string_list)
    else:
        find_text = ""
    return contain, find_text


dir = r"/data1/wy/miniapp_dataset_10w/dataset_mp/80001-90000"
result_json = "result9.json"
result = []
a_contain = 0
for app in os.listdir(dir):
    app_dir = os.path.join(dir, app)
    print(app_dir)
    res, text = miniapp_contain_policy(app_dir)
    if res:
      a_contain = a_contain + 1
    r = {"app": app, "dir": app_dir, "contain": res, "text": text}
    result.append(r)
    print(r)
    print("-" * 30)

print(a_contain)

with open(result_json, "w", encoding="utf-8") as save:
    json.dump(result, save, ensure_ascii=False)

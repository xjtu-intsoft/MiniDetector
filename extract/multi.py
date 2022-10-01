import argparse
import os
import re
import subprocess
import sys
import time

from airtest.cli.parser import cli_setup
from airtest.core.api import *
from poco.drivers.android.uiautomation import AndroidUiautomationPoco

sys.path.append("D:/WORK/2022/文本爬取/triggerScript")

# 首次运行启动
if not cli_setup():
    auto_setup(__file__, logdir=False,
               devices=["android://127.0.0.1:5037/127.0.0.1:7555?cap_method=MINICAP&&ori_method=MINICAPORI&&touch_method=MINITOUCH"])


def test(app_name_list, save_dir):
    poco = AndroidUiautomationPoco(use_airtest_input=True, screenshot_each_action=False)
    for app_id, app_name in enumerate(app_name_list):
        # 已经测试完毕的小程序跳过
        app_dir = "%05d" % app_id
        if app_dir in os.listdir(save_dir):
            continue

        # if not cli_setup():
        #     auto_setup(__file__, logdir=False,
        #                devices=["android://127.0.0.1:5037/127.0.0.1:7555?cap_method=MINICAP&&ori_method=MINICAPORI&&touch_method=MINITOUCH"])

        # 如果前一个小程序仍在前台，关闭
        if poco("com.tencent.mm:id/fb", desc="关闭").exists():
            poco("com.tencent.mm:id/fb", desc="关闭").click()
        # 如果微信退到后台，重新启动
        if not poco.device.get_top_activity()[0] == "com.tencent.mm":
            print("restart wechat")
            shell('am start -n "com.tencent.mm/.plugin.webview.ui.tools.fts.FTSSearchTabWebViewUI"')

        try:
            print(time.asctime(time.localtime(time.time())), "|", app_id, "|", app_name)
            process = subprocess.Popen('python main.py --app "%s" --id %d' % (app_name, app_id), stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                       stderr=subprocess.PIPE, shell=True)
            process.communicate(timeout=600)

        except Exception as e:
            process.kill()
            poco.stop_running()
            # 写入错误信息
            log_file = open(os.path.join(save_dir, app_dir, "privacy_log.txt"), "a", encoding="utf-8")
            log_file.write(str(time.asctime(time.localtime(time.time()))) + ":" + str(e) + "\n")
            print(e, e.__traceback__.tb_lineno)
            time.sleep(3)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='manual to this script')
    parser.add_argument('--applist', type=str, default="mplist")
    parser.add_argument('--savedir', type=str, default=r"D:\WORK\2022\PrivacyCrawler\log")
    args = parser.parse_args()

    # 注意大小写
    app_list = args.applist
    save_dir = args.savedir

    name_list = []
    with open(app_list, "r", encoding="utf-8") as m_list:
        for i, l in enumerate(m_list.readlines()):
            if i > 0:
                name_list.append(l.split(",")[1][:-1])

    test(name_list, save_dir)


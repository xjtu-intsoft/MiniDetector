# -*- encoding=utf8 -*-
__author__ = "XJTU"

import json
import logging
import os
import random
import re
import shutil
import sys
import time
import Levenshtein
from airtest.cli.parser import cli_setup
import argparse

from airtest.report.report import simple_report

sys.path.append("D:/WORK/2022/文本爬取/triggerScript")

from airtest.core.api import *
from poco.drivers.android.uiautomation import AndroidUiautomationPoco
from skimage.metrics import structural_similarity

from chineseocr.model import OcrHandle
from PIL import Image
import cv2
import logging


def customize_log(log_info, log_dir):
    """
    自定义输出，输出格式为“时间戳：输出日志”
    在打印到输出行的同时，保存在日志文件夹log_dir下的privacy_log.txt中
    @param log_info: 打印日志信息
    @param log_dir: 存放日志目录
    """
    log_info = str(log_info)
    print(log_info)
    log_file = open(os.path.join(log_dir, "privacy_log.txt"), "a", encoding="utf-8")
    log_file.write(str(time.asctime(time.localtime(time.time()))) + ":" + log_info + "\n")


def get_orc_result(crop_box=None):
    """
    获取当前屏幕截图的OCR识别结果
    当前屏幕截图会被存放在日志目录下的cache.jpg
    @param crop_box: 是否需要裁减.如果需要裁减，输入一个四元数组如（0,0,200,800）
    @return: OCR识别结果
    """
    orcHandle = OcrHandle()
    snapshot(filename=log_path + "/cache.jpg")
    img = Image.open(log_path + "/cache.jpg")
    if crop_box:
        img = img.crop(crop_box)
    return orcHandle.text_predict(img)


def get_ocr_text(return_type="list"):
    """
    获取OCR识别结果中的文本部分，根据返回类型不同有不同的拼接方式
    @param return_type: “list”为返回文本列表，"str"为返回拼接后的整个字符串
    @return: 文本拼接结果
    """
    ocr_result = get_orc_result()
    ocr_text = []

    for i in ocr_result:
        ocr_text.append(i[1])

    if return_type == "list":
        return ocr_text
    elif return_type == "str":
        return "".join(ocr_text)


def click_text(text, save_path, crop_box=None, click_top="all", mode="precise"):
    """
    点击屏幕文本
    @param text: 要点击的文本内容，str格式
    @param save_path: 存放日志的路径
    @param crop_box: 截图裁减范围，四元组格式
    @param click_top: 点击参数，如果为"all"则点击页面的全部匹配文字（最大点击次数为99），否则传入数值为要点击的次数
    @param mode: 点击方式，“precise”, 精确匹配点击，识别到的字块必须包含text. "vague", 模糊点击，计算Levenshtein距离设置阈值(未测试).
    @return: 点击结果
    """
    # 未添加功能：点击以后检测前后页面有无发生改变，如果改变了，停止继续点击
    ocr_result = get_orc_result(crop_box)
    click_result = False
    # 点击次数
    if click_top == "all":
        click_num = 99
    else:
        click_num = int(click_top)

    for o in ocr_result:
        search_result = []

        if mode == "precise":
            search_result = re.finditer(text, o[1])
        # 模糊点击
        # elif mode == "vague":
        #     vague_distance = Levenshtein.distance(text, o[1])
        #     print(o[1], vague_distance)
        #     if vague_distance < 3:
        #         customize_log("vague:" + o[1], save_path)
        #         search_result.append(o[1])

        for i, sr in enumerate(search_result):
            if i < click_num:
                customize_log("try click:%d/%d" % (i, click_num), save_path)
                left_up = o[0][0]
                right_bottom = o[0][2]

                # 点击位置与字符长度有关，需要点在匹配字符的中间
                click_x = left_up[0] + (right_bottom[0] - left_up[0]) / len(o[1]) * (sr.span()[0] + len(text) / 2)
                click_y = (left_up[1] + right_bottom[1]) / 2

                if crop_box:
                    click_x = click_x + crop_box[0]
                    click_y = click_y + crop_box[1]

                click((click_x, click_y))
                click_result = True

                sleep(2)
                customize_log("Click %s at [%s, %s]." % (text, click_x, click_y), save_path)

    return click_result


def text_exist(text):
    """
    当前屏幕的OCR结果中是否包含指定文本
    @param text: 待检测文本
    @return: 当前屏幕是否包含检测用的指定文本
    """
    ocr_result = get_orc_result()
    for o in ocr_result:
        if re.search(text, o[1]):
            return True

    return False


def get_current_page():
    """
    获取当前页面状态
    @return: "MainPage":微信主页面. “SearchPage”：微信搜索页面. "AppSearchPage"：小程序搜索页面.
    """
    top_activity = poco.device.get_top_activity()
    if top_activity[0] == "com.tencent.mm" and top_activity[1] == ".ui.LauncherUI":
        return "MainPage"
    if top_activity[0] == "com.tencent.mm" and top_activity[1] == ".plugin.fts.ui.FTSMainUI":
        return "SearchPage"
    if top_activity[0] == "com.tencent.mm" and top_activity[1] == ".plugin.webview.ui.tools.fts.FTSSearchTabWebViewUI":
        return "AppSearchPage"
    return None


def reset_page(save_path):
    """
    重置爬取页面，从任意页面回退到微信主页面
    @param save_path: 存放日志的目录
    """
    max_try_count = 8
    current_try_count = 0

    if poco("com.tencent.mm:id/fb", desc="关闭").exists():
        poco("com.tencent.mm:id/fb", desc="关闭").click()

    while not get_current_page() == "MainPage" and current_try_count < max_try_count:
        keyevent("BACK")
        customize_log("back times:%d/%d" % (current_try_count, max_try_count), save_path)
        sleep(2)

        if not poco.device.get_top_activity()[0] == "com.tencent.mm":
            shell('am start -n "com.tencent.mm"')

        current_try_count += 1

    if get_current_page() == "MainPage":
        customize_log("back to MainPage", save_path)
    else:
        customize_log("back error.", save_path)
        shell("am start -n com.tencent.mm")


def app_open(app_name, save_path):
    """
    打开一个微信小程序
    @param app_name: 小程序名
    @param save_path: 存放日志的目录
    @return: 打开结果，成功或失败
    """
    # 启动微信
    reset_page(save_path)
    # 点击搜索icon
    poco("com.tencent.mm:id/f1c").click()
    sleep(1)
    # 进入小程序搜索
    click_text("小程序", save_path=save_path)
    # 搜索框完全加载出来会比较慢
    sleep(3)
    # 点击搜索栏
    if poco("com.tencent.mm:id/cd6").exists():
        poco("com.tencent.mm:id/cd6").click()
    else:
        click_text("搜索", crop_box=(0, 0, 810, 150), click_top=1, save_path=save_path)
    sleep(1)
    # 输入小程序名并搜索
    for i in range(10):
        keyevent("KEYCODE_DEL")
    text(app_name, search=True)
    sleep(3)
    # 点击搜索列表第一个
    if poco("search_result").exists():
        customize_log("search result exist and click", save_path)
        poco("search_result").child()[1].click()
    else:
        customize_log("text recognize and click", save_path)
        click_res = click_text(app_name, crop_box=(0, 150, 810, 600), click_top=1, save_path=save_path)
        if not click_res:
            touch((405, 350))
    # 等待加载30s
    sleep(10)
    customize_log("wait for app load, 20s left...", save_path)
    sleep(10)
    customize_log("wait for app load, 10s left...", save_path)
    sleep(10)

    if poco("com.tencent.mm:id/fb", desc="关闭").exists():
        return True
    else:
        return False


def app_exit():
    """
    退出当前小程序
    """
    poco("com.tencent.mm:id/fb", desc="关闭").click()


def wx_authorize_exist():
    """
    检测当前页面是否存在授权窗口弹出
    @return: 当前页面是否存在授权窗口弹出
    """
    # 申请用户权限
    authorize_mark = 0

    for comp in ["j4h", "iqh", "iqb", "iqd", "iq6", "iqg", "iq_", "jlu", "aoi", "iq7", "iqe"]:
        if poco("com.tencent.mm:id/%s" % comp).exists():
            authorize_mark += 1
    for toast_text in ["申请", "获取你的", "信息", "拒绝", "允许"]:
        if text_exist(toast_text):
            authorize_mark += 1

    if authorize_mark > 3:
        return True
    else:
        return False


def wx_toast_exist():
    """
    检测当前页面是否存在提示窗口弹出
    @return: 当前页面是否存在提示窗口弹出
    """
    # 提示用户的窗口
    toast_mark = 0

    for comp in ["od", "guq", "gv5", "gv4", "gux", "guv", "guj", "guo", "gup", "c7o", "gv3"]:
        if poco("com.tencent.mm:id/%s" % comp).exists():
            toast_mark += 1
    for toast_text in ["确定", "取消"]:
        if text_exist(toast_text):
            toast_mark += 1

    if toast_mark > 3:
        return True
    else:
        return False


def random_input(save_path):
    """
    随机输入1-13位的文字
    @param save_path: 存放日志的目录
    """
    randomlength = random.randint(1, 13)
    upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lowerLetter = "abcdefghigklmnopqrstuvwxyz"
    digits = "0123456789"
    wpecialCharacters = "!@#$%&_-.+="
    randomMap = {"digit": digits, "upper": upperLetter, "lower": lowerLetter, "mixDigitLetter": upperLetter + lowerLetter + digits,
                 "mixLetter": upperLetter + lowerLetter, "mixDigitLetterCharcter": upperLetter + lowerLetter + digits + wpecialCharacters}
    str_list = [random.choice(randomMap[random.choice(["digit", "upper", "lower", "mixDigitLetter", "mixLetter", "mixDigitLetterCharcter"])]) for i in
                range(randomlength)]
    random_str = ''.join(str_list)
    text(random_str, search=True)
    customize_log("random input:" + random_str, save_path)


def random_swipe(save_path):
    """
    随机滑动
    @param save_path:存放日志的目录
    @return: 左右滑动，上下滑动和不滑动都有1/3概率
    """
    mode = random.randint(1, 3)
    customize_log("random swipe:%d" % mode, save_path)
    if mode == 1:
        width, height = device().get_current_resolution()
        # 校准滑动的起点和终点
        start_pt = (width * 0.9, height / 2)
        end_pt = (width * 0.1, height / 2)
        # 滑动5次:
        for i in range(5):
            swipe(start_pt, end_pt)
            sleep(1)  # 等待设备的响应
    elif mode == 2:
        width, height = device().get_current_resolution()
        # 校准滑动的起点和终点
        start_pt = (width / 2, height * 0.9)
        end_pt = (width / 2, height * 0.1)
        # 滑动5次:
        for i in range(3):
            swipe(start_pt, end_pt)
            sleep(1)  # 等待设备的响应
    else:
        return


def search_bottom_button(hierarchy, save_path):
    """
    查找小程序底部导航控件
    @param hierarchy: 当前小程序布局对象
    @param save_path: 存放日志的目录
    @return: 可点击导航按钮的节点列表
    """
    navigator_queue = []
    # 初始化，搜索底部button按钮
    for n in hierarchy.nodes:
        if n["payload"]["name"] in ["com.tencent.mm:id/uu"] and n["payload"]["visible"] \
                and 0.95 < n["payload"]["pos"][1] < 1 and 0 < n["payload"]["pos"][0] < 1:
            navigator_queue.append(n)

        if n["payload"]["name"] in ["android.widget.Image"] \
                and 0.95 < n["payload"]["pos"][1] < 1 and 0 < n["payload"]["pos"][0] < 1:
            navigator_queue.append(n)

    if len(navigator_queue) == 0:
        for n in hierarchy.nodes:
            if n["payload"]["name"] in ["android.view.View"] and "text" in n["payload"] and len(n["payload"]["text"]) > 1 \
                    and 0.95 < n["payload"]["pos"][1] < 1 and 0 < n["payload"]["pos"][0] < 1:
                navigator_queue.append(n)

    customize_log("try to search bottom button, find %d" % len(navigator_queue), save_path)
    return navigator_queue


def back(main_activity):
    """
    封装返回按键，避免在回退过程中退出该小程序的Activity
    @param main_activity: 当前小程序Activity名
    """
    keyevent("BACK")
    if not ".plugin.appbrand.ui.AppBrandUI" in poco.device.get_top_activity()[1]:
        shell('shell am start -n' + main_activity)


def crawler(front_hierarchy, save_path, scroll_test=False):
    """
    爬取测试
    @param front_hierarchy: 当前页面的布局对象
    @param save_path: 存放日志的目录
    @param scroll_test: 是否在每个页面添加一定的滚动
    @return:
    """
    customize_log("regular test", save_path)

    main_activity = poco.device.get_top_activity()[1]

    close_toast_and_authorize(main_activity, save_path)

    try_times = 0
    max_try = 5
    visited = []
    current_hierachy = front_hierarchy
    last_snapshot_filename = save_path + "/snapshot/%d.jpg" % time.time()
    snapshot(filename=last_snapshot_filename)

    navigator_queue = search_bottom_button(hierarchy=front_hierarchy, save_path=save_path)

    if len(navigator_queue) == 0:
        # 未找到底部标签栏，先看首页有无登录或隐私政策按钮
        relay_and_policy_touch(front_hierarchy, last_snapshot_filename, save_path, main_activity)
        # 然后进行随机测试尝试搜索底部标签栏
        while not navigator_queue and try_times < max_try:
            customize_log("try to get buttom button...%d/%d" % (try_times, max_try), save_path)
            try_times = try_times + 1
            similar_times = 0

            for i in range(2 * max_try):
                # 随机选择布局文件中的节点
                n = random.choice(current_hierachy.nodes)
                if node_in_list(n, visited):
                    continue
                else:
                    visited.append(n)

                # 记录截图信息，用于后续比较
                last_snapshot_filename = save_path + "/snapshot/%d.jpg" % time.time()
                snapshot(filename=last_snapshot_filename)

                # 过滤可点击组件，不能点击Yosemite输入法控件
                if "payload" in n and \
                        (
                                #  view类组件且可视
                                (n["payload"]["visible"] and n["payload"]["type"] in
                                 [
                                     "android.view.View",
                                     "android.widget.TextView",
                                     "android.widget.ImageView",
                                     "android.widget.Button"
                                 ])
                                # 可点击
                                or ("touchable" in n["payload"] and n["payload"]["touchable"])
                        ) and \
                        not ("text" in n["payload"] and n["payload"]["text"] in ["Yosemite"]):

                    poco.click(n["payload"]["pos"])
                    customize_log("click at %s" % n["payload"]["pos"], save_path)

                    # 如果是可输入组件，随机输入一些东西
                    if n["payload"]["type"] in ["android.widget.EditText"]:
                        random_input(save_path)

                    # 随机滑动
                    random_swipe(save_path)

                    # 是否有提示或授权
                    close_toast_and_authorize(main_activity, save_path)

                    # 比较点击前后的页面是否发生了改变
                    current_snapshot_filename = save_path + "/snapshot/%d.jpg" % time.time()
                    snapshot(filename=current_snapshot_filename)
                    similar_result = isSimilarImg(last_snapshot_filename, current_snapshot_filename, save_path)
                    if similar_result > 0.9:
                        similar_times = similar_times + 1
                        customize_log("similar page as before, current similar times:%d." % similar_times, save_path)
                        if similar_times < max_try:
                            continue
                        else:
                            customize_log("similar get max, back", save_path)
                            back(main_activity)
                            break
                    else:
                        similar_times = 0
                        navigator_queue = search_bottom_button(hierarchy=front_hierarchy)
                        if navigator_queue:
                            break

    customize_log("all navigator:%s" % len(navigator_queue), save_path)

    current_hierarchy = front_hierarchy

    # 对底部搜索栏遍历进入点击，寻找可能出现隐私政策的位置
    for i, n in enumerate(navigator_queue):
        customize_log("navigator test:%s/%s" % (i + 1, len(navigator_queue)), save_path)
        if node_in_list(n, global_visited):
            continue
        else:
            global_visited.append(n)

        poco.click(n["payload"]["pos"])
        customize_log("click at %s" % n["payload"]["pos"], save_path)

        close_toast_and_authorize(main_activity, save_path)

        # 等待页面加载完毕
        sleep(5)

        # 比较点击前后的页面是否发生了改变
        current_hierachy = Hierarchy()
        last_snapshot_filename = save_path + "/snapshot/%d.jpg" % current_hierachy.dump_time
        snapshot(filename=last_snapshot_filename)

        # 检测是否存在中继页面或隐私政策入口
        relay_and_policy_touch(current_hierarchy, last_snapshot_filename, save_path, main_activity)

        # 尝试滑动
        if scroll_test:
            scroll_time = 0
            scroll_max_time = 5
            scroll_end = False
            if poco(type="android.webkit.WebView").exists():
                for s in poco(type="android.webkit.WebView"):
                    # 滚动次数未超过最大滚动次数并且没有滑到底部
                    if scroll_time < scroll_max_time and not scroll_end:
                        s.scroll(percent=0.9)
                        # 等待滑动完成
                        sleep(2)
                        scroll_time = scroll_time + 1
                        customize_log("scroll and snapshot", save_path)

                        # 检测滚动前后页面是否发生改变，如果没变认为滑到底部了
                        current_snapshot_filename = save_path + "/snapshot/%d.jpg" % (time.time())
                        snapshot(filename=current_snapshot_filename)

                        similar_result = isSimilarImg(last_snapshot_filename, current_snapshot_filename, save_path)
                        if similar_result > 0.9:
                            scroll_end = True
                            customize_log("scroll end", save_path)

                        # 检测是否存在中继页面或隐私政策入口
                        relay_and_policy_touch(current_hierarchy, current_snapshot_filename, save_path, main_activity)
                        last_snapshot_filename = current_snapshot_filename

    customize_log("exit", save_path)
    app_exit()
    return


def relay_and_policy_touch(current_hierarchy, last_snapshot_filename, save_path, main_activity):
    # 尝试登陆和点击隐私政策
    if policy_exist(save_path):
        try_touch_policy(last_hierarchy=current_hierarchy, last_snapshot_filename=last_snapshot_filename, save_path=save_path,
                         main_activity=main_activity)
    # 是否存在中继界面
    if relay_exist(save_path):
        touch_relay_result = try_touch_relay(last_hierarchy=current_hierarchy, last_snapshot_filename=last_snapshot_filename, save_path=save_path,
                                             main_activity=main_activity)
        # 中继界面跳转成功
        if touch_relay_result:
            # 是有有隐私关键词
            if policy_exist(save_path):
                try_touch_policy(last_hierarchy=current_hierarchy, last_snapshot_filename=last_snapshot_filename, save_path=save_path,
                                 main_activity=main_activity)
            keyevent("BACK")


class Hierarchy:
    def __init__(self):
        self.dump_time = time.time()
        self.hierarchy = poco.agent.hierarchy.dump()

        self.nodes = self.get_node_list()

    # 小程序页面内的全部节点列表
    def get_node_list(self):
        stack = [self.hierarchy]
        visited = [self.hierarchy]
        while len(stack) > 0:
            vertex = stack.pop()
            if "children" in vertex:
                children_nodes = vertex["children"]
            else:
                continue
            for node in children_nodes:
                if "payload" in node and 0.1 < node["payload"]["pos"][1] < 1 and 0 < node["payload"]["pos"][0] < 1:
                    stack.append(node)
                    visited.append(node)
        return visited

    def compare(self, cmp_hierachy):
        """
        比较两个布局文件的节点信息
        @param cmp_hierachy: 待比较布局文件对象
        @return: "same"两个布局文件一致，"add"待比较布局文件比自身节点更多，"diff"两个布局文件不同
        """
        if len(self.nodes) == len(cmp_hierachy.nodes):
            same_length = "same"
        elif len(self.nodes) < len(cmp_hierachy.nodes):
            same_length = "less"
        elif len(self.nodes) > len(cmp_hierachy.nodes):
            same_length = "more"

        same_nodes = True
        for n in self.nodes:
            if not node_in_list(n, cmp_hierachy.nodes):
                same_nodes = False

        if same_length == "same" and same_nodes:
            return "same"
        elif same_length == "less" and same_nodes:
            return "add"
        elif not same_nodes:
            return "diff"


def node_in_list(node, nodes_list):
    """
    检测布局节点是否在给定列表中
    @param node: 待检测节点
    @param nodes_list: 给定的节点列表
    @return: 节点是否在给定列表中
    """
    for n in nodes_list:
        if str(node) == str(n):
            return True
    return False


def isSimilarImg(path_image1, path_image2, save_path):
    """
    比较两张截图的相似度
    @param path_image1: 截图1
    @param path_image2: 截图2
    @param save_path: 日志存放目录
    @return: SSIM相似度
    """
    imageA = cv2.imread(path_image1)
    imageB = cv2.imread(path_image2)
    # 图片灰度处理
    grayA = cv2.cvtColor(imageA, cv2.COLOR_BGR2GRAY)
    grayB = cv2.cvtColor(imageB, cv2.COLOR_BGR2GRAY)
    (score, diff) = structural_similarity(grayA, grayB, full=True)
    customize_log(("SSIM: {} {}".format(score, type(diff)) + "\n" + os.path.abspath(path_image1) + "\n" + os.path.abspath(path_image2)), save_path)
    return score


def close_toast_and_authorize(main_activity, save_path):
    """
    关闭授权和提示
    @param main_activity: 当前小程序Activity名称，避免跳出小程序页面
    @param save_path: 存放日志的目录
    """
    if wx_authorize_exist():
        customize_log("wx authorize", save_path)
        back(main_activity)
        if wx_authorize_exist():
            key_char = ""
            for button_char in ["取消", "拒绝"]:
                if text_exist(button_char):
                    key_char = button_char
            if len(key_char) > 1:
                click_text(key_char, save_path=save_path)

    if wx_toast_exist():
        customize_log("wx toast", save_path)
        back(main_activity)
        if wx_toast_exist():
            key_char = ""
            for button_char in ["取消", "拒绝"]:
                if text_exist(button_char):
                    key_char = button_char
            if len(key_char) > 1:
                click_text(key_char, save_path=save_path)


def relay_exist(save_path):
    """
    是否存在中继页面
    @param save_path: 存放日志的目录
    @return: 是否存在中继页面
    """
    customize_log("try find relay page...", save_path)
    for tag in relay_text:
        if text_exist(tag):
            customize_log("find tag: %s" % tag, save_path)
            # 尝试点击隐私政策相关入口
            return tag
    customize_log("not find relay entrance", save_path)
    return False


def policy_exist(save_path):
    """
    是否存在隐私政策页面
    @param save_path: 存放日志的目录
    @return: 是否存在隐私政策页面
    """
    customize_log("try find privacy policy entrance...", save_path)
    for tag in policy_text:
        if text_exist(tag):
            customize_log("find tag: %s" % tag, save_path)
            return True
    customize_log("not find policy entrance", save_path)
    return False


def try_touch_relay(last_hierarchy, last_snapshot_filename, save_path, main_activity):
    """
    尝试点击中继页面入口
    @param last_hierarchy: 点击之前的页面布局结构，用于点击后返回
    @param last_snapshot_filename: 点击之前的页面截图，用于点击之后返回
    @param save_path: 存放日志的目录
    @param main_activity: 当前小程序的Activity名
    @return: 尝试点击结果
    """
    customize_log("try touch relay...", save_path)
    for tag in relay_text:
        if text_exist(tag):
            click_text(tag, crop_box=(0, 100, 810, 1300), save_path=save_path)
            sleep(1)

            current_hierachy = Hierarchy()
            compare_result = current_hierachy.compare(last_hierarchy)

            close_toast_and_authorize(main_activity, save_path)

            current_snapshot_filename = save_path + "/snapshot/%d.jpg" % (time.time())
            snapshot(filename=current_snapshot_filename)

            similar_result = isSimilarImg(last_snapshot_filename, current_snapshot_filename, save_path)
            if similar_result < 0.9 and compare_result in ["diff", "add"]:
                customize_log("relay touch success", save_path)
                return True

    customize_log("relay touch fail", save_path)
    return False


def try_touch_policy(last_hierarchy, last_snapshot_filename, save_path, main_activity):
    """
    尝试点击隐私政策页面入口
    @param last_hierarchy: 点击之前的页面布局结构，用于点击后返回
    @param last_snapshot_filename: 点击之前的页面截图，用于点击之后返回
    @param save_path: 存放日志的目录
    @param main_activity: 当前小程序的Activity名
    @return: 尝试点击结果
    """
    customize_log("try touch policy...", save_path)
    policy_stage = False
    for tag in policy_text:
        if text_exist(tag):
            customize_log("find tag: %s" % tag, save_path)
            # 尝试点击隐私政策相关入口
            click_text(tag, save_path)
            sleep(1)
            # 判断页面是否发生改变
            current_hierachy = Hierarchy()
            compare_result = current_hierachy.compare(last_hierarchy)

            current_snapshot_filename = save_path + "/snapshot/%d.jpg" % (time.time())
            snapshot(filename=current_snapshot_filename)
            similar_result = isSimilarImg(last_snapshot_filename, current_snapshot_filename, save_path)

            # 如果页面发生了改变
            if similar_result < 0.9 and compare_result in ["diff", "add"]:
                customize_log("hierachy %s, snapshot" % compare_result, save_path)
                last_snapshot_filename = save_path + "/snapshot/%d.jpg" % current_hierachy.dump_time
                snapshot(filename=last_snapshot_filename)

                page_text = get_ocr_text(return_type="str")
                customize_log("text amount:%s" % len(page_text), save_path)

                # 字数超过阈值
                if len(page_text) > 350:
                    policy_stage = True
                    # 寻找可滑动组件
                    if poco(type="android.webkit.WebView").exists():
                        for s in poco(type="android.webkit.WebView"):
                            scroll_end = False
                            while not scroll_end:
                                s.scroll(percent=0.9)
                                customize_log("scroll and snapshot", save_path)
                                current_snapshot_filename = save_path + "/privacy/%d.jpg" % (time.time())
                                snapshot(filename=current_snapshot_filename)

                                similar_result = isSimilarImg(last_snapshot_filename, current_snapshot_filename, save_path)
                                if similar_result > 0.9:
                                    scroll_end = True
                                    customize_log("scroll end", save_path)

                                last_snapshot_filename = current_snapshot_filename
                # 返回
                back(main_activity)

            close_toast_and_authorize(main_activity, save_path)

    if policy_stage:
        return True
    else:
        customize_log("finish try touch privacy policy", save_path)
        return False


def get_hierarchy():
    """
    获取poco当前的页面内容
    @return:
    """
    return poco.agent.hierarchy.dump()


# script content

# 中继页面关键词
relay_text = ["登录", "帮助中心", "设置", "用户帮助"]

# 隐私政策入口关键词
policy_text = ["服务协议", "用户协议", "使用协议", "安全协议", "使用规则", "注册声明", "注册协议", "隐私", "条款", "政策"]

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='manual to this script')
    parser.add_argument('--app', type=str, default=None)
    parser.add_argument('--id', type=int, default=int(time.time()))
    parser.add_argument('--dir', type=int, default="D:/WORK/2022/PrivacyCrawler/log")
    args = parser.parse_args()
    # 注意大小写，如果出现英文字母大小写差异可能会搜不到/点不到指定的小程序
    app_name = args.app
    app_id = args.id
    log_path = args.dir

    # app_name = "001兼职网一兼职求职找工作"
    # app_id = 0

    poco = AndroidUiautomationPoco(use_airtest_input=True, screenshot_each_action=False)

    global_visited = []

    app_log_dir = os.path.join(log_path, "%05d" % app_id)

    if os.path.exists(app_log_dir):
        shutil.rmtree(app_log_dir)
    os.mkdir(app_log_dir)

    snapshot_path = os.path.join(app_log_dir, "snapshot")
    privacy_path = os.path.join(app_log_dir, "privacy")

    logger = logging.getLogger("airtest")
    logger.setLevel(logging.INFO)

    # 截图清晰度
    ST.SNAPSHOT_QUALITY = 99
    ST.SAVE_IMAGE = False
    auto_setup(__file__, logdir=app_log_dir)

    os.mkdir(snapshot_path)
    os.mkdir(privacy_path)

    app_open_success = False
    if not app_open_success:
        app_open_success = app_open(app_name, save_path=app_log_dir)
    customize_log(poco.device.get_top_activity(), app_log_dir)

    if not ".plugin.appbrand.ui.AppBrandUI" in poco.device.get_top_activity()[1]:
        # 开启失败，再尝试一次
        app_open_success = app_open(app_name, save_path=app_log_dir)
        if ".plugin.appbrand.ui.AppBrandUI" in poco.device.get_top_activity()[1]:
            app_open_success = True
    else:
        app_open_success = True

    if app_open_success:
        get_hierarchy()
        front_hierarchy = Hierarchy()
        snapshot(filename=snapshot_path + "/%d.jpg" % front_hierarchy.dump_time)
        if len(front_hierarchy.nodes) == 1:
            customize_log("cannot get hierarchy, please delete this log and restart script", app_log_dir)
        else:
            try:
                crawler(front_hierarchy=front_hierarchy, save_path=app_log_dir, scroll_test=True)
            except Exception as e:
                error_log = e + "\nline:" + e.__traceback__.tb_lineno
                customize_log(e, app_log_dir)
    else:
        customize_log("open app failed", app_log_dir)
    simple_report(__file__, logpath=True, output=os.path.join(app_log_dir, "airtest_log.html"))
    sleep(3)

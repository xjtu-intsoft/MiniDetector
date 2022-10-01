import argparse
import os
import sys
import time

sys.path.append("D:/WORK/2022/文本爬取/triggerScript")

from chineseocr.model import OcrHandle
from PIL import Image
import cv2

orcHandle = OcrHandle()


def get_orc_result(img_path, crop_box=None):
    img = Image.open(img_path)
    if crop_box:
        img = img.crop(crop_box)
    return orcHandle.text_predict(img)


def get_ocr_text(img_path, crop_box=None, return_type="list"):
    ocr_result = get_orc_result(img_path, crop_box=crop_box)
    ocr_text = []
    for i in ocr_result:
        ocr_text.append(i[1])
    if return_type == "list":
        return ocr_text
    elif return_type == "str":
        return "".join(ocr_text)


def find_lcsubstr(s1, s2):
    m = [[0 for i in range(len(s2) + 1)] for j in range(len(s1) + 1)]
    mmax = 0
    p = 0
    for i in range(len(s1)):
        for j in range(len(s2)):
            if s1[i] == s2[j]:
                m[i + 1][j + 1] = m[i][j] + 1
                if m[i + 1][j + 1] > mmax:
                    mmax = m[i + 1][j + 1]
                    p = i + 1
    return s1[p - mmax:p], mmax


def privacy2txt(snapshot_dir):
    snapshot_texts = []

    for snapshot_file in os.listdir(snapshot_dir):
        snapshot_path = os.path.join(snapshot_dir, snapshot_file)
        snapshot_text = get_ocr_text(snapshot_path, crop_box=(0, 150, 810, 1440), return_type="str")
        snapshot_texts.append(snapshot_text)

    privacy_text = snapshot_texts[0]

    for i in range(len(snapshot_texts) - 1):
        substr, substr_len = find_lcsubstr(snapshot_texts[i], snapshot_texts[i + 1])
        cur_text_cut = snapshot_texts[i + 1][snapshot_texts[i + 1].find(substr) + substr_len:]
        privacy_text = privacy_text + cur_text_cut

    with open(os.path.join(snapshot_dir, "privacy.txt"), "w", encoding="utf-8") as p:
        p.write(privacy_text)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='manual to this script')
    parser.add_argument('--path', type=str, default="mplist")
    args = parser.parse_args()

    privacy_path = args.path

    privacy2txt(privacy_path)

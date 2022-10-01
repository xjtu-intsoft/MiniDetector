# Mini-apps Privacy Crawler

## Prepare

* 安装微信客户端的模拟器，需要打开微信并进入主页面（聊天列表页面）
* 执行`main.py`根据运行提示安装依赖（没有指定版本的需求，给了`requirements.txt`可供参考)

## Structure and Use

* `main.py`: 主函数，包含了单个小程序的隐私政策爬取脚本。  
使用时需要指定小程序名`{app_name}`，小程序爬取记录编号`{app_id}`，爬取日志存放目录`{log_dir}`。  
测试完成后会在`log_dir`下生成以`app_id`为文件夹名称的测试日志目录，其中`/privacy`包含了爬取时的隐私政策页面截图，`/snapshot`包含了爬取整个流程的页面截图，`/log.txt`和`/airtest_log.html`为airtest自动生成的日志文件，也就是操作序列，`/privacy_log.txt`为我们自定义的日志输出文件。

```
    python main.py --app {app_name} --id {app_id} --dir {log_dir}
     sample: python main.py --app "001兼职网一兼职求职找工作" --id 0 --dir "/test/save"
```

* `multi.py`：在给定小程序名单的情况下，批量执行爬取（单线程，单模拟器）。  
使用时需要指定小程序名单列表`{app_list}`文件。  
测试完成后会在`save_dir`目录下存放按`app_list`序号格式的小程序爬取结果，同时包含`/cache.jpg`为整体测试时用于OCR识别的缓存截图文件。

```
    python multi.py --applist {app_list} --savedir {save_dir}
    sample: python multi.py --applist "/test/mplist/mplist" --savedir "/test/save"
```

* `snapshot2txt.py`：用于将爬取的隐私政策图片转换为隐私政策文本。  
使用时需要指定存放隐私政策截图的文件夹`{privacy_snapshot_path}`。  
测试完成后会生成`/privacy_snapshot_path/privacy.txt`的隐私政策识别结果。

```
    python snapshot2txt.py --path {privacy_snapshot_path}
    sample: python snapshot2txt.py --path "/test/mplist/log_50/00000/privacy"
```

* `chineseocr`：工程使用需要添加chineseorc文件库，模型文件存在一定保密要求，如需使用请联系我们。


* `test/manual`: 一次测试使用的小程序。xlsx文件中内含人工核验结果与准确率（约70）。因为测试时还未整理好日志输出格式，因此只有小程序名单和标定结果。

* `test/mplist`: 二次测试使用的小程序。针对mplist的前332个小程序展开的测试结果，有8个小程序识别到了隐私政策页面。文件大小原因仅放了前50个小程序的结果。

## Problems and Solutions

> *PythonExceptionErr: No module named 'chineseocr'*

需要在每个代码执行并添加系统路径。  
这一部分在每个代码文件的开头部分，我这里系统目录是`"D:/WORK/2022/文本爬取/triggerScript"`。

> *PythonExceptionErr: opencv ... imread ... structural_similarity ...*

代码复用的`main.isSimilarImg()`接受的两张图片目录不能包含中文，否则目录读取会中断，找不到对比图片。


> *PrivacyLogErr: open app failed.*

小程序打开失败。  
可能是小程序已经下架，或是英文小程序名大小写差异导致搜不到/点不到，或是小程序加载失败等等。

> *PrivacyLogErr: cannot get hierarchy, please delete this log and restart script.*

模拟器缓存问题导致无法识别小程序的页面结构。  
需要删除出现问题的小程序日志测试目录，重新启动测试脚本解决（有概率仍然失败，尝试多重启几次脚本或重启模拟器可以解决）。

> *PrivacyLogErr: back error.*

在回退到微信主页面时发生错误，无法检测到主页面存在的标志控件。  
可能是由于小程序无法返回导致，该问题会使得此小程序被跳过测试。


## Algorithm

- **搜索部分**：在微信客户端APP中，点击“搜索”按钮，在“小程序”的搜索引擎中，通过输入小程序名，搜索并打开该小程序。  
**关键函数**: 搜索和打开小程序->`main.app_open()`

- **测试部分**:首先检测是否存在底部导航按钮。如果存在则执行导航测试：分别点击不同的导航按钮，查看页面内是否存在两类页面入口（中继页面如登录、设置等，隐私政策页面如用户协议、隐私政策等）；如果不存在底部导航按钮，在当前页面执行随机测试。然后看当前页面文字数量是否超过隐私政策文字的阈值比例，满足要求则截图保存到爬取日志下的指定目录中。  
**关键函数**：搜索底部导航按钮->`main.search_bottom_button()`, 爬取主逻辑->`main.crawler()`, 检测中继/隐私政策页面并尝试点击->`main.relay_and_policy_touch()`，尝试点击隐私政策入口并保存爬取记录截图`main.try_touch_policy()`

- 绝大部分函数及输入参数均已经在代码中添加注释。
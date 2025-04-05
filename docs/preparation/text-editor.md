---
title: 文本编辑器
sidebar_position: 2
---

# 文本编辑器

一个好用的文本编辑器是**相当**重要的，特别是在服务器配置和开发过程中。本文将介绍几款适合服务器开发和配置的文本编辑器。

## 为什么不要使用Windows自带的记事本和写字板

:::warning
Windows自带的记事本和写字板存在以下问题，请避免使用：

1. **编码问题**：容易造成文件编码改变，导致服务器无法正确读取配置文件
2. **格式检查缺失**：无法自动检测语法错误，容易导致配置文件失效
3. **缩进显示问题**：不使用[等宽字体](https://baike.baidu.com/item/%E7%AD%89%E5%AE%BD%E5%AD%97%E4%BD%93/8434037)，使得代码格式显示不准确
4. **无语法高亮**：缺乏语法高亮功能，降低配置文件的可读性和编辑效率
:::

## 推荐文本编辑器对比

| 编辑器名称 | 平台支持 | 启动速度 | 中文支持 | 开源 | 特点 |
|---------|---------|---------|---------|---------|---------|
| Visual Studio Code | Windows 10+/Mac/Linux | 中等 | 完善 | ✓ | 功能全面，插件丰富 |
| Sublime Text | 全平台 | 快 | 需安装包 | ✗ | 轻量快速，需付费激活 |
| Kate | 全平台 | 快 | ✓ | ✓ | 开源轻量 |
| Notepad3 | Windows 8+ | 极快 | ✓ | ✓ | 轻量简洁 |
| Notepad-- | Windows | 快 | ✓ | ✓ | Notepad++替代品 |
| HbuilderX | 全平台 | 中等 | ✓ | ✗ | 国产，前端友好 |
| Geany | 全平台 | 快 | ✓ | ✓ | 轻量IDE |

## 编辑器详细介绍

### Visual Studio Code（强烈推荐）

<details>
  <summary>点击展开</summary>

![官网图片](https://code.visualstudio.com/assets/home/home-screenshot-win-lg.png)

**特点**：
- 全能型文本编辑器，功能最为全面
- 丰富的插件生态系统
- **支持简体中文/繁体中文/英文**
- 适合各类开发任务，非常适合新手

**系统要求**：Windows 10+、macOS、Linux

**优点**：
- 功能丰富，可扩展性强
- 集成终端和Git支持
- 智能代码补全

**缺点**：
- 启动速度相对较慢（但已经优化得很好了）

**官网链接**：[https://code.visualstudio.com/](https://code.visualstudio.com/)

**保存文件提示**：

VSCode 会在未保存的文件名后标记一个白点，提示你这个文件已编辑但未保存：

![](_images/白点.png)

保存文件的方法：

![](_images/vscode保存和自动保存.png)

- 点击保存按钮(红色箭头)
- 使用快捷键保存：`Ctrl + S`
- 开启自动保存(绿色箭头)

**常用资源**：
- [Windows 下载镜像](https://dl.8aka.org/plugins/VSCodeUserSetup-x64-1.94.0.exe)
- [下载速度慢的解决方法](https://cn.bing.com/search?q=vscode%E4%B8%8B%E8%BD%BD%E9%BE%9F%E9%80%9F%E6%80%8E%E4%B9%88%E5%8A%9E)
- [VSCode 视频安装教程](https://www.bilibili.com/video/BV1nM4m117Fv/?share_source=copy_web)

</details>

### Sublime Text

<details>
  <summary>点击展开</summary>

![Sublime Text](_images/sublime展示.png)

**特点**：
- 轻量级但功能强大的编辑器
- 启动速度快
- 支持多种编程语言

**系统要求**：Windows、macOS、Linux

**优点**：
- 启动速度快
- 界面简洁美观
- 支持多光标编辑

**缺点**：
- 对非激活用户会不定期弹出付费提示
- 默认不支持中文界面，需要安装语言包

**官网链接**：[https://www.sublimetext.com/](https://www.sublimetext.com/)

**中文支持**：[如何汉化Sublime Text](https://cn.bing.com/search?q=sublime+text%e6%b1%89%e5%8c%96&qs=SC&pq=sublimetext&sk=HS1SC5&sc=10-11&cvid=19623440FA3646E0BEBECEED995CFCAF&FORM=QBRE&sp=7&lq=0)

</details>

### Kate

<details>
  <summary>点击展开</summary>

![Kate](https://kate-editor.org/images/konsole.png)

**特点**：
- 开源文本编辑器
- 跨平台支持
- 启动速度快

**系统要求**：Windows、macOS、Linux

**优点**：
- 完全开源
- 支持多种文件格式
- 打开大文件速度快

**官网链接**：[https://kate-editor.org/zh-cn/](https://kate-editor.org/zh-cn/)

</details>

### Notepad3

<details>
  <summary>点击展开</summary>

![Notepad3](https://www.rizonesoft.com/wp-content/uploads/2023/09/notepad3-screenshot-1.jpg)

**特点**：
- 轻量级文本编辑器
- 启动速度极快
- 界面简洁

**系统要求**：Windows 8+

**优点**：
- 占用资源极少
- 启动速度极快
- 支持语法高亮

**官网链接**：[https://rizonesoft.com/downloads/notepad3/](https://rizonesoft.com/downloads/notepad3/)

**GitHub**：[https://github.com/rizonesoft/Notepad3](https://github.com/rizonesoft/Notepad3)

</details>

### Notepad++（有争议）

<details>
  <summary>点击展开</summary>

![NPPesu](_images/Npp展示.png)

**特点**：
- 功能完善的文本编辑器
- 启动速度快
- 插件丰富

:::warning
**注意**：该软件作者的政治立场有争议，若介意请考虑替代产品：
- 存在政治争议问题
- 有Notepad--等替代方案可选择
:::

**官网链接**：[http://www.notepadplus.com.cn/](http://www.notepadplus.com.cn/)

</details>

### Notepad--（Notepad++的替代品）

<details>
  <summary>点击展开</summary>

![Notepad--](_images/N减减展示.png)

**特点**：
- 国内开发者维护的Notepad++替代品
- 功能和界面与Notepad++类似
- 无政治争议

**系统要求**：Windows

**开源项目地址**：
- [`Gitee`](https://gitee.com/cxasm/notepad--)
- [`GitHub`](https://github.com/cxasm/notepad--)

</details>

### HbuilderX

<details>
  <summary>点击展开</summary>

![HbuilderX](_images/HbuilderX展示.png)

**特点**：
- 国产文本编辑器
- 特别适合前端开发
- 内置多种开发工具

**系统要求**：Windows、macOS、Linux

**官网链接**：[https://dcloud.io/hbuilderx.html](https://dcloud.io/hbuilderx.html)

**实用功能**：
关联右键菜单：可以在工具→设置(Ctrl+Alt+，)打开设置，找到"常用配置"手动选中【关联右键菜单】。

</details>

### Geany

<details>
  <summary>点击展开</summary>

![Geany](https://www.geany.org/media/uploads/screenshots/homepage/.thumbnails/geany_dark_2019-05-20.png/geany_dark_2019-05-20-500x0.png)

**特点**：
- 轻量级IDE
- 跨平台支持
- 启动速度快

**系统要求**：Windows、macOS、Linux

**官网链接**：[https://www.geany.org/](https://www.geany.org/)

</details>

## 不推荐使用的编辑器

- **Atom**：GitHub官方出品，已在2022年12月由于安全原因宣布停止维护，不建议使用。

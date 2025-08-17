---
layout: post	
title: 解锁个性化体验：Spicetify 改造你的 Spotify 客户端
categories:
  - 技术教程
  - 学习笔记
tags:
  - Spotify 美化
  - Spicetify
  - Lyricify 歌词
description: 本文介绍了如何使用 Spicetify 对 Spotify 进行个性化优化，包括去广告、换主题、增强歌词显示等功能，提升音乐体验。
ai:
  - >-
    这篇文章介绍了Spotify音乐平台及其用户自定义工具Spicetify，包括Spicetify的功能、安装方法、基本用法、推荐插件、主题更换及卸载方式，并提到了Lyricify歌词软件的使用。
cover: >-
  https://halo-bk.oss-cn-beijing.aliyuncs.com/%E6%96%87%E7%AB%A0%E5%B0%81%E9%9D%A2/%E5%88%A9%E7%94%A8%20Spicetify%20%E4%BC%98%E5%8C%96%E4%BD%A0%E7%9A%84Spotify%E4%BD%93%E9%AA%8C.webp
sticky: 1
draft: false
updated: '2025-08-05T02:12:28.005Z'
contentHash: e6e483e530909b668e11c84d143de8c1
abbrlink: b61e5d4a
date: 2025-07-18T21:02:00.000Z
---

> *舍不得如此灿烂的某人，照亮了一起走过的日子；忘不了有笑有泪的共同经历，你我之间的情谊是那么真挚；缘起缘灭，人海沉浮，相忘于江湖。几分怅惘，几许祝福，几丝江湖气。                                            ——@知乎网友*

## 前言

🌟 **Spotify：音乐爱好者的天堂**
Spotify 是全球领先的正版流媒体音乐服务商之一，汇聚数亿用户，覆盖全球。其音乐库包含超过 ，涵盖 Sony Music、EMI、Warner Music Group 和 Universal Music Group 等四大唱片公司及众多独立厂牌的作品。

⚠️ **体验上的不足**
尽管功能强大，Spotify 仍存在一些问题，例如广告频繁打扰（免费用户）、歌词功能不完善以及主题单一等。这些缺陷在一定程度上影响了用户体验。

🔧 **Spicetify：个性化 Spotify 的神器**
为解决上述问题，开源工具 Spicetify 应运而生！它支持用户自定义 Spotify 客户端的外观与功能，包括更改配色方案、安装自定义应用与扩展、屏蔽广告等，让你的音乐体验更自由、更独特！

## Spicetify 是什么

Spicetify 是一个多平台的命令行工具，用于自定义官方的 Spotify 客户端。它允许用户更改 Spotify 客户端的外观和功能，包括调整用户界面的配色方案和主题、安装自定义应用程序和扩展、屏蔽广告以及删除 Spotify 桌面应用程序中的一些不必要功能[^1]。

![PixPin_2025-07-18_19-26-21](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2025/07/18/dc6999f0358d876a120fd876ec1df802-3f80dbbe.webp)

总之，通过 Spicetify，你可以将 Spotify 打造成一个更美观、更实用、更个性化的音乐播放器。

**项目地址**：

* 官网链接：https://spicetify.app/ 

* Github项目地址：[Spicetify (github.com)](https://github.com/spicetify)

## Spicetify 安装

Spotify 在 Linux、Mac、Windows 桌面端都是 CEF (Chromium Embedded Framework) 架构，这给对客户端修改的修改提升了很大的便利和可行性。

Spicetify 有安装教程【[**点击跳转**](https://spicetify.app/docs/getting-started)】，下面的命令也是基于官网文档的。

### 准备工作

**step1**：确保已经安装好了 Spotify 软件；

Spotify 官网：[*https://open.spotify.com/*](https://open.spotify.com/)

**step2**：保证计算机全局可以🪜🪜；

- 使用软路由进行网络代理🎈；
- 使用代理软件进行网络代理，在软件中开启 **全局代理** / **Tun 模式。**

### Windows 平台

将下面命令分别复制到 `powershell` 里执行就能完成安装。（最好是以管理员身份打开 powershell，以免出现权限不足的问题。）

本人以 Windows11 系统为例，进行演示：

**Powershell （预构建的二进制文件）**

```powershell
iwr -useb https://raw.githubusercontent.com/spicetify/cli/main/install.ps1 | iex
```

![image-20240310153321052](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2024%2F03%2F10%2Fe6e505146cc0c126f5a46c2526970e42-45482216.png)

如果您想安装 [**Spicetify Marketplace**](https://github.com/spicetify/marketplace)，还可以运行以下命令，它使您可以访问 Spotify 侧边栏中的一个选项卡，该选项卡允许您搜索和安装主题、扩展和片段。

```powershell
iwr -useb https://raw.githubusercontent.com/spicetify/marketplace/main/resources/install.ps1 | iex
```

![image-20240310155433454](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2024%2F03%2F10%2F75d23c4bb947edf4bad920ce73e19be3-df76bcf3.png)

### Linux 和 MacOS

#### Shell（预构建二进制文件）

**安装 Spicetify CLI**

```shell
curl -fsSL https://raw.githubusercontent.com/spicetify/cli/main/install.sh | sh
```

**安装 Spicetify Marketplace**

```shell
curl -fsSL https://raw.githubusercontent.com/spicetify/marketplace/main/resources/install.sh | sh
```

分别复制命令在终端里执行就能完成安装，在不同系统中粘贴的这 2 行命令，其实是从 GitHub 下载 Spicetify 和相关的文件，不出意外的话， **Spicetify** 和 **Spicetify Marketplace** 便可顺利安装。

## 使用方法

完成上面安装 Spicetify 和 Spicetify Marketplace 的操作后，就可以使用它来自定义您的 Spotify 使用 Marketplace 中找到的所有**可用扩展**和**主题**

![image-20240310114030166](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2024%2F03%2F10%2Fbd7dc695684dcd6884b9f2f3c25dda76-7b0b3911.png)

💡 **小贴士**

- 插件市场（Spicetify Marketplace）里的内容本质上也是一些 `.js` 插件
- 有些插件可能依赖其他资源（如 CSS 或图片），通常会放在 `customApps` 或 `themes` 中配合使用

### spicetify 常见命令

* **基础命令**🔧

|                 命令                 |                    解释                     |
| :----------------------------------: | :-----------------------------------------: |
|             `spicetify`              | 显示 Spicetify CLI 的帮助信息和所有可用命令 |
| `spicetify -h` 或 `spicetify --help` |                显示帮助信息                 |
|        `spicetify --version`         |        查看当前安装的 Spicetify 版本        |

* **主题设置与应用**🎨

|                     命令                      |                 解释                  |
| :-------------------------------------------: | :-----------------------------------: |
| `spicetify config current-theme <theme-name>` |          设置当前使用的主题           |
| `spicetify config color-scheme <scheme-name>` |        设置当前使用的配色方案         |
|               `spicetify apply`               |     应用配置（包括主题、配色等）      |
|              `spicetify backup`               |       手动备份原始 Spotify 文件       |
|              `spicetify restore`              | 恢复原始 Spotify 文件（撤销所有修改） |

* **恢复与备份**🔁

|        命令         |                    说明                     |
| :-----------------: | :-----------------------------------------: |
| `spicetify backup`  |          手动备份原始 Spotify 文件          |
| `spicetify restore` |           恢复 Spotify 到原始状态           |
|  `spicetify reset`  | 重置 Spicetify 的配置，清除所有自定义设置。 |
| `spicetify upgrade` |               更新 Spicetify                |

*  **插件与自定义**📁

|                     命令                     |         说明         |
| :------------------------------------------: | :------------------: |
| `spicetify config extensions <extension.js>` |   添加一个插件脚本   |
|        `spicetify config extensions`         |    查看已安装插件    |
|  `spicetify config custom-apps <app-name>`   |  启用一个自定义应用  |
|            `spicetify config-dir`            | 打开配置文件所在目录 |
|            `spicetify backup-dir`            | 打开备份文件所在目录 |
|            `spicetify cache-dir`             | 打开缓存文件所在目录 |

有关其他命令和其他标志信息，请运行：`spicetify --help`命令查看。

### 插件安装与卸载

#### 扩展存储路径

- `Extensions`文件夹

|             平台             |               路径                |
| :--------------------------: | :-------------------------------: |
|         **Windows**          | `%appdata%\spicetify\Extensions\` |
| **Linux**/**MacOS 操作系统** | `~/.config/spicetify/Extensions`  |

- `Extensions`文件夹中的文件夹。

如果有 2 个同名的扩展，则 Home 目录中的扩展将被优先考虑。

将扩展文件放入正确的文件夹后，运行以下命令进行安装（有的插件可以直接用插件安装）：

#### 插件安装与卸载

* **插件市场安装 vs 命令安装插件的区别**

|   特性   |                         插件市场安装                         | 命令安装 (手动)                |
| :------: | :----------------------------------------------------------: | ------------------------------ |
| 安装方式 | 通过 Marketplace 网站点击安装按钮，自动执行`spicetify install` | 使用命令手动下载并添加插件     |
| 插件来源 |                 通常来自官方或社区认证的插件                 | 可以来自任何 GitHub 或自定义源 |
| 更新方式 |                通常提供更新提示或自动更新机制                | 需要手动更新文件               |
| 卸载难度 |                  通常有明确的卸载提示或按钮                  | 需要知道插件文件名和路径       |

插件市场安装插件较为简单，不在赘述，简单说明下命令安装的一般指令：

```powershell
spicetify config extensions <file name>
spicetify apply
```

***Tips**：使用命令添加扩展时，总是将文件名附加到现有的扩展列表中，它不会替换整个键的值。*

如果你想从当前的扩展列表中移除一个扩展，你可以在文件名后面添加一个 `-`。

```powershell
spicetify config extensions <file name>-  # 建议用这个
spicetify config remove extensions <file name>

spicetify apply
```

### 软件更新

由于 Spotify 时不时地更新其客户端。由于我们无权控制此过程，因此您可能需要重新应用 Spicetify。建议每次 Spotify 更新后，使用下面的命令升级应用 spicetify。

```powershell
spicetify update
spicetify upgrade
spicetify backup apply
```

* `spicetify update`：
  更新 Spicetify 的核心资源，包括主题、扩展、自定义应用等资源文件，但**不会更新 Spicetify CLI 本身** 。

* `spicetify upgrade`
  升级 Spicetify CLI 到最新版本。这个命令会检查官方发布的最新版本，并进行更新。

* `spicetify backup apply`

  首先备份原始未被修改 Spotify 文件，并应用当前的 Spicetify 配置（包括主题、扩展和配色方案等），确保修改安全且生效。

### 推荐插件

下面的插件大多数都可以通过**插件市场**安装，极少数可以通过命令安装。

#### Full App Display（市场）

Full App Display 是 Spicetify 提供的插件，允许用户在 Spotify 客户端中启用全屏显示模式。用户可以隐藏或显示播放控制、歌曲信息和播放列表等元素，实现简洁的全屏播放体验。

[huhridge/huh-spicetify-extensions: Collection of my spicetify extensions](https://github.com/huhridge/huh-spicetify-extensions)

一般通过市场安装，若要安装，请运行以下命令：

```powershell
 spicetify config extensions fullAppDisplay.js     
 spicetify apply        
```

![image-20240310115041160](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2024%2F03%2F10%2F2d3bbcc1d00367d7622b48bfeb0a873e-af4d5ebb.png)

安装后软件右上角会有一个**小电视标志**，如下图所示：

![PixPin_2025-07-18_16-06-33](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2025/07/18/a43845a72b5f21973737976dce0c1bb8-ce63314d.webp)

#### Full Screen（市场）

`Full Screen` 也能实现优雅全屏的播放，专辑封面显示和模糊效果背景。与 `Full App Display` 功能差不多，但我感觉 `Full Screen` 更帅。

[daksh2k/Spicetify-stuff: Some spicetify extensions!](https://github.com/daksh2k/Spicetify-stuff)

![image-20240310224654973](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2024%2F03%2F10%2Fbc0b5c5ae25d95a4b96d58439875ac1e-c6f0b0ad.png)

#### Lyrics Plus

歌词增强的插件，从各种歌词提供商（Musixmatch、Netease、Genius）获取当前曲目的歌词。

若要安装，请运行以下命令：

```powershell
 spicetify config custom_apps lyrics-plus   
 spicetify apply
```

![image-20240310114949480](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2024%2F03%2F10%2F5ddea73a29ab86391401b230abf20740-6f2ef6e5.png)

搞定之后，重启 Spotify，就能进入全屏播放的界面啦。

鼠标右击界面，会弹出下图的面板，可启用/关闭多个选项，此外，点击界面右下角的按钮，还可以调整歌词的字号大小、歌词滚动的延迟时间，切换显示部分歌词/全部歌词(Compact)。

![image-20240310120146939](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2024%2F03%2F10%2Fc0780118def6f959992bff9c97351b54-b899e83f.png)

#### Adblock（市场）

用于阻止所有音频广告和界面广告。只需运行该扩展，它就会开始工作！

[rxri/spicetify-extensions: Collection of custom Spicetify extensions to enhance your Spotify experience](https://github.com/rxri/spicetify-extensions)

#### New Releases

汇总来自最喜欢的艺术家、播客的所有新版本。时间范围、发布类型和其他过滤器可以在配置菜单中自定义（在配置文件菜单中，右上角带有您的用户名的按钮）。

若要安装，请运行以下命令：

```powershell
 spicetify config custom_apps new-releases
 spicetify apply
```

### Spicetify 卸载

如果不想用了可以参考下面的命令卸载Spicetify。

#### Windows

```powershell
spicetify restore
rmdir -r -fo $env:APPDATA\spicetify
rmdir -r -fo $env:LOCALAPPDATA\spicetify
```

#### Linux and MacOS

```powershell
 spicetify restore
 rm -rf ~/.spicetify
 rm -rf ~/.config/spicetify
```

## 更换主题

换主题最简单就是在插件市场搜索直接应用即可；

若要使用第三方主题，将主题文件下载到本地后进行解压，将解压得到的多个主题文件放到 `.spicetify` 下的 Themes 文件夹中。

网上有很多 Spicetify 主题，也有整理好的 Spicetify 主题库，推荐下载 Spicetify [官方主题库](https://github.com/spicetify/spicetify-themes)。

### 命令实现

如果安装了`git`的话，直接复制下面的命令完成添加。

**Windows**

```powershell
git clone https://github.com/spicetify/spicetify-themes.git
cd spicetify-themes
cp * "$(spicetify -c | Split-Path)\Themes\" -Recurse           #将spicetify-themes目录中的所有文件和目录复制到Spicetify的主题目录中
```

**Linux**

```powershell
git clone https://github.com/spicetify/spicetify-themes.git
cd spicetify-themes
cp -r * ~/.config/spicetify/Themes
```

**Mac**

```powershell
 git clone https://github.com/spicetify/spicetify-themes.git
 cd spicetify-themes
 cp -r * ~/.config/spicetify/Themes
```

### 手动实现

不想安装`git`也可以，直接复制主题文件到 `Spicetify` 主题文件夹目录即可，详情可以参考文章[^3]设置即可。

您可以在 2 个地方放置主题：

|           平台            |             路径             |
| :-----------------------: | :--------------------------: |
|         **窗户**          | `%appdata%\spicetify\Themes` |
| **Linux**/**Mac操作系统** | `~/.config/spicetify/Themes` |

简单办法是直接在 powershell 输入`spicetify config-dir`，即可以进入 `\spicetify` 文件夹。

![PixPin_2025-07-18_18-35-39](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2025/07/18/139e75a5b22947e95d79032dc6a1dc39-f0fde2b8.webp)

### 切换主题

#### 终端直接切换

官方仓库提供了 BurntSienna、Default、Dreary、Dribbblish、Flow、Glaze、Onepunch、Sleek、Turntable、Ziro 这几个主题，只需要在终端里执行下命令就能切换主题[^2]。

比如切换到 `Onepunch` 主题：

```powershell
 spicetify config current_theme Onepunch
 spicetify apply
```

![image-20240310120907609](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2024%2F03%2F10%2Ff38b59d2b9dc7f4cc7d55e344308d457-9adeddd3.png)

此时重启 Spotify 客户端，就能看到更改主题之后的效果啦～

#### 修改配置文件

除了用上述方法切换主题外，可以直接修改 Spicetify 的配置文件 `config-xpui.ini`，用 VS Code 或任意一款文本编辑器打开这个配置文件。

修改配置文件，其实主要修改两个地方：

- current_theme：主题的名称
- color_scheme：配色方案

对于 Themes 下的每个文件夹就对应一个主题，文件夹的名称就是主题的名称。选定一个主题后，我们还需要配置一下主题的「配色方案」，这个参数来自主题文件夹中的 `color.ini` 文件。

选好想使用的主题和主题中提供的配色方案后，依次将这两个参数填入配置文件 `config-xpui.ini` 对应的两个字段中。

![Snipaste_2025-07-18_19-52-31](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2025/07/18/ff5b9a9cdf5c6063c49e8097e23a43b9-3fc9a0ff.webp)

填好之后，按下快捷键 Ctrl/Command + S 保存更改。

完成以上操作后，我们还要来到终端，输入命令 `spicetify apply`，按下回车键确认更改 Spotify 主题，当下方返回「Spotify is spiced up!」，则说明已经完成主题的更改。

想要恢复到 Spotify 的默认未修改状态，在powershell中输入`spicetify restore`回车即可。

***Tips**：spotify客户端自动升级后皮肤多半会失效，需要重新应用输入`spicetify apply`，有时 Spotify 客户端会更新，这是我们还需要输入`spicetify update`升级 spicetify 。*

![image-20240310111526668](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2024%2F03%2F10%2Ff9fefb7b0434210236513ac7eac34253-e26d07b1.png)

## 歌词软件-Lyricify🎶✨

Lyricify 是一款地表最强歌词工具，专为 Spotify 打造🎤。 Lyricify 支持 **Spotify、iTunes、Apple Music、Music Center、QQ 音乐、网易云音乐** 和 **YesPlayMusic**。

**官网地址**：[Lyricify，不仅有歌词](https://lyricify.app/zh-cn/)

Lyricify 提供多种显示方式，包括桌面歌词、全屏歌词和独特的“灵动岛”歌词显示。灵动岛可以拖动到屏幕中央，并在光标靠近时自动隐藏，提供更加沉浸式的音乐体验。

https://github.com/WXRIW/Lyricify-App

![PixPin_2025-07-18_19-07-07](https://blog-pictures-bucket.oss-cn-beijing.aliyuncs.com/typora-tu-chuang/2025/07/18/94eddd2bfd9ced59d6a00fd9d2ec65ab-699f1772.webp)

## 常见问题

### 配置文件在哪里？

**配置文件通常位于：**

|             平台             |                                  路径 |
| :--------------------------: | ------------------------------------: |
|         **Windows**          | `%appdata%\spicetify\config-xpui.ini` |
| **Linux**/**MacOS 操作系统** | `~/.config/spicetify/config-xpui.ini` |

但是，您可以通过以下方式具体知道它的位置：

```powershell
 spicetify -c
```

或者，您可以通过在终端中输入以下内容来打开它所在的文件夹：

```powershell
 spicetify config-dir
```

有关每个配置字段的详细信息，请运行：

```powershell
 spicetify --help config
```

### 命令辨析

* `spicetify restore` 和 `spicetify reset`区别

  前者将 **Spotify 客户端**的文件恢复为原始未被修改的状态 ，即撤销 Spicetify 对 Spotify 的所有修改 ；后者将 **Spicetify** 的配置重置为默认状态 ，即删除所有自定义配置、插件、主题等设置 。

* `spicetify backup` 备份的是当下被 spicetify 修改过的吗？

  此命令备份的是 Spotify 的原始未被修改的文件，**不是**当前被 Spicetify 修改过的文件 。

## 参考文章

[^1]: [音乐播放器Spotify太丑？给它换个皮肤，立马大变样](https://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649920587&idx=1&sn=586266c1aad64d898dc11b0095ace697&chksm=83a89066b4df19701a16aa282991a1bad6022c409f12c6f472ec8f6d905cf61870e442b1a556&token=707859341&lang=zh_CN#rd)

[^2]: [Getting Started,Spicetify](https://spicetify.app/docs/getting-started)

[^3]: [使用Spicetify更换Spotify主题&桌面实现滚动歌词](https://receptive-mandible-a0f.notion.site/spicetify-5f7f87d6069d44ba88b4e3d8e8f25cae)

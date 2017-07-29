---
title: 妄想 Paranoia 歌词 API 文档
tags:
  - API
  - VOCALOID
categories:
  - 实验室
date: 2017-04-04 16:26:00
updated: 2017-04-04 16:26:00
thumbnail: https://m-nfz.b0.upaiyun.com/img/thumbnails/delasaka-paranoia-api.png!blogth
---

> 封面：β 
> 取自 [妄想症系列专辑预热宣传](http://www.bilibili.com/video/av8264026/) 视频封面

<!-- more -->

# 妄想症 Paranoia API

> API 内收录所有歌词，版权归 妄想症系列 策划/作词 [雨狸](http://weibo.com/sakacastle) 所有！

- 更新：2017 年 4 月 4 日 上线
- 问题反馈：neofelhz@gmail.com
- 调用实例：数据获取
- 技术支持：Hadestack 提供思路

# 数据获取方式

- 请求地址：https://api.nfz.moe/paranoia/ （仅支持 HTTPS。域名已启用 HSTS 响应头）
- 请求方式：GET
- 请求参数：
  - charset：字符集，支持 GBK/UTF-8
  - encode：数据可返回函数名为 `paranoia` 的 JavaScript 脚本用于同步调用

# 实例

## 直接请求

- 请求：https://api.nfz.moe/paranoia/
- 返回：`我享受一场爱恋 在现下的时光中间 餐桌精巧的糕点 他俊朗的容颜`

## Javascript + HTML

脚本地址：`https://api.nfz.moe/paranoia/?encode=js`

在 `<body>` 标签内引用 JavaScript：

```html
<script type="text/javascript" src="https://api.nfz.moe/paranoia/?encode=js&charset=utf-8"></script>
```

在你需要展示一句话的地方加上：

```html
<div id="paranoiaapi"><script>paranoia()</script></div>
```

支持其它 css 样式。

> [HTML 调用实例](https://api.nfz.moe/paranoia/paranoia.html)

该脚本实质为使用 document.write 的脚本。

# 源码

受限于歌词版权，本人不开源使用的 妄想 Paranoia 歌词 API 所用源码。其 API 的核心部分源码择日开源。

---
title: 收集常见的公共图床
tags:
  - 博客
  - 图床
  - 免费资源
categories:
  - 分享镜
date: 2017-6-11 17:24:00
updated: 2017-8-1 1:15:00
---

为了节省带宽和流量、减少自己服务器的负载、加速网站图片的加载，站长一般会使用专门的图床或者 CDN 服务加载图片。本文就汇总介绍一下我所知道的公共图床，以及我对它们的评价。

<!-- more -->

# 公共图床

## 微博图床

微博图床堪称国内图床的中流砥柱，很多站长都在用。各种插件和在线上传都层出不穷，使用起来很方便。

- 速度：国内国外都非常快
- CDN：国内分别接入使用了蓝汛、网宿、阿里云 CDN、加速乐等，在国外使用了 Akamai CDN、Tierra.Net 的 CDN 等
- HTTPS：支持（不完全支持 HTTP2，得看你被解析到了哪个服务商的节点）
- 域名：
  - `ww1.sinaimg.cn` `ww2.sinaimg.cn` `ww3.sinaimg.cn` `ww4.sinaimg.cn`
  - `wx1.sinaimg.cn` `wx2.sinaimg.cn` `wx3.sinaimg.cn` `wx4.sinaimg.cn`
  - `ws1.sinaimg.cn` `ws2.sinaimg.cn` `ws3.sinaimg.cn` `ws4.sinaimg.cn`
  - 等等等等。。。。

> 微博图床会把你上传的图片转码成 jpg 格式；会提供三种 缩略图、中等大小、接近原图 三种尺寸的图片；需要用户登录才能上传，所以要小心，不是什么图片都能传的；另外，渣浪微博也曝出过**在图片上加新浪 logo 水印的行为**（不过现在已经去除，但不排除使用了肉眼难以辨别的水印）；另外渣浪的图片鉴定服务容易让你上传的图片消失，所以使用起来还是需要谨慎一些~~比如不要上传什么维尼熊之类的图片~~。

- [上传地址](http://photo.weibo.com/photos/upload)
- [Chrome 插件](https://chrome.google.com/webstore/detail/%E6%96%B0%E6%B5%AA%E5%BE%AE%E5%8D%9A%E5%9B%BE%E5%BA%8A/fdfdnfpdplfbbnemmmoklbfjbhecpnhf/related)

## imgur

这是一家老牌的国外图床，据说 2009 年就开始运行了。图片存储稳定可靠。

- 速度：国外真的挺快，不过国内半墙
- CDN：FastlyCDN（这家 CDN 的很多节点都被墙了）
- HTTPS：支持（不支持 HTTP2）
- 域名：`i.imgur.com`

> 追求国内访问速度的还是别用了吧。

- [上传地址](https://imgur.com)

## sm.ms 图床

这是土豪卷烧风自建的图床。

- 速度：~~现在估计是被滥用了没那么快了~~烧风购买了更多节点并修改了架构，现在全球速度不错。
- CDN：烧风自建的 CDN，有香港阿里云、DigitalOcean 欧洲和 Linode 北美等节点
- HTTPS：HTTP 会被 301 跳转 HTTPS（支持 HTTP2）
- 域名：`ooo.0o0.ooo` `i.loli.net`

> 支持 API 操作。图片也非常可靠。

- [上传地址](https://sm.ms)

## V2EX 图床

这是 V2EX 推出的图床服务，需要付费才能使用。

- 速度：全球的速度都还挺不错
- CDN：V2 自建的 CDN，东亚地区会解析到台湾节点、国内速度不错。
- HTTPS：支持（支持 HTTP2）
- 域名：`i.v2ex.co`

> V2 图床需要付费使用可能会使一些人望而却步，不过也可以避免被滥用。
> 我把必须保证外链服务高度可靠的图片托管在上面，比如我的友链信息提供的我的头像和 favicon 的图片都托管在 V2 图床。

- [上传地址](https://www.v2ex.com/i)

## 贴图库

这个图床曾经被严重滥用，几年前还承诺免费，如今想要长期保存图片已经需要付费了。

- 速度：国内足够快，国外速度很一般
- CDN：~~之前用过百度云加速 CDN，现在接入了 CloudXNS 牛盾 CDN 和五五互联的 CDN 服务~~现在又重新启用百度云加速了
- HTTPS：~~支持~~现在重新接入了百度云加速以后并没有启用 HTTPS 支持。

> 免费套餐上传图片只能保存 6 个月，需要付费才能长时间保存。他们接入的 CDN 又很不咋地，我估计只有傻子才会去买。

## ONJI 图床

- 速度：国内速度可以，国外就不行了
- CDN：百度云加速
- HTTPS：支持（不支持 HTTP2）
- 域名：`cdn.onji.cn` `api.onji.cn`

ONJI 图床的架构很特殊。这个图床有两种使用方式：

- 在 [pic.onji.cn](https://pic.onji.cn) 上上传图片，获得链接
- 事先将图片上传到安全可靠的位置，然后使用 URI：`https://api.onji.cn/img/?url=<原图片的 URL>` 加载图片。

> 这个图床的架构是，将用户的图片上传到贴吧或者新浪微博的图床（指第一种使用方法），然后后端将其抓取下来分发、缓存到 CDN 上。由于第一种方法相当于将图片交到百度或者渣浪手里，所以也需要谨慎。

## VIM-CN 图床

- 速度：国外速度挺快，国内就不行了
- CDN：CloudFlare
- HTTPS：支持（支持 HTTP2）
- 域名：`img.vim-cn.com`

这是 [vim-cn](http://vim-cn.com) 提供的图床服务，支持 API 和在线上传，所用程序开源。不过由于使用了 CloudFlare，国内速度就慢多了。图床官网颇有一些年久失修的历史沧桑感，希望不要挂掉。

# 非“公共”的公共图床

## 奇虎图床

发现这个“图床”纯属偶然，我打开 `firekylin.org` 以后习惯性的按下 F12。然后我发现页面的背景图片所在的域名是 `p3.ssl.qhimg.com`
我知道 FireKylin 是奇虎 360 最大的前端团队 奇舞团 开发的博客系统，所以这可能是他们内部的图床。所以我很难找到图片的接口。
不过后来，我在 360 的其它网站，都看到了类似的域名，说明这个图床是也有对外接口的。

- 速度：全球的速度都很好
- CDN：奇虎自己的 CDN，部分节点和网宿合作
- HTTPS：支持（支持 HTTP2）
- 域名：
  - `p1.qhimg.com` `p2.qhimg.com` `p3.qhimg.com` 等等
  - `p1.qhmsg.com` `p2.qhmsg.com` `p3.qhmsg.com` 等等

> 在这些域名的前端散列符和根域名之间加上 `ssl`，如 `p1.ssl.qhmsg.com`，即可支持 HTTPS 和 HTTP2。

公开上传接口：位于 `wenda.so.com` `bbs.360.cn`。后者一天只能上传 20 张图片，上传图片的方法就是在 360 论坛（Discuz 驱动）的发帖页面上传图片，然后获得图片地址。

## 阿里图床

自从巧合的发现了 `bbs.360.cn` 可以上传图片到奇虎图床，我就想试试能不能找到一个类似的接口，把图片上传到 `img.alicdn.com`
于是我发现了[淘宝论坛](https://index.bbs.taobao.com)。

- 速度：全球都非常快
- CDN：阿里云自建的 CDN
- HTTPS：支持（支持 HTTP2）
- 域名：`img.alicdn.com`

> 压图比较严重，而且需要把图片交给阿里，~~而且 CDN 节点上没有定义图片的 MIME Type~~不推荐使用。

## GitHub

GitHub 一直拥有各种奇怪的用途，被发掘出来当图床也并不例外。

- 速度：国内可以接受，海外速度很快
- CDN：Fastly CDN
- HTTPS：支持（似乎不支持 HTTP2）
- 域名：`user-images.githubusercontent.com`

上传方式是新建一个 Repo，然后在 Issue 中传图（直接将图片拖动到 issue 输入框即可），GitHub 会将你的图片分发到 GitHub 的 CDN 中。

> 和使用 GitHub Raw 需要动态生成文件不同，user-image 这个子域名是 GitHub 专门为静态文件准备的，不会导致当年某某抢票助手 CC GitHub 的事情再现的。
> 当然，请善待 GitHub。

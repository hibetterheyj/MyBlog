---
title: CNAME和MX解析互斥的问题
tags:
  - DNS
  - 域名解析
categories:
  - 博客栈
date: 2016-11-20 15:51:00
updated: 2016-11-20 15:51:00
toc: false
thumbnail: https://blog.nfz.yecdn.com/img/thumbnails/resolve-mutual-exclusion-between-cname-and-mx.png!blogth
---

<!--more-->

为了防止滥用，我的主机商没有给邮箱权限。意思就是，如果我要用邮箱就必须用域名邮箱服务。于是我注册了网易域名企业邮箱服务（腾讯域名邮箱不支持.ga域名后缀支持）。
如果使用邮箱，我就需要在域名解析处添加一条MX记录网易域名邮箱这里。
但是我的主机商的给我的是CNAME，但是根据 [RFC](https://zh.wikipedia.org/wiki/RFC) 1034的[文档](https://zh.wikipedia.org/wiki/RFC)中章节3.6.2指出：
> If a CNAME RR is present at a node, no other data should be present; this ensuresthat the data for a canonical name and its aliases cannot be different.

意思是说如果CNAME资源记录出现在一个域名节点，为了确保不会出现不同的解析结果，这个域名节点将不再接受其他记录值。
所以我在域名商那里的DNS添加解析时出现了问题（我用的是Freenom的免费顶级域名、以及FreenomDNS）。
> 实际上除了CNAME和MX不能共存外，已经注册了CNAME类型的域名记录是不能再注册除DNSSEC相关类型记录（RRSIG、NSEC等）之外的任何其他类型记录（包括MX、A、NS等记录），理由同上。

怎么办？谷歌后的结果是CloudXNS提供私有解析服务。而且CloudXNS的DNS解析服务还是免费的。

> 还不赶快换过去（滑稽）

在域名商那边切换 NameServer 到CloudXNS的NS，然后在CloudXNS这边提交如下解析记录：

- 首先，用CNAME解析www到我的主机商
- 然后把@用CloudXNS用他们的私有解析方案LINK添加记录“www@neofelhz.ga”

> LINK可以隐藏当前这一层的配置，直接接管下一层的结果。

- 最后添加 MX记录解析到网易的域名邮箱

这样就实现了MX和CNAME共存了。
当然，我提前就申请并安装好了SSL证书，保护我的www域名。

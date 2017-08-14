---
title: sw-toolbox 的实践
tags:
  - Web
  - 前端优化
  - 博客
  - ServiceWorker
categories:
  - 实验室
date: 2017-8-3 18:06:00
updated: 2017-8-3 18:06:00
---

Service Worker 可能是前端的一场革命。Service Worker 开放了众多 API，是 PWA 的基石。同时，Service Worker 开放的操作 Cache Storage 的 API 更是给了一个极其方便的控制浏览器缓存的工具。

<!-- more -->

我曾经在 《[Web 性能优化（1）——浅尝 Service Worker](https://blog.nfz.moe/archives/wpo-by-service-worker.html)》一文当中介绍了 Service Worker 的离线加载特性，并且给了一份使用 Service Worker 原生 API 的样例代码。那份代码实现了基于白名单一个拦截所有请求并存储进 Cache Storage。
这份样例代码有很多缺陷：比如说不能针对路径、文件类型控制资源缓存，仅支持通过版本号管理全部缓存，对于频繁更新的内容不能起到很好的缓存效果等等。
针对动态缓存的需求，我们可以使用 Google 的 sw-toolbox 工具。

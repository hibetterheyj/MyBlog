---
title: 使用 Gitlab CI 实现 Hexo 持续部署
tags:
  - Hexo
  - CI
  - 持续集成
categories:
  - 博客栈
date: 2017-03-04 13:25:00
updated: 2017-03-04 13:25:00
thumbnail: https://m-nfz.b0.upaiyun.com/img/thumbnails/hexo-auto-deploy-with-gitlab-ci.png!blogth
---

自从使用 Hexo 博客以来，我一直在研究如何实现在任何平台上自由编写和发布 Hexo 博客。<!--more-->之前我在[《Hexo 持续自动化部署》](https://blog.neofelhz.space/archives/hexo-auto-deploy-with-daocloud.html)和[《用 Flow.CI 让 Hexo 持续集成》](https://blog.neofelhz.space/archives/hexo-auto-deploy-with-flow-ci.html)两篇文章中分别讲述了使用 DaoCloud 的 Docker 和 Flow.CI 的 Sass 平台部署持续集成的 Hexo，但是如今 DaoCloud 部署越来越慢，Flow.CI 也已经转向收费；所以我不得不寻找新的替代方案。

> 我的博客是部署在我的[锐壳云](https://www.rkecloud.com/?refcode=d5c140a80c)上的虚拟空间，外加香港的 CDN 服务商进行加速，我使用的是 ftpsync 的 deploy 方式，我的 ftp 的用户密码都存储在 `_config.yml` 中。这意味着我的 `_config.yml` 必须存储在私有库中，这就意味着常见的 Github+Travi.CI 并不符合我的要求。我目前用的是 Coding 的私有库管理我的 Hexo 博客的工程文件，确保尽可能不要被第三方获得我的 ftp 帐号密码。

很早就听说了 Gitlab。

> 就是那个最近因为不小心使用 `rm rf` 把自家数据库删光、还在 YouTube 上直播修库、让失误的程序员看了 10 小时的 *nyancat* 的那个 Gitlab。

Gitlab 有面向企业的计划、有开发独立的服务端程序，所以和主要面向平民化的码农天堂 Github 一口气亏损 6600 亿美元不同，Gitlab 至少并没有亏损。这一点和 Coding 颇为类似——无论是运营方式还是盈利方式，甚至是网站 UI 交互层面。

接下来事情就很简单了。

# 准备工作

首先，在 Gitlab 创建一个新的私有库，用来存储我的博客工程文件；在我的本地的 Hexo 博客工程文件中的 Repository 里添加一个新的 Remote 到 Gitlab。然后从 Coding 上 `git pull`，并 `git push` 到 Gitlab。
现在我在 Coding 和 Gitlab 上都有了 Hexo 博客的工程文件。接下来就是直接部署 CI 平台了。

# 编写 workflow

和 Github 的 Travis.CI 类似，你只需要在 Repository 的根目录上新建一个 `.gitlab-ci.yml` 你就可以实现 Gitlab 的 CI 平台执行自动部署。

> 在 Gitlab，CI 和 Repository 是高度集成的。你可以在 `pipeline` 里看到你的 CI 运行信息。

在 `.gitlab-ci.yml` 中填入下述内容：

```yaml
image: node:6.6.0
pages:
  cache:
    paths:
    - node_modules/

  script:
  - npm install
  - npm install hexo-cli -g
  - hexo deploy
  artifacts:
    paths:
    - public
  only:
  - master
```

> 上述脚本会自动在每次 push 后帮你生成 Hexo 静态文件并部署到 Gitlab 的 Pages 服务上。至于 `hexo deploy`，你需要事先部署好 Deploy 方式。

> 至于这些脚本的原理，你可以直接参考我之前那两篇关于 CI 部署 Hexo 的博客。

# SSH 有关

一些人可能在用 Github Pages 或者 Coding Pages，或者是使用的自己的 VPS（git 部署）。这样一来你就可能需要使用 SSH 连接你的 webserver 仓库。（当然，用 Caddy 做 webserver 和定时 git pull 那个算是异类）。这些你可以在 Gitlab CI 的 wiki 上查看到[相关内容](https://docs.gitlab.com/ee/ci/ssh_keys/README.html)。我也会在我的项目  [`HexoAutoBuildScript`](https://github.com/neoFelhz/HexoAutoBuildScript) 中更新有关的 Wiki。

> 值得一提的是，和 DaoCloud 和 Flow.CI 不同，Gitlab 可以通过设置 **环境变量** 的方式加载你的 SSH 的私钥，这样子就不需要把你的私钥放在你的项目仓库里，有效防止私钥泄露到第三方。这种环境变量的方式不仅安全，而且灵活。

# 小结

> 本文就是由 Gitlab CI 生成并发布的。

本文介绍了利用 Gitlab CI 进行持续集成 / 部署，今后的使用和之前的方式一样，向仓库提交 push 就可以触发自动部署。
和 Daocloud 和 Flow.CI 的代码构建相比，Gitlab CI 为持续集成 / 部署优点如下：

- 目前使用完全免费
- 可以和 Gitlab 的 Repository 无缝兼容，无需第三方 CI 平台接入。
- 支持在 `hexo deploy` 的同时自动发布到 Gitlab Pages

> ~~同时借助这个机会，我也利用 CloudXNS 将国外用户解析到 Gitlab Pages，为我的香港 CDN 分流减压，也可以加快使用代理服务的浏览者访问我博客的加载速度。~~ 取消了，香港的网络环境算不错的，全球访问都不差，所以没有再部署  Gitlab 的 Pages。
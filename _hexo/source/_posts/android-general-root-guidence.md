---
title: 安卓通用root教程
tags:
  - Root
  - Android
  - recovery
categories:
  - 分享镜
date: 2016-10-01 11:53:00
updated: 2017-06-02 21:39:12
thumbnail: https://m-nfz.b0.upaiyun.com/img/thumbnails/android-general-root-guidence.png!blogth
---

本 Root 教程适用于绝大部分安卓机型。当然，不能解锁 Bootloader，不能刷入第三方 recovery 如 TWRP 的机型不适用。

<!--more-->

# 楔子

如今还看到有人问用一键 root 工具不能 root ，怎么用一键 root 的问题。
首先不讨论这些一键 root 是什么样的存在：
1. 他们会窃取你的隐私、给你弄一堆你卸不掉的应用、破坏系统什么的；
2. 一键 root 的原理是通过寻找系统漏洞来获取 root ，如今 android 5.0 开始，系统的漏洞已经很少了，而且谷歌每个月都会更新一次到两次安全补丁。一键root基本已经不可能。
实际上 root 总有方法的。虽然需要一些折腾，但是毕竟提高了门槛，让不会玩机的小白远离 root ，不是件坏事，反而是好事。

# 下载工具

- ADB 工具包

> 这个是 cofface 制作的，原发布在移动叔叔论坛。

[下载链接](https://eyun.baidu.com/s/3mirXA2W) 密码：cxIZ

- SuperSU单刷包

> 我提供的是 SuperSU 2.78 RS1 版本，即 chainfire 自己制作的 2.78 版。为什么不用“官方”（即 CCMT 收购了 SuperSU 以后发布的版本）的 SuperSU ，而要去用原作者 ChainFire 制作的版本，可以去看我的博客《CCMT收购SuperSU以后》

# 解锁手机 Bootloader

有的手机可以在开发者选项内解锁——关于手机页面连续点击版本号 7 次，退回去在开发者选项，找到 OEM 解锁那个开关打开、确认即可。
有的手机没有这个开关的，则可以打开 USB 调试，连接电脑，选择一律使用此电脑进行调试；然后在电脑上准备一个 adb 工具包。在电脑上运行 adb ，依次输入：

```bash
adb devices //在弹出的列表中确认是不是你的机型
adb reboot bootloader //重启到bootloader模式，等待手机进入bootloader模式为止
fastboot oem unlock //解开bootloader解锁
```

如果提示 failed ，那么加几个参数试一试。
> 比如nubia机型解锁就需要参数，比如华为机型需要申请解锁码并输入。如果还是不行，那么你的手机不能解BL锁，你就可以靠边了，你的手机不能root。

无论成功与否，输入：

```bash
fastboot reboot //重启回系统
```

> 当然，有的机型有人制作了第三方 rec 一键刷入功能，这种情况下工具内都已经自带解锁了，就不需要这么麻烦了。

# 刷入第三方 recovery
rec 是 recovery 的简称，可以用来，呃，官方的 recovery 一般情况下用来彻底清除手机的数据恢复出厂（传说中的双清），还可以用来升级系统。
第三方 rec 还可以用来刷第三方 ROM （即刷机），刷单刷包，备份系统分区，刷 xposed 框架，刷谷歌服务套件。。。

准备好一个第三方 recovery ，这个需要你们自己去找。

如果有 romer 已经做好的第三方 rec 一键刷入工具，那就可以直接用工具，按照提示刷入。
如果给的只有 img 文件，那么把 img 文件重命名为 recovery.img ，拷贝到 ADB 工具的文件夹下，手机连接电脑，打开USB调试模式。在电脑上用 ADB 工具依次输入：

```bash
adb devices
adb reboot bootloader
fastboot flash recovery recovery.img //刷入recovery的镜像文件
fastboot reboot
```

# 刷入 Root 单刷包

~~接下来，下载一个 SuperSU 单刷包。~~

> 2017 年 6 月 2 日 更新：SuperSU 已经不再可靠，建议下载使用 Magisk，自带 MagiskSU Root。

下载下来，拷贝到手机里头去。
最后一步，刷入这个单刷包。

```
adb devices
adb reboot recovery //进入recovery模式
```

在 recovery 模式下，不双清，直接刷入这个 zip 文件。等到刷入完成以后，重启回系统即可。
回到系统会发现桌面上多了一个图标： “SuperSU” 这个就是 root 管理软件，软件自带中文。

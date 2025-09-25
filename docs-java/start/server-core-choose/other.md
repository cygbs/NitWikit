---
title: 插件端
sidebar_position: 7
---

### 其他

:::danger

使用前请三思：如果不是性能非常紧缺，还请考虑普通的服务端；这里列出的服务端通常无法提供所有正常的游戏特性。

:::

:::info

这里列出的是完全重写的服务端，它们不包含任何Mojang代码。

:::

## [Pumpkin](https://pumpkinmc.org)

基于[Rust](https://www.rust-lang.org/zh-CN/)编写的Minecraft服务端，文档可以在[这里](https://pumpkin.8aka.org)找到。支持最新正式版Minecraft，与Velocity或BungeeCord结合使用来安装ViaVersion。

目前已经实现了地形生成，但仍然还有很多生存所需特性没有实现。其红石存在严重问题，**几乎不可能**生电。

## [FerrumC](https://www.ferrumc.com)

同样基于Rust编写，可以在[这里](https://docs.ferrumc.com)找到文档。

## [Cuberite](https://cuberite.org)

基于C++编写，支持常见系统，还提供Android应用便于在手机上运行，自带版本转换，可供1.8-1.14的玩家加入。但是版本停留在了1.12.2，仅支持BungeeCord转发。

基本还原了1.12.2的游戏体验，插件生态相对丰富，同样地不建议用于生电（Minecraft版本过低）。

## [MCHPRS](/Java/process/redstone/mchprs/)

点击标题以跳转到文档内介绍。

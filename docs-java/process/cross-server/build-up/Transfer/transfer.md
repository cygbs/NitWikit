---
title: Transfer
slug: /transfer
sidebar_position: 4
---
# Transfer

一个新的《我的世界》自带的跨服方式。

## 关于 Transfer

Transfer是一个新的，**不同于 BungeeCord 与 Velocity 的**跨服方法，在《我的世界》1.20.5版本被添加。

其去除了中心地位的跨服代理服务器，提供了简单有效的简易跨服方式。[点此](./build-up.md)查看搭建方法。

指令格式如下（其中普通括号表示非必须填写）：

`/transfer <服务器地址> (端口) (玩家)`

## Transfer 适合谁？

- 不需要太多功能，仅想把多个服务器进行简单组合的人
- 多个服务器不在同一网络环境下，用 BungeeCord 或者 Velocity 可能会出现~~高 Ping 战士~~高延迟现象的服务器。
- 不在意适配该功能的插件的数量，或对此早有对策的服务器。
- ~~安全性要求不高的服务器。~~

## Transfer 相比现有方案有什么缺点？
### 现有插件能解决的问题

[OnlyTransfer](https://bilibili.com/opus/1062419036109799429) 可以解决的问题：

- 离线模式下，服务器地址泄露导致的仿冒身份问题。
- 离线模式下，玩家可以随意去往任意一个支持 Transfer 的服务器的问题。

### 现有插件或其他方案解决不了的问题

- 插件信息不同步 (如 SkinsRestorer 的玩家皮肤和 AuthMe 的玩家登录状态)
- 数据包与资源包难以统一调整
- 模组服支持未知，保守估计即使支持，其模组也不一定支持
- 社区支持不足 (用的人太少)
- 适配插件数量少且适配困难 (主流插件端没有提供关于 Transfer 指令的接口)

## Velocity 的 Transfer 支持

Velocity 支持从别的服务器通过 Transfer 跳转至 Velocity，需要在velocity.toml里面找到这个`accepts-transfers = false`，改false为true。

你也可以从 Velocity 之下的1.20.5或更高版本的下游服务器跳转到其他服务器。

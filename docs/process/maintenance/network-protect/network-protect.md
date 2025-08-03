---
title: 网络防护
sidebar_position: 3
---

# 网络防护

随着服务器规模扩大，面临网络攻击的风险也会增加。本章节将介绍常见的网络攻击类型和相应的防御措施。

## 概述

网络攻击主要分为以下几个层面：

- **应用层攻击 (L7)**：针对 Minecraft 服务器应用程序的攻击
- **传输层攻击 (L4)**：针对 TCP/UDP 协议的攻击  
- **网络层攻击 (L3)**：针对 IP 协议的攻击

## 快速防护指南

### 基础防护（必做）

1. **开启防火墙**
   - Windows：启用 Windows Defender 防火墙
   - Linux：启用 iptables 或 ufw

2. **使用代理服务器**
   - 部署 Velocity 或 BungeeCord
   - 配置连接限制和频率控制

3. **安装反假人插件**
   - 推荐：[Sonar](https://github.com/jonesdevelopment/sonar)
   - 备选：LimboFilter、EpicGuard

### 高级防护（推荐）

1. **网络代理服务**
   - 免费：Cloudflare Tunnel、MineKube、Playit.gg
   - 付费：TCPShield、Cloudflare Spectrum

2. **高防服务器**
   - 150G-300G 防御通常足够
   - 考虑成本效益比

## 详细内容

- [网络攻击类型](attack-types.md) - 了解各种攻击方式
- [防御方法](defense-methods.md) - 具体的防护措施

## 应急处理

如果正在遭受攻击：

1. **立即启用防火墙**
2. **切换到代理模式**（如果尚未使用）
3. **启用反假人插件**
4. **考虑临时更换 IP**（最后手段）

:::warning 重要提醒

- 不要硬扛大规模 DDoS 攻击，会导致服务器被黑洞
- 使用内网穿透"狂套 Frp"的方法极不推荐，会影响其他用户
- 预防胜于治疗，提前部署防护措施

:::

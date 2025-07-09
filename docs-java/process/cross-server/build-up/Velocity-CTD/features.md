---
title: 特色功能
sidebar_position: 4
---

# Velocity-CTD 特色功能

Velocity-CTD 在标准 Velocity 基础上增加了许多实用功能，本页面详细介绍这些特色功能的使用方法。

## Redis 数据库支持

### 功能介绍

Velocity-CTD 内置了完整的 Redis 支持，可以替代 RedisBungee 等插件，提供更稳定的 Redis 体验。

### 配置方法

在 `velocity.toml` 中添加 Redis 配置：

```toml
[redis]
enabled = true
host = "localhost"
port = 6379
password = "your-password"  # 如果有密码的话
database = 0
timeout = 2000
max-connections = 8
```

### 使用场景

- **多代理服务器同步**：在多个 Velocity-CTD 实例之间同步数据
- **跨服数据存储**：存储玩家的跨服数据
- **插件数据缓存**：为插件提供高性能的数据缓存

## 队列系统

### 队列功能介绍

Velocity-CTD 内置了高效的队列系统，可以在服务器满员时自动将玩家加入队列，支持优先级、超时等高级功能。

### 基础配置

```toml
[queue]
enabled = true
update-interval = 1000
allow-multiple-queues = false
timeout = 300
max-queue-length = 0
position-update-interval = 10
```

### 队列命令

**玩家命令：**
- `/server <服务器名>` - 连接服务器（如果满员会自动加入队列）
- `/leavequeue` 或 `/dequeue` - 离开当前队列

**管理员命令：**
- `/queueadmin list [服务器]` - 查看队列状态
- `/queueadmin pause <服务器>` - 暂停服务器队列
- `/queueadmin unpause <服务器>` - 恢复服务器队列
- `/queueadmin add <玩家> <服务器>` - 手动添加玩家到队列
- `/queueadmin remove <玩家> [服务器]` - 从队列中移除玩家

### 权限系统

```yaml
# 队列绕过权限
velocity.queue.bypass: true  # 绕过所有队列
velocity.queue.bypass.survival: true  # 绕过特定服务器队列

# 队列优先级权限
velocity.queue.priority.ALL.10: true  # 所有服务器优先级 10
velocity.queue.priority.survival.5: true  # 特定服务器优先级 5

# 队列超时权限
velocity.queue.timeout.600: true  # 离线后保留队列位置 600 秒
```

## 管理命令系统

### 网络公告命令

**`/alert <消息>`**
- 向整个网络发送带前缀的公告消息
- 权限：`velocity.command.alert`

**`/alertraw <消息>`**
- 向整个网络发送无前缀的原始消息
- 权限：`velocity.command.alertraw`

示例：
```bash
/alert 服务器将在 10 分钟后重启
/alertraw <red>紧急维护通知</red>
```

### 玩家查找命令

**`/find <玩家名>`**
- 查找指定玩家当前所在的服务器
- 权限：`velocity.command.find`

**`/plist`**
- 显示代理服务器的玩家列表和统计信息
- 权限：`velocity.command.plist`

### 快速传送命令

**`/hub` 或 `/lobby`**
- 快速返回大厅/登录服务器
- 权限：`velocity.command.hub`
- 自动选择 `try` 列表中的第一个服务器

### 网络管理命令

**`/transfer <目标> <代理服务器>`**
- 将玩家转移到其他代理服务器
- 权限：`velocity.command.transfer`

目标类型：
- `<玩家名>` - 转移特定玩家
- `current` - 转移当前服务器的所有玩家
- `<服务器名>` - 转移指定服务器的所有玩家
- `all` - 转移所有玩家

**`/velocity sudo <玩家> <命令>`**
- 强制玩家执行命令（代理端或服务器端）
- 权限：`velocity.command.sudo`

**`/velocity uptime`**
- 查看代理服务器的运行时间
- 权限：`velocity.command.uptime`

## 多转发系统

### 多转发功能介绍

Velocity-CTD 支持为不同的子服务器使用不同的转发模式，这在混合环境中非常有用。

### 多转发配置方法

```toml
[multi-forwarding]
enabled = true
server-specific-forwarding = {
    "legacy-server" = "legacy",      # 1.12 及以下版本服务器
    "modern-server" = "modern",      # 1.13+ 版本服务器
    "bungeeguard-server" = "bungeeguard"  # 使用 BungeeGuard 的服务器
}
```

### 多转发使用场景

- **版本混合网络**：同时支持新旧版本的 Minecraft 服务器
- **安全性要求不同**：某些服务器需要更高的安全性
- **插件兼容性**：某些插件只支持特定的转发模式

## 性能优化功能

### 依赖项优化

Velocity-CTD 使用更新的依赖项版本，包括：
- 更新的网络库
- 优化的压缩算法
- 改进的内存管理

### 配置优化选项

```toml
[performance]
# 禁用不必要的功能以提高性能
disable-unsigned-message-kick = true
disable-forge-handshake = true  # 如果不使用 Forge
disable-header-footer-translation = true

# 版本限制
minimum-version = "1.16"  # 阻止过旧的客户端

# 自定义品牌和消息
server-brand = "我的服务器"
outdated-ping-message = "请更新你的客户端"
```

## 回退服务器系统

### 智能回退

Velocity-CTD 支持智能回退服务器选择：

```toml
[fallback]
selection-mode = "least"  # 选择人数最少的服务器
dynamic-fallbacks = ["lobby1", "lobby2", "lobby3"]
```

选择模式：
- `least` - 人数最少的服务器
- `most` - 人数最多的服务器
- `random` - 随机选择
- `cycle` - 循环选择

### 动态负载均衡

系统会自动监控各个回退服务器的负载，智能分配新加入的玩家。

## MiniMessage 支持

### 完全可配置的消息

Velocity-CTD 支持使用 MiniMessage 格式自定义所有消息：

```toml
[messages]
enable-minimessage = true
queue-position = "<yellow>队列位置：<green>{position}</green>/<green>{total}</green>"
queue-joined = "<green>已加入 <yellow>{server}</yellow> 的队列"
server-full = "<red>服务器已满，正在排队中..."
```

### 支持的格式

- **颜色代码**：`<red>`, `<#FF0000>`
- **格式化**：`<bold>`, `<italic>`, `<underlined>`
- **渐变色**：`<gradient:red:blue>文本</gradient>`
- **彩虹色**：`<rainbow>彩虹文本</rainbow>`

## 命令重载功能

### 热重载配置

```bash
/velocity reload
```

支持重载的配置：
- 服务器列表
- 消息配置
- 命令设置
- 大部分功能配置

### 动态服务器管理

可以在不重启代理的情况下：
- 添加新的子服务器
- 移除子服务器
- 修改服务器配置

## 最佳实践建议

### 大型服务器配置

对于大型服务器（500+ 玩家），建议：

1. **启用 Redis**：用于数据同步和缓存
2. **配置队列系统**：防止服务器过载
3. **使用多转发**：根据服务器类型选择合适的转发模式
4. **优化性能设置**：禁用不必要的功能
5. **配置智能回退**：实现负载均衡

### 安全性配置

1. **使用 modern 转发**：为 1.13+ 服务器提供最高安全性
2. **配置防火墙**：限制子服务器的直接访问
3. **定期更新**：保持 Velocity-CTD 版本最新
4. **监控日志**：及时发现异常行为

### 监控和维护

1. **使用 `/velocity uptime`** 监控运行时间
2. **定期检查队列状态** 使用 `/queueadmin listqueues`
3. **监控 Redis 连接** 确保数据同步正常
4. **备份配置文件** 定期备份重要配置

---
title: 加入服务器
sidebar_position: 3
---

# 加入服务器

在客户端点击加入服务器，输入你的跨服端的地址，连接即可。

## 连接到子服

### `/server` 命令

```text
/server [配置中设置的子服名字]
```

不过不建议用 `/server` 详见 [此处](/docs-java/process/cross-server/precautions.md#不要给玩家-server-权限)

:::warning

此命令只能由玩家自己在聊天框里敲命令执行，插件不能让玩家执行此命令！

**因为这条命令压根没有被注册到子服**

:::

### `/send` 命令

```text
/send [玩家ID] [子服ID]
/send all [子服ID]
```

Velocity 的命令，将指定玩家送入指定服务器

只能控制台或玩家执行，不能由其他插件执行，原因与 [server](#server-命令) 命令相同

### npc

#### Citizens2

> https://wiki.citizensnpcs.co/NPC_Commands#Bungee

```text
/npc command add -p server MyServerName
```

#### Adyeshach

ady 没有跨服动作，你可以导入其他插件的跨服动作来使用

如安装 Invero 插件后：

```kether
import invero connect 子服名
```

或者使用 command...

#### ZNPCs

> https://github.com/gonalez/znpcs/wiki/Commands#server

```text
/znpcs action [id] add SERVER [server]
```

- [id] 是 NPC 的 id.
- [server] 是子服名字。

#### ZnpcsPlugs

> https://plugins.8aka.org/ShortDoc/ZNPCsPlus/Commands#%E5%8A%A8%E4%BD%9C%E5%91%BD%E4%BB%A4

```text
/npc action add switchserver <id> <click type> <cooldown seconds> <delay ticks> <value>
```

`<click type>` 可以是以下之一：

- `ANY_CLICK` - 任何点击（左键或右键）都会触发动作
- `LEFT_CLICK` - 仅左键点击（攻击）会触发动作
- `RIGHT_CLICK` - 仅右键点击（交互）会触发动作

`<cooldown seconds>` 是动作的冷却时间（以秒为单位）。如果玩家在冷却时间结束前与NPC交互，动作将不会触发。

`<delay ticks>` 是动作触发前的延迟（以tick为单位）。这对于在玩家与NPC交互后延迟动作非常有用。

`<value>` 是动作的值。这可以是命令、消息或服务器名称，具体取决于动作类型。

### 菜单

#### ChestCommands

> https://filoghost.me/docs/chest-commands/actions

```yaml
ACTIONS:
  - 'server: hub'
```

#### DeluxeMenus

> https://wiki.helpch.at/helpchat-plugins/deluxemenus/files

```yaml
- '[connect] <serverName>'
```

#### TrMenu

> https://taboo.8aka.org/TrMenu/menu/action/types#%E8%B7%A8%E6%9C%8D%E4%BC%A0%E9%80%81

```yaml
- 'server: Lobby'
```

#### Invero

> https://invero.8aka.org/docs/advance/basic/kether#%E8%B7%A8%E6%9C%8D

```yaml
- 'connect 子服名'
```

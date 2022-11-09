---
title: 开始
---

# 开始

WeatherAllInOne 项目下有以下文件（夹）：

```
_config.yml // 主要配置文件
index.js // 程序入口文件
src/ // 程序代码目录
```

## 拉取代码

1. 从 GitHub 上拉取最新仓库 或 发行版。

## 修改配置

2. 根据情况 修改 `_config.yml` 配置文件。

一般的，在 `alpha` 阶段，有这些配置可供参考：

```yaml
# 开启的选项
enable: ['moji']
# 监听主机
hostname: 0.0.0.0
# 监听端口
port: 8080
# 默认城市
defaultCity: 广州
```

配置项可能会越来越多，您可以关注 GitHub 上的更新信息。

## 开始使用

3. 安装必要依赖

WeatherAllInOne 的运行不能离开必要依赖文件，使用以下命令安装：

```bash
npm install --save
```

或：

```bash
yarn install
```

4. 开始使用

使用以下命令 启用 WeatherAllInOne：

```bash
node index.js
```

5. API 路由

> 关于 API 路由与返回信息，请查看 ——> [API](/api/)。

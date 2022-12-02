---
title: 使用 Deno 部署后端
---

# 使用 Deno 部署后端

## 平台简介

Deno 可以在全球的边缘节点运行 JavaScript 函数。

![](https://m.360buyimg.com/babel/jfs/t1/120803/6/29007/154165/637891f1Ef713f19c/c2ec5a1171971a76.png)

对于免费版本，Deno 提供每日 100,000 次请求 和 100 GiB 的流量。

## 开始

### 注册账号

首先，[注册您的 Deno 账号](https://dash.deno.com/signin)。

> Deno 支持 GitHub 登录，注册过程不会太长。

### Fork 仓库

登录您的 GitHub 账号，Fork ESHexoN 的后端仓库 (https://github.com/ESHexoN/ESHexoN) 至您的账号下。

![](https://m.360buyimg.com/babel/jfs/t1/44144/5/22045/197956/6378939eE8b19751f/217846fcf04bee3d.png)


### 新建项目

进入 [Deno 控制台](https://dash.deno.com/)，点击 `New Project`。

![](https://m.360buyimg.com/babel/jfs/t1/166005/10/32198/34313/637892fcE0dc0e711/d1475ddec4668ce2.png)

点击 `Select GitHub repository` 从 GitHub 导入，选择您的用户名，找到您 Fork 的仓库。


![](https://m.360buyimg.com/babel/jfs/t1/125097/30/32288/271906/63789465Ed756102f/1f33effce81ce600.png)

`Production Branch` 选择 `master`。

![](https://m.360buyimg.com/babel/jfs/t1/139737/37/32208/172672/637894beEb552facc/d4e428f886e1d4c0.png)

部署方式选择 `Automatic`。

![](https://m.360buyimg.com/babel/jfs/t1/209932/24/28736/193557/63789514E8cba42d2/41b7529eeb2bd1cd.png)

文件选择打包好的 `dist/index.js`。

![](https://m.360buyimg.com/babel/jfs/t1/132606/9/30923/168989/6378954cE5505c834/0497c3522bf7e994.png)

修改项目名称，点击 `Add Env Variable`。

![](https://m.360buyimg.com/babel/jfs/t1/184809/18/31078/180435/637895a9Eda320c47/14997cdb0a09424f.png)

填写环境变量。

所有环境变量都是必填项。

[有关环境变量的详细信息，请参见「生成环境变量」。](/deploy/env.html)

![](https://m.360buyimg.com/babel/jfs/t1/114242/32/29768/38717/6378961dEabedafd5/34af1f584c200748.png)

点击 `Link` 连接。

![](https://m.360buyimg.com/babel/jfs/t1/146383/13/31135/112882/63789709E0ad86522/851b8dc71379d41d.png)

## 完成

不出意外，此时的后端已经部署完成。

你可在后端查看对应域名。

![](https://m.360buyimg.com/babel/jfs/t1/57867/4/21733/262180/63789773E39bd2527/d3c1d22ba1a3d887.png)

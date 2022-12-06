---
title: 使用 Cloudflare Workers 部署
---

# 使用 Cloudflare Workers 部署

## 平台简介

Cloudflare 是一个全球网络，旨在让您连接到互联网的一切都安全、私密、快速和可靠。

Cloudflare 允许您构建无服务器应用程序并在全球范围内即时部署，从而获得卓越的性能、可靠性和规模性。

## 开始

### 登录控制台

登录 https://dash.cloudflare.com/ , 如果您没有账号，请先[注册](https://dash.cloudflare.com/sign-up)。

点击左侧菜单栏中的 `Workers` 进入 Workers 管理界面：

![image](https://user-images.githubusercontent.com/71591824/205772399-4508c0f2-d7de-4025-9eb3-dd78a43e569c.png)

### 创建服务

点击 `创建服务`：

![image](https://user-images.githubusercontent.com/71591824/205772542-df52fa87-1738-48a2-9a42-241223ab83cd.png)

输入服务名称，启动器随意，点击 `创建服务`：

![image](https://user-images.githubusercontent.com/71591824/205772854-73f156f0-1802-4925-9c9c-3d28a639e9f2.png)

点击 `快速编辑`：

![image](https://user-images.githubusercontent.com/71591824/205773139-bca141c3-fcbe-4868-bb74-40fdbce784e2.png)

### 获取代码

[前往 GitHub 获取最新构建](https://github.com/ESHexoN/ESHexoN/blob/master/dist/index.js)。

复制代码并将其粘贴在代码框，点击 `保存并部署`：

![image](https://user-images.githubusercontent.com/71591824/205773375-13800b72-2ef2-4c24-8599-835d2674eb52.png)

### 环境变量

此时打开链接将会报错，很正常，您还没有部署环境变量。

[有关环境变量的更多信息，请参见此处](env.html)。

进入设置：

![image](https://user-images.githubusercontent.com/71591824/205773642-a35ba89c-825e-44d9-8769-abcf1757203a.png)

添加变量：

![image](https://user-images.githubusercontent.com/71591824/205773740-7ee38154-6fbe-4ad0-a212-08a1c02c4ade.png)

将由上文生成好的环境变量复制在此处：

![image](https://user-images.githubusercontent.com/71591824/205773810-881e39f1-754d-44ea-a38a-5b3681d07ed1.png)

![image](https://user-images.githubusercontent.com/71591824/205774319-a3fc90f3-eac4-4acc-bd19-fa072e9744e1.png)


## 完成

此时，Cloudflare Workers 后端已经部署完成。

![image](https://user-images.githubusercontent.com/71591824/205774215-dc86b761-1777-4b0b-bdcb-8a019c0e055e.png)



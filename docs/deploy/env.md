---
title: 生成环境变量
---

# 生成环境变量

## 环境变量

| 变量名 | 变量值 |
| :-: | :-: |
| `GITHUB_TOKEN` | GitHub Token, 必须有 repo 权限 |
| `GITHUB_MAIN_REPO` | Hexo 仓库, 格式为 `[user]/[repo], [branch]` |
| `GITHUB_SUB_REPO` | 配置文件仓库，格式为 `[user]/[repo], [branch]`|
| `GITHUB_CONFIG_NAME` | 配置文件名称 |

## 使用生成器生成

您无需手动填写，现在您可以使用 [ESHexoN Env Generator](https://awa.fyi/eshexon/env.html) 进行生成。

> **本工具不收集您的任何信息！**

### 获取 GitHub Token

1. 进入 [GitHub](https://github.com/) 主页。点击 `Settings`.


![image](https://p.awa.fyi/g/71591824/205311452-0a304a70-fa7f-44ad-8baf-59a47a63a7e8.png)

2. 点击 `Developer Settings`.

![image](https://p.awa.fyi/g/71591824/205311166-af1633d6-69b3-48ee-92a5-c205d9c827ba.png)

3. 如图，点击 `Generate new token(classic)`.


![image](https://p.awa.fyi/g/71591824/205311505-f71c5e10-4539-4e7e-93be-b48b4ce6cdac.png)

4. 如图，选择 Token 过期日期并必须勾选 `repo` 权限，点击 `Generate new token`.

![image](https://p.awa.fyi/g/71591824/205311081-e64e217a-3d35-412d-bf60-a773392c6571.png)

5. 如图，此时 Token 已经生成完成。保存好 Token，这只会出现一次。

![image](https://p.awa.fyi/g/71591824/205310930-ac96f751-f94d-4ace-8540-f0644206bd5a.png)

### 新建 GitHub 配置文件仓库

我们推荐您将配置文件与 Hexo 博客仓库分离。

1. 打开 https://github.com/ESHexoN/eshexon-database/generate , 生成 Private 仓库。

![image](https://p.awa.fyi/g/71591824/205308545-30fcb2f9-3868-47f8-90d4-8f6c0287faad.png)

### 使用工具配置

1. 填写表单。如果您是按照如上过程配置的，请填写默认信息。

![image](https://p.awa.fyi/g/71591824/205309497-db84eced-e8da-455d-8adf-ef6a58f0e739.png)

2. 点击 `Generate`.

![image](https://p.awa.fyi/g/71591824/205309785-e12848c2-3b2a-4bab-b7e3-abee62a31135.png)

![image](https://p.awa.fyi/g/71591824/205309883-3bfa10f2-9027-4de1-b23c-d4c02b6d3b88.png)

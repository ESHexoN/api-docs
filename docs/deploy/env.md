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

### 获取 GitHub Token

1. 进入 [GitHub](https://github.com/) 主页。点击 `Settings`.
![image.png](https://pic2.58cdn.com.cn/nowater/webim/big/n_v20b08d298841c4220b5558bd2673449f7.png)

2. 点击 `Developer Settings`.

![image.png](https://pic9.58cdn.com.cn/nowater/webim/big/n_v2886fdcdfdcbc471ba3072b341e0a5a65.png)

3. 如图，点击 `Generate new token(classic)`.

![image.png](https://pic2.58cdn.com.cn/nowater/webim/big/n_v2045eda886051454bb12aba60b5fa883e.png)

4. 如图，选择 Token 过期日期并必须勾选 `repo` 权限，点击 `Generate new token`.

![image.png](https://pic9.58cdn.com.cn/nowater/webim/big/n_v2ad59de96e2ff4161a21279695eab1eba.png)

5. 如图，此时 Token 已经生成完成。保存好 Token，这只会出现一次。

![image.png](https://pic9.58cdn.com.cn/nowater/webim/big/n_v2e5b15cca040c42b1a214af7c47d992d8.png)

### 新建 GitHub 配置文件仓库

我们推荐您将配置文件与 Hexo 博客仓库分离。

1. 打开 https://github.com/ESHexoN/eshexon-database/generate , 生成 Private 仓库。

![image](https://user-images.githubusercontent.com/71591824/205308545-30fcb2f9-3868-47f8-90d4-8f6c0287faad.png)

### 使用工具配置

1. 填写表单。如果您是按照如上过程配置的，请填写默认信息。

![image](https://user-images.githubusercontent.com/71591824/205309497-db84eced-e8da-455d-8adf-ef6a58f0e739.png)

2. 点击 `Generate`.

![image](https://user-images.githubusercontent.com/71591824/205309785-e12848c2-3b2a-4bab-b7e3-abee62a31135.png)

![image](https://user-images.githubusercontent.com/71591824/205309883-3bfa10f2-9027-4de1-b23c-d4c02b6d3b88.png)
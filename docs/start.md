---
title: 开始
---
# 开始

## 开始前

在开始之前，你需要对您的 Hexo 博客实现集成部署。

**这是非常必要的一步。**

事实上，实现集成部署的方式有很多：

- [GitHub Action](https://blog.yfun.top/posts/2241387868/)
- Vercel
- Netlify
- ...

> 您可以阅读以上的教程了解更多详情。

实现集成部署后，只需要对 Git 仓库的内容进行修改，CI 就会自动完成「生成文件」等一系列操作。

## 部署后端

后端部署支持 Deno 与 Cloudflare Workers 两个平台。

从更新情况上看，Deno 平台支持性会更好。

- [使用 Deno 部署](/deploy/deno.html)
- [使用 Cloudflare Workers 部署](/deploy/cloudflare.html)


## 部署前端

ESHexoN 官方使用 Vue + Vuetify 构建了一个公共前端。

公共前端只需要填写用户名，密码和后端地址即可直接使用。

前端地址: https://eshexon.netlify.app/

我们**推荐您使用公共前端**，它紧随后端版本的更新，使用更加流畅。

> 当然，ESHexoN 提供了完整的 API 支持，详情[请见此处](/api/)。




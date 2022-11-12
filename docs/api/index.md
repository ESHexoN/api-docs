# API 接口

## 前言

ESHexoN 后端 API 基本存在于 `/api/` 路径下，分为鉴权 API 和非鉴权 API。鉴权 API 需要**携带 Token 使用**。

## 用户注册 (`/api/reg`)

- 请求地址：`/api/reg`;
- 请求方法：`POST`;
- 请求内容：

```JSON
{
  "username": "<YOUR USERNAME>",
  "password": "<PASSWORD IN MD5>"
}
```
- 返回示例：

```JSON
{
  "statusCode": 200,
  "statusInfo": "注册成功。"
}
```

- 注意事项：用户名必须为 3-15 位数字字母，**目前仅接受一位用户注册**。


## 用户登录 (`/api/login`)

- 请求地址：`/api/login`;
- 请求方法：`POST`;
- 请求内容：

```JSON
{
  "username": "<YOUR USERNAME>",
  "password": "<PASSWORD IN MD5>"
}
```
- 返回示例：

```JSON
{
  "statusCode": 200,
  "statusInfo": "<YOUR TOKEN>"
}
```

## 检测 Token 有效性 (`/api/check_token`)

- 请求地址：`/api/check_token`;
- 请求方法：`POST`;
- 请求内容：

```JSON
{
  "token": "<YOUR TOKEN>"
}
```
- 返回示例：

```JSON
{
  "statusCode": 200,
  "statusInfo": "Token 有效。"
}
```

## 文章列表 (`/api/get_posts_list`)

- 请求地址：`/api/get_posts_list`;
- 请求方法：`POST`;
- 请求内容：

```JSON
{
  "token": "<YOUR TOKEN>"
}
```
- 返回示例：

```JSON
{
  "statusCode": 200,
  "statusInfo": "{\"/\":[]}"
}
```

## 草稿列表 (`/api/get_drafts_list`)

- 请求地址：`/api/get_drafts_list`;
- 请求方法：`POST`;
- 请求内容：

```JSON
{
  "token": "<YOUR TOKEN>"
}
```
- 返回示例：

```JSON
{
  "statusCode": 200,
  "statusInfo": "{\"/\":[]}"
}
```

## 上传文章 (`/api/add_posts`)

- 请求地址：`/api/add_posts`;
- 请求方法：`POST`;
- 请求内容：
```JSON
{
  "token": "<YOUR TOKEN>",
  "filename": "<FILENAME>",
  "content": "<CONTENT>",
  "b64": "<CONTENT IS B64>"
}
```

- 返回示例：

```JSON
{
  "statusCode": 200,
  "statusInfo": "上传成功。"
}
```

## 上传草稿 (`/api/add_drafts`)

- 请求地址：`/api/add_drafts`;
- 请求方法：`POST`;
- 请求内容：
```JSON
{
  "token": "<YOUR TOKEN>",
  "filename": "<FILENAME>",
  "content": "<CONTENT>",
  "b64": "<CONTENT IS B64>"
}
```

- 返回示例：

```JSON
{
  "statusCode": 200,
  "statusInfo": "上传成功。"
}
```

## 删除文章 (`/api/delete_posts`)

- 请求地址：`/api/delete_posts`;
- 请求方法：`POST`;
- 请求内容：
```JSON
{
  "token": "<YOUR TOKEN>",
  "filename": "<FILENAME>"
}
```

- 返回示例：

```JSON
{
  "statusCode": 200,
  "statusInfo": "删除成功。"
}
```

## 删除草稿 (`/api/delete_drafts`)

- 请求地址：`/api/delete_drafts`;
- 请求方法：`POST`;
- 请求内容：
```JSON
{
  "token": "<YOUR TOKEN>",
  "filename": "<FILENAME>"
}
```

- 返回示例：

```JSON
{
  "statusCode": 200,
  "statusInfo": "删除成功。"
}
```

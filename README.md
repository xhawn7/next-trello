## cheat sheet

```js
npx create-next-app@latest // 创建 next 项目
npx shadcn-ui@latest init  // ui库
npx shadcn-ui@latest add button skeleton accordion separator sheet input// ui组件
```

### 说明

<details>
<summary>app里的文件夹</summary>
name --> 路由名
[name] --> 动态路由
（name）--> 不会访问，用于管理路由
\_component --> 不会访问
</details>

<details>
<summary>app里的文件</summary>
layout --> 一个文件夹只能有一个 layout，表示这个文件夹的所有子文件夹都会有 layout 里面的内容，可以授收{children}，表示子文件夹里面的内容
</details>

<details>
<summary>工具说明</summary>

- css 库：tailwind

* ui 库：shadcn-ui + lucide-react(next 自带)
* 用户鉴权：clerk
* 状态管理：zustand
* hooks：usehooks-ts
</details>

<details>
<summary>不同 branch 说明</summary>
init-next-app:初始化next项目
home:home主页
sign-up: 登陆注册鉴权
org-sidebar: org页面的sidebar
</details>

## 整个项目节奏

1. 首页
2. 登陆注册鉴权

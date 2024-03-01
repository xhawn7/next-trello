## cheat sheet

```js
npx create-next-app@latest // 创建 next 项目
npx shadcn-ui@latest init  // ui库
npx shadcn-ui@latest add avatar dialog textarea popover tooltip label button skeleton accordion separator sheet input// ui组件
```

### 说明

<details>
<summary>app里的文件夹</summary>
name --> 路由名
[name] --> 动态路由
（name）--> 不会访问，用于管理路由
_component --> 不会访问
</details>

<details>
<summary>app里的文件</summary>
layout --> 一个文件夹只能有一个 layout，表示这个文件夹的所有子文件夹都会有 layout 里面的内容，可以授收{children}，表示子文件夹里面的内容
</details>

<details>
<summary>库说明</summary>

- css 库：tailwind
- ui 库：lucide-react(next 自带)、shadcn-ui(通用组件)、sonner（toast,message）、hello-pangea/dnd(拖拽)、
- 用户登陆鉴权：clerk
- ~~用户支付订阅管理: stripe~~
- ORM：prisma
- 云数据库：~~原来用的 planetscale=>garbage🤬 限制中国用户注册还把之前的数据封了~~ 目前用的：Neon
- 客户端状态管理库：zustand
- 服务端状态管理库：TanStack Query
- hooks 库：usehooks-ts
- js 工具库：lodash
- 类型验证库: zod
- 时间格式库: date-fns
- 图片库: unsplash
- 网站托管: vercel

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

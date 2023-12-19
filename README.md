## cheat sheet

```js
npx create-next-app@latest // 创建 next 项目
npx shadcn-ui@latest init  // 创建ui库
npx shadcn-ui@latest add button // 新增button
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

- Tailwind CSS: css 框架
- Shadcn UI: Radix UI(组件库) + Tailwind CSS 构建的组件合集
- lucide-react: next 自带 icon 库
</details>

<details>
<summary>不同 branch 说明</summary>
init-next-app:初始化next项目
</details>

## 整个项目节奏

1. 首页
2. 登陆注册鉴权

# Club Website - 高自定义社团官网模板

参考 [JLUiOSClub_Web](https://github.com/Doers-Dreamers-iOS-Club/JLUiOSClub_Web) 项目设计的高自定义社团官网模板。
参考 [Nord Theme](https://www.nordtheme.com/) 配色方案。

## 技术栈

- **框架**: VitePress
- **语言**: Vue 3 + TypeScript
- **组件库**: Element Plus
- **工具**: medium-zoom

## 功能特性

- Nord 配色方案，支持亮色/暗色主题切换
- 毛玻璃导航栏效果
- 响应式设计，适配各种设备
- 图片点击放大功能
- 全站内容搜索
- 统一的视觉风格和良好的对比度

## 项目结构

```
.
├── .vitepress/
│   ├── config.mts          # VitePress 配置
│   ├── sidebar.ts          # 侧边栏配置
│   └── theme/
│       ├── index.ts        # 主题入口
│       └── style.css       # 所有样式（Nord配色、组件样式）
├── docs/
│   ├── index.md            # 首页
│   ├── news/               # 新闻动态（含示例模板）
│   ├── activities/         # 活动展示（含示例模板）
│   ├── about-us/           # 关于我们（含模板）
│   └── join-us/            # 加入我们（含模板）
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm run dev
```

启动后访问 http://localhost:5173 查看网站。

### 构建生产版本

```bash
pnpm run build
```

构建产物将生成在 `.vitepress/dist` 目录。

### 预览生产版本

```bash
pnpm run preview
```

## 模板使用说明

### 自定义首页

编辑 `docs/index.md`，修改以下内容：

- `name`: 社团名称
- `text`: 社团口号
- `tagline`: 社团简介
- `features`: 社团特色功能

### 添加新闻

1. 在 `docs/news/` 目录下创建新的 `.md` 文件
2. 文件名建议使用日期格式，如 `20240101-news-title.md`
3. 可复制 `news-example.md` 作为模板

### 添加活动

1. 在 `docs/activities/` 目录下创建新的 `.md` 文件
2. 文件名建议使用日期格式，如 `20240101-activity-title.md`
3. 可复制 `activity-example.md` 作为模板

### 编辑关于我们

编辑 `docs/about-us/index.md`，修改社团信息、团队成员和联系方式。

### 编辑加入我们

编辑 `docs/join-us/index.md`，修改招募要求和申请方式。

## 自定义配置

### 修改网站标题和描述

编辑 `.vitepress/config.mts` 文件中的 `title` 和 `description` 字段。

### 修改导航栏

编辑 `.vitepress/config.mts` 文件中的 `nav` 字段。

### 修改侧边栏

编辑 `.vitepress/sidebar.ts` 文件。

### 修改主题颜色

编辑 `.vitepress/theme/style.css` 文件中的 CSS 变量。

## 部署

构建完成后，将 `.vitepress/dist` 目录中的文件部署到任意静态文件托管服务即可，如：

- GitHub Pages
- Netlify
- Vercel
- Edgeone

## 许可证

MIT License
# Showhand - Next.js Version

这是一个使用 Next.js 构建的房地产搜索应用程序，可以搜索物件并查看周边设施信息。

## 功能特性

- 物件搜索功能
- 周边设施地图显示
- 多语言支持（日语、英语、中文）
- 设施类型筛选
- CSV 数据导出

## 技术栈

- Next.js 15
- React 18
- TypeScript
- Material-UI
- Google Maps API
- i18next (国际化)

## 开发环境运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

## 构建和部署

```bash
# 构建静态文件
npm run build

# 构建完成后，静态文件将生成在 out/ 目录中
```

## Vercel 部署

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入项目
3. Vercel 会自动检测到这是一个 Next.js 项目并进行部署
4. 项目配置了静态导出，适合在 Vercel 上部署

## 项目结构

```
├── pages/                 # Next.js 页面
│   ├── _app.tsx          # 应用程序入口
│   ├── index.tsx         # 首页（搜索页面）
│   └── redetail/[reid].tsx # 动态路由详情页
├── src/                   # 源代码
│   ├── components/        # React 组件
│   ├── data/             # 数据文件
│   └── styles/           # 样式文件
├── public/               # 静态资源
├── next.config.js        # Next.js 配置
└── vercel.json          # Vercel 部署配置
```

## 环境变量

如果需要使用 Google Maps API，请在 `.env.local` 文件中添加：

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

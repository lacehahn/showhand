# Showhand - Real Estate Search Demo

这是一个房地产搜索演示项目，使用 Next.js 和 Express 构建。

## 项目结构

```
showhand/
├── backend/                 # Express 后端
│   ├── src/
│   │   ├── data/           # 数据文件
│   │   └── index.ts        # 服务器入口
│   └── package.json
│
└── frontend/               # Next.js 前端
    ├── src/
    │   ├── app/           # 页面组件
    │   ├── services/      # API 服务
    │   └── types/         # 类型定义
    └── package.json
```

## 环境要求

- Node.js 18+
- npm 9+

## 安装

1. 克隆项目
```bash
git clone <repository-url>
cd showhand
```

2. 安装所有依赖
```bash
npm run install:all
```

3. 配置环境变量
在 frontend 目录下创建 `.env.local` 文件：
```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

## 开发

启动开发服务器（同时运行前端和后端）：
```bash
npm start
```

前端将在 http://localhost:3000 运行
后端将在 http://localhost:3001 运行

## 构建

构建生产版本：
```bash
npm run build
```

## 功能

- 房产搜索
- 房产详情查看
- 地图显示
- 响应式设计

## 技术栈

前端：
- Next.js
- TypeScript
- Material-UI
- Google Maps React
- Tailwind CSS

后端：
- Express
- TypeScript
- CORS

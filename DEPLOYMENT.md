# Vercel 部署说明

## 问题解决

### 1. 静态资源 404 错误
**问题**: 部署到 Vercel 后出现 JS、CSS 文件 404 错误
**原因**: Next.js 配置中的 `basePath` 和 `assetPrefix` 被注释掉了
**解决方案**: 
- 在 `next.config.js` 中启用生产环境配置
- 设置正确的 `basePath: '/showhand'` 和 `assetPrefix: '/showhand/'`

### 2. 图片资源 404 错误
**问题**: `/photos/1001.png` 等图片文件 404 错误
**原因**: 图片文件不存在于项目中
**解决方案**:
- 在 `public/photos/` 目录中添加图片文件
- 添加占位符图片 `placeholder.png`
- 在组件中添加图片加载错误处理

### 3. Vercel 路由配置
**问题**: 静态文件路由不正确
**解决方案**: 更新 `vercel.json` 配置，添加正确的路由规则

## 当前配置

### next.config.js
```javascript
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/showhand',
  assetPrefix: '/showhand/',
  images: {
    unoptimized: true
  }
}
```

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "out"
      }
    }
  ],
  "routes": [
    {
      "src": "/showhand/_next/(.*)",
      "dest": "/showhand/_next/$1"
    },
    {
      "src": "/showhand/photos/(.*)",
      "dest": "/showhand/photos/$1"
    },
    {
      "src": "/showhand/static/(.*)",
      "dest": "/showhand/static/$1"
    },
    {
      "src": "/showhand/redetail/(.*)",
      "dest": "/showhand/redetail/$1.html"
    },
    {
      "src": "/showhand/(.*\\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot))",
      "dest": "/showhand/$1"
    },
    {
      "src": "/showhand/(.*)",
      "dest": "/showhand/$1.html"
    },
    {
      "src": "/showhand",
      "dest": "/showhand/index.html"
    }
  ]
}
```

## 部署步骤

1. 确保所有配置文件正确
2. 运行 `npm run build` 构建项目
3. 检查 `out/` 目录中的文件结构
4. 提交代码到 Git
5. 在 Vercel 中重新部署

## 图片管理

- 所有图片应放在 `public/photos/` 目录中
- 使用 `bin/downloadPhoto.js` 脚本下载图片时，需要修改路径为 `./public/photos/`
- 组件会自动处理图片加载失败的情况，显示占位符图片

## 本地开发

如需本地开发，可以临时注释掉 `next.config.js` 中的 `basePath` 相关配置：

```javascript
// 本地开发时注释掉这些行
// basePath: '/showhand',
// assetPrefix: '/showhand/',
```

部署前记得取消注释。 
# OpenClaw 协同控制台

这是一个展示 Codex + OpenClaw 协同方式的 Vite React 控制台站点。页面重点不是营销介绍，而是把当前项目状态、短指令交接、发布检查和下一步动作放在同一个工作台里。

## 本地启动

```powershell
npm install
npm run dev
```

## 验证与构建

```powershell
npm test
npm run build
npm run build:pages
```

`npm run build:pages` 会生成 `docs/`，并自动同步根目录 `index.html`，这样 GitHub Pages 使用 `main / root` 发布时也能加载最新哈希资源。

## GitHub Pages

仓库地址：

```text
https://github.com/yuqd888-lgtm/openclaw-collab-site
```

线上地址：

```text
https://yuqd888-lgtm.github.io/openclaw-collab-site/
```

推荐 Pages 设置：

1. Source: `Deploy from a branch`
2. Branch: `main`
3. Folder: `/(root)`

## OpenClaw 协同方式

Codex 负责长上下文、代码实现、测试、发布判断和问题复盘。OpenClaw 只接收短动作指令，例如检查目录、运行构建、打开预览、返回终端输出或截图。

可执行短任务维护在 `OPENCLAW_TASKS.md`。

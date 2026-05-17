# OpenClaw Collab Site

一个用于展示 Codex + OpenClaw 协同方式的 Vite React 控制台站点。

## Local Development

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run test
npm run build
```

## GitHub Pages

1. 在 GitHub 网页创建公开空仓库 `openclaw-collab-site`。
2. 不勾选初始化 README、gitignore 或 license。
3. 在本地添加 remote：

```powershell
git remote add origin https://github.com/<your-username>/openclaw-collab-site.git
git branch -M main
git push -u origin main
```

4. push 到 `main` 后，`.github/workflows/pages.yml` 会构建并发布 `dist`。

## OpenClaw Collaboration

Codex 负责长上下文、代码实现、测试和 Git 操作判断。OpenClaw 只接收短动作指令，例如运行构建、检查目录、返回终端输出。可执行的短任务维护在 `OPENCLAW_TASKS.md`。

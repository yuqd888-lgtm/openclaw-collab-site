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

这个仓库使用 GitHub Pages 的 branch 部署方式：

1. 运行 `npm run build:pages` 生成 `docs/`。
2. 在 GitHub 仓库 `Settings > Pages` 里选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/docs`
3. 保存后访问：

```text
https://yuqd888-lgtm.github.io/openclaw-collab-site/
```

首次推送远端：

```powershell
git remote add origin https://github.com/<your-username>/openclaw-collab-site.git
git branch -M main
git push -u origin main
```

## OpenClaw Collaboration

Codex 负责长上下文、代码实现、测试和 Git 操作判断。OpenClaw 只接收短动作指令，例如运行构建、检查目录、返回终端输出。可执行的短任务维护在 `OPENCLAW_TASKS.md`。

import './App.css'

const statusCards = [
  {
    label: '项目状态',
    value: 'v1 本地构建',
    detail: 'Vite + React 独立站点',
  },
  {
    label: '协作模式',
    value: '短指令交接',
    detail: '长上下文留在 Codex',
  },
  {
    label: '发布目标',
    value: 'GitHub Pages',
    detail: 'GitHub Pages 自动发布',
  },
]

const roleCards = [
  {
    title: 'Codex 负责长上下文与代码落地',
    body: '读取计划、项目文件和记忆摘要，完成实现、测试、文档与提交准备。',
  },
  {
    title: 'OpenClaw 执行短动作与本机检查',
    body: '接收短命令，执行明确的一步动作，并把输出或截图交回给 Codex。',
  },
]

const flowSteps = [
  {
    title: '1. Codex 规划与实现',
    body: '把目标拆成可执行代码改动，保留上下文，避免 OpenClaw 背负长对话。',
  },
  {
    title: '2. OpenClaw 执行短指令',
    body: '只运行当前必要命令，例如检查目录、启动服务、回传终端输出。',
  },
  {
    title: '3. GitHub 发布与回看',
    body: '提交到 main 后触发 Pages workflow，发布结果再回到控制台记录。',
  },
]

const openClawTasks = [
  '检查当前目录是否存在 openclaw-collab-site',
  '运行 npm run build 并回传完整输出',
  '确认 README.md 与 OPENCLAW_TASKS.md 内容可读',
]

const nextActions = [
  '网页创建公开仓库 openclaw-collab-site',
  '添加 remote 后运行 git push -u origin main',
  '在仓库 Settings > Pages 查看部署状态',
]

function App() {
  return (
    <main className="console-shell">
      <section className="hero-panel" aria-labelledby="site-title">
        <div className="hero-copy">
          <p className="eyebrow">OpenClaw + Codex workspace</p>
          <h1 id="site-title" aria-label="OpenClaw 协同控制台">
            <span>OpenClaw</span>
            <span>协同控制台</span>
          </h1>
          <p className="hero-text">
            用 Codex 保存项目上下文和实现判断，用 OpenClaw 处理短动作检查。
            这个站点记录协作节奏、发布状态和下一步操作。
          </p>
        </div>
        <div className="signal-board" aria-label="项目状态概览">
          {statusCards.map((card) => (
            <article className="signal-card" key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dashboard-grid" aria-label="协同工作台">
        <div className="panel role-panel">
          <div className="panel-heading">
            <p className="section-kicker">Role split</p>
            <h2>分工边界</h2>
          </div>
          <div className="role-grid">
            {roleCards.map((role) => (
              <article className="role-card" key={role.title}>
                <div className="node-dot" aria-hidden="true" />
                <h3>{role.title}</h3>
                <p>{role.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel command-panel">
          <div className="panel-heading">
            <p className="section-kicker">OpenClaw handoff</p>
            <h2>短指令卡片</h2>
          </div>
          <div className="file-pill">OPENCLAW_TASKS.md</div>
          <ul className="command-list">
            {openClawTasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>

        <div
          className="panel flow-panel"
          aria-label="三步协作流程"
        >
          <div className="panel-heading">
            <p className="section-kicker">Workflow</p>
            <h2>三步协作流</h2>
          </div>
          <div className="flow-line">
            {flowSteps.map((step) => (
              <article className="flow-step" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel publish-panel">
          <div className="panel-heading">
            <p className="section-kicker">GitHub Pages</p>
            <h2>发布状态</h2>
          </div>
          <div className="terminal-card" aria-label="GitHub 发布命令">
            <code>npm run build</code>
            <code>git push -u origin main</code>
          </div>
          <ul className="next-list">
            {nextActions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App

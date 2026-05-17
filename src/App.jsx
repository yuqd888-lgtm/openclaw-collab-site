import { useState } from 'react'
import './App.css'

const projectPath = 'C:\\Users\\COLORFUL\\Desktop\\openclaw助手\\openclaw-collab-site'

const statusCards = [
  {
    label: '线上状态',
    value: '线上可访问',
    detail: 'GitHub Pages 自动发布',
  },
  {
    label: '协作模式',
    value: '短指令交接',
    detail: '长上下文留在 Codex',
  },
  {
    label: '发布出口',
    value: 'Root 静态入口',
    detail: '根目录加载构建产物',
  },
]

const roleCards = [
  {
    title: 'Codex 负责长上下文与代码落地',
    body: '维护需求、代码、测试、发布判断和问题复盘，避免上下文在多个工具里漂移。',
  },
  {
    title: 'OpenClaw 执行短动作与本机检查',
    body: '一次只接收一个明确动作，例如运行命令、检查页面、返回截图或完整终端输出。',
  },
]

const flowSteps = [
  {
    title: '1. Codex 规划与实现',
    body: '先把目标拆清楚，再把代码、测试和部署入口放到同一条可验证链路里。',
  },
  {
    title: '2. OpenClaw 执行短指令',
    body: '只处理当前必要动作，不承接长上下文，也不混入多个目标。',
  },
  {
    title: '3. GitHub 发布与回看',
    body: '推送后检查线上页面，发现发布问题就回到代码里修根因。',
  },
]

const commandCards = [
  {
    id: 'check-files',
    title: '检查文件',
    intent: '确认项目目录和关键文件是否存在。',
    command: `Get-ChildItem -Force ${projectPath}`,
  },
  {
    id: 'verify-build',
    title: '验证构建',
    intent: '运行测试和 Pages 构建，回传完整输出。',
    command: `cd ${projectPath}; npm test; npm run build:pages`,
  },
  {
    id: 'preview-site',
    title: '打开预览',
    intent: '启动本地站点，截图检查桌面和移动端。',
    command: `cd ${projectPath}; npm run dev`,
  },
]

const optimizationOrder = [
  {
    title: '1. 控制台实用化',
    body: '先让页面可以直接复制 OpenClaw 指令、看状态、追踪发布动作。',
  },
  {
    title: '3. 内容说明清楚',
    body: '再把 Codex 与 OpenClaw 的边界、交接规则、失败处理说清楚。',
  },
  {
    title: '2. 视觉高级感',
    body: '最后打磨层次、色彩、密度和响应式，让它更像成熟工作台。',
  },
]

const nextActions = [
  '网页创建公开仓库 openclaw-collab-site',
  '添加 remote 后运行 git push -u origin main',
  '每次改版后运行 npm test 与 npm run build:pages',
]

function App() {
  const [copiedId, setCopiedId] = useState('')

  async function copyCommand(card) {
    const clipboard = window.navigator?.clipboard ?? globalThis.navigator?.clipboard
    await clipboard?.writeText(card.command)
    setCopiedId(card.id)
  }

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
            一个面向实际协作的工作台：Codex 保存长上下文、做实现判断；
            OpenClaw 只执行短动作，把结果回传给 Codex 继续推进。
          </p>
          <div className="hero-actions" aria-label="线上与仓库入口">
            <a href="https://yuqd888-lgtm.github.io/openclaw-collab-site/">
              打开线上站点
            </a>
            <a href="https://github.com/yuqd888-lgtm/openclaw-collab-site">
              查看 GitHub 仓库
            </a>
          </div>
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
          <div className="command-stack">
            {commandCards.map((card) => (
              <article className="command-card" key={card.id}>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.intent}</p>
                </div>
                <code>{card.command}</code>
                <button
                  type="button"
                  aria-label={`复制${card.title}`}
                  onClick={() => copyCommand(card)}
                >
                  {copiedId === card.id ? `已复制${card.title}` : '复制'}
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="panel flow-panel" aria-label="三步协作流程">
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

        <div className="panel order-panel">
          <div className="panel-heading">
            <p className="section-kicker">Optimization order</p>
            <h2>优化顺序</h2>
          </div>
          <div className="order-list">
            {optimizationOrder.map((item) => (
              <article className="order-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
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
            <code>npm run build:pages</code>
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

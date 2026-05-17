import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('OpenClaw collaboration console', () => {
  it('presents the project status and role split', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'OpenClaw 协同控制台' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Codex 负责长上下文与代码落地')).toBeInTheDocument()
    expect(screen.getByText('OpenClaw 执行短动作与本机检查')).toBeInTheDocument()
    expect(screen.getByText('GitHub Pages 自动发布')).toBeInTheDocument()
  })

  it('shows the three-step collaboration flow', () => {
    render(<App />)

    const flow = screen.getByLabelText('三步协作流程')
    expect(within(flow).getByText('1. Codex 规划与实现')).toBeInTheDocument()
    expect(within(flow).getByText('2. OpenClaw 执行短指令')).toBeInTheDocument()
    expect(within(flow).getByText('3. GitHub 发布与回看')).toBeInTheDocument()
  })

  it('lists OpenClaw-ready short commands and GitHub publishing guidance', () => {
    render(<App />)

    expect(screen.getByText('OPENCLAW_TASKS.md')).toBeInTheDocument()
    expect(screen.getByText('npm run build')).toBeInTheDocument()
    expect(screen.getByText('git push -u origin main')).toBeInTheDocument()
    expect(
      screen.getByText('网页创建公开仓库 openclaw-collab-site'),
    ).toBeInTheDocument()
  })
})

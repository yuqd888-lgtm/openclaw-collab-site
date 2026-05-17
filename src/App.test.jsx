import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
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

  it('provides practical copy-ready OpenClaw commands', async () => {
    const writeText = vi.fn().mockResolvedValue()
    const user = userEvent.setup()
    Object.defineProperty(window.navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    })

    render(<App />)

    await user.click(screen.getByRole('button', { name: '复制检查文件' }))

    expect(writeText).toHaveBeenCalledWith(
      'Get-ChildItem -Force C:\\Users\\COLORFUL\\Desktop\\openclaw助手\\openclaw-collab-site',
    )
    expect(screen.getByText('已复制检查文件')).toBeInTheDocument()
  })

  it('explains the three optimization priorities clearly', () => {
    render(<App />)

    expect(screen.getByText('1. 控制台实用化')).toBeInTheDocument()
    expect(screen.getByText('3. 内容说明清楚')).toBeInTheDocument()
    expect(screen.getByText('2. 视觉高级感')).toBeInTheDocument()
    expect(screen.getByText('线上可访问')).toBeInTheDocument()
  })
})

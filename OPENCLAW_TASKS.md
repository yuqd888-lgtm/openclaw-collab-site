# OpenClaw Short Tasks

Codex keeps the long context. OpenClaw should receive only one short action at a time, run it, and return the exact terminal output or a screenshot.

## Current Action Cards

1. Check project files:
   `Get-ChildItem -Force C:\Users\COLORFUL\Desktop\openclaw助手\openclaw-collab-site`

2. Verify tests and GitHub Pages build:
   `cd C:\Users\COLORFUL\Desktop\openclaw助手\openclaw-collab-site; npm test; npm run build:pages`

3. Run local preview:
   `cd C:\Users\COLORFUL\Desktop\openclaw助手\openclaw-collab-site; npm run dev`

4. Confirm Git status:
   `cd C:\Users\COLORFUL\Desktop\openclaw助手\openclaw-collab-site; git status --short --branch`

## Rules

- Do not paste long Codex context into OpenClaw.
- Do not run local OpenClaw or llama setup commands from Codex Desktop.
- Keep each OpenClaw request to one action and one expected output.

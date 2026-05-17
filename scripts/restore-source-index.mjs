import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))

copyFileSync(resolve(root, 'scripts', 'source-index.html'), resolve(root, 'index.html'))

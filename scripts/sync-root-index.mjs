import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const docsIndexPath = resolve(root, 'docs', 'index.html')
const rootIndexPath = resolve(root, 'index.html')

const docsIndex = readFileSync(docsIndexPath, 'utf8')

const rootIndex = docsIndex
  .replaceAll('/openclaw-collab-site/assets/', '/openclaw-collab-site/docs/assets/')
  .replaceAll('/openclaw-collab-site/favicon.svg', '/openclaw-collab-site/docs/favicon.svg')

writeFileSync(rootIndexPath, rootIndex)

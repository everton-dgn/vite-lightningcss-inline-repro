import assert from 'node:assert/strict'
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true } })

try {
  const runner = server.environments.ssr.runner
  const { default: classes } = await runner.import('/badge.module.css')
  const { default: css } = await runner.import('/badge.module.css?inline')
  console.log(`Class: ${classes.badge}\nInline CSS:\n${css}`)
  assert.ok(css.includes(`.${classes.badge}`), 'Inline CSS must match the normal CSS Module import')
  console.log('PASS: selectors match')
} finally {
  await server.close()
}

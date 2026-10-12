import classes from './badge.module.css'
import css from './badge.module.css?inline'

const shadow = document.querySelector('#preview').attachShadow({ mode: 'open' })
const style = document.createElement('style')
style.textContent = css
const badge = document.createElement('span')
badge.className = classes.badge
badge.textContent = 'CSS Modules'
shadow.append(style, badge)

document.querySelector('#result').textContent =
  `Class: ${classes.badge}\n\nInline CSS:\n${css}\n` +
  (css.includes(`.${classes.badge}`) ? 'PASS: selectors match' : 'FAIL: selectors differ')

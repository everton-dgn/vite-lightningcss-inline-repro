# Lightning CSS inline module hash

Importing a CSS Module normally and with `?inline` produces different class
names when Vite uses `css.transformer: 'lightningcss'`.

```js
import classes from './badge.module.css'
import css from './badge.module.css?inline'

css.includes(`.${classes.badge}`) // false
```

## Reproduce

Use Node 22.12 or later and pnpm:

```sh
pnpm install
pnpm check
```

The check uses Vite's SSR module runner to import both forms and compare their
selectors. It exits with an assertion failure on the pinned Vite release.
No framework or browser is needed for this check.

Run `pnpm dev` for the visual case. The badge uses the normal import's class
inside a shadow root styled by the inline import. It should have a rounded
border and gray background, but the mismatched selector leaves it unstyled.
The shadow root keeps Vite's automatic document-level style injection from
hiding the mismatch.

This also affects frameworks that inline CSS in their SSR response: the
markup's class can differ from the selector in the inlined stylesheet.

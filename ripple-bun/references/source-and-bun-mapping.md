# Canonical Source

- Bundled canonical file for the skill: `references/llms-bun.txt`
- Original source used to build it: `llms.txt` from the source workspace at skill creation time
- `references/llms-bun.txt` is a direct copy with npm/npx commands rewritten to bun/bunx.

# Bun-First Command Examples

```bash
# Create new project from template
bunx degit Ripple-TS/ripple/templates/basic my-app
cd my-app
bun install && bun run dev

# Or install in existing project
bun add ripple
bun add --dev '@ripple-ts/vite-plugin'
```

# Translation Table

- `npx` -> `bunx`
- `npm i` / `npm install` -> `bun install` (project deps install)
- `npm install <pkg>` -> `bun add <pkg>`
- `npm install --save-dev <pkg>` -> `bun add --dev <pkg>`
- `npm run <script>` -> `bun run <script>`

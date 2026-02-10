---
name: ripple-bun
description: Ripple TypeScript framework guidance grounded in the local llms.txt reference. Use when implementing, debugging, reviewing, or explaining Ripple (.ripple) code, and when setup/dependency/run commands must be expressed with Bun tooling (bun and bunx) instead of npm and npx.
---

# Ripple Bun Workflow

1. Read the canonical bundled reference at `references/llms-bun.txt`.
2. Treat that file as the source of truth for Ripple syntax, APIs, and constraints.
3. Keep responses concise and point back to the bundled file instead of duplicating long sections.
4. Rewrite any command examples from npm/npx to Bun equivalents before returning output.

## Command Translation Rules

- `npx <tool> ...` -> `bunx <tool> ...`
- `npm i` or `npm install` (install lockfile deps) -> `bun install`
- `npm install <pkg>` -> `bun add <pkg>`
- `npm install --save-dev <pkg>` -> `bun add --dev <pkg>`
- `npm run <script>` -> `bun run <script>`

## Ripple-Specific Guardrails

- Keep text nodes wrapped in expressions, e.g. `{"text"}`.
- Keep template syntax inside `component` bodies only.
- Use `track()` and `@` for reactive state access and updates.
- Prefer stable keys in list rendering when object identity is not sufficient.

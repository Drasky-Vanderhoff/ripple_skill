# Ripple Skill

Ripple skill project based on Ripple's `llms.txt` reference, with Bun-first workflows and an example Vite app.

## Repository Conventions

- Package manager/runtime commands: Bun/Bunx

## Contents

- `llms.txt`: Ripple framework reference used as source material.
- `ripple-bun/`: Skill definition that references bundled Ripple docs and uses Bun command conventions.
- `example/`: Vite + Ripple Todo app demonstrating:
  - Ripple reactivity (`track`, `@`, derived values, effects)
  - Control flow and keyed loops
  - Tailwind styling with dark mode toggle + persisted theme
  - Bun-based setup and scripts

## Run The Example

```bash
cd example
bun install
bun run dev
```

## Build The Example

```bash
cd example
bun run build
bun run preview
```

## License

MIT

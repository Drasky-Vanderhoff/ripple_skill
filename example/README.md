# Ripple Todo Example (Vite + Bun)

## Run

```bash
cd example
bun install
bun run dev
```

## Build

```bash
bun run build
bun run preview
```

## Ripple Features Demonstrated

- `track()` + `@` reactive state reads/writes
- Derived tracked values (`visibleTodos`, `remaining`, `completed`)
- `effect()` for localStorage persistence
- Conditional rendering with `if / else`
- Keyed list rendering with `for (...; index i; key ...)`
- Dynamic class objects
- `children` composition via `Panel`
- DOM refs with `{ref ...}`
- Dynamic elements with `<@listTag>`
- Tailwind-powered styling pipeline (`tailwindcss` + `postcss`)

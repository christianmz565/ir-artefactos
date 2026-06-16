# AGENTS.md

## Quick Reference

```bash
bun run storybook       # Dev server at http://localhost:6006
bun run lint            # Biome auto-fix (writes changes)
bun run lint:check      # Biome check only (CI-safe)
bun run typecheck       # tsc -b
bun run build           # typecheck + storybook build (CI gate)
```

## Architecture

- **UI component library** — no app, no routes, no server. Storybook is the only interface.
- **React 19 + TypeScript 6 + Vite 8** with `@/*` → `src/*` alias.
- **Bootstrap 5 + Bootswatch Sketchy** theme loaded globally in `.storybook/preview.tsx`.
- **Biome 2** for lint + format (not ESLint/Prettier).

## Directory Layout

```
src/
├── components/          # Reusable UI atoms with descriptive names
│   └── <Name>/
│       ├── <Name>.tsx
│       └── <Name>.stories.tsx
├── igu/                 # Screen compositions by requirement ID
│   └── IGU-N/
│       ├── Pantalla.tsx          # Top-level screen component
│       ├── Pantalla.stories.tsx
│       └── <SubComponent>/      # Screen-specific subcomponents
├── types/               # Shared TypeScript interfaces
└── mocks/               # Mock data for stories
```

## Key Conventions

- **Stories co-located**: every `Foo.tsx` has `Foo.stories.tsx` in the same folder.
- **Story titles**: components use `"Componentes/..."`, screens use `"Requisitos/.../IGU-N (...)/..."`.
- **Import alias**: always `@/components/...` or `@/types/...`, never relative `../../`.
- **Component pattern**: named exports (`export function Button`), default export for story meta.
- **No tests**: repo has no test runner configured. Verification = lint + typecheck + storybook build.
- **a11y addon**: runs in `todo` mode (reports violations, doesn't break build).

## Nomenclatura de Artefactos

All components and screens must follow the project's nomenclature system. Each artefact type has a prefix:

| Prefix | Description | Example |
|--------|-------------|---------|
| **IGU** | Interface Graphique Utilisateur (screen) | IGU-1, IGU-2, IGU-3 |
| **BTN** | Button | BTN-DEFAULT, BTN-DANGER, BTN-OUTLINE, BTN-ICON |
| **COL** | Column | COL (generic) |
| **TAB** | Table | TAB-1 |
| **SRCH** | Search | SRCH |
| **ALT** | Alert | ALT |
| **MDL** | Modal | MDL |
| **FORM** | Form | FORM |
| **NAVBAR** | Navigation Bar | NAVBAR |
| **LBL** | Label | LBL |
| **INP** | Input | INP |
| **SELECT** | Select | SELECT |

### Naming Rules

1. **Folder name** = descriptive name (e.g., `Button/`, `Input/`, `Select/`)
2. **File name** = descriptive name (e.g., `Button.tsx`, `Input.tsx`)
3. **Story title** = `"Componentes/<PREFIX> — <Descripción>"` (e.g., `"Componentes/BTN — Botón"`)
4. **Export name** = descriptive JS identifier (e.g., `Button`, `Input`, `Select`)
5. **IGU screens** = numbered (`IGU-1/`, `IGU-2/`, etc.)

### Examples

```
src/components/Button/Button.tsx        → export function Button
src/components/Button/Button.stories.tsx → title: "Componentes/BTN — Botón"
src/components/Input/Input.tsx          → export function Input
src/components/Select/Select.tsx        → export function Select
src/igu/IGU-1/Pantalla.tsx              → title: "Requisitos/.../IGU-1 (...)/Pantalla"
```

## Biome Rules (non-obvious)

- `noUnusedVariables` / `noUnusedImports`: **error** — will fail typecheck.
- `useImportType`: **error** — must use `import type` for type-only imports.
- `useConst`: **error** — use `const` unless reassignment is needed.
- `noConsole`: **warn** — avoid `console.log` in production code.
- `useExhaustiveDependencies`: **error** — React hooks must list all deps.

## CI

- GitHub Actions workflow `.github/workflows/storybook.yml` builds and deploys Storybook to GitHub Pages on push to `main`.
- CI runs: `bun install --frozen-lockfile` → `bunx storybook build --quiet`.
- No lint/typecheck step in CI currently — run `bun run lint:check && bun run typecheck` locally before pushing.

## Nix Environment

- Uses `flake.nix` + `direnv` (`.envrc` contains `use flake`).
- Provides `bun`, `nodejs`, and `nixd` in the dev shell.
- If not using Nix, ensure `bun` and `node` are available.

## Adding a Component

1. Create `src/components/<Name>/<Name>.tsx` with props interface exported.
2. Create `src/components/<Name>/<Name>.stories.tsx` with at least `Default` story.
3. Use `@/` imports, `import type` for types, named function export.
4. Storybook auto-discovers via `src/**/*.stories.@(js|jsx|mjs|ts|tsx)` glob.

## Adding a Screen (IGU)

1. Create `src/igu/IGU-N/Pantalla.tsx` as the top-level composition.
2. Add subcomponents in subdirectories (e.g., `Header/`, `StudentTable/`).
3. Story title pattern: `"Requisitos/<Category>/IGU-N (<Name>)/Pantalla"`.

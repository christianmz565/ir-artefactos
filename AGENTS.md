# AGENTS.md

## Quick Reference

```bash
bun run storybook       # Dev server at http://localhost:6006
bun run lint            # Biome check --write (auto-fix + format)
bun run lint:check      # Biome check only (CI-safe)
bun run typecheck       # tsc -b
bun run build           # typecheck + storybook build (CI gate)
bun run build-storybook # Storybook static build only (no typecheck)
```

Local pre-push gate: `bun run lint:check && bun run typecheck && bun run build` (CI does not run lint/typecheck separately).

## Notion API

**Env**: `NOTION_TOKEN=ntn_....` in `.env` (loaded via direnv).

**Skill**: `.agents/skills/notion-api/SKILL.md` — use for all Notion interactions (CRUD on pages, databases, blocks).

**Database IDs**:
- Ilaciones master: `36aeb758-32f4-8010-952c-000bd9ec253f`
- Ilaciones versiones: `36aeb758-32f4-80a5-b859-000b7405a6e9`
- Artefactos master: `36deb758-32f4-8010-9270-000b251e7686`
- Artefactos versiones: `36deb758-32f4-80cb-8f11-000b319ef480`

## Architecture

- **UI component library** — no app, no routes, no server. Storybook is the only interface.
- **React 19 + TypeScript 6 + Vite 8** with `@/*` → `src/*` alias.
- **Bootstrap 5 + Bootswatch Sketchy** theme loaded globally in `.storybook/preview.tsx`.
- **Biome 2** for lint + format (not ESLint/Prettier).

## Directory Layout

```
src/
├── components/          # Reusable UI atoms (Alert, Button, Column, Input, Select)
│   └── <Name>/
│       ├── <Name>.tsx
│       └── <Name>.stories.tsx
├── igu/                 # Screen compositions by requirement ID
│   └── IGU-N/                    # One folder per IGU, NO subfolders
│       ├── Pantalla.tsx          # IGU-N (top-level composition)
│       ├── Pantalla.stories.tsx
│       ├── IGU-N-<PREFIX>-K.tsx  # Artefactos con ID jerárquico
│       └── IGU-N-<PREFIX>-K.stories.tsx
├── types/               # Shared TypeScript interfaces (attributes in English)
└── mocks/               # Mock data for stories
```

### IGU Artefacto Naming (Opción B — jerárquica)

Cada artefacto dentro de `IGU-N/` se nombra `IGU-N-<PREFIX>-K.tsx` donde:

- **PREFIX** ∈ { BTN, INP, SELECT, SRCH, LBL, FORM, TAB, COL, ALT, MDL, NAVBAR }
- **K** = entero correlativo dentro de la IGU, en orden de aparición en el diseño

**Reglas:**

- Export JS usa guión bajo: `export function IGU_1_BTN_1()` (los identificadores JS no admiten guiones)
- Sin subcarpetas dentro de `IGU-N/` — todo al mismo nivel
- Sin cross-imports entre IGUs — cada IGU es autosuficiente
- Atributos de tipos en **inglés** (`firstName`, `status`, `associatedStudents`)
- UI labels en **español** (placeholders, mensajes, headers)
- Sin lógica de eventos: solo wireframes (sin `onClick`, `onSubmit`, `useState`, `useEffect`, `alert`, `console.log`)
- Stories con un único `Default` exportado (sin variantes con acciones)
- **Story title con verbo en infinitivo puro**: el paréntesis después de `IGU-N` es solo el verbo, sin sustantivo pegado. Verbos permitidos: `Crear, Editar, Consultar, Registrar, Actualizar, Eliminar, Inactivar, Generar, Detalle`. Ej: `Requisitos/Gestión de Auxiliares/IGU-1 (Crear)`, nunca `(Creación)` ni `(Crear Auxiliar)`. La UI (`<h1>`, `label`, etc.) sí puede tener el sustantivo.

## Key Conventions

- **Stories co-located**: every `Foo.tsx` has `Foo.stories.tsx` in the same folder.
- **Story titles**: components use `"Componentes/..."`, screens use `"Requisitos/.../IGU-N (...)/..."`.
- **Import alias**: always `@/components/...` or `@/types/...`, never relative `../../`.
- **Component pattern**: named exports (`export function Button`), default export for story meta.
- **No tests**: repo has no test runner configured. Verification = lint + typecheck + storybook build.
- **a11y addon**: runs in `todo` mode (reports violations, doesn't break build).
- **Story glob**: `src/**/*.mdx` and `src/**/*.stories.@(js|jsx|mjs|ts|tsx)` (see `.storybook/main.ts`).

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
- `useExhaustiveDependencies`: **error** — React hooks must list all deps.
- `noConsole` / `noExplicitAny` / `noNegationElse`: **warn** — avoid in production code.
- `assist.actions`: `organizeImports` + `useSortedProperties` are **on** — Biome rewrites these on `lint`.

## CI

- GitHub Actions workflow `.github/workflows/storybook.yml` builds and deploys Storybook to GitHub Pages on push to `main`.
- CI runs: `bun install --frozen-lockfile` → `bunx storybook build --quiet`.
- No lint/typecheck step in CI currently — run `bun run lint:check && bun run typecheck` locally before pushing.
- **PR Preview**: `.github/workflows/storybook-preview.yml` deploys a Storybook preview for each PR and posts a comment with the link.

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

## PR Template

Use `.github/pull_request_template.md` when creating PRs. It includes:
- Description section
- EDU requirements checklist
- IGU/component details
- Quality checklist (Storybook, Biome, typecheck)

## Ilaciones (Notion Integration)

### Tablas en Notion

- **Tabla Maestra de Ilaciones** (`36aeb758-32f4-8010-952c-000bd9ec253f`): Registro único por ILA
- **Versiones de Ilaciones** (`36aeb758-32f4-80a5-b859-000b7405a6e9`): Versiones individuales
- **Tabla Maestra de Artefactos** (`36deb758-32f4-8010-9270-000b251e7686`): Artefactos de UI
- **Versiones de Artefactos** (`36deb758-32f4-80cb-8f11-000b319ef480`): Versiones de artefactos

### Versionado de Ilaciones

- **Primera vez**: `00.00.01`
- **Corrección menor**: incrementar último dígito (`00.01.00` → `00.01.01`)
- **Cambio mayor**: incrementar centro (`00.00.xx` → `00.01.00`)
- **NUNCA** saltar versiones (no de `00.01.00` a `00.01.04`)

### Estructura de Procedimiento

```
1. El Administrador de Sistema accede al módulo de [Nombre Módulo] @IGU-N.
2. En la [vista/grilla], hace clic en [acción] @IGU-N-[PREFIX]-K para [propósito] en @IGU-M.
3. El sistema abre/establece una conexión a la base de datos control_asistencia_db.
4. El sistema ejecuta una consulta SQL SELECT de lectura en la tabla Table_[Tabla].
5. El sistema cierra/libera la conexión y despliega [componente] @IGU-M-[PREFIX]-K.
6. El usuario completa el formulario y decide:
   a) Hace clic en '[Botón]' @IGU-M-BTN-1: [acción positiva]
   b) Hace clic en 'Cancelar' @IGU-M-BTN-2: [acción negativa]
```

### Reglas de Mención

1. **Primera mención**: `@IGU-N` (solo el número de la IGU)
2. **Acción**: `@IGU-N-PREFIX-K` (componente específico)
3. **Destino**: `@IGU-M` (IGU donde ocurre la acción)
4. **Componentes internos**: `@IGU-M-PREFIX-K` (elementos del formulario/vista)

### Reglas de Artefactos Asociados

- Solo incluir artefactos que aparecen en el procedimiento
- Incluir la IGU principal y todas las mencionadas
- No incluir artefactos no mencionados

### Mapeo ILA → IGU

#### Lote 1: Auxiliares (CERRADO)
- ILA-1 → IGU-1 (Crear Auxiliar)
- ILA-2 → IGU-2 (Consultar Auxiliares)
- ILA-3 → IGU-3 (Editar Auxiliar)
- ILA-4 → IGU-4 (Inactivar Auxiliar)
- ILA-5 → IGU-5 (Ver Detalle Auxiliar)

#### Lote 2: Estudiantes (CERRADO)
- ILA-6 → IGU-6 (Crear Estudiante)
- ILA-7 → IGU-7 (Consultar Estudiantes)
- ILA-8 → IGU-8 (Editar Estudiante)
- ILA-9 → IGU-13 (Inactivar Estudiante)
- ILA-10 → IGU-14 (Ver Detalle Estudiante)

#### Lote 3: Profesores (CERRADO)
- ILA-11 → IGU-9 (Crear Profesor)
- ILA-12 → IGU-15 (Consultar Profesores)
- ILA-13 → IGU-11 (Ver Detalle Profesor)
- ILA-14 → IGU-10 (Editar Profesor)
- ILA-15 → IGU-12 (Inactivar Profesor)

#### Lote 4: Asistencia (CERRADO)
- ILA-16 → IGU-16 (Registrar Asistencia - Automático)
- ILA-17 → IGU-17 (Crear Notificación - Automático)
- ILA-18 → IGU-18 (Ver Detalle Notificación)
- ILA-19 → IGU-19 (Editar Asistencia)
- ILA-20 → IGU-20 (Eliminar Reporte)
- ILA-43 → IGU-16 (Registro Manual - Respaldo)
- ILA-44 → IGU-17 (Notificación Manual - Respaldo)

#### Lote 5: Reportes (CERRADO)
- ILA-21 → IGU-21 (Editar Parámetros del Reporte)
- ILA-22 → IGU-22 (Consultar Asistencias)
- ILA-23 → IGU-23 (Eliminar Asistencia)
- ILA-24 → IGU-24 (Ver Detalle Reporte)
- ILA-25 → IGU-25 (Generar Reporte)

#### Lote 6: Notificaciones (CERRADO)
- ILA-26 → IGU-26 (Consultar Historial de Notificaciones)
- ILA-27 → IGU-27 (Eliminar Notificación)
- ILA-28 → IGU-28 (Ver Detalle Asistencia)
- ILA-29 → IGU-29 (Consultar Reportes)
- ILA-30 → IGU-30 (Editar Configuración de Notificación)

#### Lote 7: Apoderados (CERRADO)
- ILA-31 → IGU-31 (Registrar Apoderado)
- ILA-32 → IGU-32 (Consultar Apoderados)
- ILA-33 → IGU-33 (Actualizar Apoderado)
- ILA-34 → IGU-34 (Inactivar Apoderado)
- ILA-35 → IGU-35 (Configurar Roles)

#### Lote 8: Roles y Plataformas (CERRADO)
- ILA-36 → IGU-36 (Consultar Roles)
- ILA-37 → IGU-37 (Editar Rol)
- ILA-38 → IGU-38 (Inactivar Rol)
- ILA-39 → IGU-39 (Registrar Plataforma)
- ILA-40 → IGU-40 (Consultar Plataformas)
- ILA-41 → IGU-41 (Editar Plataforma)
- ILA-42 → IGU-42 (Inactivar Plataforma)

### Estructura de Grilla Estándar

Las grillas (Consultar) tienen esta estructura:
```
IGU-N-NAVBAR-1 (barra superior)
  ├── IGU-N-SRCH-1 (búsqueda)
  ├── IGU-N-SELECT-1 (filtros)
  └── IGU-N-BTN-1 (Agregar)
IGU-N-TAB-4 (contenedor de grilla)
  ├── IGU-N-TAB-1 (thead)
  ├── IGU-N-TAB-2 (tbody - renderiza filas)
  │   └── IGU-N-TAB-3 (fila)
  │       ├── IGU-N-TAB-3-BTN-1 (Ver Detalle)
  │       ├── IGU-N-TAB-3-BTN-2 (Editar)
  │       └── IGU-N-TAB-3-BTN-3 (Eliminar/Inactivar)
  └── IGU-N-ALT-1 (alerta sin resultados)
```

### Notas Importantes

1. **ILA-8 es Editar Estudiante** (IGU-8), NO Inactivar
2. **ILA-9 es Inactivar Estudiante** (IGU-13), NO Editar
3. Los botones de grilla siempre van en orden: Ver → Editar → Eliminar
4. El botón "Ver Detalle" es BTN-3, "Editar" es BTN-1, "Eliminar" es BTN-2
5. Para procesos automáticos (ILA-16, ILA-17), crear ILAs de respaldo (ILA-43, ILA-44)
6. Las ilaciones manuales deben especificar la IGU de origen en el paso 1

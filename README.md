# IR Artefactos

Librería de artefactos UI desarrollada con **React + TypeScript + Vite** y documentada con **Storybook**.

El catálogo de componentes se desarrolla y revisa enteramente desde Storybook — no hay aplicación frontend propia.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** (alias `@/*` → `src/*`)
- **Storybook 10** con addons de a11y y docs
- **Bootstrap 5** + **Bootswatch Sketchy** + **react-bootstrap** (tema de caricatura)
- **Biome 2** para lint + format

## Scripts

| Comando | Descripción |
| --- | --- |
| `bun run storybook` | Inicia Storybook en `http://localhost:6006` |
| `bun run build` | Typecheck + build de Storybook estático |
| `bun run build-storybook` | Solo build de Storybook |
| `bun run lint` | Aplica fixes de Biome |
| `bun run lint:check` | Solo reporta, no escribe |
| `bun run typecheck` | `tsc -b` |

## Estructura

```
src/
└── components/         # Componentes + sus *.stories.tsx co-localizados
public/
└── icons.svg           # Sprite de iconos
.storybook/
├── main.ts
└── preview.tsx         # CSS global, sort de stories, parámetros a11y
```

## Convenciones

- **Alias de imports**: usar `@/components/...` en vez de rutas relativas
- **Stories co-localizadas**: `Button.tsx` vive junto a `Button.stories.tsx`
- **a11y**: el addon a11y corre contra cada story en modo `todo` (no rompe CI)
- **Lint**: `biome check` aplica formato, organiza imports y revisa reglas React

## Agregar un componente

1. Crear carpeta en `src/components/<Nombre>/`
2. Implementar `<Nombre>.tsx` con tipos y props exportadas
3. Crear `<Nombre>.stories.tsx` con al menos una story `Default`
4. Storybook lo recoge automáticamente por el glob `src/**/*.stories.@(ts|tsx)`

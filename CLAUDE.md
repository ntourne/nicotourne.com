# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build (also runs TypeScript check)
pnpm lint         # Biome lint check
pnpm lint:fix     # Biome lint + auto-fix
```

There are no tests.

## Architecture

**Next.js Pages Router** personal portfolio site. Single public page (`pages/index.tsx`). There is also a `ContactScreen` component referenced from the codebase but no dedicated `/contact` page exists — it's dead code.

### Data flow

All site content lives in `src/data/index.tsx` (profile, experiences, education, skills, social media, languages) and `src/data/posts.tsx` (articles). These are static TypeScript objects — no CMS or API. Updating site content means editing these files.

### Page rendering

`pages/index.tsx` uses a `getLayout` pattern: it returns `<Layout>` as a wrapper via `Home.getLayout`, which `_app.tsx` applies. This allows per-page layout overriding without nesting.

### Component layers

- `src/components/layout/` — structural wrappers (`Layout`, `Card`, `Section`)
- `src/components/common/` — all content components, exported via barrel `index.ts`
- `src/components/ui/toaster.tsx` — thin re-export: `export { toast as toaster } from "sonner"`
- `src/screens/` — page-level compositions (`HomeScreen`, `ContactScreen`)

### Contact form

The form (`ContactForm.tsx`) POSTs to `/api/contact` via `src/libs/api.ts` → `src/libs/contact.ts`. There is no `pages/api/contact.ts` in this repo — the API route must be handled externally or is missing.

### Styling

Tailwind CSS v3 with PostCSS. `styles/globals.css` has the `@tailwind` directives and base overrides. Font is **DM Sans** loaded via Google Fonts in `_document.tsx`. No dark mode — always light.

`react-markdown@10` (ESM-only) is listed in `transpilePackages` in `next.config.js` so Next.js can bundle it.

### TypeScript path aliases

```
@components/* → src/components/*
@screens/*    → src/screens/*
@data/*       → src/data/*
@libs/*       → src/libs/*
```

### Dependency notes

- `@types/react` is pinned to `18.2.79` via `pnpm.overrides` in `package.json` to avoid a breaking `ReactNode` type change in `18.3.x` that conflicts with `next` and `sonner`'s bundled types.
- Linter is **Biome** (not ESLint). `biome.json` disables `noUnknownAtRules` (for Tailwind directives), `noArrayIndexKey`, `noExplicitAny`, `noDangerouslySetInnerHtml`, and `noImportantStyles`.

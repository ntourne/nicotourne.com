# nicotourne.xyz

## About

This repository is a pnpm monorepo with multiple Next.js apps:

- `apps/website` for the main site on port `3000`
- `apps/blog` for the blog on port `3001`
- `apps/random` for the random app on port `3002`

## Getting started

Install dependencies:

```bash
pnpm install
```

Run all app dev servers through Turborepo:

```bash
pnpm dev
```

Run a single app locally:

```bash
pnpm --filter @nicotourne/website dev
pnpm --filter @nicotourne/blog dev
pnpm --filter @nicotourne/random dev
```

Run lint across the monorepo:

```bash
pnpm lint
```

Create production builds:

```bash
pnpm build
```

## Deploy on Vercel

Create one Vercel project per app and set the project's Root Directory to the
app folder:

- `apps/website`
- `apps/blog`
- `apps/random`

Vercel must point at the app directory because `next` is declared in each app's
`package.json`, not in the monorepo root.

Recommended Vercel settings for each app:

- Framework Preset: `Next.js`
- Install Command: `pnpm install`
- Build Command: `pnpm build`
- Output Directory: leave empty

If the Root Directory is left at `/`, Vercel will fail with `No Next.js version
detected` because the root [package.json](package.json) does not depend on
`next`.

# Hanzo Community

## Overview
Hanzo Community — Discord, forums, events, and more

## Tech Stack
- **Language**: TypeScript/JavaScript

## Build & Run
```bash
pnpm install && pnpm build
pnpm test
```

## Structure
```
community/
  LLM.md
  app/
  next-env.d.ts
  next.config.ts
  out/
  package.json
  pnpm-lock.yaml
  postcss.config.mjs
  public/
  tsconfig.json
```

## Key Files
- `package.json` -- Dependencies and scripts

## Analytics and deploy

- `app/analytics.tsx` is the docs.hanzo.ai pattern: `@hanzo/event`'s provider
  sends the pageview to `POST api.hanzo.ai/v1/event` (always: it is first party) with this site's own
  publishable key (cloud project `hanzo-community`), `startTags` loads GA4 and the Meta
  pixel from cloud (`GET /v1/project/tags`) under cloud's rule for the visitor's
  region (/event 0.3.63: at once in the US, on consent in the EU), and
  `@hanzo/ui/consent` is the banner. No tag id lives in this repo; the key is
  stated because @hanzo/event's SITE_KEY table does not list hanzo.community.
- `@hanzo/ui/styles.css` is imported in the layout. Without it the export ships
  the atomic classes and none of the base sheet, and the page renders unstyled.
- `@hanzo/ui` types against the v5 shorthands (`items`, `justify`, `px`, `bg`,
  `rounded`, `maxW` …); a longhand is a type error, though it still renders.
- `pnpm-workspace.yaml` overrides hold one `@hanzo/gui` and one `@hanzo/event`
  in the tree. Two guis are two configs; two event clients are two consent stores.
- Deploy: push to main. `.github/workflows/cicd.yml` runs hanzoai/ci, which
  type-checks, builds `out/` and publishes it as Sites project `hanzo-community`
  (`s3://hanzo-sites/hanzo/hanzo-community`, live at `hanzo-community.hanzo.app`).
- `app/socials.tsx` is every Hanzo channel, the set hanzo.ai's footer and JSON-LD
  name, drawn in the footer as marks with accessible names. Discord is
  discord.gg/XthHQQj; discord.gg/hanzo is another server.

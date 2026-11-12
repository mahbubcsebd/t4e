# think4ever-new
Think4Ever marketing/landing site (blog, tutorials, customers, pricing, marketplace, auth modal, i18n en/es).

## Stack
Next.js 16.3.1 (App Router), React 19, JavaScript (jsconfig), Tailwind v4, shadcn/radix, framer-motion, npm

## Commands
- dev: npm run dev
- build: npm run build (static export to out/; upload out/ incl. hidden .htaccess)
- lint: npx eslint <files>
- test: none configured

## Structure
- app/ — routes ([lang] i18n, blog, pricing, customers, marketplace...)
- components/ — layout, sections, auth, marketplace, ui
- content/ — blog + tutorials markdown
- dictionaries/ — i18n strings
- lib/, context/ — helpers, providers

## Conventions
- Read node_modules/next/dist/docs before using Next APIs.
- Copy lives in dictionaries (EN/ES) — update both.

@AGENTS.md

<!-- claude-kit:setup v1 -->

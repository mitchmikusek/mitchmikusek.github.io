# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio and blog site for mitchmikusek.com. Built with Astro 6, statically generated, and deployed to GitHub Pages via GitHub Actions on push to `main`.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build (output: `dist/`)
- `npm run preview` — Preview production build locally

No test runner or linter is configured.

## Architecture

**Astro 6 static site** with zero client-side JS frameworks. All pages are server-rendered `.astro` components.

- `src/layouts/BaseLayout.astro` — Root HTML shell (BaseHead + Header + Footer). All pages use this.
- `src/layouts/BlogPost.astro` — Extends BaseLayout for blog post pages.
- `src/pages/index.astro` — Homepage composed of Hero, ProjectsGrid, and Interests sections.
- `src/pages/blog/[...slug].astro` — Dynamic blog post routes using `getStaticPaths()` from the blog content collection.
- `src/content.config.ts` — Defines the `blog` collection schema (title, description, pubDate, tags, draft flag) using Astro's glob loader.
- `src/data/projects.ts` — Project data array with typed `Project` interface. Add/edit projects here, not in components.
- `src/styles/global.css` — Single CSS file with all styles. Dark theme using CSS custom properties (prefixed `--`).
- `public/CNAME` — Custom domain config for GitHub Pages.

**Path alias:** `@/*` maps to `src/*` (configured in tsconfig.json).

## Blog Content

Blog posts are Markdown files in `src/content/blog/`. Frontmatter schema:

```yaml
title: string (required)
description: string (required)
pubDate: date (required)
updatedDate: date (optional)
draft: boolean (default: false)
tags: string[] (default: [])
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml` which builds with Node 22 and deploys to GitHub Pages. The site is served at mitchmikusek.com (custom domain via CNAME).

## Design

Dark theme with muted palette. Key CSS variables are defined at the top of `src/styles/global.css`. The design is minimal — system font stack, 720px max-width, subtle card borders with hover states. Markdown code blocks use the `github-dark` Shiki theme.

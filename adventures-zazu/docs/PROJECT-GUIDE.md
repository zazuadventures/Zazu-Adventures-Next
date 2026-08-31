# Project Guide

## Purpose

This guide explains how to maintain Zazu Adventures without introducing a CMS or unnecessary infrastructure. Update content in the data layer, keep shared visual patterns in components, and keep secrets outside source control.

## Updating website content

| Content | Edit here | Notes |
| --- | --- | --- |
| Experiences | `data/experiences.ts` | Keep slugs stable after publishing because they form URLs. |
| Destinations | `data/destinations.ts` | The current site has a destination index, not destination detail routes. |
| Travel services | `data/services.ts` | Update the matching `TravelService` contract if data shape changes. |
| Travel Journal | `data/blog.ts` | `publishedAt` uses `YYYY-MM-DD`; new posts appear automatically in the sitemap. |
| About copy | `app/about/page.tsx` | Use only verified Zazu information. |
| Global navigation | `lib/navigation.ts` | Desktop and mobile navigation both use this source. |

When adding a new article or dynamic content item, use a unique, lowercase, hyphenated slug. Verify its route, metadata, and sitemap entry after building.

## Design and accessibility conventions

- Use design tokens from `app/globals.css` such as `bg-background`, `text-foreground`, and `bg-primary` rather than new arbitrary colour schemes.
- Use `Container` for page-width and responsive padding consistency.
- Keep one clear `h1` per page and use headings for document structure.
- Use `Link` for navigation and `button` for actions.
- Retain visible `focus-visible` states on interactive controls.
- Give meaningful images descriptive alternative text; decorative images should use an empty alternative text value.
- Keep responsive grids mobile-first. Avoid horizontal carousels for essential content.

## Environment management

Copy `.env.example` to `.env.local` for local work. Never commit `.env.local` or paste real values into source files, issues, logs, or screenshots.

`NEXT_PUBLIC_SITE_URL` is intentionally public. The Resend API key and enquiry mailbox settings are server-only. Changing a `NEXT_PUBLIC_` value requires a new production build because public Next.js values are embedded into the client bundle.

## Verification workflow

Before opening a pull request or deploying:

```bash
npm run lint
npm run build
npm audit
```

Then complete relevant items in [Phase 14 QA](PHASE-14-QA.md), especially contact delivery, keyboard navigation, responsive checks, and SEO route checks.

## Docker workflow

The `Dockerfile` is the production packaging path. Build it with the final public URL and inject only server-side secrets at runtime. Do not include `.env.local` in an image.

```bash
docker build -t zazu-adventures \
  --build-arg NEXT_PUBLIC_SITE_URL=https://your-production-domain.example .

docker run --rm -p 3000:3000 \
  -e RESEND_API_KEY \
  -e ENQUIRY_TO_EMAIL \
  -e ENQUIRY_FROM_EMAIL \
  zazu-adventures
```

For a complete deployment checklist, see [Deployment and Docker](DEPLOYMENT.md).

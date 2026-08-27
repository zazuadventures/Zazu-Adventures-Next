# Architecture

## Overview

Zazu Adventures is a static-content travel website built with the Next.js App Router. It intentionally has no CMS, database, account system, or booking engine. Content is versioned with the application and enquiries are delivered through a server-side email integration.

```text
Browser
  |
  +-- App Router pages and shared React components
  |
  +-- POST /api/enquiries
         |
         +-- validation, honeypot, size guard, rate guard
         |
         +-- lib/email.ts
                 |
                 +-- Resend API
                         |
                         +-- Zazu enquiry inbox
```

## Application layers

| Layer | Responsibility | Examples |
| --- | --- | --- |
| `app/` | Routes, metadata files, API handlers, route-level UI | `app/blog/[slug]/page.tsx`, `app/api/enquiries/route.ts` |
| `components/` | Reusable visual and interaction components | layout, contact, experiences, blog, UI, SEO |
| `data/` | Static business and editorial content | experiences, destinations, services, blog posts |
| `lib/` | Content lookup, navigation, and server-side integrations | `blog.ts`, `email.ts`, `navigation.ts` |
| `types/` | Shared TypeScript data contracts | `Experience`, `TravelService`, `BlogPost` |
| `docs/` | Operations, deployment, architecture, and QA guidance | this file and linked documents |

## Routes and content sources

| Route group | Source |
| --- | --- |
| `/experiences/*` | `data/experiences.ts` through `lib/experiences.ts` |
| `/destinations` | `data/destinations.ts` through `lib/destinations.ts` |
| `/travel-services/*` | `data/services.ts` through `lib/services.ts` |
| `/blog/*` | `data/blog.ts` through `lib/blog.ts` |
| `/about`, `/contact` | Route-level static content and components |

Dynamic experience, service, and article pages use `generateStaticParams()` so their known paths are generated at build time. Unknown slugs use Next.js `notFound()` and the shared 404 page.

## Enquiry flow

The contact form is a client component only because it needs form state and submission handling. It sends JSON to the server endpoint; it never receives or uses email credentials.

```text
EnquiryForm
  -> /api/enquiries
  -> request size and JSON checks
  -> rate guard and honeypot
  -> field validation
  -> sendEnquiryEmail()
  -> Resend with reply-to set to the traveller email
```

The API returns safe user-facing errors. Provider failures are logged on the server and return a `500` response without exposing provider details.

## SEO and discoverability

The root layout supplies the shared title template, social metadata, canonical foundation, and TravelAgency structured data. Blog article pages add article metadata and Article structured data.

`app/robots.ts` and `app/sitemap.ts` generate `robots.txt` and `sitemap.xml`. The sitemap is built from the actual static data and route structure rather than from hard-coded fake URLs.

## Security boundaries

- `.env.local` is local-only and Git-ignored.
- `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, and `ENQUIRY_FROM_EMAIL` are server-only variables.
- Only `NEXT_PUBLIC_SITE_URL` is browser-visible.
- API input is validated on the server; browser validation is a usability layer, not a security control.
- Response headers are configured in `next.config.ts`.
- The in-memory rate guard is appropriate only as a basic low-traffic safeguard; use a distributed rate limiter if production abuse warrants one.

## Deployment model

The Docker image uses Next.js `output: "standalone"`. The build stage produces the traced runtime, and the final stage copies only the standalone server, static assets, and public files. It runs as a non-root user on port `3000`.

See [Deployment and Docker](DEPLOYMENT.md) for commands and configuration.

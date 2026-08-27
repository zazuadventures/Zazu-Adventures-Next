# Zazu Adventures

A responsive Next.js website for Zazu Adventures, with travel experiences, destinations, travel services, a travel journal, and a server-side enquiry flow.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Resend for server-side enquiry delivery

## Routes

- `/` — homepage
- `/experiences` — experience categories and detail pages
- `/destinations` — destinations
- `/travel-services` — services and detail pages
- `/about` — company approach
- `/blog` — Travel Journal and article pages
- `/contact` — enquiry form
- `/robots.txt` and `/sitemap.xml` — SEO metadata routes

## Local development

Requirements: Node.js 22 or later and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

On Windows PowerShell where script execution is disabled, use `npm.cmd` instead of `npm`.

## Environment variables

Create `.env.local` from `.env.example`. It is ignored by Git.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Public site URL; use `http://localhost:3000` locally and the HTTPS production URL when deployed. |
| `RESEND_API_KEY` | Yes for delivery | Server-only Resend API credential. Never prefix it with `NEXT_PUBLIC_`. |
| `ENQUIRY_TO_EMAIL` | Yes for delivery | Inbox that receives traveller enquiries. |
| `ENQUIRY_FROM_EMAIL` | Yes for delivery | Verified Resend sender, for example `Zazu Adventures <hello@example.com>`. |

The provided values are placeholders. A valid Resend key and verified sender are required before the contact form can deliver email.

## Scripts

```bash
npm run dev      # Development server
npm run lint     # ESLint checks
npm run build    # Production build
npm run start    # Serve a production build
```

## Enquiry security

`POST /api/enquiries` validates data on the server, limits request size, checks accepted enquiry types and traveller counts, includes a honeypot, and has a basic in-memory rate guard. The email API key is accessed only in server-side code. Provider failures produce a safe error response instead of a false success message.

The in-memory rate limiter is a development safeguard. Use a distributed, hosting-appropriate solution before launch if spam becomes a concern.

## Docker

The production image uses Next.js standalone output and runs as a non-root user.

```bash
docker build -t zazu-adventures \
  --build-arg NEXT_PUBLIC_SITE_URL=http://localhost:3000 .

docker run --rm -p 3000:3000 --env-file .env.local zazu-adventures
```

For production, build with the production public URL and pass server-only variables at runtime through your deployment platform’s secret manager:

```bash
docker build -t zazu-adventures \
  --build-arg NEXT_PUBLIC_SITE_URL=https://example.com .
```

Do not copy `.env.local` into an image or commit it. See [deployment documentation](docs/DEPLOYMENT.md) and the [Phase 14 QA checklist](docs/PHASE-14-QA.md).

## Pre-launch checks

```bash
npm run lint
npm run build
npm audit
```

Then test `/contact` with configured Resend credentials, check all navigation paths, verify `robots.txt` and `sitemap.xml`, and run the viewport checklist in `docs/PHASE-14-QA.md`.

## Documentation

- [Project guide](docs/PROJECT-GUIDE.md) — content updates, conventions, environment management, and verification.
- [Architecture](docs/ARCHITECTURE.md) — application layers, route/content structure, enquiry flow, SEO, and security boundaries.
- [Deployment and Docker](docs/DEPLOYMENT.md) — container build and production configuration.
- [Phase 14 QA checklist](docs/PHASE-14-QA.md) — pre-launch security and manual QA checks.

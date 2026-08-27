# Phase 14 — Security + QA

Use this checklist before a production deployment. Items requiring real credentials, a browser, or a production domain remain manual checks.

## Build

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] Production server started with `npm run start` or the Docker image

## Dependencies

- [ ] `npm audit` reviewed
- [ ] `npm outdated` reviewed; major version updates assessed deliberately
- [ ] No unnecessary dependencies
- [ ] Lockfile committed

## Routes

- [ ] Homepage
- [ ] Experiences and category pages
- [ ] Experience detail pages
- [ ] Destinations
- [ ] Travel services and detail pages
- [ ] About
- [ ] Travel Journal and article pages
- [ ] Contact
- [ ] 404 and invalid dynamic routes
- [ ] `robots.txt` and `sitemap.xml`

## Forms

- [ ] Required fields validated in the browser
- [ ] Invalid email rejected by the server
- [ ] Invalid traveller count and enquiry type rejected
- [ ] Long name and message rejected safely
- [ ] JSON request requirement verified
- [ ] Honeypot submission is silently accepted without delivery
- [ ] Valid submission delivers to the configured inbox
- [ ] Reply-to points to the traveller
- [ ] Provider failure is shown as an error, never as success
- [ ] Rate-limit behaviour reviewed

## Security

- [ ] `.env.local` is ignored and untracked
- [ ] No `NEXT_PUBLIC_` secret values
- [ ] `RESEND_API_KEY` is configured only on the server/deployment platform
- [ ] Security headers present: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`
- [ ] API validates shape, size, and field values
- [ ] Error responses do not expose provider/internal details
- [ ] Docker runtime receives secrets only through runtime environment variables

## Accessibility

- [ ] Keyboard focus is visible and ordered logically
- [ ] Skip link reaches main content
- [ ] Mobile menu opens, closes, and restores scrolling
- [ ] Form labels and required fields are clear
- [ ] Meaningful image alternative text reviewed
- [ ] Heading hierarchy reviewed on every route

## Responsive

- [ ] 375px
- [ ] 390px
- [ ] 430px
- [ ] 768px
- [ ] 1024px
- [ ] 1280px
- [ ] 1440px
- [ ] No unintended horizontal scrolling

## Content and launch readiness

- [ ] No placeholder content is published as final content
- [ ] No fake reviews, testimonials, business details, or social links
- [ ] Final domain replaces the localhost site URL
- [ ] Resend sender domain is verified
- [ ] Real Open Graph image is selected
- [ ] Git working tree is reviewed before commit

# Deployment and Docker

## Environment configuration

Set these values in the hosting platform’s environment-variable or secret-management interface:

```env
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
RESEND_API_KEY=re_your_server_only_key
ENQUIRY_TO_EMAIL=team@example.com
ENQUIRY_FROM_EMAIL=Zazu Adventures <hello@your-production-domain.example>
```

`NEXT_PUBLIC_SITE_URL` is safe to expose because it is the website URL. The Resend key must remain server-only. Use a verified sending domain before enabling real delivery.

## Docker image

The repository Dockerfile creates a small production image from Next.js standalone output. It deliberately excludes `.env.local` and `node_modules` from the build context.

Build for local use:

```bash
docker build -t zazu-adventures \
  --build-arg NEXT_PUBLIC_SITE_URL=http://localhost:3000 .
```

Run with a local environment file:

```bash
docker run --rm -p 3000:3000 --env-file .env.local zazu-adventures
```

Open `http://localhost:3000`.

For production, set the public URL at image build time and pass the Resend values only at runtime:

```bash
docker build -t zazu-adventures \
  --build-arg NEXT_PUBLIC_SITE_URL=https://your-production-domain.example .

docker run --rm -p 3000:3000 \
  -e RESEND_API_KEY \
  -e ENQUIRY_TO_EMAIL \
  -e ENQUIRY_FROM_EMAIL \
  zazu-adventures
```

The image listens on port `3000` and runs as a non-root `nextjs` user.

## Deployment checks

1. Configure the real public URL and server-only email variables.
2. Verify the sender domain in Resend.
3. Build and deploy the image.
4. Confirm `/robots.txt`, `/sitemap.xml`, and the security headers over HTTPS.
5. Submit a real enquiry and verify the received email’s reply-to address.
6. Complete the manual items in [Phase 14 QA](PHASE-14-QA.md).

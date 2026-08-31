import Link from "next/link";

import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            404
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            This page couldn&apos;t be found.
          </h1>
          <p className="mt-5 leading-7 text-muted-foreground">
            The page you&apos;re looking for may have moved or no longer exists.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Back Home
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

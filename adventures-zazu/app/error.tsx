"use client";

import { useEffect } from "react";

import Container from "@/components/ui/Container";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[60vh] py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Something went wrong
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            We couldn&apos;t load this page.
          </h1>
          <p className="mt-5 leading-7 text-muted-foreground">
            Please try again. If the problem continues, you can contact Zazu
            Adventures.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Try Again
          </button>
        </div>
      </Container>
    </main>
  );
}

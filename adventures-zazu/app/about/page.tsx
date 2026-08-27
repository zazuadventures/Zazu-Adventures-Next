import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Zazu Adventures and the approach behind our travel experiences.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-surface-soft">
        <Container>
          <div className="py-6">
            <Breadcrumbs items={[{ label: "About" }]} />
          </div>

          <div className="max-w-3xl py-16 sm:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Zazu Adventures
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Travel with intention.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Zazu Adventures helps travellers explore destinations through
              thoughtfully planned travel experiences and practical trip support.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                Our approach
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Simple planning. Meaningful experiences.
              </h2>
            </div>

            <div className="space-y-6 leading-8 text-muted-foreground">
              <p>
                Every journey starts with understanding where you want to go and
                what you want to experience.
              </p>
              <p>
                Zazu Adventures brings together experiences, destinations and
                travel services to help create a journey that works for your plans.
              </p>
              <p>
                Whether you&apos;re looking for a specific experience or planning a
                wider trip, you can start by telling us what you&apos;re looking for.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] opacity-80">
              Start planning
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a journey in mind?
            </h2>
            <p className="mt-5 leading-7 opacity-90">
              Tell us what you&apos;re planning and start the conversation.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Make an Enquiry
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

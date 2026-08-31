import type { Metadata } from "next";

import EnquiryForm from "@/components/contact/EnquiryForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Zazu Adventures to start planning your journey.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-surface-soft">
        <Container>
          <div className="py-6">
            <Breadcrumbs items={[{ label: "Contact" }]} />
          </div>

          <div className="max-w-3xl py-16 sm:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Contact Zazu Adventures
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Tell us about your trip.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Share your travel plans and we&apos;ll help you explore the next
              steps for your journey.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            <EnquiryForm />

            <aside className="h-fit border border-border bg-surface-soft p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Planning a trip?</h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                The more information you provide, the easier it is for us to
                understand what you&apos;re looking for.
              </p>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-sm font-medium">What can you ask us about?</p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                  <li>Experiences and tours</li>
                  <li>Travel services</li>
                  <li>Custom itineraries</li>
                  <li>Destinations</li>
                  <li>General travel enquiries</li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

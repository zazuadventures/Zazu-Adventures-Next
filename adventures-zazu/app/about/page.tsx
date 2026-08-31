import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  CalendarCheck,
  Compass,
  HeartHandshake,
  MapPin,
  SlidersHorizontal,
} from "lucide-react";

import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { googleTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About Zazu Adventures",
  description:
    "Meet Zazu Adventures, a Victoria Falls-based travel company creating memorable journeys across Zimbabwe and Southern Africa.",
  alternates: { canonical: "/about" },
};

const reasons = [
  {
    title: "Local Knowledge",
    icon: MapPin,
    description:
      "We know Victoria Falls and the surrounding region because this is where we operate.",
  },
  {
    title: "Personal Service",
    icon: HeartHandshake,
    description:
      "From your first enquiry to the end of your journey, we are here to help.",
  },
  {
    title: "Curated Experiences",
    icon: Compass,
    description:
      "We select experiences designed to make your time in Southern Africa count.",
  },
  {
    title: "Flexible Travel",
    icon: SlidersHorizontal,
    description:
      "Whether you are travelling solo, as a couple, with family or in a group, we help shape a trip around you.",
  },
  {
    title: "Reliable Planning",
    icon: CalendarCheck,
    description:
      "Transfers, activities, accommodation and itineraries are coordinated to make travel feel straightforward.",
  },
  {
    title: "Beyond the Postcard",
    icon: BookOpen,
    description:
      "We want you to experience not only famous sights, but also the culture, people and stories behind them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Zazu Adventures"
        title="Adventure starts here."
        description="Zazu Adventures is a Victoria Falls-based travel company creating memorable journeys across Zimbabwe and Southern Africa."
        image="/images/about/contact-hero.webp"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-accent">
              Who we are
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Travel with people who know Africa.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
              <p>
                Zazu Adventures is a locally rooted travel company based in
                Victoria Falls, Zimbabwe. We create authentic African travel
                experiences, from guided tours and wildlife safaris to cultural
                experiences, adventure activities and carefully planned
                multi-day journeys across Southern Africa.
              </p>

              <p>
                Our goal is simple: make exploring Africa exciting, personal and
                easy. We combine local knowledge with reliable planning to help
                travellers experience the places, people and wildlife that make
                this region extraordinary.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-surface-soft py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">
              Why Zazu
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Why travel with Zazu?
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="rounded-xs bg-background p-6"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">
                    {reason.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <TestimonialsSection items={googleTestimonials} />

      <section className="bg-primary py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm text-accent font-semibold opacity-80">
              Start your adventure
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-background tracking-tight sm:text-3xl">
              Where will your adventure take you?
            </h2>
            <p className="mt-5 leading-7 text-background opacity-90">
              From Victoria Falls to the Okavango Delta, from Zimbabwe&apos;s
              wilderness to the deserts of Namibia, your next adventure starts
              here.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/experiences"
                className="inline-flex rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Explore Experiences
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-primary-foreground/50 text-background px-6 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Plan My Trip
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

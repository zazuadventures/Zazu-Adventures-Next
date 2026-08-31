import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";

import ExperienceCard from "@/components/experiences/ExperienceCard";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { getExperienceBySlug } from "@/lib/experiences";
import { getAllServices, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return getAllServices().map((service) => ({
    slug: service.slug,
  }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/travel-services/${service.slug}` },
  };
}

export default async function TravelServicePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const availableExperiences =
    service.availableOptions?.flatMap((option) => {
      const experienceSlug = option.href?.split("/").filter(Boolean).pop();
      const experience = experienceSlug
        ? getExperienceBySlug(experienceSlug)
        : undefined;

      return experience ? [experience] : [];
    }) ?? [];

  return (
    <>
      <PageHero
        eyebrow="Travel Service"
        title={service.title}
        description={service.shortDescription}
        image={service.image ?? "/images/travel-services/travel-services-hero.webp"}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold tracking-tight sm:text-xl">
                How we can help
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground">
                {service.description}
              </p>

              <h2 className="mt-12 text-xl font-semibold sm:text-xl">
                What we can arrange
              </h2>

              <ul className="mt-6 space-y-4">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 leading-7 text-muted-foreground"
                  >
                    <Check aria-hidden="true" className="mt-1 shrink-0 text-primary" size={18} />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {availableExperiences.length ? (
                <div className="mt-12">
                  <h2 className="text-xl font-semibold sm:text-xl">Available options</h2>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {availableExperiences.map((experience) => (
                      <ExperienceCard key={experience.id} experience={experience} />
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-12 border-t border-border pt-10">
                <h2 className="text-xl font-semibold sm:text-xl">How it works</h2>
                <ol className="mt-6 space-y-5">
                  {service.howItWorks.map((step, index) => (
                    <li key={step} className="flex gap-4 text-sm leading-6 text-muted-foreground">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="h-fit border border-border bg-surface-soft p-6 sm:p-8">
              <h2 className="text-xl font-semibold">
                Tell us what you need
              </h2>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {service.enquiryPrompt}
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {service.id === "custom-itineraries"
                  ? "Send your trip ideas"
                  : "Make an enquiry"}
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

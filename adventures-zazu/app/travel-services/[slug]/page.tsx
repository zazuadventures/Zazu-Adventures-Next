import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
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

  return (
    <>
      <section className="border-b border-border bg-surface-soft">
        <Container>
          <div className="py-6">
            <Breadcrumbs
              items={[
                {
                  label: "Travel Services",
                  href: "/travel-services",
                },
                {
                  label: service.title,
                },
              ]}
            />
          </div>

          <div className="max-w-4xl py-16 sm:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Travel Service
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              {service.shortDescription}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight">
                How we can help
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground">
                {service.description}
              </p>

              <h2 className="mt-12 text-2xl font-semibold">
                What&apos;s included
              </h2>

              <ul className="mt-6 space-y-4">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 leading-7 text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="h-fit border border-border bg-surface-soft p-6 sm:p-8">
              <h2 className="text-xl font-semibold">
                Plan your trip
              </h2>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Tell us what you&apos;re planning and we&apos;ll help you
                explore the available options.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Make an Enquiry
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

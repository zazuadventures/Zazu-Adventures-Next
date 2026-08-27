import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import ServiceCard from "@/components/services/ServiceCard";
import { getAllServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Travel Services",
  description:
    "Explore travel planning and support services from Zazu Adventures.",
};

export default function TravelServicesPage() {
  const services = getAllServices();

  return (
    <>
      <section className="border-b border-border bg-surface-soft py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Travel Services
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Travel made simpler.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              From transfers and guided experiences to custom
              itineraries, get help bringing your journey together.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
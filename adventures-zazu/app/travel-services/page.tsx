import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/services/ServiceCard";
import { getAllServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Travel Services",
  description:
    "Explore travel planning and support services from Zazu Adventures.",
  alternates: { canonical: "/travel-services" },
};

export default function TravelServicesPage() {
  const services = getAllServices();

  return (
    <>
      <PageHero
        eyebrow="Travel Services"
        title="Travel services for your journey."
        description="From private transfers and selected experiences to accommodation, itinerary design and practical travel planning, we help bring your trip together."
        image="/images/travel-services/travel-services-hero.webp"
      />

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

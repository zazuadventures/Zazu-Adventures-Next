import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";
import Container from "../ui/Container";
import { getFeaturedServices } from "@/lib/services";

export default function TravelServices() {
  const services = getFeaturedServices();

  return (
    <section className="py-20 bg-surface sm:py-28">
      <Container>
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-6">
          <div className="max-w-2xl">
            <p className="text-md font-semibold text-accent">
              Travel Services
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-3xl">
              Support for the journey.
            </h2>
          </div>
          <Link
            href="/travel-services"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:inline-flex"
          >
            View all services
            <ChevronRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-10 flex lg:hidden">
          <Link
            href="/travel-services"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View all services
            <ChevronRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

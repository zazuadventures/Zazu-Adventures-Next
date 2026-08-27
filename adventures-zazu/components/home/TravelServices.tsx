import Link from "next/link";
import ServiceCard from "@/components/services/ServiceCard";
import Container from "../ui/Container";
import { getFeaturedServices } from "@/lib/services";

export default function TravelServices() {
  const services = getFeaturedServices();

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Travel Services
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Support for the journey.
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Get help with the practical parts of your trip, from transfers
              and planning to guided experiences.
            </p>
          </div>

          <Link href="/travel-services" className="text-sm font-semibold">
            View all services &rarr;
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

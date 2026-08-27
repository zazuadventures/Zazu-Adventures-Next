import Link from "next/link";
import type { TravelService } from "@/types/service";

type ServiceCardProps = {
  service: TravelService;
};

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <Link
      href={`/travel-services/${service.slug}`}
      className="group border border-border bg-surface p-6 transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
        Zazu Adventures
      </p>

      <h2 className="mt-4 text-2xl font-semibold tracking-tight">
        {service.title}
      </h2>

      <p className="mt-4 leading-7 text-muted-foreground">
        {service.shortDescription}
      </p>

      <span className="mt-7 inline-block text-sm font-semibold">
        Learn more →
      </span>
    </Link>
  );
}
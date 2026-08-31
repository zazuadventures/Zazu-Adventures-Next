import Link from "next/link";
import {
  CarFront,
  ClipboardList,
  Compass,
  Hotel,
  MapPinned,
  PlaneLanding,
  Route,
  type LucideIcon,
} from "lucide-react";

import type { TravelService } from "@/types/service";

type ServiceCardProps = {
  service: TravelService;
};

const serviceIcons: Record<string, LucideIcon> = {
  "airport-transfers": PlaneLanding,
  "private-transfers": CarFront,
  "guided-tours": MapPinned,
  "accommodation-assistance": Hotel,
  "custom-itineraries": Route,
  "travel-planning": ClipboardList,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = serviceIcons[service.id] ?? Compass;

  return (
    <Link
      href={`/travel-services/${service.slug}`}
      className="group shadow-xs p-6 bg-primary/5 transition-colors hover:bg-primary/10 hover:shadow-sm rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-8"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-primary">
        <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
      </span>

      <h2 className="mt-6 text-base font-semibold tracking-tight sm:text-lg">
        {service.title}
      </h2>

      <p className="mt-4 leading-7 text-muted-foreground">
        {service.shortDescription}
      </p>
    </Link>
  );
}

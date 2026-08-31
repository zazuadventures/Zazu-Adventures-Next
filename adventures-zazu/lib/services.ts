import { services } from "@/data/services";
import type { TravelService } from "@/types/service";

export function getAllServices(): TravelService[] {
  return services;
}

export function getServiceBySlug(slug: string): TravelService | undefined {
  return services.find((service) => service.slug === slug);
}

export function getFeaturedServices(): TravelService[] {
  return services.filter((service) => service.featured);
}

import { destinations } from "@/data/destinations";
import type { Destination } from "@/types/destination";

export function getAllDestinations(): Destination[] {
  return destinations;
}

export function getDestinationBySlug(
  slug: string
): Destination | undefined {
  return destinations.find(
    (destination) => destination.slug === slug
  );
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter(
    (destination) => destination.featured
  );
}
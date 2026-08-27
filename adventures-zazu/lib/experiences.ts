import { experiences } from "@/data/experiences";
import type { Experience, ExperienceCategory } from "@/types";

export function getAllExperiences(): Experience[] {
  return experiences;
}

export function getExperienceBySlug(
  slug: string
): Experience | undefined {
  return experiences.find(
    (experience) => experience.slug === slug
  );
}

export function getExperiencesByCategory(
  category: ExperienceCategory
): Experience[] {
  return experiences.filter(
    (experience) => experience.category === category
  );
}

export function getFeaturedExperiences(): Experience[] {
  return experiences.filter(
    (experience) => experience.featured
  );
}

export function getExperienceCategoryPath(
  category: ExperienceCategory
): string {
  switch (category) {
    case "day-trip":
      return "day-trips";

    case "multi-day-trip":
      return "multi-day-trips";

    case "package":
      return "packages";
  }
}
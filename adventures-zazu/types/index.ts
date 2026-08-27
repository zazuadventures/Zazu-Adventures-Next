export type ExperienceCategory =
  | "day-trip"
  | "multi-day-trip"
  | "package";

export type ItineraryDay = {
  day: number;
  title: string;
  activities: string[];
};

export type ExperienceFAQ = {
  question: string;
  answer: string;
};

export type Experience = {
  id: string;
  slug: string;
  title: string;
  category: ExperienceCategory;

  destination: string;
  destinationSlug: string;
  duration: string;

  shortDescription: string;
  description: string;

  image: string;
  gallery: string[];

  highlights: string[];

  included: string[];
  excluded: string[];

  itinerary: ItineraryDay[];

  faqs: ExperienceFAQ[];

  featured?: boolean;
};

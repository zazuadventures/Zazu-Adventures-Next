export type ExperienceCategory =
  | "day-trip"
  | "multi-day-trip"
  | "package"
  | "activity"
  | "transfer";

export type ItineraryDay = {
  day: number;
  title: string;
  location?: string;
  overnight?: string;
  meals?: string[];
  activities: {
    time: string;
    title?: string;
    description: string;
  }[];
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
  price?: {
    from: number;
    currency: string;
    per: string;
    note: string;
  };

  shortDescription: string;
  description: string;

  image: string;
  gallery: string[];

  highlights: string[];

  included: string[];
  excluded: string[];

  itinerary: ItineraryDay[];

  faqs: ExperienceFAQ[];

  overview?: {
    title: string;
    description: string;
    route: string[];
    experience: string;
  };
  accommodation?: {
    standard: string;
    upgrade: string;
  };
  travelStyle?: string[];
  transport?: string;
  importantNotes?: string[];
  bestTimeToVisit?: string;
  groupSize?: string;
  physicalLevel?: string;
  seo?: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalSlug: string;
  };
  booking?: {
    type: "enquiry";
    availability: "on-request";
    minimumTravellers: number;
    priceFrom: number;
    currency: string;
  };

  featured?: boolean;
};

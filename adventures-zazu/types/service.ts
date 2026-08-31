export type TravelService = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image?: string;
  features: string[];
  idealFor: string;
  howItWorks: string[];
  availableOptions?: {
    title: string;
    description: string;
    href?: string;
  }[];
  enquiryPrompt: string;
  featured?: boolean;
};

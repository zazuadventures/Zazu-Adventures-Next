export type TravelService = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image?: string;
  features: string[];
  featured?: boolean;
};

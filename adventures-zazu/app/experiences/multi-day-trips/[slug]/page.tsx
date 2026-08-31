import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ExperienceCTA from "@/components/experiences/ExperienceCTA";
import ExperienceFAQs from "@/components/experiences/ExperienceFAQs";
import ExperienceGallery from "@/components/experiences/ExperienceGallery";
import ExperienceHero from "@/components/experiences/ExperienceHero";
import ExperienceHighlights from "@/components/experiences/ExperienceHighlights";
import ExperienceIncluded from "@/components/experiences/ExperienceIncluded";
import ExperienceItinerary from "@/components/experiences/ExperienceItinerary";
import ExperienceOverview from "@/components/experiences/ExperienceOverview";
import {
  getExperienceBySlug,
  getExperiencesByCategory,
} from "@/lib/experiences";
import { getExperienceMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getExperiencesByCategory("multi-day-trip").map((experience) => ({
    slug: experience.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience || experience.category !== "multi-day-trip") {
    return { title: "Experience Not Found" };
  }

  return getExperienceMetadata(experience, "multi-day-trips");
}

export default async function MultiDayTripPage({ params }: PageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience || experience.category !== "multi-day-trip") {
    notFound();
  }

  return (
    <>
      <ExperienceHero experience={experience} />
      <ExperienceOverview experience={experience} />
      <ExperienceHighlights highlights={experience.highlights} />
      <ExperienceIncluded
        included={experience.included}
        excluded={experience.excluded}
      />
      <ExperienceItinerary itinerary={experience.itinerary} />
      <ExperienceGallery title={experience.title} gallery={experience.gallery} />
      <ExperienceFAQs faqs={experience.faqs} />
      <ExperienceCTA />
    </>
  );
}

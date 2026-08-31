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

export function generateStaticParams() {
  return getExperiencesByCategory("day-trip").map(
    (experience) => ({
      slug: experience.slug,
    })
  );
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  return getExperienceMetadata(experience, "day-trips");
}

export default async function DayTripPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const experience = getExperienceBySlug(slug);

  if (!experience || experience.category !== "day-trip") {
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

import type { Metadata } from "next";

import type { Experience } from "@/types";

export function getExperienceMetadata(
  experience: Experience,
  categoryPath: string,
): Metadata {
  const title = experience.seo?.metaTitle ?? experience.title;
  const description =
    experience.seo?.metaDescription ?? experience.shortDescription;
  const canonicalSlug = experience.seo?.canonicalSlug ?? experience.slug;
  const canonical = `/experiences/${categoryPath}/${canonicalSlug}`;

  return {
    title,
    description,
    keywords: experience.seo?.keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      images: [{ url: experience.image, alt: experience.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [experience.image],
    },
  };
}

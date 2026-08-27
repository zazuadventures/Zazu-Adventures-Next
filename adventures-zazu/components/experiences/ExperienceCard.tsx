import Image from "next/image";
import Link from "next/link";

import type { Experience } from "@/types";
import { getExperienceCategoryPath } from "@/lib/experiences";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  const categoryPath = getExperienceCategoryPath(
    experience.category
  );

  return (
    <Link
      href={`/experiences/${categoryPath}/${experience.slug}`}
      className="group overflow-hidden border border-border bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-soft">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
          {experience.category.replace("-", " ")}
        </p>

        <h2 className="mt-3 text-xl font-semibold">
          {experience.title}
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {experience.destination} · {experience.duration}
        </p>

        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          {experience.shortDescription}
        </p>

        <span className="mt-6 inline-block text-sm font-semibold">
          Explore →
        </span>
      </div>
    </Link>
  );
}
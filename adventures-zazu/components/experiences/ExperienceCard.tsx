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
  const priceLabel = experience.price
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: experience.price.currency,
        maximumFractionDigits: 0,
      }).format(experience.price.from)
    : null;

  return (
    <Link
      href={`/experiences/${categoryPath}/${experience.slug}`}
      className="group border border-border rounded-sm bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-4/3 bg-surface-soft">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {priceLabel ? (
          <div className="absolute -left-2 top-6 z-20 rounded-br-sm rounded-t-sm bg-[#223441] px-4 py-2 shadow-lg">
            <span className="text-2xl font-semibold text-white sm:text-xl">
              {priceLabel}
            </span>
            <div
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-0 w-0 border-l-8 border-l-transparent border-t-8px border-t-[#223441]"
            />
          </div>
        ) : null}
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold sm:text-xl">
          {experience.title}
        </h2>

        <p className="mt-4 text-md lg:text-sm leading-6 line-clamp-3 text-muted-foreground">
          {experience.shortDescription}
        </p>

        <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-base font-medium text-muted-foreground">
          <svg
            aria-hidden="true"
            className="h-4 w-4 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2"
            />
            <circle cx="12" cy="12" r="9" />
          </svg>
          <span>{experience.duration}</span>
        </div>
      </div>
    </Link>
  );
}

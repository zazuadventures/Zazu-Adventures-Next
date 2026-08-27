import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";
import type { Experience } from "@/types";
import { getExperienceCategoryPath } from "@/lib/experiences";

type ExperienceHeroProps = {
  experience: Experience;
};

export default function ExperienceHero({
  experience,
}: ExperienceHeroProps) {
  const categoryPath = getExperienceCategoryPath(
    experience.category
  );

  const categoryLabel = experience.category
    .replace("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <section>
      <div className="border-b border-border bg-surface-soft py-6">
        <Container>
          <Breadcrumbs
            items={[
              {
                label: "Experiences",
                href: "/experiences",
              },
              {
                label: categoryLabel,
                href: `/experiences/${categoryPath}`,
              },
              {
                label: experience.title,
              },
            ]}
          />
        </Container>
      </div>

      <div className="relative aspect-[16/8] min-h-[420px] overflow-hidden bg-surface-soft">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container>
        <div className="max-w-4xl py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {categoryLabel}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {experience.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>{experience.destination}</span>
            <span>{experience.duration}</span>
          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
            {experience.shortDescription}
          </p>
        </div>
      </Container>
    </section>
  );
}
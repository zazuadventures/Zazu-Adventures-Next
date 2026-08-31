import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import ExperienceGrid from "../experiences/ExperienceGrid";
import { getExperienceBySlug } from "@/lib/experiences";

const featuredActivitySlugs = [
  "victoria-falls-guided-walking-tour",
  "zambezi-dinner-cruise",
  "victoria-falls-wildlife-safari",
  "boma-dinner-drum-show",
  "victoria-falls-flight-of-the-angels",
  "victoria-falls-big-cat-conservation-experience",
] as const;

export default function FeaturedExperiences() {
  const experiences = featuredActivitySlugs.flatMap((slug) => {
    const experience = getExperienceBySlug(slug);

    return experience?.category === "activity" ? [experience] : [];
  });

  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-6">
          <div className="max-w-2xl">
            <p className="text-md font-semibold text-accent">
              Featured Experiences
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-3xl">
              Start exploring.
            </h2>
          </div>
          <Link
            href="/experiences"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:inline-flex"
          >
            Browse all experiences
            <ChevronRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="mt-12">
          <ExperienceGrid experiences={experiences} />
        </div>

        <div className="mt-10 flex lg:hidden">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Browse all experiences
            <ChevronRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

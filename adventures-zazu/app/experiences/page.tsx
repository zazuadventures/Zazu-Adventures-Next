import Link from "next/link";
import Container from "@/components/ui/Container";
import ExperienceGrid from "@/components/experiences/ExperienceGrid";
import { getAllExperiences } from "@/lib/experiences";

const categories = [
  {
    title: "All Experiences",
    href: "/experiences",
  },
  {
    title: "Day Trips",
    href: "/experiences/day-trips",
  },
  {
    title: "Multi-Day Trips",
    href: "/experiences/multi-day-trips",
  },
  {
    title: "Packages",
    href: "/experiences/packages",
  },
];

export default function ExperiencesPage() {
  const experiences = getAllExperiences();

  return (
    <>
      <section className="border-b border-border bg-surface-soft py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Experiences
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Discover your next adventure.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore day trips, multi-day journeys and travel packages
              designed to help you experience more.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <nav
            aria-label="Experience categories"
            className="flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {category.title}
              </Link>
            ))}
          </nav>

          <div className="mt-12">
            <ExperienceGrid experiences={experiences} />
          </div>
        </Container>
      </section>
    </>
  );
}
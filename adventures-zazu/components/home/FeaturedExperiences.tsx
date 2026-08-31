import Link from "next/link";
import Container from "../ui/Container";
import ExperienceGrid from "../experiences/ExperienceGrid";
import { getFeaturedExperiences } from "@/lib/experiences";

export default function FeaturedExperiences() {
  const experiences = getFeaturedExperiences();

  return (
    <section className="bg-surface-soft py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Featured
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Start exploring.
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Discover some of the experiences currently available through
              Zazu Adventures.
            </p>
          </div>

          <Link
            href="/experiences"
            className="text-sm font-semibold text-primary hover:underline"
          >
            View all experiences →
          </Link>
        </div>

        <div className="mt-12">
          <ExperienceGrid experiences={experiences} />
        </div>
      </Container>
    </section>
  );
}
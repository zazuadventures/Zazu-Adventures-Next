import Container from "@/components/ui/Container";
import ExperienceGrid from "@/components/experiences/ExperienceGrid";
import { getExperiencesByCategory } from "@/lib/experiences";

export const metadata = {
  title: "Day Trips",
  description: "Explore day trip experiences with Zazu Adventures.",
};

export default function DayTripsPage() {
  const experiences = getExperiencesByCategory("day-trip");

  return (
    <>
      <section className="border-b border-border bg-surface-soft py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Experiences
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Day Trips
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore memorable destinations and experiences when you have
              one day to make the most of your journey.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <ExperienceGrid experiences={experiences} />
        </Container>
      </section>
    </>
  );
}
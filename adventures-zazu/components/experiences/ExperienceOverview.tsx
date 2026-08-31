import Container from "@/components/ui/Container";
import type { Experience } from "@/types";

type ExperienceOverviewProps = {
  experience: Experience;
};

export default function ExperienceOverview({
  experience,
}: ExperienceOverviewProps) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            About this experience
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Overview
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
            {experience.description
              .split("\n")
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </div>

      </Container>
    </section>
  );
}

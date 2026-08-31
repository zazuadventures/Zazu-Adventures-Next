import Container from "@/components/ui/Container";
import type { Experience } from "@/types";

type ExperienceOverviewProps = {
  experience: Experience;
};

export default function ExperienceOverview({
  experience,
}: ExperienceOverviewProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Overview
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              {experience.description
                .split("\n")
                .filter(Boolean)
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
          </div>

          <aside className="h-fit border border-border bg-surface-soft p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              Experience details
            </p>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm text-muted-foreground">
                  Destination
                </dt>

                <dd className="mt-1 font-medium">
                  {experience.destination}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-muted-foreground">
                  Duration
                </dt>

                <dd className="mt-1 font-medium">
                  {experience.duration}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/ui/Container";
import type { ItineraryDay } from "@/types";

type ExperienceItineraryProps = {
  itinerary: ItineraryDay[];
};

export default function ExperienceItinerary({
  itinerary,
}: ExperienceItineraryProps) {
  if (!itinerary.length) {
    return null;
  }

  return (
    <section className="bg-surface-soft py-16 sm:py-20">
      <Container>
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Itinerary
          </h2>

          <div className="mt-10 space-y-10">
            {itinerary.map((day) => (
              <article
                key={day.day}
                className="border-l-2 border-primary pl-6 sm:pl-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                  Day {day.day}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {day.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {day.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex gap-3 leading-7 text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground"
                      />

                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
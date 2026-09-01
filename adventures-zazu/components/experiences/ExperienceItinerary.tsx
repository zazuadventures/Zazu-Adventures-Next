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
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            Your Journey
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Itinerary
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {itinerary.map((day) => (
            <article
              key={day.day}
              className="rounded-[1.25rem] bg-white p-6 text-left transition duration-300 sm:p-8"
            >
              <div className="mx-auto w-full max-w-2xl border-b border-[#203A4A]/10 pb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                  Day {String(day.day).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#223441] sm:text-2xl">
                  {day.title}
                </h3>
              </div>

              <div className="mx-auto mt-6 w-full max-w-2xl text-left">
                {day.activities.map((activity, activityIndex) => (
                  <div
                    key={`${activity.time}-${activityIndex}`}
                    className="grid grid-cols-[42px_minmax(0,1fr)] gap-2 pb-5 last:pb-0"
                  >
                    <span className="text-sm font-semibold leading-7 text-[#223441]">
                      {activity.time}
                    </span>

                    <div>
                      {activity.title && (
                        <p className="font-semibold leading-7 text-[#223441]">
                          {activity.title}
                        </p>
                      )}
                      <p
                        className={`leading-7 text-gray-600 ${
                          activity.title ? "mt-1" : ""
                        }`}
                      >
                        {activity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

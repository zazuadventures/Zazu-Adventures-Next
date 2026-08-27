import Link from "next/link";
import Container from "../ui/Container";

const categories = [
  {
    title: "Day Trips",
    description:
      "Make the most of a day with carefully planned experiences and unforgettable destinations.",
    href: "/experiences/day-trips",
  },
  {
    title: "Multi-Day Trips",
    description:
      "Slow down, explore further and experience more with thoughtfully planned journeys.",
    href: "/experiences/multi-day-trips",
  },
  {
    title: "Packages",
    description:
      "Combine destinations and experiences into a complete adventure designed around your trip.",
    href: "/experiences/packages",
  },
];

export default function ExperienceCategories() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Explore
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Find the right adventure for you.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            From unforgettable day experiences to longer journeys, discover
            ways to explore with Zazu Adventures.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group border border-border bg-surface p-7 transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="text-sm font-semibold text-primary">
                Explore
              </span>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                {category.title}
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {category.description}
              </p>

              <span className="mt-8 inline-block text-sm font-semibold text-foreground">
                View experiences →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
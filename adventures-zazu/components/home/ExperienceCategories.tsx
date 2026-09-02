import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";

const categories = [
  {
    title: "Activities",
    description:
      "Discover memorable experiences, from wildlife encounters to Victoria Falls adventures.",
    href: "/experiences/activities",
    image: "/images/home/home-activities.webp",
  },
  {
    title: "Day Trips",
    description:
      "Make the most of a day with full-day safari and cross-border experiences.",
    href: "/experiences/day-trips",
    image: "/images/home/home-day-trips.webp",
  },
  {
    title: "Multi-Day Trips",
    description:
      "Slow down, explore further and experience more with thoughtfully planned journeys.",
    href: "/experiences/multi-day-trips",
    image: "/images/home/home-multi-day.webp",
  },
];

export default function ExperienceCategories() {
  return (
    <section className="py-20 bg-surface sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-lg font-semibold text-accent">
            Explore Experiences
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-3xl">
            Find the right adventure for you.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group block overflow-hidden rounded-xs bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {/* Image */}
              <div className="relative aspect-5/5 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                {/* Heading over image */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="text-2xl font-semibold  text-white sm:text-lg">
                    {category.title}
                  </h3>
                  {/* Description */}
                  <p className="leading-7 mt-3 text-md lg:text-sm text-white/90">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

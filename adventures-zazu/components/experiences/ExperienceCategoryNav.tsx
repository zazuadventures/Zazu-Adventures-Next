import Link from "next/link";

const categories = [
  { title: "All Experiences", href: "/experiences" },
  { title: "Activities", href: "/experiences/activities" },
  { title: "Day Trips", href: "/experiences/day-trips" },
  { title: "Multi-Day Trips", href: "/experiences/multi-day-trips" },
];

type ExperienceCategoryNavProps = {
  activeHref: string;
};

export default function ExperienceCategoryNav({
  activeHref,
}: ExperienceCategoryNavProps) {
  return (
    <nav aria-label="Experience categories" className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = category.href === activeHref;

        return (
          <Link
            key={category.href}
            href={category.href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:bg-surface-soft"
            }`}
          >
            {category.title}
          </Link>
        );
      })}
    </nav>
  );
}

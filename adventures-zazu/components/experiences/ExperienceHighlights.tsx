import Container from "@/components/ui/Container";
import { Check } from "lucide-react";

type ExperienceHighlightsProps = {
  highlights: string[];
};

export default function ExperienceHighlights({
  highlights,
}: ExperienceHighlightsProps) {
  if (!highlights.length) {
    return null;
  }

  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            Discover more
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Highlights
          </h2>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-3 rounded-[1.25rem] border border-[#203A4A]/10 bg-white p-4 text-left font-medium leading-6 text-[#223441] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check size={18} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

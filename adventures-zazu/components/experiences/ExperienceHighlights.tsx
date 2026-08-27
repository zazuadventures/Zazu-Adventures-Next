import Container from "@/components/ui/Container";

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
    <section className="bg-surface-soft py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">
          Highlights
        </h2>

        <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="border-t border-border pt-4 font-medium"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
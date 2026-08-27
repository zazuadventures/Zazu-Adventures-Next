import Container from "@/components/ui/Container";

type ExperienceIncludedProps = {
  included: string[];
  excluded: string[];
};

export default function ExperienceIncluded({
  included,
  excluded,
}: ExperienceIncludedProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">
              What&apos;s included
            </h2>

            {included.length ? (
              <ul className="mt-6 space-y-3">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-7 text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-muted-foreground">
                Details coming soon.
              </p>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              What&apos;s not included
            </h2>

            {excluded.length ? (
              <ul className="mt-6 space-y-3">
                {excluded.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-7 text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-border"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-muted-foreground">
                Details coming soon.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import type { ExperienceFAQ } from "@/types";

type ExperienceFAQsProps = {
  faqs: ExperienceFAQ[];
};

export default function ExperienceFAQs({
  faqs,
}: ExperienceFAQsProps) {
  if (!faqs.length) {
    return null;
  }

  return (
    <section className="bg-surface-soft py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Frequently asked questions
          </h2>

          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none font-semibold">
                  <div className="flex items-center justify-between gap-6">
                    <span>{faq.question}</span>

                    <span
                      aria-hidden="true"
                      className="text-xl text-muted-foreground"
                    >
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

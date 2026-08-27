import Link from "next/link";
import Container from "../ui/Container";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/3] bg-[#d9d5c9]">
            <div className="flex h-full items-center justify-center p-6 text-center text-sm text-muted-foreground">
              Zazu Adventures image placeholder
            </div>
          </div>

          <div className="max-w-xl lg:pl-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Zazu
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              A different way to experience travel.
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              Learn more about Zazu Adventures, our approach to travel and the
              experiences we&apos;re creating for our guests.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              About Zazu Adventures
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

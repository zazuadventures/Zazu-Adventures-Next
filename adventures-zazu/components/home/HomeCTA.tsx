import Link from "next/link";
import Container from "../ui/Container";

export default function HomeCTA() {
  return (
    <section className="py-20 bg-surface sm:py-28">
      <Container>
        <div className="bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Start planning
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-semibold tracking-tight sm:text-4xl">
            Ready to start your next adventure?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/75">
            Tell us what you&apos;re looking for and let&apos;s start planning your
            journey.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Plan Your Trip
          </Link>
        </div>
      </Container>
    </section>
  );
}

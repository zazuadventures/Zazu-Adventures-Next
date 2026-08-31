import Link from "next/link";
import Container from "@/components/ui/Container";

export default function ExperienceCTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Interested in this experience?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            Get in touch with Zazu Adventures to start planning your trip.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Enquire About This Experience
          </Link>
        </div>
      </Container>
    </section>
  );
}

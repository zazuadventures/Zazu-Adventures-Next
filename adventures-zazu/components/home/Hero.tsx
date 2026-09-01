import Link from "next/link";
import Container from "../ui/Container";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <HeroCarousel />

      <Container>
        <div className="pointer-events-none relative z-10 flex min-h-svh items-center justify-start py-24 text-left sm:min-h-170 sm:justify-center sm:text-center">
          <div className="pointer-events-auto max-w-3xl sm:mx-auto">
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Discover Africa.
            </h1>

            <p className="mt-6 max-w-2xl text-md leading-8 text-white/90 sm:mx-auto sm:text-md">
              Discover the beauty of Africa with Zazu Adventures. From the
              majestic Victoria Falls and unforgettable Zimbabwe safaris to
              wildlife encountersand  cultural experiences.
            </p>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/experiences"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Explore Experiences
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

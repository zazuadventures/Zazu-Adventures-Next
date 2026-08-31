import Link from "next/link";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#173322] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <Container>
        <div className="relative flex min-h-[680px] items-center py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e2c18e]">
              Zazu Adventures
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Discover Africa.
              <br />
              Travel differently.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Explore unforgettable destinations, wildlife and experiences
              across Zimbabwe and beyond.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/experiences"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#173322] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#173322]"
              >
                Explore Experiences
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#173322]"
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
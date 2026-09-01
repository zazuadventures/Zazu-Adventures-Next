import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "../ui/Container";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-surface sm:py-28">
      <Container className="max-sm:px-6">
        <div className="grid gap-10 shadow-2xl rounded-xs lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-4/3 overflow-hidden bg-[#d9d5c9]">
            <Image
              src="/images/experiences/home-about-zazu.webp"
              alt="Guests enjoying a Zazu Adventures experience"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover rounded-xs"
            />
          </div>

          <div className="max-w-xl p-4 lg:pl-8">
            <p className="text-md font-semibold text-accent">
              About Zazu
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-3xl">
              A different way to experience travel.
            </h2>

            <Link
              href="/about"
              className="mt-7 mb-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              About Zazu Adventures
              <ChevronRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

import Container from "@/components/ui/Container";

export default function ParallaxJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId = 0;

    const updateParallax = () => {
      frameId = 0;
      const section = sectionRef.current;
      const image = imageRef.current;

      if (!section || !image) return;

      const bounds = section.getBoundingClientRect();
      const distanceFromCenter =
        window.innerHeight / 2 - (bounds.top + bounds.height / 2);

      image.style.transform = `translateY(${distanceFromCenter * 0.09}px) scale(1.12)`;
    };

    const onScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-primary text-white"
    >
      <div ref={imageRef} className="absolute -inset-y-12 inset-x-0 will-change-transform">
        <Image
          src="/images/home/home-journey-image.webp"
          alt="Victoria Falls and the surrounding Zimbabwean landscape"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-black/40" />

      <Container>
        <div className="relative z-10 flex min-h-140 items-center py-24 sm:min-h-155">
          <div className="max-w-2xl">
            <p className="text-md font-semibold  text-[#ebc48b]">
              From Victoria Falls to Southern Africa, and beyond.
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Your journey can start with one unforgettable place.
            </h2>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Plan my trip
              <ChevronRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/home/hero-carousel-1.webp",
  "/images/home/hero-carousel-2.webp",
  "/images/home/hero-carousel-3.webp",
  "/images/home/hero-carousel-4.webp",
  "/images/home/hero-carousel-5.webp",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const showPrevious = () => {
    setCurrent((previous) => (previous - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setCurrent((previous) => (previous + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((previous) => (previous + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="pointer-events-none absolute inset-0">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt=""
            fill
            preload={index === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/40" />

      <div className="pointer-events-auto absolute inset-x-0 bottom-8 z-20 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start gap-3">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous hero image"
            className="inline-flex h-12 w-12 touch-manipulation items-center justify-center rounded-full bg-black/20 text-white shadow-black/20 transition-colors hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 18-6-6 6-6"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Show next hero image"
            className="inline-flex h-12 w-12 touch-manipulation items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 18 6-6-6-6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import Container from "./Container";

type PageHeroBreadcrumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  breadcrumbs?: PageHeroBreadcrumb[];
  contentAlignment?: "left" | "center";
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs,
  contentAlignment = "left",
}: PageHeroProps) {
  const isCentered = contentAlignment === "center";

  return (
    <section className="relative isolate overflow-hidden bg-primary text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className={`absolute inset-0 ${
          isCentered
            ? "bg-black/55"
            : "bg-gradient-to-r from-black/80 via-black/55 to-black/25"
        }`}
      />

      <Container className="relative flex min-h-[420px] flex-col justify-end py-16 pt-32 sm:min-h-[460px] sm:py-20 sm:pt-36">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-auto text-sm text-white/75">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={`max-w-3xl ${isCentered ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <p className="text-sm font-semibold  text-[#e2c18e]">
              {eyebrow}
            </p>
          )}
          <h1
            className={`${eyebrow ? "mt-4" : ""} text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl`}
          >
            {title}
          </h1>
          {description && (
            <p
              className={`mt-6 max-w-3xl text-lg leading-8 text-white/85 ${
                isCentered ? "mx-auto" : ""
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

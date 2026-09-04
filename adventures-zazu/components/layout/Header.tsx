"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import MobileNavigation from "@/components/layout/MobileNavigation";
import Container from "@/components/ui/Container";
import { navigationItems } from "@/lib/navigation";

function isActivePath(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 8);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 text-white transition-[background-color,box-shadow] duration-200 lg:absolute",
        hasScrolled
          ? "bg-white/95 text-primary shadow-lg backdrop-blur-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Zazu Adventures home"
          >
            <Image
              src="/images/general/zazulogo.png"
              alt="Zazu Adventures"
              width={64}
              height={55}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {navigationItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    active
                      ? hasScrolled
                        ? "text-primary"
                        : "text-white"
                      : hasScrolled
                        ? "text-primary/75 hover:text-primary"
                        : "text-white/80 hover:text-white",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={[
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2",
                hasScrolled
                  ? "bg-primary text-white focus-visible:ring-primary"
                  : "bg-white text-primary focus-visible:ring-white",
              ].join(" ")}
            >
              Make an Enquiry
            </Link>
          </nav>

          <MobileNavigation hasScrolled={hasScrolled} />
        </div>
      </Container>
    </header>
  );
}

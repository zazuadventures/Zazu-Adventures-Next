"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MobileNavigation from "@/components/layout/MobileNavigation";
import Container from "@/components/ui/Container";
import { navigationItems } from "@/lib/navigation";

function isActivePath(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50  border-white/20 bg-transparent text-white">
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
                      ? "text-white"
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
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Make an Enquiry
            </Link>
          </nav>

          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}

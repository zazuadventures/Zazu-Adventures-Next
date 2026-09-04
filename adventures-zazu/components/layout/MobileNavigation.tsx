"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Container from "@/components/ui/Container";
import { navigationItems } from "@/lib/navigation";

function isActivePath(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

type MobileNavigationProps = {
  hasScrolled: boolean;
};

export default function MobileNavigation({ hasScrolled }: MobileNavigationProps) {
  const pathname = usePathname();

  return (
    <MobileNavigationMenu
      key={pathname}
      pathname={pathname}
      hasScrolled={hasScrolled}
    />
  );
}

type MobileNavigationMenuProps = {
  pathname: string;
  hasScrolled: boolean;
};

function MobileNavigationMenu({
  pathname,
  hasScrolled,
}: MobileNavigationMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktopMediaQuery.matches) {
        setOpen(false);
      }
    };

    desktopMediaQuery.addEventListener("change", closeOnDesktop);

    return () => desktopMediaQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label="Open navigation menu"
        onClick={() => setOpen(true)}
        className={[
          "inline-flex h-11 items-center gap-2 px-1 text-sm font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2",
          hasScrolled
            ? "text-primary focus-visible:ring-primary"
            : "text-white focus-visible:ring-white",
        ].join(" ")}
      >
        <span>Menu</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 7H20M4 12H20M4 17H20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={[
          "fixed inset-0 z-[60] flex min-h-dvh flex-col bg-[#fcfbf8] text-primary transition-opacity duration-200 ease-out",
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div
          className={[
            "border-b border-primary/10 transition-[opacity,transform] duration-200 ease-out",
            open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
          ].join(" ")}
        >
          <Container>
            <div className="flex h-20 items-center justify-between">
              <Link
                href="/"
                onClick={closeMenu}
                className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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

              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>Close</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </Container>
        </div>

        <nav
          className="flex-1 overflow-y-auto"
          aria-label="Mobile navigation links"
        >
          <Container className="py-8 sm:py-10">
            <div>
              {navigationItems.map((item, index) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={[
                      "group flex items-center gap-5 border-b border-primary/10 py-5 transition-[opacity,transform,padding] duration-200 ease-out hover:pl-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:py-6",
                      open
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0",
                    ].join(" ")}
                    aria-current={active ? "page" : undefined}
                    style={{ transitionDelay: open ? `${80 + index * 35}ms` : "0ms" }}
                  >
                    <span className="w-7 text-xs font-semibold tracking-[0.12em] text-primary/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={[
                        "text-2xl font-semibold tracking-tight transition-colors duration-300 sm:text-4xl",
                        active
                          ? "text-accent"
                          : "text-primary group-hover:text-accent",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contact"
              onClick={closeMenu}
              className={[
                "mt-8 inline-flex rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-[opacity,transform,background-color] duration-200 ease-out hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
              ].join(" ")}
              style={{
                transitionDelay: open
                  ? `${80 + navigationItems.length * 35}ms`
                  : "0ms",
              }}
            >
              Make an Enquiry
            </Link>
          </Container>
        </nav>
      </div>
    </div>
  );
}

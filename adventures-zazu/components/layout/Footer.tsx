import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Zazu Adventures home"
            >
              <Image
                src="/images/general/zazulogo.png"
                alt="Zazu Adventures"
                width={72}
                height={62}
                className="h-16 w-auto"
              />
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
              Travel experiences and support for your next journey.
            </p>

          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Explore</h2>

            <nav
              className="mt-4 flex flex-col gap-3"
              aria-label="Footer navigation"
            >
              <Link href="/experiences" className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Experiences
              </Link>
              <Link href="/destinations" className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Destinations
              </Link>
              <Link href="/travel-services" className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Travel Services
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">
              Company
            </h2>

            <nav className="mt-4 flex flex-col gap-3" aria-label="Company navigation">
              <Link href="/about" className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                About
              </Link>
              <Link href="/blog" className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Travel Journal
              </Link>
              <Link href="/contact" className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">
              Start planning
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/70">
              Have a journey in mind? Tell us what you&apos;re planning.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-full bg-background px-5 py-3 text-sm font-semibold text-primary hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Make an Enquiry
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/20 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            © 2026 Zazu Adventures. All rights reserved.
          </p>

          <div
            className="flex items-center gap-3"
            aria-label="Follow Zazu Adventures on social media"
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/30 text-white/75 transition-colors hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
                <path d="M13.75 21v-8h2.7l.4-3h-3.1V8.08c0-.87.25-1.46 1.52-1.46H17V3.94c-.3-.04-1.33-.12-2.52-.12-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.78v8h3.47Z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/30 text-white/75 transition-colors hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/30 text-white/75 transition-colors hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

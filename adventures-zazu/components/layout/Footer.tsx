import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              Zazu Adventures
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              Travel experiences and support for your next journey.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Explore</h2>

            <nav
              className="mt-4 flex flex-col gap-3"
              aria-label="Footer navigation"
            >
              <Link href="/experiences" className="text-sm text-muted-foreground hover:text-foreground">
                Experiences
              </Link>
              <Link href="/destinations" className="text-sm text-muted-foreground hover:text-foreground">
                Destinations
              </Link>
              <Link href="/travel-services" className="text-sm text-muted-foreground hover:text-foreground">
                Travel Services
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Company
            </h2>

            <nav className="mt-4 flex flex-col gap-3" aria-label="Company navigation">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Travel Journal
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Start planning
            </h2>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Have a journey in mind? Tell us what you&apos;re planning.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Make an Enquiry
            </Link>
          </div>
        </div>

        <div className="border-t border-border py-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zazu Adventures. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";

import EnquiryForm from "@/components/contact/EnquiryForm";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Zazu Adventures to start planning your journey.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Zazu Adventures"
        title="Tell us about your trip."
        description="Share your travel plans and we&apos;ll help you explore the next steps for your journey."
        image="/images/experiences/tour-around-zimbabwe-5.png"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <EnquiryForm />

          <div className="mt-12 border-t border-border pt-10 sm:mt-16">
            <h2 className="text-xl font-semibold">Reach us on socials</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Follow Zazu Adventures and send us a message on your preferred platform.
            </p>

            <div className="mt-6 flex items-center gap-3" aria-label="Zazu Adventures social media links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

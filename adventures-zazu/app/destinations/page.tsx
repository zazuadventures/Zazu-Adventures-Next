import Container from "@/components/ui/Container";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { getAllDestinations } from "@/lib/destinations";

export const metadata = {
  title: "Destinations",
  description: "Explore destinations available through Zazu Adventures.",
};

export default function DestinationsPage() {
  const destinations = getAllDestinations();

  return (
    <>
      <section className="border-b border-border bg-surface-soft py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Destinations
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Places worth exploring.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discover destinations connected to Zazu Adventures experiences.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.id}
                className="border border-border bg-surface"
              >
                <ImagePlaceholder
                  label={`${destination.name} image coming soon`}
                  className="aspect-[4/3]"
                />

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    {destination.country}
                  </p>

                  <h2 className="mt-3 text-xl font-semibold">
                    {destination.name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {destination.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

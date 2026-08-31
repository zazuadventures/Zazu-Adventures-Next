import Container from "../ui/Container";

const reasons = [
  {
    number: "01",
    title: "Thoughtful experiences",
    description:
      "Travel experiences should feel considered, personal and worth remembering.",
  },
  {
    number: "02",
    title: "Local perspective",
    description:
      "Discover destinations through experiences designed around the places you visit.",
  },
  {
    number: "03",
    title: "Simple planning",
    description:
      "Clear information and straightforward communication make planning easier.",
  },
];

export default function WhyZazu() {
  return (
    <section className="bg-primary py-20 text-white sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e2c18e]">
            Why Zazu
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Travel should be about the experience.
          </h2>

          <p className="mt-5 leading-7 text-white/70">
            We&apos;re building Zazu Adventures around a simple idea: make it
            easier to discover meaningful places and create memorable
            journeys.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.number} className="border-t border-white/20 pt-6">
              <span className="text-sm font-semibold text-[#e2c18e]">
                {reason.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold">
                {reason.title}
              </h3>

              <p className="mt-3 leading-7 text-white/70">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import ExperienceCategoryNav from "@/components/experiences/ExperienceCategoryNav";
import PageHero from "@/components/ui/PageHero";
import PaginatedExperienceGrid from "@/components/experiences/PaginatedExperienceGrid";
import { getExperiencesByCategory } from "@/lib/experiences";

export const metadata: Metadata = {
  title: "Transfers",
  description: "Arrange comfortable, reliable transfers for your journey.",
  alternates: { canonical: "/experiences/transfers" },
};

type TransfersPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function TransfersPage({
  searchParams,
}: TransfersPageProps) {
  const experiences = getExperiencesByCategory("transfer");
  const { page } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Transfers"
        description="Arrange comfortable, reliable transfers for your journey."
        image="/images/experiences/victoria-falls-airport-transfer.png"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <ExperienceCategoryNav activeHref="/experiences/transfers" />
          <div className="mt-12">
            <PaginatedExperienceGrid
              experiences={experiences}
              page={page}
              basePath="/experiences/transfers"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

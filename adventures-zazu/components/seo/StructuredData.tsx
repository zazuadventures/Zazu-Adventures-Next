type StructuredDataProps = {
  siteUrl: string;
};

export default function StructuredData({ siteUrl }: StructuredDataProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Zazu Adventures",
    url: siteUrl,
    description:
      "Victoria Falls-based travel experiences, transfers and multi-day journeys across Southern Africa.",
    logo: `${siteUrl}/images/general/zazulogo.png`,
    areaServed: ["Zimbabwe", "Botswana", "Zambia", "Namibia", "South Africa"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

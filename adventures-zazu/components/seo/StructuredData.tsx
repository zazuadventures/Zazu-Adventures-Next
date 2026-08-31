type StructuredDataProps = {
  siteUrl: string;
};

export default function StructuredData({ siteUrl }: StructuredDataProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Zazu Adventures",
    url: siteUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

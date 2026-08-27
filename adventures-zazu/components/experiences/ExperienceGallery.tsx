import Image from "next/image";
import Container from "@/components/ui/Container";

type ExperienceGalleryProps = {
  title: string;
  gallery: string[];
};

export default function ExperienceGallery({
  title,
  gallery,
}: ExperienceGalleryProps) {
  if (!gallery.length) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">
          Gallery
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <div
              key={image}
              className="relative aspect-[4/3] overflow-hidden bg-surface-soft"
            >
              <Image
                src={image}
                alt={`${title} gallery image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
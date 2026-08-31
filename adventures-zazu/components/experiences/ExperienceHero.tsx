import PageHero from "@/components/ui/PageHero";
import type { Experience } from "@/types";

type ExperienceHeroProps = {
  experience: Experience;
};

export default function ExperienceHero({
  experience,
}: ExperienceHeroProps) {
  return (
    <PageHero
      eyebrow={experience.duration}
      title={experience.title}
      image={experience.image}
      contentAlignment="center"
    />
  );
}

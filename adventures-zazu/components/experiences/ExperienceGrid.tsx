import type { Experience } from "@/types";
import ExperienceCard from "./ExperienceCard";

type ExperienceGridProps = {
  experiences: Experience[];
};

export default function ExperienceGrid({
  experiences,
}: ExperienceGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}

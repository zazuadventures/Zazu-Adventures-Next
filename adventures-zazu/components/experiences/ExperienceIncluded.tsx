import Container from "@/components/ui/Container";
import { Check, X } from "lucide-react";

type ExperienceIncludedProps = {
  included: string[];
  excluded: string[];
};

export default function ExperienceIncluded({
  included,
  excluded,
}: ExperienceIncludedProps) {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.25rem]  bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDF0F1] text-primary">
                <Check size={20} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-[#223441]">
                What&apos;s included
              </h2>
            </div>

            {included.length ? (
              <ul className="mt-6 divide-y divide-[#203A4A]/10">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 py-3 first:pt-0 last:pb-0 text-left text-gray-600"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EDF0F1] text-primary"
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-gray-600">
                Details coming soon.
              </p>
            )}
          </div>

          <div className="rounded-[1.25rem]  bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8EEEE] text-[#A04A4A]">
                <X size={20} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-[#223441]">
                What&apos;s not included
              </h2>
            </div>

            {excluded.length ? (
              <ul className="mt-6 divide-y divide-[#203A4A]/10">
                {excluded.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 py-3 first:pt-0 last:pb-0 text-left text-gray-600"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F8EEEE] text-[#A04A4A]"
                    >
                      <X size={13} strokeWidth={3} />
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-gray-600">
                Details coming soon.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

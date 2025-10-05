import Link from "next/link";
import { formatDate, getWorkExperiences } from "../lib/posts";
import type { WorkExperience } from "../lib/posts";

export const metadata = {
  title: "Work Experience",
  description: "Showcase of professional work experience",
};

export default function WorkExperience() {
  let allExperiences: WorkExperience[] = getWorkExperiences();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Work Experience</h1>
      <div>
        {allExperiences
          .sort((a, b) => {
            if (
              new Date(a.metadata.startDate) >
              new Date(b.metadata.startDate)
            ) {
              return -1;
            }
            return 1;
          })
          .map((experience) => {
            // Try common fields for bullet points. Adjust if your field differs.
            const points =
              Array.isArray((experience as any).metadata?.points)
                ? ((experience as any).metadata.points as string[])
                : Array.isArray((experience as any).metadata?.highlights)
                ? ((experience as any).metadata.highlights as string[])
                : Array.isArray((experience as any).metadata?.description)
                ? ((experience as any).metadata.description as string[])
                : [];

            return (
              <Link
                key={experience.slug}
                className="group flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
                href={`/experience/${experience.slug}`}
              >
                <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                  <h2 className="text-black dark:text-white">
                    {experience.metadata.role} at {experience.metadata.company}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                    {formatDate(experience.metadata.startDate, false)} -{" "}
                    {experience.metadata.endDate
                      ? formatDate(experience.metadata.endDate, false)
                      : "Present"}
                  </p>
                </div>

                {points.length > 0 && (
                  <div className="overflow-hidden max-h-0 group-hover:max-h-64 transition-all duration-300 ease-in-out">
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm">
                      {points.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Link>
            );
          })}
      </div>
    </section>
  );
}

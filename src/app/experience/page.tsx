import { formatDate, getWorkExperiences } from "../lib/posts";
import type { WorkExperience } from "../lib/posts";
import { ExperienceItem } from "./ExperienceItem";

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
            const points =
              Array.isArray((experience as any).metadata?.points)
                ? ((experience as any).metadata.points as string[])
                : Array.isArray((experience as any).metadata?.highlights)
                ? ((experience as any).metadata.highlights as string[])
                : Array.isArray((experience as any).metadata?.description)
                ? ((experience as any).metadata.description as string[])
                : [];

            const rightMeta = `${formatDate(
              experience.metadata.startDate,
              false
            )} - ${experience.metadata.endDate
              ? formatDate(experience.metadata.endDate, false)
              : "Present"}`;

            return (
              <ExperienceItem
                key={experience.slug}
                title={`${experience.metadata.role} at ${experience.metadata.company}`}
                rightMeta={rightMeta}
                points={points}
              />
            );
          })}
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { projects } from "./project-data";
import { ProjectItem } from "./ProjectItem";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Projects</h1>
      <div>
        {projects.map((project, index) => {
          const points = Array.isArray(project.description)
            ? project.description
            : [];

          const githubUrl = project.url?.includes("github.com") ? project.url : undefined;
          const ieeeUrl = project.url?.includes("ieeexplore.ieee.org") ? project.url : undefined;

          return (
            <ProjectItem
              key={index}
              title={project.title}
              stack={project.stack}
              points={points}
              githubUrl={githubUrl}
              ieeeUrl={ieeeUrl}
            />
          );
        })}
      </div>
    </section>
  );
}

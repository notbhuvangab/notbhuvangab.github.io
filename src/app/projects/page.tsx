import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

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

          return (
            <Link
              key={index}
              href={project.url}
              className="group flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <h2 className="text-black dark:text-white">{project.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400">{project.stack}</p>
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

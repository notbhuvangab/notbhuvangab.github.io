"use client";

import { useState } from "react";

interface ProjectItemProps {
  title: string;
  stack?: string;
  points: string[];
  githubUrl?: string;
  ieeeUrl?: string;
}

export function ProjectItem({ title, stack, points, githubUrl, ieeeUrl }: ProjectItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col space-y-1 mb-5">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-2 text-left"
          >
            {/* Chevron */}
            <svg
              className={`h-4 w-4 text-neutral-600 dark:text-neutral-400 transition-transform duration-200 ${open ? "rotate-90" : "rotate-0"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M6.293 17.293a1 1 0 010-1.414L12.172 10 6.293 4.121A1 1 0 117.707 2.707l6.5 6.5a1 1 0 010 1.414l-6.5 6.5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <h2 className="text-black dark:text-white">{title}</h2>
          </button>

          {/* Icon links next to title */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
              aria-label="GitHub repository"
              title="GitHub"
            >
              {/* Simple GitHub mark (generic) */}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.5 8 11 .6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.4-5.6-6.2 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C18 5 19 5.3 19 5.3c.6 1.7.1 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.8-2.9 5.9-5.6 6.2.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.7-1.5 8-5.8 8-11A11.5 11.5 0 0 0 12 .5z"/>
              </svg>
            </a>
          )}
          {ieeeUrl && (
            <a
              href={ieeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
              aria-label="IEEE link"
              title="IEEE"
            >
              {/* Simple diamond-like IEEE mark */}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2l10 10-10 10L2 12 12 2zm0 4.8L6.8 12 12 17.2 17.2 12 12 6.8z"/>
              </svg>
            </a>
          )}
        </div>
        {stack && (
          <p className="text-neutral-600 dark:text-neutral-400">{stack}</p>
        )}
      </div>

      {points.length > 0 && (
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-64" : "max-h-0"}`}>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm">
            {points.map((pt, idx) => (
              <li key={idx}>{pt}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

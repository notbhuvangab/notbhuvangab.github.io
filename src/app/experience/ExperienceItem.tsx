"use client";

import { useState } from "react";

interface ExperienceItemProps {
  title: string;
  rightMeta?: string;
  points: string[];
}

export function ExperienceItem({ title, rightMeta, points }: ExperienceItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col space-y-1 mb-5">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start sm:items-center justify-between gap-2 text-left"
      >
        <div className="flex items-center gap-2">
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
        </div>
        {rightMeta && (
          <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">{rightMeta}</p>
        )}
      </button>

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

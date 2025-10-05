import { format } from "date-fns";

export type WorkExperience = {
  slug: string;
  metadata: {
    role: string;
    company: string;
    startDate: string;
    endDate?: string;
    description: string[]; // Added description field
  };
};

export function formatDate(date: string, includeTime: boolean = false): string {
  const parsedDate = new Date(date);
  return includeTime
    ? format(parsedDate, "MMMM d, yyyy h:mm a")
    : format(parsedDate, "MMM yyyy");
}

export function getWorkExperiences(): WorkExperience[] {
  return [
    {
      slug: "gra-umassd",
      metadata: {
        role: "RA/TA",
        company: "UMass Dartmouth",
        startDate: "2024-01-16",
        endDate: "2025-05-08",
        description: [
          "Led OS labs, mentoring students through core system-level concepts and concurrency modules.",
          "Designed instructional tasks focused on process scheduling and synchronization mechanisms.",
        "Conducted research on AI workflow security frameworks emphasizing multi-agent communication safety.",
        "Investigated interoperability aspects of secure protocol designs for agent-based environments."
        ],
      },
    },
    {
      slug: "swe-ovaledge",
      metadata: {
        role: "Software Engineer",
        company: "OvalEdge",
        startDate: "2022-01-04",
        endDate: "2023-07-28",
        description: [
          "Contributed to modular microservices enabling scalable metadata management workflows.",
          "Worked on secure access control and permission modules ensuring governance across platforms.",
          "Developed connectors and integration components supporting lineage and observability systems.",
          "Collaborated on orchestration layers for ingestion pipelines improving maintainability and fault tolerance."
        ],
      },
    },
    {
      slug: "aby-exp",
      metadata: {
        role: "Software Engineer Intern",
        company: "ABY Farmers",
        startDate: "2021-01-15",
        endDate: "2021-12-18",
        description: [
          "Contributed to analytics workflows focused on understanding customer patterns and behavioral segmentation.",
          "Developed automation components for product verification and image-based validation systems."
        ],
      },
    },
    {
      slug: "ge-exp",
      metadata: {
        role: "Software Engineer Intern",
        company: "Ge Express Logistics",
        startDate: "2020-05-15",
        endDate: "2020-08-18",
        description: [
          "Enhanced efficiency of data-driven cost computation and logistics optimization components.",
          "PostGIS spatial indexing on 500+ ZIP coordinates data, achieving 35% query performance improvement ",
        ],
      },
    }
  ];
}
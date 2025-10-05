export interface Project {
  title: string;
  year: number;
  stack: string;
  description: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Jobs Monitoring Pipeline",
    year: 2024,
    stack: "fastapi | langgraph | reactjs | sqlite",
    description: ["Built AI-driven job fetching Agent using langgraph and fastapi.",
                  "Designed interactive dashboard to display jobs that fit the user's profile."],
    url: "https://github.com/notbhuvangab/job-monitoring-agent",
  },
  {
    title: "dbQualityFusion",
    year: 2024,
    stack: "python | langchain | dbt | mysql",
    description: ["Built AI-driven data validation workflows automating test generation and quality verification.",
                  "Designed interactive dashboards visualizing anomaly detection and validation outcomes."],
    url: "https://github.com/notbhuvangab/dbQualityFusion",
  },
  {
    title: "Deep Learning Hardware Benchmarking",
    year: 2023,
    stack: "C++ | CUDA | MLPerf | PyTorch",
    description: ["Built AI-driven data validation workflows automating test generation and quality verification.",
                  "Designed interactive dashboards visualizing anomaly detection and validation outcomes."],
    url: "#home"
  },
  {
    title: "ML Based Premier League Simulation",
    year: 2023,
    stack: "Python | Tensorflow | SVM | Tkinter ",
    description: ["Created predictive models for football match outcomes using historical performance data.",
                  "Designed dashboards visualizing model insights and comparative performance analysis."],
    url: "https://ieeexplore.ieee.org/document/10335054",
  },
];

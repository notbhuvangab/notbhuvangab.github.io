export interface Project {
  title: string;
  year: number;
  stack: string;
  description: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Finmate - AI Powered Company Benefits and Finances",
    year: 2025,
    stack: "React | AWS(Lambda,Bedrock,Agents) | RAG  ",
    description: [" AI-powered financial assistant that guides new employees through benefits selection",
                  "Specifically worked on Internal RAG for personal knowledgebase and content retrieval/indexing."],
    url: "https://github.com/SujayCh07/codelinc10",
  },
  {
    title: "gigglz - GenZ audiobooks from EPUBs",
    year: 2025,
    stack: "Python | EPUB | Gemini AI| ElevenLabs ",
    description: ["EPUB file ->  audios of all chapters, summarized with fun, modern and Gen-Z lingo.",
                  "Ranking algorithm to create chapter context across generation of content chunks."],
    url: "https://github.com/notbhuvangab/gigglz",
  },
  {
    title: "Jobs Monitoring Pipeline",
    year: 2025,
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

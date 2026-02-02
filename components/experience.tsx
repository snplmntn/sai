"use client";

import { Badge } from "@/components/ui/badge";

const experience = [
  {
    company: "Laundry King MNL",
    period: "July 2025 - Present",
    role: "Co Founder, Lead Full Stack Developer",
    link: "https://laundrykingmnl.com/",
    highlights: [
      "Solely architected, engineered and deployed a highly available RESTful API using MERN with TypeScript, integrating AWS S3 for secure cloud storage with 100% backend test coverage.",
      "Enabled ₱400,000+ in revenue by implementing an efficient order management system for the 80+ active user base, supporting a total of 300+ customers."
    ]
  },
  {
    company: "Freelance",
    period: "Jan 2024 - Present",
    role: "Full Stack Mobile & Web Developer",
    highlights: [
      "Moss Manila: Engineered a MERN-based collaboration platform using Socket.IO for low-latency team messaging and a Node.js/Express AI matching engine with vector-based semantic search to reduce project specification time by 25%.",
      "Baobab Vision: Built a Flutter mobile application leveraging Google ML Kit for real-time face shape analysis and OpenAI for generating context-aware, personalized eyewear recommendations."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4 w-full max-w-4xl mx-auto z-10 relative">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
        <Badge variant="outline" className="font-mono">Work History</Badge>
      </div>

      <div className="relative border-l border-border/50 ml-4 space-y-12">
        {experience.map((job: any, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-semibold">
                {job.link ? (
                  <a href={job.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <span className="text-sm font-mono text-muted-foreground">{job.period}</span>
            </div>
            
            <p className="text-primary text-sm font-medium mb-4">{job.role}</p>
            
            <ul className="space-y-2 text-muted-foreground text-sm">
              {job.highlights.map((item: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-muted-foreground/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface Project {
  title: string;
  role: string;
  desc: string;
  stats: string;
  stack: string[];
  date: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "TickTrack",
    role: "Full Stack Developer (Team CoolPals)",
    desc: "1st Runner Up at PMAX-EMAX Innovation Expo. Built a working AI-powered operational communication prototype in under 2 hours, competing against industry vets.",
    stats: "2-Hour Sprint",
    stack: ["AI Native", "Rapid Prototyping", "Next.js"],
    date: "December 2025"
  },
  {
    title: "Alnay & MedicAI",
    role: "Team Lead, Full Stack Developer",
    desc: "Architected platforms for FDA registries and Kaggle datasets. Targeted addresses 76% medication non-adherence rate. 3rd Place Overall & Clinical Assistant Bounty.",
    stats: "Dual-Awarded",
    stack: ["MERN", "TypeScript", "Big Data"],
    date: "December 2025"
  },
  {
    title: "AWS Cloud Club PUP LMS",
    role: "Backend Developer",
    desc: "Developed auth & data layer for 300+ members.",
    stats: "Cloud Native",
    stack: ["TypeScript", "Supabase"],
    date: "November 2025"
  },
  {
    title: "Budget Wingman",
    role: "Team Lead, Full Stack Developer",
    desc: "Built chatbot extraction logic in a 24-hour sprint. Translates natural language into structured financial database entries.",
    stats: "AI Architecture",
    stack: ["Express.js", "OpenAI", "NLP"],
    date: "April 2025"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4 w-full max-w-6xl mx-auto z-10 relative">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Projects</h2>
        <div className="h-1 w-20 bg-primary/20"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-border/50 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-1">
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                          {project.title} <ArrowDown className="h-4 w-4 -rotate-45" />
                        </a>
                      ) : (
                        project.title
                      )}
                    </CardTitle>
                    <CardDescription className="text-primary font-mono text-xs uppercase tracking-wider">
                      {project.role}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="secondary" className="font-mono text-xs">{project.stats}</Badge>
                    <span className="text-[10px] text-muted-foreground font-mono">{project.date}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-primary/20 bg-primary/5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

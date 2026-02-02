"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const stacks = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Golang", "C", "C++", "Java", "SQL"]
  },
  {
    category: "Frameworks",
    items: ["React", "Tailwind", "Node.js", "Express.js", "FastAPI", "Chi", "Next.js", "Flutter"]
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Bash", "Visual Studio Code", "Postman"]
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS (S3, Lambda, EC2)", "Docker", "Supabase", "Firebase", "Render", "Vercel", "Netlify"]
  }
];

export function TechStack() {
  return (
    <section id="tech" className="py-16 px-4 w-full max-w-6xl mx-auto z-10 relative">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Technical Skills</h2>
        <p className="text-muted-foreground text-sm">A comprehensive overview of my technical expertise and toolset.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stacks.map((stack, index) => (
          <Card key={index} className="p-6 border-border/40 bg-card/20 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">{stack.category}</h3>
            <div className="flex flex-wrap gap-2">
              {stack.items.map((item) => (
                <Badge key={item} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

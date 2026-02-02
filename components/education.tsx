"use client";

import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-16 px-4 w-full max-w-4xl mx-auto z-10 relative">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <Badge variant="outline" className="font-mono">Academic Background</Badge>
      </div>

      <div className="space-y-12">
        <div className="relative pl-8 border-l border-border/50">
          <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-semibold">Polytechnic University of the Philippines</h3>
            <span className="text-sm font-mono text-muted-foreground">2024 - Present</span>
          </div>
          
          <p className="text-primary text-sm font-medium mb-1">Bachelor of Science in Computer Science</p>
          <p className="text-muted-foreground text-xs mb-4">Sta. Mesa, Manila, Philippines</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary" className="text-[10px] bg-primary/10 text-primary border-primary/20">SM Foundation Scholar</Badge>
            <Badge variant="outline" className="text-[10px]">Object Oriented Programming</Badge>
            <Badge variant="outline" className="text-[10px]">Data Structures and Algorithms</Badge>
          </div>
        </div>

        <div className="relative pl-8 border-l border-border/50">
          <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-muted-foreground/30 ring-4 ring-background" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-semibold text-muted-foreground">Polytechnic University of the Philippines – SHS</h3>
            <span className="text-sm font-mono text-muted-foreground">2022 - 2024</span>
          </div>
          
          <p className="text-muted-foreground text-sm font-medium mb-1">Information and Communications Technology Strand</p>
          <p className="text-muted-foreground/60 text-xs mb-4">Sta. Mesa, Manila, Philippines</p>
          
          <Badge variant="secondary" className="text-[10px] bg-primary/10 text-primary border-primary/20">Graduated with High Honors</Badge>
        </div>
      </div>
    </section>
  );
}

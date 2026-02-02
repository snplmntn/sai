"use client";

import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" className="py-16 px-4 w-full max-w-4xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-6">
                <Badge variant="outline" className="font-mono mb-2">About Me</Badge>
                <h2 className="text-3xl font-bold tracking-tight">
                    Building Software Solutions with <br/>
                    <span className="text-primary/60">Purpose & Impact.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                    I am a <span className="text-foreground font-medium">2nd Year Bachelor of Science in Computer Science</span> student at the <span className="text-foreground font-medium">Polytechnic University of the Philippines</span> and an <span className="text-foreground font-medium">SM Foundation Scholar</span>. I blend academic rigor with real-world execution, bridging the gap between complex AI capabilities and intuitive user experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    With a freelance background of <span className="text-foreground font-medium">shipping 8+ projects</span> and multiple <span className="text-foreground font-medium">hackathon wins</span> and participations, I am currently focused on "SOTA" implementation, leveraging <span className="text-foreground font-medium">AI, TypeScript, Python, and AWS</span> to solve complex real-world problems.
                </p>
                <div className="flex flex-wrap gap-8 pt-4">
                    <div className="space-y-1">
                        <p className="font-mono text-xs text-muted-foreground uppercase">Location</p>
                        <p className="font-medium text-sm">Pasay City, Philippines</p>
                    </div>
                    <div className="space-y-1">
                        <p className="font-mono text-xs text-muted-foreground uppercase">Status</p>
                        <p className="font-medium text-green-500 text-sm">Open for Internship & Freelance</p>
                    </div>
                </div>
            </div>
            {/* Optional: Add a profile image placeholder or abstract graphic here */}
            <div className="w-full md:w-1/2 aspect-square bg-muted/20 rounded-2xl border border-border/50 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                    src="/1726327405150.jpg" 
                    alt="Sean Paul Monton Profile" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
            </div>
        </div>
    </section>
  );
}

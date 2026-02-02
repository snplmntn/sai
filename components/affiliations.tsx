"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users2, Globe, Cloud, Code, Trophy } from "lucide-react";

const activeAffiliations = [
  {
    role: "Web Development Lead",
    org: "PUP Manila Microsoft Student Community",
    period: "Sept 2025 - Present",
    icon: Globe,
    type: "Leadership"
  },
  {
    role: "Backend Developer",
    org: "AWS Cloud Club PUP",
    period: "Oct 2025 - Present",
    icon: Cloud,
    type: "Technical"
  },
  {
    role: "Team Lead - Lead Dev",
    org: "Team CoolPals (Hackathon Team)",
    period: "Nov 2025 - Present",
    icon: Trophy,
    type: "Leadership"
  }
];

const legacyAffiliations = [
  {
    role: "Back End Developer",
    org: "AWS Cloud Club Philippines",
    period: "Oct 2024 - Aug 2025",
    icon: Code,
    type: "Technical"
  },
  {
    role: "Junior Web Developer",
    org: "PUP Manila Microsoft Student Community",
    period: "Dec 2024 - Aug 2025",
    icon: Globe,
    type: "Technical"
  },
  {
    role: "Senior Artificial Intelligence Specialist",
    org: "AWS Cloud Club PUP",
    period: "Nov 2024 - Aug 2025",
    icon: Cloud,
    type: "AI/ML"
  }
];

export function Affiliations() {
  return (
    <section id="affiliations" className="py-16 px-4 w-full max-w-4xl mx-auto z-10 relative">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Community & Leadership</h2>
        <Badge variant="outline" className="font-mono">Organizational Roles</Badge>
      </div>

      <div className="space-y-16">
        <div>
          <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Active Contributions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeAffiliations.map((item, index) => (
              <Card key={index} className="p-4 sm:p-6 border-border/50 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all hover:scale-[1.02]">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-base sm:text-lg leading-tight">{item.role}</h3>
                        <Badge variant="secondary" className="text-[10px] uppercase font-bold py-0 h-4">{item.type}</Badge>
                    </div>
                    <p className="text-primary text-sm font-medium">{item.org}</p>
                    <p className="text-xs font-mono text-muted-foreground">{item.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6 text-muted-foreground">Previous Engagements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80">
            {legacyAffiliations.map((item, index) => (
              <Card key={index} className="p-4 sm:p-6 border-border/50 bg-card/40 backdrop-blur-sm hover:bg-card/60 grayscale-[0.2]">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-muted/20 flex items-center justify-center shrink-0 border border-border">
                    <item.icon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-base sm:text-lg leading-tight text-muted-foreground">{item.role}</h3>
                        <Badge variant="outline" className="text-[10px] uppercase font-bold py-0 h-4 border-muted-foreground/30 text-muted-foreground/60">{item.type}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">{item.org}</p>
                    <p className="text-xs font-mono text-muted-foreground/60">{item.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

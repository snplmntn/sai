"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award } from "lucide-react";

const awards = [
  {
    title: "1st Runner Up - Team CoolPals",
    issuer: "PMAX-EMAX Innovation Expo",
    date: "Feb 2026",
    type: "Award",
    icon: Trophy,
  },
  {
    title: "3rd Place Overall - AInay",
    issuer: "Ship or Be Shipped Philippines",
    date: "Dec 2025",
    type: "Award",
    icon: Trophy,
  },
  {
    title: "Clinical Assistant Bounty - MedicAI",
    issuer: "Ship or Be Shipped Philippines",
    date: "Dec 2025",
    type: "Award",
    icon: Trophy,
  },
];

const academicHonors = [
  {
    title: "Consistent President Lister",
    issuer: "Polytechnic University of the Philippines",
    date: "2024 - Present",
    type: "Honor",
    icon: Award,
  },
  {
    title: "SM Foundation Scholar",
    issuer: "SM Foundation, Inc.",
    date: "2024 - Present",
    type: "Honor",
    icon: Award,
  },
  {
    title: "Graduated with High Honors",
    issuer: "PUP - Senior High School",
    date: "2022 - 2024",
    type: "Honor",
    icon: Award,
  },
];

export function Certifications() {
  return (
    <section id="recognition" className="py-16 px-4 w-full max-w-4xl mx-auto z-10 relative">
      <div className="space-y-16">
        <div>
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Honors & Awards</h2>
            <div className="h-px flex-1 bg-border/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((item, index) => (
              <Card key={index} className="flex flex-col sm:flex-row items-center sm:items-start p-4 gap-4 border-border/40 bg-card/10 backdrop-blur-sm hover:bg-card/20 transition-colors">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <CardDescription className="text-xs mt-1">
                        {item.issuer} • {item.date}
                    </CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Academic Achievements</h2>
            <div className="h-px flex-1 bg-border/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {academicHonors.map((item, index) => (
              <Card key={index} className="flex flex-col sm:flex-row items-center sm:items-start p-4 gap-4 border-border/40 bg-card/10 backdrop-blur-sm hover:bg-card/20 transition-colors">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <CardDescription className="text-xs mt-1">
                        {item.issuer} • {item.date}
                    </CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

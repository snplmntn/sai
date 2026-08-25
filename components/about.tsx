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
                    I co-founded <span className="text-foreground font-medium">Kalinga Spa</span> and <span className="text-foreground font-medium">Laundry King MNL</span>, and right now I am the <span className="text-foreground font-medium">Founding Software Engineer</span> at <span className="text-foreground font-medium">Amplify</span>, while I am still finishing my <span className="text-foreground font-medium">Bachelor of Science in Computer Science</span> at the <span className="text-foreground font-medium">Polytechnic University of the Philippines</span> as an <span className="text-foreground font-medium">SM Foundation Scholar</span>. It is a lot to hold at the same time, and I think that is really where I learn the most.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    What I build is the system the business actually runs on, and not just the interface on top of it. For example, in Kalinga Spa I shipped a <span className="text-foreground font-medium">Go and PostgreSQL</span> platform that now carries <span className="text-foreground font-medium">₱731,000 in revenue</span> and replaced the spreadsheet payouts with automated commission splits, wallets, and payroll. On the other hand, my internship in Nummeals was more on operations tooling, namely rider routing and a delivery app that was proven across <span className="text-foreground font-medium">38,773 stops</span>.
                </p>
                <div className="flex flex-wrap gap-8 pt-4">
                    <div className="space-y-1">
                        <p className="font-mono text-xs text-muted-foreground uppercase">Location</p>
                        <p className="font-medium text-sm">Pasay City, Philippines</p>
                    </div>
                    <div className="space-y-1">
                        <p className="font-mono text-xs text-muted-foreground uppercase">Status</p>
                        <p className="font-medium text-green-500 text-sm">Open to Speaking Opportunities</p>
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

"use client";

import { Badge } from "@/components/ui/badge";

const experience = [
  {
    company: "Kalinga Spa",
    period: "June 2026 - Present",
    role: "Co Founder, Lead Full Stack Developer",
    link: "https://kalingaspa.com/",
    highlights: [
      "Shipped the Go/PostgreSQL platform now running the whole business: ₱731,000 revenue over 677 bookings and 1,378 service hours in 2 months, at a ₱370,000/month run rate.",
      "Replaced spreadsheet payouts with automated commission splits, wallets, and payroll, reconciling ₱248,000 in therapist earnings against ₱483,000 profit across 1,335 ledger records with zero manual computation."
    ]
  },
  {
    company: "Amplify",
    period: "May 2026 - Present",
    role: "Founding Software Engineer",
    link: "https://withamplify.ai/",
    highlights: [
      "Sole engineer on the self-serve product that replaced the agency service, built and shipped in 6 weeks, removing the per-client operator cost that capped the business at 5 brands.",
      "Automated the workflow 7 operators ran by hand across 200 personas, converting a headcount-bound service into a platform that scales without hiring."
    ]
  },
  {
    company: "Nummeals",
    period: "April 2026 - August 2026",
    role: "Software Engineer Intern",
    link: "https://www.nummeals.com/",
    highlights: [
      "Automated rider routing across 33 riders and 27 delivery areas: 25 assignment rules replacing a manual spreadsheet, 603 reassignments processed, preview and one-click rollback on every run.",
      "Shipped the rider delivery app across 38,773 delivery stops and 2,904 rider-days: offline stop list, proof-of-delivery photos, and idempotent replay so no stop double-posts on reconnect.",
      "Secured the operations console for 14 staff over 11,414 orders and 3,486 customers: role-based permissions enforced at the database row level, across 42 API endpoints."
    ]
  },
  {
    company: "Amplify",
    period: "February 2026 - May 2026",
    role: "Software Engineer Intern",
    link: "https://withamplify.ai/",
    highlights: [
      "Scaled the content engine to 120 accounts across 5 client brands: 8,647 posts in 30 days (288/day), 5.3M views, 33,000+ followers, 162,000-view top post.",
      "Shipped Copy Photo, the platform's most-used feature: viral photo to on-brand persona shot in 2 minutes from 10, reclaiming ~1,150 operator hours monthly and yielding 54 posts over 5,000 views.",
      "Automated compliance QA on all 8,647 monthly posts, cutting review from 5 minutes to 30 seconds and saving ~650 hours monthly across 11 blocking prescription-medicine and ad-disclosure checks."
    ]
  },
  {
    company: "Laundry King MNL",
    period: "July 2025 - Present",
    role: "Co Founder, Lead Full Stack Developer",
    link: "https://laundrykingmnl.com/",
    highlights: [
      "Solely architected, engineered and deployed a highly available RESTful API using MERN with TypeScript, integrating AWS S3 for secure cloud storage with 100% backend test coverage.",
      "Enabled ₱400,000+ in revenue by implementing an efficient order management system for the 80+ weekly active user base, supporting a total of 300+ customers."
    ]
  },
  {
    company: "Freelance",
    period: "January 2024 - Present",
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

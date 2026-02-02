"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/hero-background";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Certifications } from "@/components/certifications";
import {
  ArrowDown,
  Download,
  Mail,
  Github,
  Linkedin,
  Smartphone,
  TrendingUp,
  Users,
  Trophy,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { AiFab } from "@/components/ai-fab";
import { smoothScrollTo } from "@/lib/utils";
import { Affiliations } from "@/components/affiliations";
import { FloatingTech } from "@/components/floating-tech";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";

const HERO_STATS = [
  { label: "Revenue Generated", value: "₱400k+", icon: TrendingUp },
  { label: "Active Users Served", value: "600+", icon: Users },
  { label: "Hackathon Wins", value: "2", icon: Trophy },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <AiFab />

      <div className="relative flex min-h-screen flex-col items-center justify-center p-4 z-10">
        <HeroBackground />
        <FloatingTech />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl w-full space-y-8 text-center px-6 py-12 rounded-3xl bg-background/5 backdrop-blur-sm border border-white/5 relative z-20"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-[10px] sm:text-sm border-primary/20 bg-primary/5 text-primary flex items-center gap-2 w-fit mx-auto animate-fade-in max-w-full"
          >
            <Rocket className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
            <span className="truncate">
              <span className="hidden sm:inline">CS Student • </span>Aspiring AI
              & Full Stack Engineer
            </span>
          </Badge>

          <h1 className="text-4xl font-bold tracking-tighter sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 leading-tight">
            Sean Paul Monton
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Building{" "}
            <span className="text-foreground font-medium">
              high-availability platforms
            </span>{" "}
            and{" "}
            <span className="text-foreground font-medium">
              AI-native solutions
            </span>
            . CS Student at PUP Manila, currently open for{" "}
            <span className="text-foreground font-medium">internships</span>,{" "}
            <span className="text-foreground font-medium">freelance</span>, and{" "}
            <span className="text-foreground font-medium">
              part-time opportunities
            </span>
            .
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center gap-8 pt-6"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full h-12 px-8 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
              >
                <Link
                  href="#about"
                  onClick={(e) => smoothScrollTo(e, "#about")}
                >
                  Explore Profile
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 bg-background/50 backdrop-blur-sm gap-2 transition-transform hover:scale-105 active:scale-95"
              >
                <a
                  href="/Resume Sean Paul M. Monton.pdf"
                  download="Resume Sean Paul M. Monton.pdf"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-border/10 w-full max-w-2xl">
              {HERO_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  className="flex items-center sm:flex-col gap-4 sm:gap-1"
                >
                  <div className="flex items-center gap-2 text-foreground font-bold text-2xl sm:text-3xl min-w-[120px] sm:min-w-0">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary/80" />
                    {stat.value}
                  </div>
                  <span className="text-[10px] sm:text-sm text-muted-foreground font-medium uppercase tracking-wider text-left sm:text-center">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 animate-bounce text-muted-foreground flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono">SCROLL TO EXPLORE</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </div>

      <About />
      <Experience />
      <Projects />
      <Affiliations />
      <Certifications />
      <TechStack />
      <Education />
      <Contact />

      <footer className="py-8 text-center border-t border-border/20 bg-background/50 backdrop-blur-sm">
        <div className="flex flex-col items-center">
          <p className="text-xs font-mono text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Sean Paul Monton. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

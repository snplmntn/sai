"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, User, Briefcase, Code, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, smoothScrollTo } from "@/lib/utils";
import { SaiLogo } from "@/components/sai-logo";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Skills", href: "#tech", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    smoothScrollTo(e, href);
    setIsOpen(false);
  };

  return (
    <nav 
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl",
        scrolled 
          ? "top-4 opacity-100 scale-100 pointer-events-auto" 
          : "top-0 opacity-0 scale-95 pointer-events-none"
      )}
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
        
        <div className="relative flex items-center justify-between px-6 py-3 rounded-2xl border border-border/50 bg-background/60 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-3">
            <SaiLogo className="h-9 w-9" />
            <span className="font-bold tracking-tighter text-xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              SAI
            </span>
          </div>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all relative group/item",
                    activeSection === item.href.substring(1) 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 ml-2">
              <ModeToggle />
              <Button asChild size="sm" className="hidden md:flex items-center gap-2 rounded-xl bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20">
                <a href="/Resume Sean Paul M. Monton.pdf" download="Resume Sean Paul M. Monton.pdf">
                  <FileText className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden h-10 w-10 rounded-xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-16 left-0 right-0 p-4 rounded-2xl border border-border/50 bg-background/90 backdrop-blur-2xl shadow-2xl md:hidden z-40"
          >
            <div className="grid grid-cols-1 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-2 p-3 rounded-xl hover:bg-primary/10 transition-colors group"
                >
                  <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-medium text-sm">{item.name}</span>
                </a>
              ))}
              <div className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-accent/10">
                <span className="font-medium text-xs">Appearance</span>
                <ModeToggle />
              </div>
              <Button asChild className="w-full mt-2 rounded-xl flex items-center gap-2 py-4 h-auto text-sm">
                <a href="/Resume Sean Paul M. Monton.pdf" download="Resume Sean Paul M. Monton.pdf">
                  <FileText className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

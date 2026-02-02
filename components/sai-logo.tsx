"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SaiLogoProps {
  className?: string;
  glow?: boolean;
  invert?: boolean | "auto";
}

export function SaiLogo({ className, glow = true, invert = "auto" }: SaiLogoProps) {
  const invertClass = invert === "auto" 
    ? "dark:invert invert-0" 
    : invert ? "invert" : "invert-0";
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {glow && (
        <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full animate-pulse" />
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full h-full flex items-center justify-center placeholder:blur-0"
      >
        <Image
          src="/logo.png"
          alt="SAI Logo"
          width={120}
          height={120}
          className={cn("w-full h-full object-contain opacity-100 transition-all duration-300", invertClass)}
          priority
          unoptimized
        />
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Database, Code, Zap, Layers } from "lucide-react";

const TECH_NODES = [
  { Icon: Cpu, color: "text-blue-500", top: "15%", left: "10%", delay: 0 },
  { Icon: Globe, color: "text-primary", top: "25%", right: "15%", delay: 2 },
  { Icon: Database, color: "text-purple-500", bottom: "30%", left: "12%", delay: 1 },
  { Icon: Code, color: "text-blue-400", bottom: "20%", right: "10%", delay: 3 },
  { Icon: Zap, color: "text-yellow-500", top: "60%", left: "20%", delay: 1.5 },
  { Icon: Layers, color: "text-primary", top: "40%", right: "5%", delay: 2.5 },
];

export function FloatingTech() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {TECH_NODES.map((node, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0],
            scale: [0.9, 1.1, 0.9],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: node.delay,
            ease: "linear"
          }}
          style={{
            position: "absolute",
            top: node.top,
            left: node.left,
            right: node.right,
            bottom: node.bottom,
          }}
          className={`${node.color} will-change-transform`}
        >
          <node.Icon className="h-8 w-8 md:h-12 md:w-12" />
          <div className="absolute inset-0 bg-current opacity-10 blur-lg rounded-full scale-125" />
        </motion.div>
      ))}
      
      {/* Network Lines Effect (Subtle) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <pattern id="network" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          <line x1="2" y1="2" x2="200" y2="200" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#network)" />
      </svg>
    </div>
  );
}

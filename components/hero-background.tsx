import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useEffect } from "react";

export function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  const background = useMotionTemplate`radial-gradient(600px circle at ${springX}% ${springY}%, rgba(255,255,255,0.06), transparent 80%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background pointer-events-none">
      {/* Liquid Mesh Gradients - Simplified for Zero-Lag */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[60px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[80px]" />
      </div>

      {/* Animated Grid - Ultra slow for maximum frame consistency */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_60%,transparent_100%)] opacity-30"
      />

      {/* Yellow Beams (Streaks) - Optimized Framer Motion for reliability */}
      <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ x: "-100%", y: "-20%", opacity: 0 }}
                animate={{ 
                    x: ["-100%", "200%"],
                    y: ["-20%", "120%"],
                    opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                    duration: 6 + i * 2, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * 2
                }}
                className="absolute w-[600px] h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rotate-[35deg] will-change-transform shadow-[0_0_15px_rgba(250,204,21,0.4)]"
                style={{
                    top: `${-10 + i * 25}%`,
                    left: "-10%",
                }}
            />
        ))}
      </div>

      {/* Interactive Spotlight - High Performance Layer */}
      <motion.div 
        style={{
          background,
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      
      {/* Refined Overlays */}
      <div className="absolute inset-0 bg-background/40 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
    </div>
  );
}

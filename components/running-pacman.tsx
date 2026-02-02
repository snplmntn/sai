"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react";

import { useTheme } from "next-themes";

export function RunningPacman() {
  const [direction, setDirection] = useState(1);
  const [color, setColor] = useState("#FFFF00");
  const controls = useAnimationControls();
  const { resolvedTheme } = useTheme();

  const lastColorsRef = useRef<string[]>(["#FFFF00"]);
  const colors = useMemo(
    () => ["#FFFF00", "#3b82f6", "#000000", "#60a5fa", "#facc15"],
    [],
  );

  const getNextColor = () => {
    const available = colors.filter(
      (c) => !lastColorsRef.current.slice(-2).includes(c),
    );
    const next = available[Math.floor(Math.random() * available.length)];
    lastColorsRef.current = [...lastColorsRef.current, next].slice(-2);
    return next;
  };

  useEffect(() => {
    let isMounted = true;

    const runAnimation = async () => {
      // set a random initial color immediately on mount
      const startCol = colors[Math.floor(Math.random() * colors.length)];
      setColor(startCol);
      lastColorsRef.current = [startCol];

      // delay to allow layout to settle
      await new Promise((resolve) => setTimeout(resolve, 500));

      while (isMounted) {
        const screenWidth =
          typeof window !== "undefined" ? window.innerWidth : 1200;
        const targetX = screenWidth - 60;

        // move right
        setDirection(1);
        setColor(getNextColor());
        await controls.start({
          x: targetX,
          transition: { duration: 15, ease: "linear" },
        });
        if (!isMounted) break;

        // move left
        setDirection(-1);
        setColor(getNextColor());
        await controls.start({
          x: 0,
          transition: { duration: 15, ease: "linear" },
        });
      }
    };

    runAnimation();
    return () => {
      isMounted = false;
      controls.stop();
    };
  }, [controls, colors]);

  const pellets = useMemo(
    () => Array.from({ length: 25 }).map((_, i) => i),
    [],
  );

  // adaptive color logic
  const isAdaptive = color === "#000000";
  const displayColor = isAdaptive
    ? resolvedTheme === "light"
      ? "#000000"
      : "#F5F5F5"
    : color;

  return (
    <div className="hidden md:flex fixed bottom-0 left-0 w-full pointer-events-none z-[100] h-12 items-center overflow-hidden">
      <div className="absolute w-full h-full flex items-center justify-around px-8 opacity-10"></div>

      <motion.div
        animate={controls}
        initial={{ x: -60 }}
        style={{
          scaleX: direction,
          width: 40,
          height: 40,
          willChange: "transform",
        }}
        className="relative flex items-center justify-center pointer-events-auto"
      >
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            filter: `drop-shadow(0 0 12px ${isAdaptive && resolvedTheme === "dark" ? "rgba(255,255,255,0.4)" : displayColor + "60"})`,
          }}
          transition={{ duration: 1.5 }}
          className="box-content"
        >
          <motion.path
            initial={false}
            animate={{
              fill: displayColor,
              stroke: "transparent",
              strokeWidth: 0,
              d: [
                "M50,50 L100,20 A50,50 0 1,0 100,80 Z",
                "M50,50 L100,50 A50,50 0 1,0 100,49.9 Z",
                "M50,50 L100,20 A50,50 0 1,0 100,80 Z",
              ],
            }}
            transition={{
              fill: { duration: 1.5, ease: "easeInOut" },
              stroke: { duration: 0.5 },
              d: { duration: 0.25, repeat: Infinity, ease: "linear" },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useState, useRef } from "react";
import { useTheme } from "next-themes";

function Stars(props: any) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => {
    // generate positions and ensure no nans
    const particleCount =
      typeof window !== "undefined" && window.innerWidth < 768 ? 2000 : 6000;
    const positions = random.inSphere(new Float32Array(particleCount), {
      radius: 1.5,
    });
    // validate to remove potential nans (safety check)
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) positions[i] = 0;
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  const { theme } = useTheme();
  // monotone aesthetic: black particles in light mode (rare), white in dark mode.
  const color = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color={color}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}

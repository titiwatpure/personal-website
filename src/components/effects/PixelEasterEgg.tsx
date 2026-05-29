"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Pixel art frames: arrays of [col, row, color] — 16x16 grid, 1px = 3px rendered
const FRAME_0_SHADOWS = [
  // hard hat (yellow)
  [5, 0, "#f0c040"], [6, 0, "#f0c040"], [7, 0, "#f0c040"], [8, 0, "#f0c040"], [9, 0, "#f0c040"],
  [4, 1, "#f0c040"], [5, 1, "#f0c040"], [6, 1, "#f0c040"], [7, 1, "#f0c040"], [8, 1, "#f0c040"], [9, 1, "#f0c040"], [10, 1, "#f0c040"],
  // face (skin)
  [6, 2, "#e8a87c"], [7, 2, "#e8a87c"], [8, 2, "#e8a87c"],
  [5, 3, "#e8a87c"], [6, 3, "#e8a87c"], [7, 3, "#e8a87c"], [8, 3, "#e8a87c"], [9, 3, "#e8a87c"],
  // eyes
  [6, 3, "#1a1a2e"], [8, 3, "#1a1a2e"],
  // smile
  [7, 4, "#c0705a"],
  // body (cyan shirt)
  [5, 5, "#00d4ff"], [6, 5, "#00d4ff"], [7, 5, "#00d4ff"], [8, 5, "#00d4ff"], [9, 5, "#00d4ff"],
  [5, 6, "#00d4ff"], [6, 6, "#00d4ff"], [7, 6, "#00d4ff"], [8, 6, "#00d4ff"], [9, 6, "#00d4ff"],
  [5, 7, "#00d4ff"], [6, 7, "#00d4ff"], [7, 7, "#00d4ff"], [8, 7, "#00d4ff"], [9, 7, "#00d4ff"],
  // arms
  [3, 5, "#e8a87c"], [4, 5, "#e8a87c"], [10, 5, "#e8a87c"], [11, 5, "#e8a87c"],
  [3, 6, "#e8a87c"], [11, 6, "#e8a87c"],
  // belt
  [5, 8, "#1a1a6e"], [6, 8, "#1a1a6e"], [7, 8, "#f0c040"], [8, 8, "#1a1a6e"], [9, 8, "#1a1a6e"],
  // legs — frame 0: left forward, right back
  [5, 9, "#1a1a6e"], [9, 9, "#1a1a6e"],
  [5, 10, "#1a1a6e"], [9, 10, "#1a1a6e"],
  // feet
  [4, 11, "#3a3a3a"], [5, 11, "#3a3a3a"], [9, 11, "#3a3a3a"], [10, 11, "#3a3a3a"],
];

const FRAME_1_SHADOWS = [
  // hard hat (yellow)
  [5, 0, "#f0c040"], [6, 0, "#f0c040"], [7, 0, "#f0c040"], [8, 0, "#f0c040"], [9, 0, "#f0c040"],
  [4, 1, "#f0c040"], [5, 1, "#f0c040"], [6, 1, "#f0c040"], [7, 1, "#f0c040"], [8, 1, "#f0c040"], [9, 1, "#f0c040"], [10, 1, "#f0c040"],
  // face (skin)
  [6, 2, "#e8a87c"], [7, 2, "#e8a87c"], [8, 2, "#e8a87c"],
  [5, 3, "#e8a87c"], [6, 3, "#e8a87c"], [7, 3, "#e8a87c"], [8, 3, "#e8a87c"], [9, 3, "#e8a87c"],
  // eyes
  [6, 3, "#1a1a2e"], [8, 3, "#1a1a2e"],
  // smile
  [7, 4, "#c0705a"],
  // body (cyan shirt)
  [5, 5, "#00d4ff"], [6, 5, "#00d4ff"], [7, 5, "#00d4ff"], [8, 5, "#00d4ff"], [9, 5, "#00d4ff"],
  [5, 6, "#00d4ff"], [6, 6, "#00d4ff"], [7, 6, "#00d4ff"], [8, 6, "#00d4ff"], [9, 6, "#00d4ff"],
  [5, 7, "#00d4ff"], [6, 7, "#00d4ff"], [7, 7, "#00d4ff"], [8, 7, "#00d4ff"], [9, 7, "#00d4ff"],
  // arms (swapped position)
  [3, 6, "#e8a87c"], [11, 5, "#e8a87c"], [12, 5, "#e8a87c"],
  [3, 5, "#e8a87c"], [11, 6, "#e8a87c"],
  // belt
  [5, 8, "#1a1a6e"], [6, 8, "#1a1a6e"], [7, 8, "#f0c040"], [8, 8, "#1a1a6e"], [9, 8, "#1a1a6e"],
  // legs — frame 1: right forward, left back
  [6, 9, "#1a1a6e"], [8, 9, "#1a1a6e"],
  [6, 10, "#1a1a6e"], [8, 10, "#1a1a6e"],
  // feet
  [5, 11, "#3a3a3a"], [6, 11, "#3a3a3a"], [8, 11, "#3a3a3a"], [9, 11, "#3a3a3a"],
];

function buildBoxShadow(pixels: (number | string)[][], scale: number): string {
  return pixels
    .map(([x, y, color]) => `${(x as number) * scale}px ${(y as number) * scale}px 0 0 ${color}`)
    .join(", ");
}

function PixelCharacter({ frame }: { frame: 0 | 1 }) {
  const scale = 3;
  const shadows = frame === 0 ? buildBoxShadow(FRAME_0_SHADOWS, scale) : buildBoxShadow(FRAME_1_SHADOWS, scale);

  return (
    <div
      style={{
        width: `${scale}px`,
        height: `${scale}px`,
        boxShadow: shadows,
        position: "relative",
      }}
    />
  );
}

interface WalkingCharacterProps {
  onComplete: () => void;
}

function WalkingCharacter({ onComplete }: WalkingCharacterProps) {
  const [frame, setFrame] = useState<0 | 1>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f === 0 ? 1 : 0));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: "100vw", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 8, ease: "linear" }}
      onAnimationComplete={onComplete}
      style={{
        position: "fixed",
        bottom: "24px",
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      {/* bounce effect */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
      >
        <PixelCharacter frame={frame} />
      </motion.div>
    </motion.div>
  );
}

export function useEasterEgg() {
  const [isActive, setIsActive] = useState(false);
  const clickCount = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const trigger = useCallback((e: React.MouseEvent) => {
    clickCount.current += 1;

    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 1000);

    if (clickCount.current >= 3) {
      e.preventDefault();
      clickCount.current = 0;
      setIsActive(true);
    }
  }, []);

  const deactivate = useCallback(() => {
    setIsActive(false);
  }, []);

  return { isActive, trigger, deactivate };
}

export function PixelEasterEgg({ onComplete }: WalkingCharacterProps) {
  return (
    <AnimatePresence>
      <WalkingCharacter key="pixel-walker" onComplete={onComplete} />
    </AnimatePresence>
  );
}

"use client";

import { useMemo } from "react";

const WORD = "Alex";
const LETTER_COUNT = 40;

interface LetterStyle {
  char: string;
  left: string;
  fontSize: string;
  opacity: number;
  animationDuration: string;
  animationDelay: string;
  driftAmount: string;
}

export default function SnowText() {
  const letters = useMemo<LetterStyle[]>(() => {
    return Array.from({ length: LETTER_COUNT }, (_, i) => ({
      char: WORD[i % WORD.length],
      left: `${Math.random() * 100}%`,
      fontSize: `${30 + Math.random() * 20}px`,
      opacity: 0.08 + Math.random() * 0.12,
      animationDuration: `${6 + Math.random() * 8}s`,
      animationDelay: `${-Math.random() * 14}s`,
      driftAmount: `${10 + Math.random() * 20}px`,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');
        @keyframes snowfall {
          0% { transform: translateY(-5vh) translateX(0) rotate(0deg); }
          25% { transform: translateY(22vh) translateX(var(--drift)) rotate(3deg); }
          50% { transform: translateY(48vh) translateX(calc(var(--drift) * -0.5)) rotate(-2deg); }
          75% { transform: translateY(73vh) translateX(var(--drift)) rotate(4deg); }
          100% { transform: translateY(105vh) translateX(0) rotate(0deg); }
        }
      `}</style>
      {letters.map((l, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: l.left,
            top: "0",
            fontSize: l.fontSize,
            opacity: l.opacity,
            fontFamily: "'Bubblegum Sans', cursive",
            color: "#9ca3af",
            animationName: "snowfall",
            animationDuration: l.animationDuration,
            animationDelay: l.animationDelay,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            willChange: "transform",
            ["--drift" as string]: l.driftAmount,
          }}
        >
          {l.char}
        </span>
      ))}
    </div>
  );
}

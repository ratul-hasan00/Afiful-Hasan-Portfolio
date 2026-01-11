import React, { useState } from "react";

const SHAPES_COUNT = 25;
const BIG_SHAPES_COUNT = 10;
const RAIN_COUNT = 80;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const generateShapes = () =>
  Array.from({ length: SHAPES_COUNT }).map(() => {
    const type = ["cube", "triangle"][Math.floor(Math.random() * 2)];
    const size = random(10, 25);
    return {
      type,
      size,
      top: random(0, 90),
      left: random(0, 90),
      duration: random(15, 40),
      color: `rgba(255,255,255,${random(0.2, 0.4)})`,
    };
  });

const generateBigShapes = () =>
  Array.from({ length: BIG_SHAPES_COUNT }).map(() => {
    const type = ["cube", "triangle"][Math.floor(Math.random() * 2)];
    const size = random(20, 40);
    return {
      type,
      size,
      top: random(0, 90),
      left: random(0, 90),
      duration: random(25, 50),
      color: `rgba(255,255,255,${random(0.3, 0.5)})`,
    };
  });

const generateRain = () =>
  Array.from({ length: RAIN_COUNT }).map(() => ({
    width: random(1, 2),
    height: random(10, 18),
    left: `${random(0, 100)}%`,
    duration: `${random(1.2, 2.5)}s`,
    opacity: random(0.1, 0.3),
  }));

export default function SkillsEffects() {
  const [shapes] = useState(generateShapes);
  const [bigShapes] = useState(generateBigShapes);
  const [rain] = useState(generateRain);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Small shapes */}
      {shapes.map((s, i) => (
        <div
          key={i}
          className={`absolute ${s.type === "cube" ? "rounded-sm" : "triangle"} animate-float-random`}
          style={{
            width: s.type === "triangle" ? 0 : s.size,
            height: s.type === "triangle" ? 0 : s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            backgroundColor: s.type === "triangle" ? "transparent" : s.color,
            borderLeft: s.type === "triangle" ? `${s.size / 2}px solid transparent` : "",
            borderRight: s.type === "triangle" ? `${s.size / 2}px solid transparent` : "",
            borderBottom: s.type === "triangle" ? `${s.size}px solid ${s.color}` : "",
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* Big shapes */}
      {bigShapes.map((s, i) => (
        <div
          key={i}
          className={`absolute ${s.type === "cube" ? "rounded-sm" : "triangle"} animate-float-random`}
          style={{
            width: s.type === "triangle" ? 0 : s.size,
            height: s.type === "triangle" ? 0 : s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            backgroundColor: s.type === "triangle" ? "transparent" : s.color,
            borderLeft: s.type === "triangle" ? `${s.size / 2}px solid transparent` : "",
            borderRight: s.type === "triangle" ? `${s.size / 2}px solid transparent` : "",
            borderBottom: s.type === "triangle" ? `${s.size}px solid ${s.color}` : "",
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* Rain */}
      {rain.map((r, i) => (
        <div
          key={i}
          className="absolute bg-gray-400 animate-rain-fall"
          style={{
            width: r.width,
            height: r.height,
            left: r.left,
            top: `-${r.height}px`,
            opacity: r.opacity,
            animationDuration: r.duration,
          }}
        />
      ))}

      {/* Dark lighting */}
      <div className="absolute w-full h-full bg-gradient-to-r from-black/10 via-black/20 to-black/10 animate-lighting" />
    </div>
  );
}

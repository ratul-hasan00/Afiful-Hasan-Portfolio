import React, { useState } from "react";

const SHAPES_COUNT = 60; // small shapes
const BIG_SHAPES_COUNT = 10; // big shapes
const SNOW_COUNT = 80; // snow particles

function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Small shapes
const generateShapes = () =>
  Array.from({ length: SHAPES_COUNT }).map(() => {
    const type = ["cube", "triangle"][Math.floor(Math.random() * 2)];
    const size = random(5, 15);
    return {
      type,
      size,
      top: random(0, 90),
      left: random(0, 90),
      duration: random(15, 40),
      color: `rgba(255,255,255,${random(0.2, 0.6)})`,
    };
  });

// Big shapes
const generateBigShapes = () =>
  Array.from({ length: BIG_SHAPES_COUNT }).map(() => {
    const type = ["cube", "triangle"][Math.floor(Math.random() * 2)];
    const size = random(20, 40);
    return {
      type,
      size,
      top: random(0, 90),
      left: random(0, 90),
      duration: random(30, 60),
      color: `rgba(255,255,255,${random(0.3, 0.7)})`,
    };
  });

// Snow particles
const generateSnow = () =>
  Array.from({ length: SNOW_COUNT }).map(() => ({
    size: random(2, 6),
    left: `${random(0, 100)}%`,
    duration: `${random(5, 15)}s`,
    opacity: random(0.2, 0.8),
  }));

export default function ServiceEffects() {
  const [shapes] = useState(generateShapes);
  const [bigShapes] = useState(generateBigShapes);
  const [snow] = useState(generateSnow);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Winter Moon */}
      <div
        className="absolute rounded-full glow"
        style={{
          width: 120,
          height: 120,
          backgroundColor: "#F5F3CE",
          top: "10%",
          left: "80%",
          boxShadow:
            "0 0 40px rgba(245,243,206,0.7), 0 0 80px rgba(245,243,206,0.4)",
        }}
      />

      {/* Small floating shapes */}
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
            borderLeft:
              s.type === "triangle" ? `${s.size / 2}px solid transparent` : "",
            borderRight:
              s.type === "triangle" ? `${s.size / 2}px solid transparent` : "",
            borderBottom:
              s.type === "triangle" ? `${s.size}px solid ${s.color}` : "",
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* Big floating shapes */}
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
            borderLeft:
              s.type === "triangle" ? `${s.size / 2}px solid transparent` : "",
            borderRight:
              s.type === "triangle" ? `${s.size / 2}px solid transparent` : "",
            borderBottom:
              s.type === "triangle" ? `${s.size}px solid ${s.color}` : "",
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* Snow particles */}
      {snow.map((s, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-snow-fall"
          style={{
            width: s.size,
            height: s.size,
            left: s.left,
            top: `-${s.size}px`,
            opacity: s.opacity,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  );
}

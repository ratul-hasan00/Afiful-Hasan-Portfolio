import React, { useState } from "react";
import "./BlogEffects.css";

const SMALL_SHAPES = 50;
const BIG_SHAPES = 15;
const HOUSES_COUNT = 55; // MORE houses added
const CLOUDS_COUNT = 5;

const random = (min, max) => Math.random() * (max - min) + min;

/* Falling Shapes */
const generateShapes = () =>
  Array.from({ length: SMALL_SHAPES }).map(() => {
    const type = ["cube", "triangle"][Math.floor(Math.random() * 2)];
    const size = random(8, 20);
    return {
      type,
      size,
      left: random(0, 100),
      duration: random(6, 12),
      color: `rgba(200,200,200,${random(0.3, 0.7)})`,
    };
  });

const generateBigShapes = () =>
  Array.from({ length: BIG_SHAPES }).map(() => {
    const type = ["cube", "triangle"][Math.floor(Math.random() * 2)];
    const size = random(25, 40);
    return {
      type,
      size,
      left: random(0, 100),
      duration: random(10, 18),
      color: `rgba(200,200,200,${random(0.4, 0.8)})`,
    };
  });

/* Village Houses – Deep Dark Purple Added */
const HOUSE_COLORS = [
  "#4B5563", // gray
  "#6B7280", // gray
  "#2E1065", // deep purple
  "#3B0764", // deep purple
  "#4C1D95", // deep purple
  "#5B21B6", // deep purple
];

const generateHouses = () =>
  Array.from({ length: HOUSES_COUNT }).map((_, i) => {
    const width = random(38, 62);
    const height = random(45, 80);
    const roofHeight = random(18, 28);

    return {
      width,
      height,
      roofHeight,
      left: (i / HOUSES_COUNT) * 100,
      color: HOUSE_COLORS[Math.floor(Math.random() * HOUSE_COLORS.length)],
      roofColor: "#111827",
      windowColor: "rgba(255,220,150,0.75)",
    };
  });

/* Clouds */
const generateClouds = () =>
  Array.from({ length: CLOUDS_COUNT }).map(() => ({
    width: random(120, 250),
    height: random(50, 100),
    top: random(5, 30),
    left: random(0, 100),
    duration: random(30, 60),
  }));

export default function BlogEffects() {
  const [shapes] = useState(generateShapes);
  const [bigShapes] = useState(generateBigShapes);
  const [houses] = useState(generateHouses);
  const [clouds] = useState(generateClouds);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none blog-bg">
      {/* Clouds */}
      {clouds.map((c, i) => (
        <div
          key={i}
          className="cloud"
          style={{
            width: c.width,
            height: c.height,
            top: `${c.top}%`,
            left: `${c.left}%`,
            animationDuration: `${c.duration}s`,
          }}
        />
      ))}

      {/* Small Shapes */}
      {shapes.map((s, i) => (
        <div
          key={i}
          className={`absolute ${
            s.type === "cube" ? "cube" : "triangle"
          } animate-fall`}
          style={{
            width: s.type === "triangle" ? 0 : s.size,
            height: s.type === "triangle" ? 0 : s.size,
            left: `${s.left}%`,
            borderLeft:
              s.type === "triangle" ? `${s.size / 2}px solid transparent` : "",
            borderRight:
              s.type === "triangle" ? `${s.size / 2}px solid transparent` : "",
            borderBottom:
              s.type === "triangle" ? `${s.size}px solid ${s.color}` : "",
            backgroundColor: s.type === "cube" ? s.color : "transparent",
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* Big Shapes */}
      {bigShapes.map((s, i) => (
        <div
          key={i}
          className={`absolute ${
            s.type === "cube" ? "cube" : "triangle"
          } animate-fall`}
          style={{
            width: s.type === "triangle" ? 0 : s.size,
            height: s.type === "triangle" ? 0 : s.size,
            left: `${s.left}%`,
            borderLeft:
              s.type === "triangle" ? `${s.size / 2}px solid transparent` : "",
            borderRight:
              s.type === "triangle" ? `${s.size / 2}px solid transparent` : "",
            borderBottom:
              s.type === "triangle" ? `${s.size}px solid ${s.color}` : "",
            backgroundColor: s.type === "cube" ? s.color : "transparent",
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* Village Houses */}
      <div className="houses-container">
        {houses.map((h, i) => (
          <div
            key={i}
            className="house"
            style={{
              width: h.width,
              height: h.height,
              left: `${h.left}%`,
              backgroundColor: h.color,
            }}
          >
            <div
              className="roof"
              style={{
                borderLeft: `${h.width / 2}px solid transparent`,
                borderRight: `${h.width / 2}px solid transparent`,
                borderBottom: `${h.roofHeight}px solid ${h.roofColor}`,
                top: `-${h.roofHeight}px`,
              }}
            />
            <div
              className="window"
              style={{
                width: h.width / 5,
                height: h.height / 5,
                backgroundColor: h.windowColor,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

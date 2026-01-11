import React, { useState } from "react";
import "./PortfolioEffects.css";

const SHAPES_COUNT = 40;
const BIG_SHAPES_COUNT = 10;
const BUILDINGS_COUNT = 60; // more buildings/houses
const RAIN_COUNT = 80;
const SNOW_COUNT = 50;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Floating shapes
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

// Buildings/houses
const generateBuildings = () =>
  Array.from({ length: BUILDINGS_COUNT }).map((_, i) => {
    // spread them evenly across width
    const left = (i * (100 / BUILDINGS_COUNT)) + random(0, 0.5);
    const width = random(30, 50);
    const height = random(40, 70);
    const roofHeight = random(15, 25);
    const color = `hsl(${random(20, 50)}, 20%, ${random(20, 40)}%)`;
    return { left, width, height, roofHeight, color, windowColor: "rgba(255,220,150,0.7)" };
  });

// Rain & Snow
const generateRain = () =>
  Array.from({ length: RAIN_COUNT }).map(() => ({
    top: random(-100, 100),
    left: random(0, 100),
    length: random(10, 20),
    opacity: random(0.2, 0.5),
  }));

const generateSnow = () =>
  Array.from({ length: SNOW_COUNT }).map(() => ({
    top: random(-100, 100),
    left: random(0, 100),
    size: random(2, 6),
    opacity: random(0.2, 0.8),
  }));

export default function PortfolioEffects() {
  const [shapes] = useState(generateShapes);
  const [bigShapes] = useState(generateBigShapes);
  const [buildings] = useState(generateBuildings);
  const [rain] = useState(generateRain);
  const [snow] = useState(generateSnow);

  return (
    <div className="portfolio-bg absolute inset-0 overflow-hidden pointer-events-none">
      {/* Realistic Half Moon */}
      <div className="realistic-half-moon" />



      {/* Small floating shapes */}
      {shapes.map((s, i) => (
        <div
          key={`shape-${i}`}
          className={`absolute ${s.type === "cube" ? "cube" : "triangle"} animate-float-random`}
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

      {/* Big floating shapes */}
      {bigShapes.map((s, i) => (
        <div
          key={`big-shape-${i}`}
          className={`absolute ${s.type === "cube" ? "cube" : "triangle"} animate-float-random`}
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

      {/* Buildings / Houses */}
      <div className="houses-container">
        {buildings.map((b, i) => (
          <div
            key={`building-${i}`}
            className="house"
            style={{
              width: b.width,
              height: b.height,
              left: `${b.left}%`,
              backgroundColor: b.color,
              bottom: 0,
            }}
          >
            <div
              className="roof"
              style={{
                borderLeft: `${b.width / 2}px solid transparent`,
                borderRight: `${b.width / 2}px solid transparent`,
                borderBottom: `${b.roofHeight}px solid ${b.color}`,
              }}
            />
            <div
              className="window"
              style={{
                width: b.width / 6,
                height: b.height / 6,
                backgroundColor: b.windowColor,
              }}
            />
          </div>
        ))}
      </div>

      {/* Rain */}
      {rain.map((r, i) => (
        <div
          key={`rain-${i}`}
          className="rain-drop"
          style={{
            top: `${r.top}%`,
            left: `${r.left}%`,
            height: `${r.length}px`,
            opacity: r.opacity,
          }}
        />
      ))}

      {/* Snow */}
      {snow.map((s, i) => (
        <div
          key={`snow-${i}`}
          className="snowflake"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./PortfolioEffects.css";

const SHAPES_COUNT_DESKTOP = 40;
const BIG_SHAPES_COUNT_DESKTOP = 10;
const BUILDINGS_COUNT_DESKTOP = 60;
const RAIN_COUNT_DESKTOP = 80;
const SNOW_COUNT_DESKTOP = 50;

// Mobile counts: only buildings and moon, no rain/snow/shapes
const SHAPES_COUNT_MOBILE = 0;
const BIG_SHAPES_COUNT_MOBILE = 0;
const BUILDINGS_COUNT_MOBILE = 20;
const RAIN_COUNT_MOBILE = 0;
const SNOW_COUNT_MOBILE = 0;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function PortfolioEffects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SHAPES_COUNT = isMobile ? SHAPES_COUNT_MOBILE : SHAPES_COUNT_DESKTOP;
  const BIG_SHAPES_COUNT = isMobile ? BIG_SHAPES_COUNT_MOBILE : BIG_SHAPES_COUNT_DESKTOP;
  const BUILDINGS_COUNT = isMobile ? BUILDINGS_COUNT_MOBILE : BUILDINGS_COUNT_DESKTOP;
  const RAIN_COUNT = isMobile ? RAIN_COUNT_MOBILE : RAIN_COUNT_DESKTOP;
  const SNOW_COUNT = isMobile ? SNOW_COUNT_MOBILE : SNOW_COUNT_DESKTOP;

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

  const generateBuildings = () =>
    Array.from({ length: BUILDINGS_COUNT }).map((_, i) => {
      const left = (i * (100 / BUILDINGS_COUNT)) + random(0, 0.5);
      const width = random(30, 50);
      const height = random(40, 70);
      const roofHeight = random(15, 25);
      const color = `hsl(${random(20, 50)}, 20%, ${random(20, 40)}%)`;
      return { left, width, height, roofHeight, color, windowColor: "rgba(255,220,150,0.7)" };
    });

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

  const [shapes] = useState(generateShapes);
  const [bigShapes] = useState(generateBigShapes);
  const [buildings] = useState(generateBuildings);
  const [rain] = useState(generateRain);
  const [snow] = useState(generateSnow);

  return (
    <div className="portfolio-bg absolute inset-0 overflow-hidden pointer-events-none">
      {/* Half Moon */}
      <div className="realistic-half-moon" />

      {/* Small shapes - skip if mobile */}
      {!isMobile &&
        shapes.map((s, i) => (
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

      {/* Big shapes - skip if mobile */}
      {!isMobile &&
        bigShapes.map((s, i) => (
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

      {/* Buildings - always render */}
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

      {/* Rain - skip if mobile */}
      {!isMobile &&
        rain.map((r, i) => (
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

      {/* Snow - skip if mobile */}
      {!isMobile &&
        snow.map((s, i) => (
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

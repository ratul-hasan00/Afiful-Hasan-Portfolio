import React from "react";
import "./ContactEffects.css";

const createElements = (count, className, minDur, maxDur, minSize, maxSize) =>
  Array.from({ length: count }).map((_, i) => {
    const size = minSize + Math.random() * (maxSize - minSize);
    return (
      <span
        key={`${className}-${i}`}
        className={className}
        style={{
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${minDur + Math.random() * (maxDur - minDur)}s`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.5 + 0.3,
        }}
      />
    );
  });

export default function ContactEffects() {
  return (
    <div className="contact-effects">
      {/* Moving geometric background */}
      <div className="geo-pattern" />

      {/* Falling elements */}
      {createElements(35, "cube", 10, 18, 15, 25)}
      {createElements(40, "triangle", 12, 20, 15, 25)}
      {createElements(100, "rain", 0.8, 1.4, 2, 3)}
      {createElements(70, "snow", 10, 20, 4, 7)}
    </div>
  );
}

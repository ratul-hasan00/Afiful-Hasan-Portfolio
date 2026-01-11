import { useState } from "react";

const CUBE_COUNT = 5;
const TRIANGLE_COUNT = 5;
const LINE_COUNT = 10;

function generatePositions(count, max = 90) {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * max}%`,
    left: `${Math.random() * max}%`,
  }));
}

function generateLines(count) {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 80 + 20}%`,
  }));
}

export default function Effects() {
  // Initialize state with a function — runs only once on mount
  const [cubes] = useState(() => generatePositions(CUBE_COUNT));
  const [triangles] = useState(() => generatePositions(TRIANGLE_COUNT));
  const [lines] = useState(() => generateLines(LINE_COUNT));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating cubes */}
      {cubes.map((pos, i) => (
        <div
          key={`cube-${i}`}
          className="absolute w-8 h-8 border border-gray-600 rotate-45 opacity-50 animate-float"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}

      {/* Rotating triangles */}
      {triangles.map((pos, i) => (
        <div
          key={`triangle-${i}`}
          className="absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-transparent border-b-gray-500 opacity-40 animate-rotate-slow"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}

      {/* Random horizontal lines */}
      {lines.map((pos, i) => (
        <div
          key={`line-${i}`}
          className="absolute bg-gray-700 opacity-20 h-[1px]"
          style={{
            top: pos.top,
            left: pos.left,
            width: pos.width,
          }}
        />
      ))}
    </div>
  );
}

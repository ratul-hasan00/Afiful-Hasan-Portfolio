import { useState } from "react";
import { Moon, Star } from "lucide-react"; // optional icons for effects

const CUBE_COUNT = 6;
const TRIANGLE_COUNT = 6;
const SQUARE_COUNT = 6;
const ROCKET_COUNT = 1;
const STAR_COUNT = 10;

function generatePositions(count) {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 30 + 10, // random size
  }));
}

export default function AboutEffects() {
  const [cubes] = useState(() => generatePositions(CUBE_COUNT));
  const [triangles] = useState(() => generatePositions(TRIANGLE_COUNT));
  const [squares] = useState(() => generatePositions(SQUARE_COUNT));
  const [stars] = useState(() => generatePositions(STAR_COUNT));
  const [rockets] = useState(() => generatePositions(ROCKET_COUNT));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Cubes */}
      {cubes.map((pos, i) => (
        <div
          key={`cube-${i}`}
          className="absolute w-8 h-8 border border-gray-600 rotate-45 opacity-50 animate-float"
          style={{ top: pos.top, left: pos.left, width: pos.size, height: pos.size }}
        />
      ))}

      {/* Squares */}
      {squares.map((pos, i) => (
        <div
          key={`square-${i}`}
          className="absolute w-6 h-6 bg-gray-700 opacity-40 animate-float"
          style={{ top: pos.top, left: pos.left, width: pos.size, height: pos.size }}
        />
      ))}

      {/* Triangles */}
      {triangles.map((pos, i) => (
        <div
          key={`triangle-${i}`}
          className="absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-transparent border-b-gray-500 opacity-40 animate-rotate-slow"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}

      {/* Stars */}
      {stars.map((pos, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-2 h-2 bg-white rounded-full opacity-80 animate-float"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}

      {/* Rockets */}
      {rockets.map((pos, i) => (
        <div
          key={`rocket-${i}`}
          className="absolute w-12 h-12 bg-red-500 rounded-full animate-fly"
          style={{ top: pos.top, left: pos.left }}
        >
          🚀
        </div>
      ))}

      {/* Moon */}
      <div className="absolute top-10 right-20 w-24 h-24 bg-gray-300 rounded-full opacity-80 shadow-lg" />

      {/* Galaxy background (subtle gradient) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-gray-800 opacity-20" />
    </div>
  );
}

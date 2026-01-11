import React from "react";
import "./Planet.css";

export default function Planet() {
  return (
    <div className="planet-wrapper">
      {/* Main Planet */}
      <div className="planet">
        <div className="planet-ring"></div>
      </div>

      {/* Small orbiting moons */}
      <div className="moon moon-1"></div>
      <div className="moon moon-2"></div>
      <div className="moon moon-3"></div>
    </div>
  );
}

import React, { useState } from "react";
import "./Robot.css";

export default function Robot() {
  const [smile, setSmile] = useState(true);

  return (
    <div className="robot-container">
      {/* Head */}
      <div className="robot-head">
        <div className="robot-hair"></div>
        <div className="robot-ear left-ear"></div>
        <div className="robot-ear right-ear"></div>
        <div className="robot-eye left-eye"></div>
        <div className="robot-eye right-eye"></div>
        <div className="robot-nose"></div>
        <div
          className={`robot-mouth ${smile ? "smile" : "neutral"}`}
          onClick={() => setSmile(!smile)}
        ></div>
      </div>

      {/* Neck */}
      <div className="robot-neck"></div>

      {/* Body */}
      <div className="robot-body">
        {/* Shirt */}
        <div className="robot-shirt">
          <div className="robot-tie"></div>
        </div>

        {/* Arms */}
        <div className="robot-arm left-arm">
          <div className="robot-hand"></div>
        </div>
        <div className="robot-arm right-arm">
          <div className="robot-hand"></div>
        </div>

        {/* Pants + Thighs */}
        <div className="robot-pants">
          <div className="robot-thigh left-thigh"></div>
          <div className="robot-thigh right-thigh"></div>
        </div>

        {/* Legs + Shoes */}
        <div className="robot-leg left-leg">
          <div className="robot-calf"></div>
          <div className="robot-shoe"></div>
        </div>
        <div className="robot-leg right-leg">
          <div className="robot-calf"></div>
          <div className="robot-shoe"></div>
        </div>
      </div>
    </div>
  );
}

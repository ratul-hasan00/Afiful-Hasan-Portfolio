import AboutEffects from "../components/AboutEffects";
import { Trophy, Zap, Star } from "lucide-react";
import Planet from "../components/Planet";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center bg-[#0b0b0b] px-4 sm:px-6 lg:px-12"
    >
      {/* Background Effects */}
      <AboutEffects />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

        {/* LEFT: PLANET */}
        <div className="flex justify-center lg:justify-start scale-90 sm:scale-100 lg:-translate-x-4">
          <Planet />
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex flex-col gap-10 max-w-xl text-center lg:text-left mx-auto lg:mx-0 text-gray-300">

          {/* TITLE */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            About Me
          </h2>

          {/* AMBITION */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl sm:text-2xl font-semibold flex items-center justify-center lg:justify-start gap-3 text-gray-100">
              <Trophy size={22} className="text-yellow-400" />
              Ambition
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              My ambition is to build cutting-edge, responsive, and efficient web
              applications that bridge the gap between design and functionality.
            </p>
          </div>

          {/* PURPOSE */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl sm:text-2xl font-semibold flex items-center justify-center lg:justify-start gap-3 text-gray-100">
              <Zap size={22} className="text-blue-400" />
              Purpose
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              My purpose is to deliver top-notch digital experiences that are
              interactive, user-friendly, and leave a lasting impression.
            </p>
          </div>

          {/* ACCENT ICON */}
          <div className="flex justify-center lg:justify-start mt-2">
            <Star size={28} className="text-purple-400 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { Download } from "lucide-react";
import Effects from "../components/Effects";
import Robot from "../components/Robot";
import "../components/Robot.css";

export default function Home() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center bg-[#0b0b0b] overflow-hidden px-4 sm:px-6 lg:px-12"
    >
      {/* Background effects */}
      <Effects />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-28">

        {/* LEFT: TEXT */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          {/* Heading */}
          <h1 className="relative inline-block text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="glowSubtleYellow relative">
              AFIFUL
              <span className="absolute -inset-1 border border-gray-600/60 rounded-md animate-borderWire"></span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            I’m a MERN stack developer focused on frontend development. I build
            structured, maintainable, and responsive web interfaces that deliver
            seamless user experiences. My work balances functionality with clean,
            thoughtful design.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">

            {/* Download CV */}
            <a
              href="/AfifulCV.pdf"
              download
              className="
                inline-flex items-center gap-2 px-5 py-2.5
                text-sm font-medium rounded-md
                bg-white/10 text-gray-200
                border border-white/20
                backdrop-blur
                transition-all duration-300 ease-out
                hover:bg-white/20 hover:text-white hover:scale-[1.04]
              "
            >
              <Download size={16} />
              Download CV
            </a>

            {/* Resume Button */}
            <a
              href="/AfifulResume.pdf"
              download
              className="
                inline-flex items-center gap-2 px-5 py-2.5
                text-sm font-medium rounded-md
                bg-gradient-to-r from-green-500 to-emerald-400
                text-black
                transition-all duration-300 ease-out
                hover:from-green-400 hover:to-emerald-300 hover:scale-[1.04]
              "
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT: ROBOT */}
        <div className="
          flex justify-center items-center
          mt-10 lg:mt-0
          scale-90 sm:scale-100
        ">
          <div className="translate-y-6 sm:translate-y-10 lg:translate-y-14">
            <Robot />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import SkillsEffects from "../components/SkillsEffects";
import "../components/SkillsEffects.css";

/* Skill Images */
import reactImg from "../assets/react_gemini.png";
import htmlImg from "../assets/html_gemini.png";
import cssImg from "../assets/css_gemini.png";
import tailwindImg from "../assets/tailwind_gemini.png";
import jsImg from "../assets/JS_Gemini.png";
import nodeImg from "../assets/nodeJS_Gemini.png";
import expressImg from "../assets/expressJS_Gemini.png";
import mongoImg from "../assets/mongoDB_gemini.png";
import firebaseImg from "../assets/firebase_gemini.png";

const skillsRow1 = [
  { name: "React", img: reactImg },
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "Tailwind", img: tailwindImg },
  { name: "JavaScript", img: jsImg },
];

const skillsRow2 = [
  { name: "Node.js", img: nodeImg },
  { name: "Express.js", img: expressImg },
  { name: "MongoDB", img: mongoImg },
  { name: "Firebase Auth", img: firebaseImg },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-[#0f0f0f] overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-12"
    >
      {/* Background Effects */}
      <SkillsEffects />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          My Skills
        </h2>

        <p className="text-gray-400 text-base sm:text-lg mb-12 max-w-3xl mx-auto">
          As a MERN stack developer, I work with modern technologies to build scalable and responsive web applications.
        </p>

        <div className="flex flex-col gap-8">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8">
            {skillsRow1.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8">
            {skillsRow2.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Skill Card */
function SkillCard({ skill }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        bg-white/5 backdrop-blur-md
        border border-gray-700
        rounded-2xl
        p-4 sm:p-5
        w-24 sm:w-28 md:w-32
        transition-all duration-300 ease-out
        hover:scale-105 hover:bg-white/10
        hover:shadow-lg hover:shadow-green-400/20
      "
    >
      {/* Logo Wrapper */}
      <div
        className="
          flex items-center justify-center
          rounded-full
          bg-black/30
          w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18
          overflow-hidden
        "
      >
        <img
          src={skill.img}
          alt={skill.name}
          className="
            w-full h-full
            object-cover
            rounded-full
          "
        />
      </div>

      <span className="text-gray-300 mt-2 text-xs sm:text-sm md:text-base font-medium">
        {skill.name}
      </span>
    </div>
  );
}

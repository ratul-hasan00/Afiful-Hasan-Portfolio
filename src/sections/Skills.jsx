import React from "react";
import { Code, Database, Zap, Layers, Cpu, Activity, Server, Cloud } from "lucide-react";
import SkillsEffects from "../components/SkillsEffects";
import "../components/SkillsEffects.css";

const skillsRow1 = [
  { name: "React", icon: <Code size={30} color="#22c55e" /> },
  { name: "HTML", icon: <Code size={30} color="#22c55e" /> },
  { name: "CSS", icon: <Activity size={30} color="#22c55e" /> },
  { name: "Tailwind", icon: <Layers size={30} color="#22c55e" /> },
  { name: "JavaScript", icon: <Zap size={30} color="#22c55e" /> },
];

const skillsRow2 = [
  { name: "Node.js", icon: <Server size={30} color="#22c55e" /> },
  { name: "Express.js", icon: <Cpu size={30} color="#22c55e" /> },
  { name: "MongoDB", icon: <Database size={30} color="#22c55e" /> },
  { name: "Firebase Auth", icon: <Cloud size={30} color="#22c55e" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-[#0f0f0f] overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12"
    >
      {/* Background Effects */}
      <SkillsEffects />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          My Skills
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg mb-12 max-w-3xl">
          As a MERN stack developer, I work with modern technologies to build scalable and responsive web applications.
        </p>

        {/* Skills Rows */}
        <div className="flex flex-col gap-8 w-full">

          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {skillsRow1.map((skill) => (
              <div
                key={skill.name}
                className="
                  flex flex-col items-center justify-center
                  bg-white/5 backdrop-blur-md
                  border border-gray-700
                  rounded-2xl
                  p-4 sm:p-5
                  w-28 sm:w-32
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-green-400/20
                "
              >
                {skill.icon}
                <span className="text-gray-300 mt-2 text-sm sm:text-base font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {skillsRow2.map((skill) => (
              <div
                key={skill.name}
                className="
                  flex flex-col items-center justify-center
                  bg-white/5 backdrop-blur-md
                  border border-gray-700
                  rounded-2xl
                  p-4 sm:p-5
                  w-28 sm:w-32
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-green-400/20
                "
              >
                {skill.icon}
                <span className="text-gray-300 mt-2 text-sm sm:text-base font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

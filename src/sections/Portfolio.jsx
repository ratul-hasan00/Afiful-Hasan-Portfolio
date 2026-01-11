import React from "react";
import PortfolioEffects from "../components/PortfolioEffects";

// Projects Data
const projects = [
  {
    name: "AssetVerse",
    description:
      "A MERN stack project for asset management, demonstrating front-end & back-end skills. Built with React, Node.js, Express, and MongoDB.",
    link: "https://asset-verse-d5365.web.app",
  },
];

// Education / Biography
const education = [
  {
    degree: "BBA in Accounting & Information System",
    institution: "Government Titumir College",
    session: "2023-2024",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative w-full bg-[#0b0b0b] overflow-hidden py-20 px-4 sm:px-6 lg:px-12"
    >
      {/* Background Effects */}
      <PortfolioEffects />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center lg:text-left">
          My Portfolio
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-12 max-w-3xl text-center lg:text-left">
          I build dynamic, modern web applications using the latest technologies. Here are some of my projects and experiences demonstrating my skills and expertise.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full justify-items-center lg:justify-items-start">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="
                group
                bg-gray-800/80 backdrop-blur-md
                border border-gray-700
                rounded-2xl
                p-6 sm:p-8
                flex flex-col
                text-left
                w-full sm:w-80
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-lg hover:shadow-white/20
              "
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-green-400 font-medium underline hover:text-green-300 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>

        {/* Education / Biography */}
        <div className="mt-16 max-w-3xl">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 text-center lg:text-left">
            Education & Biography
          </h3>
          <ul className="text-gray-300 space-y-2 text-center lg:text-left">
            {education.map((edu, idx) => (
              <li key={idx} className="text-sm sm:text-base">
                <span className="font-semibold">{edu.degree}</span> – {edu.institution} ({edu.session})
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

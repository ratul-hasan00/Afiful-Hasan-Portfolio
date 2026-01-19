import React, { useState } from "react";
import PortfolioEffects from "../components/PortfolioEffects";

// Projects Data
const projects = [
  {
    name: "AssetVerse",
    description:
      "A MERN stack project for asset management, demonstrating front-end & back-end skills. Built with React, Node.js, Express, and MongoDB.",
    link: "https://asset-verse-d5365.web.app",
  },
  {
    name: "BillHub",
    description:
      "A full-stack web application for managing bills and subscriptions. Built with React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. Features Firebase + JWT authentication with role-based access, Stripe payment integration, RESTful APIs, protected routes, pagination, and PDF generation.",
    link: "https://utility-billhub.web.app",
  },
];

// Education / Biography
const education = [
  {
    degree: "BBA in Accounting & Information System",
    institution: "Government Titumir College",
    department: "Accounting & Information System",
    session: "2023-2024",
  },
  {
    degree: "HSC - Higher Secondary School Certificate",
    institution: "Savar Cantonment Public School & College",
    department: "Humanities",
    session: "2023",
  },
  {
    degree: "SSC - Secondary School Certificate",
    institution: "Savar Cantonment Public School & College",
    department: "Business Studies",
    session: "2021",
  },
];

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  const truncateDescription = (desc, wordLimit = 30) => {
    const words = desc.split(" ");
    if (words.length <= wordLimit) return desc;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center lg:justify-items-start">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="
                group
                bg-gray-800/80 backdrop-blur-md
                border border-amber-600/50
                rounded-2xl
                p-6 sm:p-8
                flex flex-col
                text-left
                w-full sm:w-80
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(191,127,63,0.6)]
                cursor-pointer
              "
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                {project.description.split(" ").length > 30 ? (
                  <>
                    {truncateDescription(project.description)}
                    <button
                      onClick={() => openModal(project)}
                      className="text-white font-medium underline ml-1 hover:text-amber-400 transition-colors duration-200"
                    >
                      Read More
                    </button>
                  </>
                ) : (
                  project.description
                )}
              </p>
              <a
                href={project.link}
                className="text-amber-400 font-medium underline hover:text-amber-300 transition-colors duration-200"
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
                <span className="font-semibold">{edu.degree}</span> – {edu.department} – {edu.institution} ({edu.session})
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && activeProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 w-full max-w-lg relative border-2 border-amber-600 shadow-[0_0_20px_rgba(191,127,63,0.6)]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition text-xl font-bold"
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold text-white mb-4">{activeProject.name}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{activeProject.description}</p>
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-medium underline hover:text-amber-300 transition-colors duration-200"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

import React, { useState } from "react";
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

/* Skills Data with descriptions for modal */
const skillsRow1 = [
  {
    name: "React",
    img: reactImg,
    description:
      "I use React.js to build dynamic and responsive user interfaces. I create reusable components, manage state efficiently with hooks or Redux, and ensure seamless integration with backend APIs.",
  },
  {
    name: "HTML",
    img: htmlImg,
    description:
      "I structure web pages using semantic HTML, ensuring accessibility and SEO best practices. I combine HTML with modern frameworks for dynamic web apps.",
  },
  {
    name: "CSS",
    img: cssImg,
    description:
      "I style applications with CSS, including Flexbox and Grid layouts. I ensure responsive designs and animations that enhance UX across all devices.",
  },
  {
    name: "Tailwind",
    img: tailwindImg,
    description:
      "I use Tailwind CSS for utility-first styling, creating consistent, scalable, and maintainable designs quickly without writing repetitive CSS.",
  },
  {
    name: "JavaScript",
    img: jsImg,
    description:
      "I write clean, modular JavaScript code to handle logic, events, and data manipulation. I integrate JS with React, Node, and other frameworks for full-stack development.",
  },
];

const skillsRow2 = [
  {
    name: "Node.js",
    img: nodeImg,
    description:
      "I use Node.js to create server-side applications, RESTful APIs, and backend logic. I ensure efficient and scalable backend architecture.",
  },
  {
    name: "Express.js",
    img: expressImg,
    description:
      "I leverage Express.js for routing, middleware, and API management, making backend development fast, organized, and maintainable.",
  },
  {
    name: "MongoDB",
    img: mongoImg,
    description:
      "I use MongoDB to design flexible NoSQL databases, handle CRUD operations, and integrate with Node.js for full-stack applications.",
  },
  {
    name: "Firebase Auth",
    img: firebaseImg,
    description:
      "I implement Firebase Authentication for secure user login and registration, managing sessions, and integrating it with React and Node.js apps.",
  },
];

export default function Skills() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  const openModal = (skill) => {
    setActiveSkill(skill);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveSkill(null);
  };

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
              <SkillCard key={skill.name} skill={skill} openModal={openModal} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8">
            {skillsRow2.map((skill) => (
              <SkillCard key={skill.name} skill={skill} openModal={openModal} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && activeSkill && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 w-full max-w-md relative border-2 border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold transition"
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold text-white mb-4">{activeSkill.name}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{activeSkill.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

/* Reusable Skill Card */
function SkillCard({ skill, openModal }) {
  return (
    <div
      onClick={() => openModal(skill)}
      className="
        flex flex-col items-center justify-center
        bg-white/5 backdrop-blur-md
        border border-green-400/50
        rounded-2xl
        p-4 sm:p-5
        w-24 sm:w-28 md:w-32
        transition-all duration-300 ease-out
        hover:scale-105 hover:bg-white/10
        hover:shadow-lg hover:shadow-green-400/25
        cursor-pointer
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
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <span className="text-gray-300 mt-2 text-xs sm:text-sm md:text-base font-medium">
        {skill.name}
      </span>
    </div>
  );
}

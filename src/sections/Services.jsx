import React, { useState } from "react";
import { Monitor, Code, Database, ShieldCheck } from "lucide-react";
import ServiceEffects from "../components/ServiceEffects";
import "../components/ServiceEffects.css";

const services = [
  {
    title: "Front-End Development",
    icon: <Monitor size={26} />,
    description:
      "Responsive, modern, and high-performance interfaces built with React, focused on clean UI and smooth user experience.",
    details:
      "I develop responsive and modern front-end interfaces using React. I focus on creating reusable components, implementing smooth animations, and ensuring fast loading times. My approach ensures a clean and intuitive user experience, while keeping code maintainable and scalable."
  },
  {
    title: "React Single Page Applications",
    icon: <Code size={26} />,
    description:
      "Fast and scalable single-page applications with reusable components and optimized rendering.",
    details:
      "I build React single-page applications that are fast, optimized, and scalable. I ensure efficient state management, lazy loading, and component reusability, resulting in seamless navigation and high-performance applications for users."
  },
  {
    title: "Backend & API Development",
    icon: <Database size={26} />,
    description:
      "Secure and scalable REST APIs using Node.js, Express, and MongoDB with proper data modeling.",
    details:
      "I design and develop backend systems using Node.js and Express, connected with MongoDB databases. I follow best practices for RESTful API development, data modeling, validation, and error handling, ensuring secure and reliable backend services."
  },
  {
    title: "Authentication & Dashboards",
    icon: <ShieldCheck size={26} />,
    description:
      "JWT authentication, role-based access, and admin dashboards for real-world applications.",
    details:
      "I implement secure authentication systems using JWT, role-based access control, and integrate dashboards for admins and users. I focus on security, usability, and scalability so that applications remain safe and manageable."
  },
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const openModal = (service) => {
    setActiveService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveService(null);
    setModalOpen(false);
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#0b0b0b] overflow-hidden py-20 px-4 sm:px-6 lg:px-12"
    >
      {/* Background Effects */}
      <ServiceEffects />

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center lg:items-start">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center lg:text-left">
          My Services
        </h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mb-12 text-center lg:text-left">
          I provide modern, scalable, and user-focused web development services using
          the MERN stack. My focus is on building clean interfaces, efficient
          single-page applications, and reliable backend systems that deliver real
          value and a smooth user experience.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full justify-items-center lg:justify-items-start">
          {services.map((service) => (
            <div
              key={service.title}
              onClick={() => openModal(service)}
              className="
                group
                relative
                bg-gray-800/80
                rounded-xl
                p-6
                flex flex-col
                items-start
                text-left
                max-w-sm
                h-auto
                border border-blue-400/50
                shadow-[0_0_8px_rgba(96,165,250,0.25)]
                transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:shadow-[0_8px_20px_rgba(96,165,250,0.25),0_0_14px_rgba(96,165,250,0.35)]
                cursor-pointer
              "
            >
              {/* Icon */}
              <div className="text-blue-400 mb-4 transition-transform duration-300 ease-out group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && activeService && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4 sm:px-6"
          onClick={closeModal}
        >
          <div
            className="
              bg-gray-900/95 text-white p-6 sm:p-8
              rounded-2xl max-w-3xl w-full
              relative
              border-2 border-blue-400
              shadow-[0_0_20px_rgba(96,165,250,0.6)]
              animate-fadeIn
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">{activeService.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{activeService.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}

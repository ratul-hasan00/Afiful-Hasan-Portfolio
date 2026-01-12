import React from "react";
import { Monitor, Code, Database, ShieldCheck } from "lucide-react";
import ServiceEffects from "../components/ServiceEffects";
import "../components/ServiceEffects.css";

const services = [
  {
    title: "Front-End Development",
    icon: <Monitor size={26} />,
    description:
      "Responsive, modern, and high-performance interfaces built with React, focused on clean UI and smooth user experience.",
  },
  {
    title: "React Single Page Applications",
    icon: <Code size={26} />,
    description:
      "Fast and scalable single-page applications with reusable components and optimized rendering.",
  },
  {
    title: "Backend & API Development",
    icon: <Database size={26} />,
    description:
      "Secure and scalable REST APIs using Node.js, Express, and MongoDB with proper data modeling.",
  },
  {
    title: "Authentication & Dashboards",
    icon: <ShieldCheck size={26} />,
    description:
      "JWT authentication, role-based access, and admin dashboards for real-world applications.",
  },
];

export default function Services() {
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
    </section>
  );
}

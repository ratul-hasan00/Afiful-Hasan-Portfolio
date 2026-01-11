import React, { useState } from "react";
import BlogEffects from "../components/BlogEffects";
import "../components/BlogEffects.css";

const blogPosts = [
  {
    id: 1,
    title: "Building a Modern Portfolio with React & Tailwind CSS",
    date: "Jan 6, 2026",
    excerpt:
      "A practical breakdown of how I designed and developed my portfolio using React, Tailwind CSS, and clean component architecture.",
    content:
      "In this blog, I share the complete process of building my personal portfolio. I planned the layout with a focus on usability, created reusable React components, and styled the UI using Tailwind CSS & Vanilla CSS. I also implemented glassmorphism effects, smooth hover interactions, and responsive layouts to ensure the site performs well across devices. This project strengthened my understanding of scalable front-end structure and UI consistency."
  },
  {
    id: 2,
    title: "My MERN Stack Learning Path as a Front-End Developer",
    date: "Dec 22, 2025",
    excerpt:
      "An honest overview of how I approached learning the MERN stack with a strong focus on front-end development.",
    content:
      "I started my MERN stack journey by mastering React fundamentals such as hooks, state management, and component-driven design. Alongside React, I learned how Express and Node.js handle APIs and how MongoDB stores application data. By building real-world projects like AssetVerse, I gained hands-on experience connecting front-end interfaces with back-end services, improving both my problem-solving skills and code quality."
  },
  {
    id: 3,
    title: "Improving Front-End Performance in React & Vanilla JavaScript",
    date: "Nov 18, 2025",
    excerpt:
      "Practical techniques I use to optimize performance in React applications and core JavaScript-driven interfaces.",
    content:
      "This article covers real-world performance optimization strategies for both React and Vanilla JavaScript projects. I discuss using lazy loading, code splitting, memoization with useMemo and useCallback, and minimizing unnecessary re-renders in React. Alongside this, I focus on core JavaScript practices such as efficient DOM manipulation, event delegation, debouncing and throttling, and reducing costly operations. I also emphasize asset optimization, clean logic structure, and well-organized Tailwind CSS styles to deliver faster, smoother, and more maintainable front-end experiences."
  }
];

export default function Blog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeBlog, setActiveBlog] = useState(null);

  const openModal = (post) => {
    setActiveBlog(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveBlog(null);
    setModalOpen(false);
  };

  return (
    <section
      id="blog"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0b0b0b] overflow-hidden px-4 sm:px-6 lg:px-12 py-20"
    >
      {/* Background Effects */}
      <BlogEffects />

      {/* Headline & Description */}
      <div className="relative z-10 max-w-7xl text-center lg:text-left mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          My Blog
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto lg:mx-0">
          Explore my thoughts, tutorials, and experiences in web development and design.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center lg:justify-items-start">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => openModal(post)}
            className="
              group
              w-64 sm:w-72
              p-6 sm:p-8
              rounded-2xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              shadow-[0_8px_30px_rgba(0,0,0,0.35)]
              hover:bg-white/10
              transition-all duration-500
              cursor-pointer
              flex flex-col
              h-full
            "
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{post.date}</p>
            <p className="text-gray-300 text-sm sm:text-base flex-grow">{post.excerpt}</p>
            <span className="text-yellow-400 font-medium mt-4 hover:text-yellow-300 transition-colors">
              Read More →
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && activeBlog && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4 sm:px-6"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900/95 text-white p-6 sm:p-8 rounded-2xl max-w-3xl w-full relative shadow-lg animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">{activeBlog.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6">{activeBlog.date}</p>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">{activeBlog.content}</p>
          </div>
        </div>
      )}
    </section>
  );
}

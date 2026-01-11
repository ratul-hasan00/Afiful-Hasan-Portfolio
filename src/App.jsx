import { useEffect, useRef } from "react";
import Lenis from "lenis"; // ✅ correct import

import Sidebar from "./components/Sidebar";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,   // desktop
      smoothTouch: true,   // mobile/tablet
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="flex bg-[#0b0b0b] text-gray-200">
      <Sidebar lenis={lenisRef} />

      <main className="flex-1 lg:ml-[72px]">
        <Home />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

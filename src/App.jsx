import Sidebar from "./components/Sidebar";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="flex bg-[#0b0b0b] text-gray-200">
      <Sidebar />

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

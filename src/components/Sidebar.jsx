import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Layers,
  Image,
  BookOpen,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navs = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "portfolio", label: "Portfolio", icon: Image },
  { id: "blog", label: "Blog", icon: BookOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 200;
      navs.forEach((n) => {
        const sec = document.getElementById(n.id);
        if (
          sec &&
          sec.offsetTop <= pos &&
          sec.offsetTop + sec.offsetHeight > pos
        ) {
          setActive(n.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="fixed top-0 left-0 w-full h-14 bg-black/60 backdrop-blur border-b border-white/10 flex items-center px-4 z-50 lg:hidden">
        <button onClick={() => setOpen(true)}>
          <Menu />
        </button>
        <span className="ml-4 font-semibold tracking-widest text-gray-200">
          AFIFUL
        </span>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-screen
        bg-black/60 backdrop-blur-xl border-r border-white/10
        z-50 transition-all duration-500 ease-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:w-[80px] lg:hover:w-64 group`}
      >
        <div className="flex flex-col h-full px-3 py-6 gap-8">
          {/* LOGO + NAME */}
          <div className="flex items-center gap-4 px-2 justify-center lg:justify-start">
            {/* LOGO */}
            <div
              className="
                w-12 h-12 min-w-[48px]
                rounded-xl
                bg-gradient-to-br from-gray-200 to-gray-400
                flex items-center justify-center
                font-extrabold text-black text-xl
                shadow-[0_0_10px_rgba(255,255,255,0.18)]
                mx-auto lg:mx-0
                transition-all duration-500 ease-out
                group-hover:shadow-[0_0_18px_rgba(255,255,255,0.28)]
              "
            >
              A
            </div>

            {/* NAME */}
            <span
              className="
                text-lg font-semibold tracking-[0.2em]
                text-gray-200
                opacity-0 group-hover:opacity-100
                translate-x-[-6px] group-hover:translate-x-0
                transition-all duration-500 ease-out
              "
            >
              AFIFUL
            </span>

            <button onClick={() => setOpen(false)} className="ml-auto lg:hidden">
              <X />
            </button>
          </div>

          {/* NAV */}
          <nav className="flex flex-col gap-2 mt-6">
            {navs.map((n) => {
              const Icon = n.icon;
              const isActive = active === n.id;

              return (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`
                    relative flex items-center gap-4 h-12 px-4 rounded-xl
                    transition-all duration-500 ease-out
                    ${isActive
                      ? "bg-white/15 text-white shadow-[0_0_16px_rgba(255,255,255,0.16)]"
                      : "text-gray-400 hover:text-white hover:bg-white/10 hover:translate-x-[2px]"
                    }
                  `}
                >
                  {/* ICON */}
                  <Icon
                    size={22}
                    className="
                      transition-transform duration-300 ease-out
                      group-hover:translate-x-[1px]
                    "
                  />

                  {/* LABEL */}
                  <span
                    className="
                      whitespace-nowrap
                      opacity-0 group-hover:opacity-100
                      translate-x-[-6px] group-hover:translate-x-0
                      transition-all duration-500 ease-out
                    "
                  >
                    {n.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* FOOTER */}
          <div
            className="
              mt-auto text-xs text-gray-600
              opacity-0 group-hover:opacity-100
              transition duration-500
            "
          >
            © 2026 Afiful
          </div>
        </div>
      </aside>
    </>
  );
}

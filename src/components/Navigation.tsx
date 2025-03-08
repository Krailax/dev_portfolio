import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import list_navigation from "@/data/list_navigation.json"

export default function ComponentMenuNavigation() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setMenu(!menu);

  return (
    <header className="bg-[#1f1f1f] w-11/12 h-auto p-4 text-white fixed lg:relative z-20">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold">Mi Portafolio</h1>

        <button className="lg:hidden flex" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 -960 960 960" fill="white">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>

        <nav className="hidden lg:flex gap-8 text-lg items-center">
          {list_navigation.map((item, index) => {
            const isActive = location.pathname === item.url;
            return (
              <Link key={index} to={item.url} className={`px-4 py-2 rounded-md transition-all ${isActive ? "bg-black/15" : "hover:bg-white/10"}`}>
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>

      {menu && (
        <nav className="lg:hidden flex flex-col gap-4 bg-[#2a2a2a] p-6 mt-2 rounded-lg text-xl shadow-lg">
          {list_navigation.map((item, index) => {
            const isActive = location.pathname === item.url;
            return (
              <Link key={index} to={item.url} onClick={() => setMenu(false)} className={`border-b border-white/20 pb-2 px-4 py-2 rounded-md transition-all ${ isActive ? "bg-black/10" : "hover:bg-white/10"}`}>
                {item.title}
              </Link>
            );
          })}
        </nav>
      )}      
    </header>
  );
}
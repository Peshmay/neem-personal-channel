import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "My Story", path: "/about" },
  { label: "Media Hub", path: "/media" },
  { label: "Sanctuary", path: "/sanctuary" },
  { label: "Shop", path: "/shop" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-[999] w-full border-b border-[#E9E4DD] bg-[#F8F7F5]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Neem home"
        >
          <span className="text-3xl font-light italic text-[#1A1A1A]">N</span>
          <span className="text-xl font-semibold text-[#1A1A1A]">Neem</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-[0.18em] transition ${
                  isActive
                    ? "text-[#72283A]"
                    : "text-[#1A1A1A] hover:text-[#72283A]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/sanctuary"
            className="border border-[#A9B0AE] px-8 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#1A1A1A] transition hover:bg-white"
          >
            Start Here
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center border border-[#E9E4DD] bg-white text-[#1A1A1A] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#E9E4DD] bg-[#F8F7F5] px-6 py-5 shadow-lg md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 text-sm font-black uppercase tracking-[0.18em] transition ${
                    isActive
                      ? "bg-[#72283A] text-white"
                      : "bg-white text-[#1A1A1A]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/sanctuary"
              onClick={closeMenu}
              className="mt-2 border border-[#A9B0AE] px-4 py-3 text-center text-sm font-black uppercase tracking-[0.18em] text-[#1A1A1A]"
            >
              Start Here
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

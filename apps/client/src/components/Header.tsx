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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#171615]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Neem home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#C9907A] text-lg font-black text-[#171615]">
            N
          </span>
          <span className="text-lg font-black tracking-wide">Neem</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? "text-[#C9907A]"
                    : "text-[#C8B8AA] hover:text-[#F7F0E8]"
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
            className="rounded-full bg-[#C9907A] px-5 py-2.5 text-sm font-bold text-[#171615] transition hover:scale-105"
          >
            Join Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-[#F7F0E8] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#171615] px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base font-bold transition ${
                    isActive
                      ? "bg-[#C9907A] text-[#171615]"
                      : "bg-[#25231F] text-[#C8B8AA]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/sanctuary"
              onClick={closeMenu}
              className="mt-2 rounded-2xl bg-[#C9907A] px-4 py-3 text-center font-black text-[#171615]"
            >
              Join Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Programs", path: "/shop" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/sanctuary" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-[999] w-full border-b border-[var(--color-champagne)] bg-[var(--color-ivory)]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-4"
          aria-label="Neema Souveraine home"
        >
          <img
            src="/images/neema-logo.jpg"
            alt="Neema Souveraine logo"
            className="h-11 w-11 rounded-full object-cover"
          />

          <span className="font-serif text-xl font-light uppercase tracking-[0.18em] text-[var(--color-plum)]">
            Neema Souveraine
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-xs font-semibold uppercase tracking-[0.22em] transition ${
                  isActive
                    ? "text-[var(--color-gold)]"
                    : "text-[var(--color-mist)] hover:text-[var(--color-gold)]"
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
            className="border border-[var(--color-gold)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)] transition hover:bg-[var(--color-gold)] hover:text-white"
          >
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center border border-[var(--color-champagne)] bg-white text-[var(--color-plum)] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[var(--color-champagne)] bg-[var(--color-ivory)] px-6 py-5 shadow-lg md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition ${
                    isActive
                      ? "bg-[var(--color-plum)] text-white"
                      : "bg-white text-[var(--color-plum)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/sanctuary"
              onClick={closeMenu}
              className="mt-2 border border-[var(--color-gold)] px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "My Story", path: "/about" },
  { label: "Media Hub", path: "/media" },
  { label: "Sanctuary", path: "/sanctuary" },
  { label: "Shop", path: "/shop" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#171615]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-xl font-black tracking-wide">
          Neem
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

        <Link
          to="/sanctuary"
          className="rounded-full bg-[#C9907A] px-5 py-2 text-sm font-bold text-[#171615] transition hover:scale-105"
        >
          Join Now
        </Link>
      </div>
    </header>
  );
}

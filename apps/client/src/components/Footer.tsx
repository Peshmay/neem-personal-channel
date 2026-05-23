import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const footerLinks = [
  { label: "My Story", path: "/about" },
  { label: "Media Hub", path: "/media" },
  { label: "Sanctuary", path: "/sanctuary" },
  { label: "Shop", path: "/shop" },
];

const socialLinks = ["Youtube", "Instagram", "LinkedIn", "Facebook"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#171615]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-6 md:py-16">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#C9907A] text-lg font-black text-[#171615]">
              N
            </span>
            <span className="text-lg font-black tracking-wide text-[#F7F0E8]">
              Neem
            </span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-[#C8B8AA]">
            A creator-owned healing channel for guided prayers, honest stories,
            daily routines, courses, and digital resources.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.25em] text-[#C9907A]">
            Explore
          </h2>

          <nav className="mt-5 grid gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-bold text-[#C8B8AA] transition hover:text-[#F7F0E8]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.25em] text-[#C9907A]">
            Social
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <button
                key={item}
                type="button"
                aria-label={item}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#25231F] text-[#C8B8AA] transition hover:border-[#C9907A] hover:text-[#F7F0E8]"
              >
                <ExternalLink size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs font-semibold text-[#7F7166]">
        © {new Date().getFullYear()} Neem. Built as a full-stack creator
        platform.
      </div>
    </footer>
  );
}

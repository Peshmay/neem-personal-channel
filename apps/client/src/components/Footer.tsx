import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const footerLinks = [
  { label: "My Story", path: "/about" },
  { label: "Media Hub", path: "/media" },
  { label: "Sanctuary", path: "/sanctuary" },
  { label: "Shop", path: "/shop" },
];

const socialLinks = ["YouTube", "Instagram", "LinkedIn", "Facebook"];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="font-serif text-4xl italic leading-none text-[var(--color-text)]">
              N
            </span>
            <span className="text-xl font-semibold text-[var(--color-text)]">
              Neem
            </span>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--color-muted-text)]">
            A creator-owned healing channel for guided prayers, honest stories,
            daily routines, courses, and digital resources.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--color-burgundy)]">
            Explore
          </h2>

          <nav className="mt-6 grid gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-text)] transition hover:text-[var(--color-burgundy)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--color-burgundy)]">
            Social
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <button
                key={item}
                type="button"
                aria-label={item}
                className="grid h-11 w-11 place-items-center border border-[var(--color-border)] bg-white text-[var(--color-muted-text)] transition hover:border-[var(--color-burgundy)] hover:text-[var(--color-burgundy)]"
              >
                <ExternalLink size={18} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] px-6 py-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted-text)]">
        © {new Date().getFullYear()} Neem. Full-stack creator platform.
      </div>
    </footer>
  );
}

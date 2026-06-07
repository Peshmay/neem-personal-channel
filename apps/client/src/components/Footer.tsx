import { Link } from "react-router-dom";

const footerLinks = [
  { label: "About", path: "/about" },
  { label: "Programs", path: "/shop" },
  { label: "Media", path: "/media" },
  { label: "Book a Call", path: "/sanctuary" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:rsouveraine@hotmail.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 text-white md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="font-serif text-2xl font-light uppercase tracking-[0.16em]">
            Neema Souveraine
          </div>

          <p className="mt-5 max-w-md text-sm font-light leading-7 text-white/45">
            Coaching women entrepreneurs into identity-first leadership. Rooted
            in purpose. Grounded in faith.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
            Navigate
          </h2>

          <nav className="mt-6 grid gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-white/50 transition hover:text-[var(--color-gold)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
            Connect
          </h2>

          <div className="mt-6 grid gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/50 transition hover:text-[var(--color-gold)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 md:col-span-3">
          <div className="flex flex-col justify-between gap-4 text-xs text-white/30 md:flex-row">
            <p>
              © {new Date().getFullYear()} Neema Souveraine. All rights
              reserved.
            </p>
            <p className="uppercase tracking-[0.22em] text-[var(--color-gold)]">
              She Leads Different ◆
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

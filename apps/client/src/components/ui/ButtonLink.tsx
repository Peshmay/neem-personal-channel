import { Link } from "react-router-dom";

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function ButtonLink({
  to,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-3 text-xs font-black uppercase tracking-[0.2em] transition";

  const variants = {
    primary:
      "bg-[var(--color-burgundy)] text-white hover:bg-[var(--color-burgundy-dark)]",
    secondary:
      "border border-[#A9B0AE] bg-transparent text-[var(--color-text)] hover:bg-white",
  };

  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}

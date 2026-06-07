import { Link } from "react-router-dom";

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold";
};

export default function ButtonLink({
  to,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition";

  const variants = {
    primary: "bg-[var(--color-plum)] text-white hover:bg-[var(--color-gold)]",
    secondary:
      "border border-[var(--color-gold)] bg-transparent text-[var(--color-plum)] hover:bg-[var(--color-gold)] hover:text-white",
    gold: "bg-[var(--color-gold)] text-white hover:bg-[var(--color-plum)]",
  };

  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}

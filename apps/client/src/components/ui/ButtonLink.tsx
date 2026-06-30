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
    "group relative inline-flex items-center justify-center overflow-hidden text-xs font-medium uppercase tracking-[0.22em] transition";

  const variants = {
    primary: "bg-[var(--color-plum)] px-10 py-4 text-white hover:text-white",
    secondary:
      "bg-transparent px-0 py-1 text-[rgba(61,26,79,0.78)] underline underline-offset-4 decoration-[rgba(61,26,79,0.35)] hover:text-[var(--color-gold)] hover:decoration-[var(--color-gold)]",
    gold: "bg-[var(--color-gold)] px-8 py-3 text-white hover:text-white",
  };

  const slideColor =
    variant === "primary"
      ? "bg-[var(--color-gold)]"
      : variant === "gold"
        ? "bg-[var(--color-plum)]"
        : "";

  const hasSlide = variant === "primary" || variant === "gold";

  const textColor =
    variant === "secondary"
      ? "text-[rgba(61,26,79,0.78)] group-hover:text-[var(--color-gold)]"
      : "text-white";

  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
      {hasSlide && (
        <span
          aria-hidden="true"
          className={`absolute inset-0 -translate-x-full ${slideColor} transition-transform duration-500 group-hover:translate-x-0`}
        />
      )}

      <span className={`relative z-10 ${textColor}`}>{children}</span>
    </Link>
  );
}

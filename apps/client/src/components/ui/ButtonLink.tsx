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
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-black transition hover:scale-105";

  const variants = {
    primary: "bg-[#C9907A] text-[#171615]",
    secondary: "border border-[#C9907A] text-[#F7F0E8] hover:bg-[#25231F]",
  };

  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeaderProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C9907A]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-[#C8B8AA] md:text-lg">
        {description}
      </p>
    </div>
  );
}

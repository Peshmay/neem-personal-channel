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
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
        {eyebrow}
      </p>

      <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-[var(--color-plum)] md:text-6xl">
        {title}
      </h2>

      <p className="mt-6 text-base font-light leading-8 text-[var(--color-mist)] md:text-lg">
        {description}
      </p>
    </div>
  );
}

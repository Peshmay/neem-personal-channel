import ButtonLink from "./ButtonLink";

type PageCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel: string;
  secondaryTo: string;
};

export default function PageCta({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: PageCtaProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <div className="rounded-[2rem] border border-white/10 bg-[#25231F] p-8 text-center shadow-xl md:p-12">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C9907A]">
          {eyebrow}
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#C8B8AA]">
          {description}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink to={primaryTo}>{primaryLabel}</ButtonLink>
          <ButtonLink to={secondaryTo} variant="secondary">
            {secondaryLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

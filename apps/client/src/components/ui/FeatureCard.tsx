type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-[#25231F] p-6 shadow-xl transition hover:-translate-y-1 hover:border-[#C9907A]/50">
      <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#C9907A]/20 text-[#E7C0B3]">
        {icon}
      </div>

      <h3 className="text-xl font-black">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-[#C8B8AA]">{description}</p>
    </article>
  );
}

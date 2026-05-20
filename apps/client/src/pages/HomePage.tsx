export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9907A]">
        Neem Healing Channel
      </p>

      <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
        You are not alone on this healing journey.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#C8B8AA]">
        A creator-owned sanctuary for guided prayers, healing stories, daily
        routines, courses, and digital resources.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#start"
          className="rounded-full bg-[#C9907A] px-8 py-4 font-bold text-[#171615] transition hover:scale-105"
        >
          Watch Free Introduction
        </a>

        <a
          href="#hub"
          className="rounded-full border border-[#C9907A] px-8 py-4 font-bold text-[#F7F0E8] transition hover:bg-[#25231F]"
        >
          Explore Media Hub
        </a>
      </div>
    </section>
  );
}

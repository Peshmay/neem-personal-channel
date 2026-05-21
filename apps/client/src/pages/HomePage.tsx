import {
  dailyEssentials,
  latestContent,
  premiumResources,
} from "../data/homeData";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DailyEssentialsSection />
      <LatestContentSection />
      <PremiumResourcesSection />
      <SocialHighlightsSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-81px)] max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
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
            href="#latest"
            className="rounded-full bg-[#C9907A] px-8 py-4 text-center font-bold text-[#171615] transition hover:scale-105"
          >
            Watch Free Introduction
          </a>

          <a
            href="#essentials"
            className="rounded-full border border-[#C9907A] px-8 py-4 text-center font-bold text-[#F7F0E8] transition hover:bg-[#25231F]"
          >
            Start Daily Sanctuary
          </a>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-[#25231F] p-4 shadow-2xl">
        <div className="aspect-video rounded-[1.5rem] bg-gradient-to-br from-[#3A332D] to-[#171615]">
          <div className="flex h-full items-center justify-center">
            <button
              type="button"
              className="grid h-20 w-20 place-items-center rounded-full bg-[#C9907A] text-3xl font-black text-[#171615] shadow-xl transition hover:scale-105"
              aria-label="Play introduction video"
            >
              ▶
            </button>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9907A]">
            Free Introduction
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Start here: your healing journey
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#C8B8AA]">
            A warm welcome video explaining the story, purpose, and daily rhythm
            of Neem.
          </p>
        </div>
      </div>
    </section>
  );
}

function DailyEssentialsSection() {
  return (
    <section id="essentials" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="Daily Sanctuary"
        title="Return every day for simple healing structure."
        description="This is the habit-building part of the platform: prayer, reflection, and daily emotional grounding."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {dailyEssentials.map((item) => (
          <article
            key={item.id}
            className="rounded-[1.5rem] border border-white/10 bg-[#25231F] p-6 shadow-xl"
          >
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#C9907A]/20 text-2xl">
              ✦
            </div>

            <h3 className="text-xl font-black">{item.title}</h3>

            <p className="mt-3 text-sm leading-6 text-[#C8B8AA]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function LatestContentSection() {
  return (
    <section id="latest" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="Media Hub"
        title="Latest videos, podcasts, and audio prayers."
        description="A clean library for visitors to discover your teaching, testimony, and guided content."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {latestContent.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#25231F] shadow-xl"
          >
            <div className="aspect-video bg-gradient-to-br from-[#4A3A32] to-[#171615]">
              <div className="flex h-full items-center justify-center">
                <span className="rounded-full bg-[#C9907A] px-4 py-2 text-sm font-black text-[#171615]">
                  {item.type}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#C9907A]">
                <span>{item.type}</span>
                <span>{item.duration}</span>
              </div>

              <h3 className="text-xl font-black">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-[#C8B8AA]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PremiumResourcesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        {premiumResources.map((item) => (
          <article
            key={item.id}
            className="rounded-[2rem] border border-white/10 bg-[#25231F] p-8 shadow-xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9907A]">
              Premium Resource
            </p>

            <h2 className="mt-4 text-3xl font-black">{item.title}</h2>

            <p className="mt-4 max-w-xl leading-7 text-[#C8B8AA]">
              {item.description}
            </p>

            <button
              type="button"
              className="mt-8 rounded-full bg-[#C9907A] px-6 py-3 font-bold text-[#171615] transition hover:scale-105"
            >
              {item.cta}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function SocialHighlightsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-[2rem] border border-white/10 bg-[#25231F] p-8 text-center shadow-xl md:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9907A]">
          Social Highlights
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black">
          Continue the journey across YouTube, Instagram, LinkedIn, and Facebook.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#C8B8AA]">
          The website becomes the home base. Social platforms bring discovery,
          but Neem owns the structure, resources, and member experience.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["YouTube", "Instagram", "LinkedIn", "Facebook"].map((platform) => (
            <span
              key={platform}
              className="rounded-full border border-white/10 bg-[#171615] px-5 py-3 text-sm font-bold text-[#F7F0E8]"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9907A]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-[#C8B8AA]">{description}</p>
    </div>
  );
}

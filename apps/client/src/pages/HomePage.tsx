import {
  BookOpen,
  CalendarCheck,
  Headphones,
  HeartHandshake,
  Play,
  Sparkles,
  Video,
} from "lucide-react";
import {
  dailyEssentials,
  latestContent,
  premiumResources,
} from "../data/homeData";
import ButtonLink from "../components/ui/ButtonLink";
import FeatureCard from "../components/ui/FeatureCard";
import SectionHeader from "../components/ui/SectionHeader";

const essentialIcons = [Headphones, CalendarCheck, Sparkles];

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
    <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#C9907A] md:text-sm">
          Neem Healing Channel
        </p>

        <h1 className="max-w-4xl text-4xl font-black leading-[1.05] md:text-6xl lg:text-7xl">
          You are not alone on this healing journey.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#C8B8AA] md:text-lg">
          A creator-owned sanctuary for guided prayers, healing stories, daily
          routines, courses, and digital resources.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/media">Watch Free Introduction</ButtonLink>
          <ButtonLink to="/sanctuary" variant="secondary">
            Start Daily Sanctuary
          </ButtonLink>
        </div>

        <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center">
          {[
            ["Videos", "Healing stories"],
            ["Audio", "Guided prayers"],
            ["Courses", "Premium learning"],
          ].map(([label, text]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-[#25231F] p-4"
            >
              <p className="text-sm font-black text-[#F7F0E8]">{label}</p>
              <p className="mt-1 text-xs text-[#C8B8AA]">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-[#25231F] p-3 shadow-2xl md:p-4">
        <div className="aspect-video rounded-[1.5rem] bg-gradient-to-br from-[#4A3A32] via-[#2F2924] to-[#171615]">
          <div className="flex h-full items-center justify-center">
            <button
              type="button"
              className="grid h-16 w-16 place-items-center rounded-full bg-[#C9907A] text-[#171615] shadow-xl transition hover:scale-105 md:h-20 md:w-20"
              aria-label="Play introduction video"
            >
              <Play fill="currentColor" size={34} />
            </button>
          </div>
        </div>

        <div className="p-3 md:p-5">
          <p className="text-xs font-black uppercase tracking-widest text-[#C9907A]">
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
    <section
      id="essentials"
      className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24"
    >
      <SectionHeader
        eyebrow="Daily Sanctuary"
        title="Return every day for simple healing structure."
        description="This is the habit-building part of the platform: prayer, reflection, and daily emotional grounding."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {dailyEssentials.map((item, index) => {
          const Icon = essentialIcons[index] ?? Sparkles;

          return (
            <FeatureCard
              key={item.id}
              icon={<Icon size={28} />}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
}

function LatestContentSection() {
  return (
    <section
      id="latest"
      className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24"
    >
      <SectionHeader
        eyebrow="Media Hub"
        title="Latest videos, podcasts, and audio prayers."
        description="A clean library for visitors to discover your teaching, testimony, and guided content."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {latestContent.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#25231F] shadow-xl transition hover:-translate-y-1 hover:border-[#C9907A]/50"
          >
            <div className="aspect-video bg-gradient-to-br from-[#4A3A32] to-[#171615]">
              <div className="flex h-full items-center justify-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#C9907A] text-[#171615]">
                  {item.type === "Video" ? (
                    <Video size={26} />
                  ) : (
                    <Headphones size={26} />
                  )}
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-3 flex items-center justify-between gap-4 text-xs font-black uppercase tracking-widest text-[#C9907A]">
                <span>{item.type}</span>
                <span>{item.duration}</span>
              </div>

              <h3 className="text-xl font-black leading-tight">{item.title}</h3>

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
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <SectionHeader
        eyebrow="Premium Resources"
        title="Turn testimony and teaching into structured learning."
        description="Courses, e-books, and templates make the platform more than a content feed. They create a real product ecosystem."
        center
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {premiumResources.map((item, index) => (
          <article
            key={item.id}
            className="rounded-[2rem] border border-white/10 bg-[#25231F] p-7 shadow-xl md:p-8"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#C9907A]/20 text-[#E7C0B3]">
              {index === 0 ? (
                <HeartHandshake size={28} />
              ) : (
                <BookOpen size={28} />
              )}
            </div>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-[#C9907A]">
              Premium Resource
            </p>

            <h3 className="mt-3 text-3xl font-black">{item.title}</h3>

            <p className="mt-4 max-w-xl leading-7 text-[#C8B8AA]">
              {item.description}
            </p>

            <button
              type="button"
              className="mt-8 rounded-full bg-[#C9907A] px-6 py-3 font-black text-[#171615] transition hover:scale-105"
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
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <div className="rounded-[2rem] border border-white/10 bg-[#25231F] p-7 text-center shadow-xl md:p-12">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C9907A]">
          Social Highlights
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
          Social platforms bring discovery. Neem owns the journey.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#C8B8AA]">
          YouTube, Instagram, LinkedIn, and Facebook lead people here. The
          website gives them structure, resources, and a reason to return.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["YouTube", "Instagram", "LinkedIn", "Facebook"].map((platform) => (
            <span
              key={platform}
              className="rounded-2xl border border-white/10 bg-[#171615] px-5 py-4 text-sm font-black text-[#F7F0E8]"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

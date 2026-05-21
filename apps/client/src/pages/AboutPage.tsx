import { Link } from "react-router-dom";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";
import { audience, storyMilestones, values } from "../data/aboutData";
import ButtonLink from "../components/ui/ButtonLink";
import SectionHeader from "../components/ui/SectionHeader";

const valueIcons = [Heart, Sparkles, ShieldCheck];

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <StorySection />
      <ValuesSection />
      <AudienceSection />
      <TrustCtaSection />
    </>
  );
}

function AboutHeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#C9907A] md:text-sm">
          My Story
        </p>

        <h1 className="max-w-4xl text-4xl font-black leading-[1.05] md:text-6xl">
          A safe place for healing, prayer, and rebuilding.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#C8B8AA] md:text-lg">
          Neem is built around one clear belief: people need more than scattered
          social posts. They need a calm space where stories, prayer, routines,
          and learning are organized with care.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/sanctuary">Start Daily Sanctuary</ButtonLink>
          <ButtonLink to="/media" variant="secondary">
            Explore Media Hub
          </ButtonLink>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-[#25231F] p-4 shadow-2xl">
        <div className="rounded-[1.5rem] bg-gradient-to-br from-[#4A3A32] via-[#2F2924] to-[#171615] p-8">
          <div className="grid min-h-[360px] place-items-center rounded-[1.25rem] border border-white/10 bg-[#171615]/40 px-6 text-center">
            <div>
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#C9907A] text-3xl font-black text-[#171615]">
                N
              </div>

              <h2 className="mt-6 text-3xl font-black">Neem</h2>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#C8B8AA]">
                Healing content, daily rhythm, and premium learning in one
                creator-owned platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <SectionHeader
        eyebrow="The Journey"
        title="This is not just content. It is a guided path."
        description="The strongest creator platforms have a clear story. This page explains why Neem exists and why people should trust the voice behind it."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {storyMilestones.map((item, index) => (
          <article
            key={item.id}
            className="rounded-[1.5rem] border border-white/10 bg-[#25231F] p-6 shadow-xl"
          >
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#C9907A]/20 text-lg font-black text-[#E7C0B3]">
              {index + 1}
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

function ValuesSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <SectionHeader
        eyebrow="What Neem Stands For"
        title="Warm, honest, structured support."
        description="The brand should feel personal, but also organized enough to become a serious learning and membership platform."
        center
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {values.map((item, index) => {
          const Icon = valueIcons[index] ?? Heart;

          return (
            <article
              key={item.id}
              className="rounded-[1.5rem] border border-white/10 bg-[#25231F] p-6 text-center shadow-xl"
            >
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#C9907A]/20 text-[#E7C0B3]">
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-black">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-[#C8B8AA]">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[#25231F] p-7 shadow-xl md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C9907A]">
            Who It Is For
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            Built for people who need a calm place to return to.
          </h2>

          <p className="mt-5 leading-7 text-[#C8B8AA]">
            The audience is not looking for noise. They are looking for
            guidance, peace, and something they can come back to every day.
          </p>
        </div>

        <div className="grid gap-3">
          {audience.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-[#171615] p-5 text-sm font-bold leading-6 text-[#F7F0E8]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustCtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <div className="rounded-[2rem] border border-white/10 bg-[#C9907A] p-8 text-center text-[#171615] shadow-xl md:p-12">
        <p className="text-xs font-black uppercase tracking-[0.25em]">
          Begin Here
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
          Start with one prayer, one story, one small daily step.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#34241F]">
          The goal is not to overwhelm people. The goal is to help them take the
          next honest step.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/sanctuary"
            className="rounded-full bg-[#171615] px-7 py-3.5 text-sm font-black text-[#F7F0E8] transition hover:scale-105"
          >
            Enter Sanctuary
          </Link>

          <Link
            to="/media"
            className="rounded-full border border-[#171615] px-7 py-3.5 text-sm font-black transition hover:scale-105"
          >
            Watch Free Content
          </Link>
        </div>
      </div>
    </section>
  );
}

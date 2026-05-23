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
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-28">
        <div className="relative">
          <div className="absolute left-8 top-8 h-[430px] w-[430px] rounded-full bg-[var(--color-soft)]" />

          <div className="relative z-10 overflow-hidden rounded-b-[220px] rounded-t-[220px]">
            <img
              src="/images/Neem-image.png"
              alt="Neem founder"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-6 text-xs font-black uppercase tracking-[0.35em] text-[var(--color-burgundy)]">
            My Story
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-normal leading-tight text-[var(--color-text)] md:text-7xl">
            A calm space for <span className="italic">healing</span>, prayer,
            and rebuilding.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-muted-text)]">
            Neem is built around one clear belief: people need more than
            scattered social posts. They need a peaceful place where stories,
            prayer, routines, and learning are organized with care.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink to="/sanctuary">Start Here</ButtonLink>
            <ButtonLink to="/media" variant="secondary">
              Explore Media
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="The Journey"
            title="This is not just content. It is a guided path."
            description="The strongest creator platforms have a clear story. This page explains why Neem exists and why people should trust the voice behind it."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {storyMilestones.map((item, index) => (
              <article
                key={item.id}
                className="border border-[var(--color-border)] bg-[var(--color-bg)] p-7"
              >
                <div className="mb-8 font-serif text-5xl text-[var(--color-burgundy)]">
                  0{index + 1}
                </div>

                <h3 className="font-serif text-2xl text-[var(--color-text)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--color-muted-text)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeader
          eyebrow="What Neem Stands For"
          title="Warm, honest, structured support."
          description="The brand should feel personal, but also organized enough to become a serious learning and membership platform."
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = valueIcons[index] ?? Heart;

            return (
              <article
                key={item.id}
                className="rounded-t-[8rem] border border-[var(--color-border)] bg-[#EED8CE] px-7 pb-8 pt-14 text-center"
              >
                <div className="mx-auto mb-8 grid h-14 w-14 place-items-center border border-[var(--color-burgundy)] bg-white text-[var(--color-burgundy)]">
                  <Icon size={26} />
                </div>

                <h3 className="font-serif text-2xl text-[var(--color-text)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--color-muted-text)]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--color-burgundy)]">
            Who It Is For
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[var(--color-text)] md:text-6xl">
            Built for people who need a calm place to return to.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--color-muted-text)]">
            The audience is not looking for noise. They are looking for
            guidance, peace, and something they can come back to every day.
          </p>
        </div>

        <div className="grid gap-4">
          {audience.map((item) => (
            <div
              key={item}
              className="border border-[var(--color-border)] bg-[var(--color-bg)] p-6 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-text)]"
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
    <section className="bg-[#8C8279]">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center text-white md:py-24">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-white/80">
          Begin Here
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
          Start with one prayer, one story, one small daily step.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
          The goal is not to overwhelm people. The goal is to help them take the
          next honest step.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/sanctuary"
            className="bg-[var(--color-burgundy)] px-8 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-[var(--color-burgundy-dark)]"
          >
            Enter Sanctuary
          </Link>

          <Link
            to="/media"
            className="border border-white px-8 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[var(--color-text)]"
          >
            Watch Free Content
          </Link>
        </div>
      </div>
    </section>
  );
}

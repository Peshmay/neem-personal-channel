import ButtonLink from "../components/ui/ButtonLink";
import SectionHeader from "../components/ui/SectionHeader";
import {
  audience,
  founderStory,
  storyMilestones,
  values,
} from "../data/aboutData";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <FounderStorySection />
      <StorySection />
      <ValuesSection />
      <AudienceSection />
      <AboutCtaSection />
    </>
  );
}

function AboutHeroSection() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-16 lg:grid-cols-2 lg:px-20">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full border border-[var(--color-gold)]" />

          <div className="relative min-h-[560px] overflow-hidden bg-gradient-to-br from-[var(--color-blush)] to-[var(--color-champagne)]">
            <img
              src="/images/neema-founder.jpg"
              alt="Neema Souveraine"
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(61,26,79,0.18)] to-[rgba(184,151,74,0.08)]" />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
            {founderStory.eyebrow}
          </p>

          <h1 className="editorial-headline max-w-4xl">
            {founderStory.headlineTop}
            <br />
            <em>{founderStory.headlineEmphasis}</em>
          </h1>

          <p className="mt-8 max-w-xl font-serif text-3xl font-light text-[var(--color-plum)]">
            {founderStory.intro}
          </p>

          <p className="mt-6 max-w-xl text-[0.95rem] font-light leading-[1.9] text-[var(--color-mist)]">
            {founderStory.paragraphs[0]}
          </p>

          <div className="mt-10">
            <ButtonLink to="/sanctuary">Book a Discovery Call</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderStorySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-16 lg:grid-cols-[0.75fr_1.25fr] lg:px-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
            Her Story
          </p>

          <h2 className="editorial-headline max-w-3xl">
            The honest work of
            <br />
            <em>coming back.</em>
          </h2>
        </div>

        <div className="space-y-7">
          {founderStory.paragraphs.slice(1).map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-3xl text-base font-light leading-[1.95] text-[var(--color-mist)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="The Foundation"
            title="Identity-first leadership for women who are ready to lead different."
            description="The work begins with the woman, not only the business. Neema helps women reconnect with identity, purpose, faith, and leadership that does not require burnout."
          />

          <div className="grid gap-px md:grid-cols-3">
            {storyMilestones.map((item, index) => (
              <article
                key={item.id}
                className="border border-[var(--color-champagne)] bg-white p-8"
              >
                <div className="font-serif text-6xl font-light text-[rgba(184,151,74,0.35)]">
                  0{index + 1}
                </div>

                <h3 className="mt-8 font-serif text-3xl font-light text-[var(--color-plum)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-light leading-7 text-[var(--color-mist)]">
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
    <section className="bg-[var(--color-blush)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
            She Leads Different
          </p>

          <h2 className="editorial-headline mx-auto max-w-4xl">
            No judgment.
            <br />
            No performing.
            <br />
            <em>A real way forward.</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-px md:grid-cols-3">
          {values.map((item) => (
            <article
              key={item.id}
              className="border border-[var(--color-champagne)] bg-white p-8 text-center"
            >
              <h3 className="font-serif text-3xl font-light text-[var(--color-plum)]">
                {item.title}
              </h3>

              <p className="mt-5 text-sm font-light leading-7 text-[var(--color-mist)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
            Who It Is For
          </p>

          <h2 className="editorial-headline max-w-4xl">
            If you saw yourself
            <br />
            anywhere in this,
            <br />
            <em>you are already home.</em>
          </h2>
        </div>

        <div className="grid gap-4">
          {audience.map((item) => (
            <div
              key={item}
              className="border border-[var(--color-champagne)] bg-[var(--color-ivory)] p-6 text-sm font-semibold uppercase leading-7 tracking-[0.12em] text-[var(--color-plum)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCtaSection() {
  return (
    <section className="bg-[var(--color-plum)] px-6 py-24 text-center md:px-16 lg:px-20">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold-light)]">
        Your Next Chapter
      </p>

      <h2 className="mx-auto max-w-4xl font-serif text-[clamp(3rem,5vw,4.8rem)] font-light leading-[1.12] tracking-[-0.01em] text-white">
        Come home to the woman
        <br />
        <em className="font-light italic text-[var(--color-gold-light)]">
          you were always meant to be.
        </em>
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-white/60">
        If you are ready for the honest work of returning to yourself, the first
        step is a conversation.
      </p>

      <div className="mt-12">
        <ButtonLink to="/sanctuary" variant="gold">
          Book a Discovery Call
        </ButtonLink>
      </div>
    </section>
  );
}

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
    <section className="relative overflow-hidden bg-[var(--color-ivory)]">
      <div className="absolute left-0 top-0 hidden h-full w-[42%] bg-[var(--color-blush)]/40 lg:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:px-16 md:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24 lg:px-20 lg:py-28">
        <div className="relative">
          {/* Removed the Canva-style dots and harsh borders for a clean, soft editorial crop */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[16rem] bg-[var(--color-blush)] shadow-[0_20px_60px_rgba(61,26,79,0.08)]">
            <img
              src="/images/neema-about.jpg"
              alt="Neema Souveraine portrait"
              className="h-full w-full object-cover object-center opacity-95 contrast-[0.98] saturate-[0.9]"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(61,26,79,0.04)] via-transparent to-[rgba(184,151,74,0.08)]" />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
            {founderStory.eyebrow}
          </p>

          <h1 className="editorial-headline max-w-4xl">
            Come home to
            <br />
            the woman
            <br />
            <em>you were always meant to be.</em>
          </h1>

          <p className="mt-12 max-w-xl font-serif text-3xl font-light text-[var(--color-plum)]">
            {founderStory.intro}
          </p>

          <p className="mt-7 max-w-2xl text-[0.95rem] font-normal leading-[1.95] text-[var(--color-plum)]/80">
            {founderStory.paragraphs[0]}
          </p>

          <div className="mt-12">
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
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-16 lg:grid-cols-[0.34fr_0.08fr_0.58fr] lg:gap-8 lg:px-20 lg:py-32">
        <div>
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
            Her Story
          </p>

          <h2 className="editorial-headline max-w-3xl">
            The honest
            <br />
            work of
            <br />
            <em>coming back.</em>
          </h2>
        </div>

        <div className="hidden justify-center lg:flex">
          <div className="h-full min-h-[470px] w-px bg-[var(--color-gold)] opacity-20" />
        </div>

        <div className="max-w-3xl">
          <div className="space-y-8">
            <p className="text-[0.95rem] font-normal leading-[1.9] text-[var(--color-plum)]/90">
              What changed me was not a smarter plan or a new system. It was the
              honest work of coming back to myself: my thinking, my faith, my
              sense of who I was made to be. When that changed, my leadership
              changed, and so did everything around it. I rebuilt my life as a
              mother, across countries and six languages, starting from the
              inside.
            </p>

            <p className="text-[0.95rem] font-semibold leading-[1.9] text-[var(--color-plum)]">
              That is the work I do with women now.
            </p>

            {/* Elevated pull quote with extra breathing room */}
            <div className="my-12 py-6 pl-8 border-l-2 border-[var(--color-gold)]/40">
              <p className="font-serif text-[clamp(2rem,3vw,3.2rem)] font-light italic leading-[1.1] text-[var(--color-gold)]">
                No judgment here. No performing.
              </p>
            </div>

            <p className="text-[0.95rem] font-normal leading-[1.9] text-[var(--color-plum)]/90">
              If you are tired, lost, or doing everything right and still feel
              far from yourself, I help you find your way back. We get clear on
              who you are,{" "}
              <strong className="font-semibold text-[var(--color-plum)]">
                take the weight off proving yourself,
              </strong>{" "}
              and build a way of working and living that actually fits you. And
              if you are only at the beginning, I help you start from{" "}
              <strong className="font-semibold text-[var(--color-plum)]">
                steady ground,
              </strong>{" "}
              so you are not building on someone else's idea of success.
            </p>

            <p className="text-[0.95rem] font-normal leading-[1.9] text-[var(--color-plum)]/90">
              Just the truth, told gently, and a real way forward. This is what
              I mean by She Leads Different. You are safe here. And if you saw
              yourself anywhere in these words, you are already home.
            </p>

            {/* Styled signature */}
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-12 bg-[var(--color-gold)] opacity-50" />
              <span className="font-serif text-4xl font-light italic text-[var(--color-plum)]">
                Neema
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-16 lg:px-20">
        <div className="grid gap-20 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="The Foundation"
            title="Identity-first leadership for women who are ready to lead different."
            description="The work begins with the woman, not only the business. Neema helps women reconnect with identity, purpose, faith, and leadership that does not require burnout."
          />

          {/* Removed rigid boxes. Added watermark numbers and elegant lines */}
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {storyMilestones.map((item, index) => (
              <article
                key={item.id}
                className="group relative flex flex-col pt-10"
              >
                <div className="pointer-events-none absolute -left-4 -top-2 font-serif text-8xl italic leading-none text-[rgba(184,151,74,0.08)] transition-colors duration-500 group-hover:text-[rgba(184,151,74,0.15)]">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="mb-6 h-px w-8 bg-[var(--color-gold)] opacity-70" />

                  <h3 className="font-serif text-2xl font-light leading-tight text-[var(--color-plum)]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[0.9rem] font-normal leading-relaxed text-[var(--color-plum)]/70">
                    {item.description}
                  </p>
                </div>
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
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-16 lg:px-20">
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

        {/* Removed harsh borders, created a floating, airy layout */}
        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-16">
          {values.map((item) => (
            <article
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 h-1 w-1 rounded-full bg-[var(--color-gold)]" />

              <h3 className="font-serif text-2xl font-light text-[var(--color-plum)]">
                {item.title}
              </h3>

              <p className="mt-4 text-[0.9rem] font-normal leading-relaxed text-[var(--color-plum)]/70">
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
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:px-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-20">
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

        {/* Removed box borders. Made it an elegant, spaced-out editorial list */}
        <div className="flex flex-col justify-center gap-8">
          {audience.map((item) => (
            <div
              key={item}
              className="group flex items-start border-b border-[var(--color-champagne)] pb-8 last:border-0"
            >
              <span className="mr-6 mt-1 text-[var(--color-gold)] opacity-70">
                ✦
              </span>
              <span className="text-[0.85rem] font-semibold uppercase leading-relaxed tracking-[0.15em] text-[var(--color-plum)]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCtaSection() {
  return (
    <section className="bg-[var(--color-plum)] px-6 py-32 text-center md:px-16 lg:px-20">
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

      <p className="mx-auto mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-white/80">
        If you are ready for the honest work of returning to yourself, the first
        step is a conversation.
      </p>

      <div className="mt-14">
        <a
          href="/sanctuary"
          className="group inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-light)] transition-colors hover:text-white"
        >
          Book a Discovery Call
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}

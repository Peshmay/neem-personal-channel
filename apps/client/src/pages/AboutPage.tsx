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
      <div className="absolute left-0 top-0 hidden h-full w-[42%] bg-[var(--color-blush)]/55 lg:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:px-16 md:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24 lg:px-20 lg:py-28">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[11rem] bg-[var(--color-blush)] shadow-[0_30px_90px_rgba(61,26,79,0.13)]">
            <img
              src="/images/neema-about.jpg"
              alt="Neema Souveraine portrait"
              className="h-full w-full object-cover object-center opacity-95 contrast-[0.98] saturate-[0.9]"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(61,26,79,0.06)] via-transparent to-[rgba(184,151,74,0.14)]" />

            <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.8)_1px,transparent_0)] [background-size:6px_6px]" />
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

          <p className="mt-7 max-w-2xl text-base font-normal leading-[1.95] text-[rgba(61,26,79,0.78)]">
            {founderStory.paragraphs[0]}
          </p>

          <div className="mt-12">
            <ButtonLink to="/sanctuary" variant="outline">
              Book a Discovery Call
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
function FounderStorySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-16 lg:grid-cols-[0.38fr_0.08fr_0.54fr] lg:gap-10 lg:px-20 lg:py-28">
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
          <div className="h-full min-h-[520px] w-px bg-gradient-to-b from-transparent via-[rgba(184,151,74,0.45)] to-transparent" />
        </div>

        <div className="max-w-3xl">
          <div className="space-y-7">
            <p className="text-base font-normal leading-[1.95] text-[rgba(61,26,79,0.82)]">
              What changed me was not a smarter plan or a new system. It was the
              honest work of coming back to myself:{" "}
              <strong className="font-semibold text-[var(--color-plum)]">
                my thinking, my faith, my sense of who I was made to be.
              </strong>{" "}
              When that changed, my leadership changed, and so did everything
              around it. I rebuilt my life as a mother, across countries and six
              languages, starting from the inside.
            </p>

            <p className="text-base font-normal leading-[1.95] text-[rgba(61,26,79,0.82)]">
              That is the work I do with women now.
            </p>

            <p className="text-base font-normal leading-[1.95] text-[rgba(61,26,79,0.82)]">
              If you are tired, lost, or doing everything right and still feel
              far from yourself, I help you find your way back. We get clear on
              who you are,{" "}
              <strong className="font-semibold text-[var(--color-plum)]">
                take the weight off proving yourself,
              </strong>{" "}
              and build a way of working and living that actually fits you.
            </p>

            <blockquote className="border-l border-[var(--color-gold)] pl-6 font-serif text-3xl font-light italic leading-snug text-[var(--color-gold)] md:text-4xl">
              No judgment here. No performing. Just the truth, told gently.
            </blockquote>

            <p className="text-base font-normal leading-[1.95] text-[rgba(61,26,79,0.82)]">
              And if you are only at the beginning, I help you start from steady
              ground, so you are not building on someone else's idea of success.
            </p>

            <p className="text-base font-normal leading-[1.95] text-[rgba(61,26,79,0.82)]">
              This is what I mean by{" "}
              <strong className="font-semibold text-[var(--color-plum)]">
                She Leads Different.
              </strong>{" "}
              You are safe here. And if you saw yourself anywhere in these
              words, you are already home.
            </p>
          </div>

          <div className="mt-12">
            <p className="font-serif text-4xl font-light italic text-[var(--color-plum)]">
              Neema
            </p>
          </div>
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

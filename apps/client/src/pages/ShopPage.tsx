import ButtonLink from "../components/ui/ButtonLink";

const programs = [
  {
    number: "01",
    title: "She Leads Different",
    duration: "3-Month Private Coaching",
    description:
      "For the woman entrepreneur ready to step into identity-first leadership and move from burnout and over-functioning into grounded clarity.",
    bestFor:
      "Women ready to lead their business from identity, purpose, and faith.",
  },
  {
    number: "02",
    title: "Becoming HER Again",
    duration: "3-Month Premium Experience",
    description:
      "A high-touch private coaching experience for the woman who has everything except herself and is ready to reclaim who she was made to be.",
    bestFor:
      "Women who are successful on the outside but feel disconnected inside.",
  },
  {
    number: "03",
    title: "The Divine Reset",
    duration: "4-Phase Digital Program",
    description:
      "An application-only digital experience for the woman ready to start again from purpose, not pressure.",
    bestFor:
      "Women who need a structured reset in life, business, and leadership.",
  },
];

export default function ShopPage() {
  return (
    <>
      <ProgramsHeroSection />
      <ProgramsGridSection />
      <ProgramFitSection />
      <ProgramsCtaSection />
    </>
  );
}

function ProgramsHeroSection() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 lg:px-20">
        <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
          Work With Me
        </p>

        <h1 className="editorial-headline max-w-4xl">
          Programs built for
          <br />
          <em>real transformation.</em>
        </h1>

        <p className="mt-8 max-w-2xl text-[0.95rem] font-light leading-[1.9] text-[var(--color-mist)]">
          These coaching experiences are for women entrepreneurs ready to stop
          leading from pressure and start leading from identity, clarity, faith,
          and purpose.
        </p>
      </div>
    </section>
  );
}

function ProgramsGridSection() {
  return (
    <section className="bg-[var(--color-plum)] px-6 py-24 md:px-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-px md:grid-cols-3">
        {programs.map((program) => (
          <article
            key={program.number}
            className="relative border border-[rgba(212,185,106,0.18)] bg-white/[0.04] p-10 transition hover:bg-white/[0.08]"
          >
            <div className="absolute right-8 top-6 font-serif text-7xl font-light text-[rgba(184,151,74,0.13)]">
              {program.number}
            </div>

            <div className="mb-8 text-2xl text-[var(--color-gold-light)]">
              ✦
            </div>

            <h2 className="font-serif text-3xl font-light text-white">
              {program.title}
            </h2>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
              {program.duration}
            </p>

            <p className="mt-7 text-sm font-light leading-7 text-white/60">
              {program.description}
            </p>

            <p className="mt-7 border-t border-white/10 pt-6 text-xs font-semibold uppercase leading-6 tracking-[0.18em] text-white/50">
              {program.bestFor}
            </p>

            <div className="mt-10">
              <ButtonLink to="/sanctuary" variant="gold">
                Apply Now
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProgramFitSection() {
  return (
    <section className="bg-[var(--color-ivory)] px-6 py-24 md:px-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
            Is This For You?
          </p>

          <h2 className="editorial-headline max-w-4xl">
            This is for the woman who knows success without alignment is still
            exhaustion.
          </h2>
        </div>

        <div className="grid gap-4">
          {[
            "You built the business but feel disconnected from yourself.",
            "You are tired of leading from pressure and performance.",
            "You want faith-rooted clarity and identity-first leadership.",
            "You are ready for transformation, not another surface-level strategy.",
          ].map((item) => (
            <div
              key={item}
              className="border border-[var(--color-champagne)] bg-white p-6 text-sm font-semibold uppercase leading-7 tracking-[0.12em] text-[var(--color-plum)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramsCtaSection() {
  return (
    <section className="bg-[var(--color-blush)] px-6 py-24 text-center md:px-16 lg:px-20">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
        Ready to Begin?
      </p>

      <h2 className="editorial-headline mx-auto max-w-4xl">
        Your next chapter
        <br />
        starts with one
        <br />
        <em>conversation.</em>
      </h2>

      <div className="mt-12">
        <ButtonLink to="/sanctuary">Book a Discovery Call</ButtonLink>
      </div>
    </section>
  );
}

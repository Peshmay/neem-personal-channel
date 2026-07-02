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
    <section className="relative overflow-hidden bg-[var(--color-plum)] px-6 pt-24 text-center md:px-16 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,151,74,0.16),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_35%)]" />

      <div className="relative mx-auto max-w-5xl">
        <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold-light)]">
          Work With Me
        </p>

        <h1 className="mx-auto max-w-4xl font-serif text-[clamp(3rem,5vw,4.8rem)] font-light leading-[1.08] tracking-[-0.01em] text-white">
          Programs built for
          <br />
          <em className="font-light italic text-[var(--color-gold)]">
            real transformation
          </em>
        </h1>
      </div>
    </section>
  );
}

function ProgramsGridSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-plum)] px-6 pb-28 pt-20 md:px-16 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,151,74,0.13),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
        {programs.map((program) => (
          <article
            key={program.number}
            // Removed rigid borders and background box for an airy, editorial float
            className="group relative flex flex-col pt-12 transition duration-500 hover:-translate-y-2"
          >
            {/* Large, bleeding italic number functioning as an elegant watermark */}
            <div className="pointer-events-none absolute -right-4 -top-6 font-serif text-[10rem] italic leading-none text-white/[0.03] transition-colors duration-700 group-hover:text-white/[0.07]">
              {program.number}
            </div>

            <div className="relative z-10 flex h-full flex-col">
              {/* Delicate gold accent line grounding the space */}
              <div className="mb-8 h-px w-10 bg-[var(--color-gold)] opacity-80" />

              <h2 className="font-serif text-3xl font-light leading-tight text-white">
                {program.title}
              </h2>

              <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--color-gold-light)]">
                {program.duration}
              </p>

              {/* Increased text weight from font-light to font-normal, increased opacity for readability */}
              <p className="mt-6 flex-grow text-sm leading-relaxed text-white/90">
                {program.description}
              </p>

              {/* Editorial styled text link instead of a heavy block button */}
              <div className="mt-10">
                <a
                  href="/sanctuary"
                  className="group/link inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] transition-colors hover:text-white"
                >
                  Apply Now
                  <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
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

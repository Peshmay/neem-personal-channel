import ButtonLink from "../components/ui/ButtonLink";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <AboutPreviewSection />
      <ProgramsSection />
      <TestimonialSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBF7F2]">
      <div className="absolute left-0 top-0 h-full w-[58%] bg-[#F4E9EE]" />
      <div className="absolute left-[48%] top-20 hidden h-[520px] w-[520px] rounded-full bg-[rgba(184,151,74,0.08)] blur-3xl lg:block" />

      <div className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-10 px-6 py-16 md:px-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-20">
        <div className="relative z-20 max-w-2xl lg:-mr-20">
          <div className="bg-[rgba(251,247,242,0.85)] px-6 py-10 shadow-sm backdrop-blur-md lg:px-10 lg:py-12">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
              Coaching for Women Entrepreneurs
            </p>

            <h1 className="editorial-headline mb-7 max-w-4xl">
              Lead with <br />
              <em>Purpose.</em>
              <br />
              Lead Different.
            </h1>

            {/* Darkened text color slightly for better readability */}
            <p className="max-w-xl text-[0.95rem] font-normal leading-[1.9] tracking-wide text-[var(--color-plum)]/80">
              You built the business. Now it is time to build the version of you
              who leads it with clarity, identity, and the kind of confidence
              that does not burn out.
            </p>

            <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <ButtonLink to="/sanctuary">Book a Discovery Call</ButtonLink>

              {/* Updated secondary button to look more like a subtle text link */}
              <a
                href="/shop"
                className="group inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-plum)] transition-colors hover:text-[var(--color-gold)]"
              >
                View Programs
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Softened the image container by removing the harsh top-left border radius for a gentle arch instead */}
        <div className="relative min-h-[620px] overflow-hidden rounded-t-[16rem] bg-[var(--color-plum)] shadow-[0_30px_80px_rgba(61,26,79,0.16)] lg:-ml-8">
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-[rgba(61,26,79,0.28)] via-transparent to-[rgba(184,151,74,0.22)]" />

          <img
            src="/images/neema-founder.jpg"
            alt="Neema Souveraine"
            className="h-full w-full object-cover opacity-[0.92] contrast-[0.96] saturate-[0.92]"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.8)_1px,transparent_0)] [background-size:6px_6px]" />

          <div className="absolute right-8 top-12 z-30 text-xs uppercase tracking-[0.28em] text-[var(--color-gold-light)] [writing-mode:vertical-rl]">
            She Leads Different
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  const items = [
    "She Leads Different",
    "Becoming HER Again",
    "The Divine Reset",
    "Identity-First Leadership",
    "Proverbs 31 Framework",
  ];

  return (
    <section className="overflow-hidden border-y border-[var(--color-champagne)] bg-[var(--color-ivory)] py-5">
      <div className="flex min-w-max gap-10 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(61,26,79,0.8)]"
          >
            {item}
            {/* Changed from heavy pipe to a clean bullet point */}
            <span className="mx-8 text-[rgba(184,151,74,0.75)]">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function AboutPreviewSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ivory)] px-6 py-24 md:px-16 lg:px-20">
      <div className="absolute right-0 top-0 h-full w-[45%] bg-[var(--color-blush)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          {/* Removed the offset gold outline box that looked like a Canva template */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-[12rem] bg-[var(--color-blush)] shadow-[0_28px_80px_rgba(61,26,79,0.12)]">
            <img
              src="/images/neema-about.jpg"
              alt="Neema Souveraine portrait"
              className="h-full w-full object-cover object-center opacity-95 contrast-[0.98] saturate-[0.92]"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(61,26,79,0.08)] via-transparent to-[rgba(184,151,74,0.16)]" />
          </div>
        </div>

        <div className="relative z-10 bg-[rgba(250,247,242,0.9)] px-6 py-10 shadow-sm backdrop-blur-sm lg:-ml-20 lg:px-14 lg:py-14">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
            About Neema
          </p>

          <h2 className="editorial-headline max-w-4xl">
            Purpose is not
            <br />
            something you find
            <br />
            <em>it is who you are.</em>
          </h2>

          <p className="mt-8 max-w-2xl text-base font-normal leading-[1.9] text-[var(--color-plum)]">
            Neema works with women entrepreneurs who are successful on the
            outside but exhausted on the inside. Women who built through
            willpower and hustle and now feel ready to lead from identity,
            faith, and purpose.
          </p>

          <div className="mt-10">
            <a
              href="/about"
              className="group inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-plum)] transition-colors hover:text-[var(--color-gold)]"
            >
              Read the Story
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const programs = [
    {
      number: "01",
      title: "She Leads Different",
      duration: "3-Month Private Coaching",
      description:
        "For the woman entrepreneur ready to step into identity-first leadership and move from burnout into grounded clarity.",
    },
    {
      number: "02",
      title: "Becoming HER Again",
      duration: "3-Month Premium Experience",
      description:
        "A high-touch private coaching experience for the woman who has everything — except herself.",
    },
    {
      number: "03",
      title: "The Divine Reset",
      duration: "4-Phase Digital Program",
      description:
        "An application-only digital experience for the woman ready to start again from purpose, not pressure.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--color-plum)] px-6 py-28 md:px-16 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,151,74,0.13),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold-light)]">
            Work With Me
          </p>

          <h2 className="font-serif text-[clamp(3rem,5vw,4.8rem)] font-light leading-[1.08] tracking-[-0.01em] text-white">
            Programs built for
            <br />
            <em className="font-light italic text-[var(--color-gold)]">
              real transformation
            </em>
          </h2>
        </div>

        {/* Updated Grid: Removed borders, increased gap for airy feel */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
          {programs.map((program) => (
            <article
              key={program.number}
              className="group relative flex flex-col pt-12 transition duration-500 hover:-translate-y-2"
            >
              {/* Large, bleeding italic number functioning as an elegant watermark */}
              <div className="pointer-events-none absolute -right-4 -top-6 font-serif text-[10rem] italic leading-none text-white/[0.03] transition-colors duration-700 group-hover:text-white/[0.07]">
                {program.number}
              </div>

              <div className="relative z-10 flex h-full flex-col">
                {/* Delicate gold accent line */}
                <div className="mb-8 h-px w-10 bg-[var(--color-gold)] opacity-80" />

                <h3 className="font-serif text-3xl font-light leading-tight text-white">
                  {program.title}
                </h3>

                <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--color-gold-light)]">
                  {program.duration}
                </p>

                {/* Increased text readability */}
                <p className="mt-6 flex-grow text-sm leading-relaxed text-white/90">
                  {program.description}
                </p>

                {/* Editorial styled text link instead of heavy button */}
                <div className="mt-10">
                  <a
                    href="/shop"
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
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="bg-[var(--color-blush)] px-6 py-32 text-center">
      <div className="mx-auto max-w-4xl">
        <div className="mb-4 font-serif text-8xl leading-none text-[var(--color-gold)] opacity-40">
          “
        </div>

        <p className="font-serif text-3xl font-light italic leading-relaxed text-[var(--color-plum)] md:text-4xl">
          Working with Neema did not just change my business it changed how I
          see myself as a leader.
        </p>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-plum)]/60">
          — Client Testimony
        </p>
      </div>
    </section>
  );
}

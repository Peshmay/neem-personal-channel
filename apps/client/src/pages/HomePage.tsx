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
    <section className="grid min-h-[calc(100vh-82px)] bg-[var(--color-ivory)] lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-20 md:px-16 lg:px-20">
        <p className="mb-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)] before:block before:h-px before:w-10 before:bg-[var(--color-gold)]">
          Coaching for Women Entrepreneurs
        </p>

        <h1 className="font-serif text-6xl font-light leading-[1.05] text-[var(--color-plum)] md:text-7xl xl:text-8xl">
          Lead with <br />
          <em className="text-[var(--color-gold)]">Purpose.</em>
          <br />
          Lead Different.
        </h1>

        <p className="mt-8 max-w-md text-base font-light leading-8 text-[var(--color-mist)]">
          You built the business. Now it is time to build the version of you who
          leads it — with clarity, identity, and the kind of confidence that
          does not burn out.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <ButtonLink to="/sanctuary">Book a Discovery Call</ButtonLink>
          <ButtonLink to="/shop" variant="secondary">
            View Programs
          </ButtonLink>
        </div>
      </div>

      <div className="relative min-h-[520px] overflow-hidden bg-[var(--color-plum)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(61,26,79,0.55)] to-[rgba(184,151,74,0.18)]" />

        <img
          src="/images/neema-founder.jpg"
          alt="Neema Souveraine"
          className="h-full w-full object-cover opacity-80"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 grid place-items-center">
          <img
            src="/images/neema-logo.jpg"
            alt="Neema Souveraine logo"
            className="max-h-72 w-auto object-contain opacity-90"
          />
        </div>

        <div className="absolute right-10 top-10 text-xs uppercase tracking-[0.28em] text-[var(--color-gold-light)] [writing-mode:vertical-rl]">
          She Leads Different
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-gold-light)] to-[var(--color-gold)]" />
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
    <section className="overflow-hidden bg-[var(--color-plum)] py-5">
      <div className="flex min-w-max gap-10 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-serif text-xl italic tracking-[0.08em] text-[var(--color-gold-light)]"
          >
            {item} <span className="mx-8 text-[var(--color-gold)]">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function AboutPreviewSection() {
  return (
    <section className="grid gap-16 bg-[var(--color-ivory)] px-6 py-24 md:px-16 lg:grid-cols-2 lg:px-20">
      <div className="relative">
        <div className="absolute -left-4 -top-4 h-full w-full border border-[var(--color-gold)]" />
        <div className="relative grid aspect-[3/4] place-items-center bg-gradient-to-br from-[var(--color-blush)] to-[var(--color-champagne)]">
          <span className="font-serif text-8xl font-light text-[rgba(61,26,79,0.18)]">
            NS
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)] before:block before:h-px before:w-10 before:bg-[var(--color-gold)]">
          About Neema
        </p>

        <h2 className="font-serif text-5xl font-light leading-tight text-[var(--color-plum)] md:text-6xl">
          Purpose is not something you find —
          <br />
          <em className="text-[var(--color-gold)]">it is who you are.</em>
        </h2>

        <p className="mt-8 max-w-xl text-base font-light leading-8 text-[var(--color-mist)]">
          Neema works with women entrepreneurs who are successful on the outside
          but exhausted on the inside. Women who built through willpower and
          hustle — and now feel ready to lead from identity, faith, and purpose.
        </p>

        <div className="mt-10">
          <ButtonLink to="/about" variant="secondary">
            Read the Story
          </ButtonLink>
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
    <section className="bg-[var(--color-plum)] px-6 py-24 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold-light)]">
            Work With Me
          </p>

          <h2 className="font-serif text-5xl font-light leading-tight text-white md:text-6xl">
            Programs built for
            <br />
            <em className="text-[var(--color-gold-light)]">
              real transformation
            </em>
          </h2>
        </div>

        <div className="grid gap-px md:grid-cols-3">
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

              <h3 className="font-serif text-3xl font-light text-white">
                {program.title}
              </h3>

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                {program.duration}
              </p>

              <p className="mt-7 text-sm font-light leading-7 text-white/60">
                {program.description}
              </p>

              <ButtonLink to="/shop" variant="gold">
                Apply Now
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="bg-[var(--color-blush)] px-6 py-24 text-center">
      <div className="mx-auto max-w-4xl">
        <div className="font-serif text-8xl leading-none text-[var(--color-gold)] opacity-40">
          “
        </div>

        <p className="font-serif text-3xl font-light italic leading-relaxed text-[var(--color-plum)] md:text-4xl">
          Working with Neema did not just change my business — it changed how I
          see myself as a leader.
        </p>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-mist)]">
          — Client Testimony
        </p>
      </div>
    </section>
  );
}

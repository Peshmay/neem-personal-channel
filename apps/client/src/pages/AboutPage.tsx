import ButtonLink from "../components/ui/ButtonLink";
import SectionHeader from "../components/ui/SectionHeader";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <StorySection />
      <ValuesSection />
      <StatsSection />
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

            <div className="absolute inset-0 grid place-items-center">
              <span className="font-serif text-8xl font-light text-[rgba(61,26,79,0.18)]">
                NS
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
            About Neema
          </p>

          <h1 className="font-serif text-[clamp(3rem,5vw,4.8rem)] font-light leading-[1.12] tracking-[-0.01em] text-[var(--color-plum)]">
            Purpose is not something you find
            <br />
            <em className="font-light italic text-[var(--color-gold)]">
              it is who you are.
            </em>
          </h1>

          <p className="mt-8 max-w-xl text-[0.95rem] font-light leading-[1.9] text-[var(--color-mist)]">
            Neema works with women entrepreneurs who are successful on the
            outside but exhausted on the inside. Women who built through
            willpower and hustle and now feel ready to lead from identity,
            faith, and purpose.
          </p>

          <p className="mt-5 max-w-xl text-[0.95rem] font-light leading-[1.9] text-[var(--color-mist)]">
            Her work is rooted in faith, identity, and the Proverbs 31
            framework. This is not only strategy. It is a rebuilding of the
            woman behind the business.
          </p>

          <div className="mt-10">
            <ButtonLink to="/sanctuary">Book a Discovery Call</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="The Foundation"
            title="Identity-first leadership for women who are ready to lead different."
            description="The work begins with the woman, not only the business. Neema helps women reconnect with identity, purpose, faith, and leadership that does not require burnout."
          />

          <div className="grid gap-px md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Faith",
                text: "Grounded in spiritual conviction and the belief that leadership begins with alignment.",
              },
              {
                number: "02",
                title: "Identity",
                text: "Helping women remember who they are before pressure, performance, and expectation.",
              },
              {
                number: "03",
                title: "Purpose",
                text: "Rebuilding leadership from clarity, calling, and the courage to lead differently.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="border border-[var(--color-champagne)] bg-[var(--color-ivory)] p-8"
              >
                <div className="font-serif text-6xl font-light text-[rgba(184,151,74,0.35)]">
                  {item.number}
                </div>

                <h3 className="mt-8 font-serif text-3xl font-light text-[var(--color-plum)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-light leading-7 text-[var(--color-mist)]">
                  {item.text}
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
      <div className="mx-auto max-w-7xl px-6 py-24 text-center md:px-16 lg:px-20">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
          She Leads Different
        </p>

        <h2 className="mx-auto max-w-4xl font-serif text-5xl font-light leading-tight text-[var(--color-plum)] md:text-6xl">
          A woman can build, lead, and grow without losing herself.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-[var(--color-mist)]">
          Neema Souveraine exists for the woman who is ready to stop performing
          leadership and start embodying it.
        </p>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "6", label: "Languages" },
    { number: "3", label: "Signature Programs" },
  ];

  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3 md:px-16 lg:px-20">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-t border-[var(--color-champagne)] pt-8"
          >
            <div className="font-serif text-6xl font-light text-[var(--color-plum)]">
              {stat.number}
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-mist)]">
              {stat.label}
            </p>
          </div>
        ))}
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

      <h2 className="mx-auto max-w-4xl font-serif text-5xl font-light leading-tight text-white md:text-6xl">
        Lead from purpose, not pressure.
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-white/60">
        A discovery call is the first step toward understanding where you are,
        where you want to go, and whether this work is the right fit.
      </p>

      <div className="mt-12">
        <ButtonLink to="/sanctuary" variant="gold">
          Book a Discovery Call
        </ButtonLink>
      </div>
    </section>
  );
}

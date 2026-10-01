import ButtonLink from "../components/ui/ButtonLink";
import { FaCrown, FaHeart, FaDove } from "react-icons/fa6";

const programs = [
  {
    number: "01",
    title: "She Leads Different",
    duration: "3-Month Private Coaching",
    price: "Apply / price on request",
    icon: FaCrown,
    description:
      "For the woman entrepreneur ready to step into identity-first leadership and move from burnout and over-functioning into grounded clarity.",
    bestFor:
      "Women ready to lead their business from identity, purpose, and faith.",
  },
  {
    number: "02",
    title: "Becoming HER Again",
    duration: "3-Month Premium Experience",
    icon: FaHeart,
    price: "Apply / price on request",
    description:
      "A high-touch private coaching experience for the woman who has everything except herself and is ready to reclaim who she was made to be.",
    bestFor:
      "Women who are successful on the outside but feel disconnected inside.",
  },
  {
    number: "03",
    title: "The Divine Reset",
    duration: "4-Phase Digital Program",
    icon: FaDove,
    price: "Apply / price on request",
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
    <section className="bg-[var(--color-ivory)] px-6 pt-24 text-center md:px-16 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
          Work With Me
        </p>

        <h1 className="mx-auto max-w-4xl font-serif text-[clamp(3rem,5vw,4.8rem)] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-plum)]">
          Transformation
          <br />
          <em className="font-light italic text-[var(--color-gold)]">
            focused programs
          </em>
        </h1>
      </div>
    </section>
  );
}

function ProgramsGridSection() {
  return (
    <section className="bg-[var(--color-ivory)] px-6 pb-28 pt-12 md:px-16 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {programs.map((program) => {
          const Icon = program.icon;

          return (
            <article
              key={program.title}
              className="flex min-h-[420px] flex-col items-center border border-[var(--color-champagne)] bg-white px-8 py-10 text-center shadow-[0_18px_50px_rgba(61,26,79,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(61,26,79,0.12)]"
            >
              <div className="mb-7 grid h-16 w-16 place-items-center rounded-full border border-[var(--color-champagne)] bg-[var(--color-ivory)] text-2xl text-[var(--color-gold)]">
                <Icon />
              </div>

              <h2 className="font-serif text-3xl font-light leading-tight text-[var(--color-plum)]">
                {program.title}
              </h2>

              <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                {program.duration}
              </p>

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-plum)]">
                {program.price}
              </p>

              <p className="mt-6 flex-1 text-sm font-normal leading-7 text-[rgba(61,26,79,0.72)]">
                {program.description}
              </p>

              <a
                href="/sanctuary"
                className="mt-8 inline-flex items-center justify-center bg-[var(--color-plum)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--color-gold)] hover:text-white"
              >
                <span className="text-white">Apply Now</span>
              </a>
            </article>
          );
        })}
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

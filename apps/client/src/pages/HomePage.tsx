import ButtonLink from "../components/ui/ButtonLink";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedStrip />
      <IntroSection />
      <OfferSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="bg-[#F8F7F5]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
        <div className="relative">
          <div className="absolute left-0 top-8 h-[420px] w-[420px] rounded-full bg-[#EFEDEA]" />

          <div className="relative z-10 overflow-hidden rounded-b-[220px] rounded-t-[220px]">
            <img
              src="/images/Neem-image.png"
              alt="Neem founder"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-6 text-xs font-black uppercase tracking-[0.35em] text-[#B98272]">
            Neem Healing Channel
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-tight text-[#1A1A1A] md:text-6xl xl:text-7xl">
            Embody your <span className="italic">healing</span> journey &amp;
            establish your <span className="italic">peaceful</span> rhythm
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#5F5A55]">
            Gain the clarity, comfort, and encouragement you need through guided
            prayers, healing stories, routines, and resources designed to
            support your daily life.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink to="/sanctuary">Start Here</ButtonLink>
            <ButtonLink to="/media" variant="secondary">
              Learn More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedStrip() {
  return (
    <section className="bg-[#8C8279]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center text-white md:flex-row md:text-left">
        <p className="text-xs font-black uppercase tracking-[0.3em]">
          Featured In
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-white/90">
          <span>Podcast Features</span>
          <span>Healing Stories</span>
          <span>Prayer Series</span>
          <span>Digital Learning</span>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="bg-[#F8F7F5]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="rounded-[2rem] border border-[#E6DFD7] bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#B98272]">
            Neem
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#1A1A1A] md:text-5xl">
            A calm space for healing, prayer, and rebuilding
          </h2>

          <p className="mt-6 text-base leading-8 text-[#5F5A55]">
            Neem is for people who want more than scattered posts. It is a home
            for gentle guidance, structured support, and a peaceful rhythm that
            helps you return to yourself daily.
          </p>

          <div className="mt-8">
            <ButtonLink to="/about" variant="secondary">
              Read My Story
            </ButtonLink>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem]">
          <img
            src="/images/Neem-image.png"
            alt="Neem founder smiling"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  const items = [
    {
      title: "Healing Media Hub",
      text: "Browse videos, podcasts, guided prayers, and series in one calm library.",
      link: "/media",
    },
    {
      title: "Daily Sanctuary",
      text: "Return each day for guided prayer, reflection, and healing habits.",
      link: "/sanctuary",
    },
    {
      title: "Courses & Resources",
      text: "Explore premium learning, e-books, and templates for deeper support.",
      link: "/shop",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight text-[#1A1A1A] md:text-6xl">
            Your healing path begins <span className="italic">here</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#5F5A55]">
            No matter what season you are in, Neem gives you a place to return,
            reflect, and grow.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-t-[8rem] border border-[#E6DFD7] bg-[#EED8CE] px-6 pb-8 pt-12 text-center"
            >
              <h3 className="font-serif text-2xl text-[#1A1A1A]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#5F5A55]">
                {item.text}
              </p>

              <div className="mt-8">
                <ButtonLink to={item.link}>Learn More</ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

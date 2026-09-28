import ButtonLink from "../components/ui/ButtonLink";

const callOptions = [
  {
    title: "Discovery Call",
    duration: "30 minutes",
    price: "Free",
    description:
      "A gentle first conversation to understand where you are and whether this work is the right fit.",
    cta: "Book Free Call",
    paymentRequired: false,
  },
  {
    title: "Strategy Call",
    duration: "60 minutes",
    price: "750 SEK",
    description:
      "A deeper paid session for clarity, direction, and next steps in your life, business, or leadership.",
    cta: "Pay & Book",
    paymentRequired: true,
  },
  {
    title: "Deep Dive Call",
    duration: "90 minutes",
    price: "1,200 SEK",
    description:
      "An extended paid session for women who want more space to unpack, reset, and create a grounded way forward.",
    cta: "Pay & Book",
    paymentRequired: true,
  },
];

export default function SanctuaryPage() {
  return (
    <>
      <BookingHeroSection />
      <CallOptionsSection />
      <BookingFormSection />
      <BookingNoteSection />
    </>
  );
}

function BookingHeroSection() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 lg:px-20">
        <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
          Book a Call
        </p>

        <h1 className="editorial-headline max-w-4xl">
          Your next chapter
          <br />
          starts with one
          <br />
          <em>conversation.</em>
        </h1>

        <p className="mt-8 max-w-2xl text-[0.95rem] font-light leading-[1.9] text-[var(--color-mist)]">
          A 30-minute discovery call. No pressure. No performance. Just an
          honest conversation about where you are, where you want to go, and
          whether this work is the right fit.
        </p>
      </div>
    </section>
  );
}

function CallOptionsSection() {
  return (
    <section className="bg-white px-6 py-24 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
            Choose Your Call
          </p>

          <h2 className="editorial-headline max-w-4xl">
            Start free.
            <br />
            Go deeper
            <br />
            <em>when you are ready.</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {callOptions.map((option) => (
            <article
              key={option.title}
              className="border border-[var(--color-champagne)] bg-[var(--color-ivory)] p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                {option.duration}
              </p>

              <h3 className="mt-6 font-serif text-3xl font-light text-[var(--color-plum)]">
                {option.title}
              </h3>

              <p className="mt-4 text-2xl font-semibold text-[var(--color-plum)]">
                {option.price}
              </p>

              <p className="mt-6 text-sm font-normal leading-7 text-[rgba(61,26,79,0.72)]">
                {option.description}
              </p>

              <div className="mt-8">
                {option.paymentRequired ? (
                  <button
                    type="button"
                    className="w-full border border-[var(--color-plum)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-plum)] transition hover:bg-[var(--color-plum)] hover:text-white"
                  >
                    {option.cta}
                  </button>
                ) : (
                  <ButtonLink to="/sanctuary" variant="outline">
                    {option.cta}
                  </ButtonLink>
                )}
              </div>

              {option.paymentRequired && (
                <p className="mt-4 text-xs font-normal leading-6 text-[rgba(61,26,79,0.55)]">
                  Payment options later: Klarna or PayPal.
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingFormSection() {
  return (
    <section className="bg-white px-6 py-24 md:px-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
            Discovery Call
          </p>

          <h2 className="editorial-headline max-w-4xl">
            Let us talk about
            <br />
            the woman behind
            <br />
            <em>the business.</em>
          </h2>

          <p className="mt-8 max-w-xl text-base font-light leading-8 text-[var(--color-mist)]">
            Use this form as a placeholder for now. Later we can connect it to
            email, a calendar booking tool, or the backend API.
          </p>
        </div>

        <form className="border border-[var(--color-champagne)] bg-[var(--color-ivory)] p-8 md:p-12">
          <div className="mb-8 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

          <h3 className="mb-8 font-serif text-3xl font-light text-[var(--color-plum)]">
            Request Your Call
          </h3>

          <FormField label="Full Name" placeholder="Your name" type="text" />
          <FormField
            label="Email Address"
            placeholder="your@email.com"
            type="email"
          />
          <FormField
            label="What brings you here?"
            placeholder="Tell me a little about where you are"
            type="text"
          />

          <button
            type="button"
            className="mt-4 w-full bg-[var(--color-plum)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[var(--color-gold)]"
          >
            Request Your Call
          </button>
        </form>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  placeholder: string;
  type: string;
};

function FormField({ label, placeholder, type }: FormFieldProps) {
  return (
    <label className="mb-6 block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-mist)]">
        {label}
      </span>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border-0 border-b border-[var(--color-champagne)] bg-transparent px-0 py-3 text-sm text-[var(--color-plum)] outline-none placeholder:text-[var(--color-champagne)] focus:border-[var(--color-gold)]"
      />
    </label>
  );
}

function BookingNoteSection() {
  return (
    <section className="bg-[var(--color-blush)] px-6 py-24 text-center md:px-16 lg:px-20">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
        She Leads Different
      </p>

      <h2 className="editorial-headline mx-auto max-w-4xl">
        You do not need
        <br />
        another mask.
        <br />
        <em>You need alignment.</em>
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-[var(--color-mist)]">
        This is where the conversation begins.
      </p>

      <div className="mt-10">
        <ButtonLink to="/shop" variant="secondary">
          View Programs →
        </ButtonLink>
      </div>
    </section>
  );
}

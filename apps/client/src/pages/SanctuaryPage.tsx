import ButtonLink from "../components/ui/ButtonLink";

export default function SanctuaryPage() {
  return (
    <>
      <BookingHeroSection />
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

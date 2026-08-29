import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ButtonLink from "../components/ui/ButtonLink";

type MediaCategory = "All" | "Teaching" | "Faith" | "Leadership";

type MediaItem = {
  id: number;
  title: string;
  description: string;
  category: Exclude<MediaCategory, "All">;
  duration: string;
};

const mediaCategories: MediaCategory[] = [
  "All",
  "Teaching",
  "Faith",
  "Leadership",
];

const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "Lead with Purpose",
    description:
      "A teaching on identity-first leadership and building from clarity instead of pressure.",
    category: "Teaching",
    duration: "12 min",
  },
  {
    id: 2,
    title: "Becoming HER Again",
    description:
      "A reflective conversation for women who are ready to return to themselves.",
    category: "Teaching",
    duration: "18 min",
  },
  {
    id: 3,
    title: "The Divine Reset",
    description:
      "A faith-rooted reset for women rebuilding their inner foundation.",
    category: "Faith",
    duration: "10 min",
  },
  {
    id: 4,
    title: "She Leads Different",
    description:
      "A leadership message for women entrepreneurs who are ready to lead without burnout.",
    category: "Leadership",
    duration: "15 min",
  },
];

export default function MediaHubPage() {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    return mediaItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const searchValue = searchTerm.toLowerCase().trim();

      const matchesSearch =
        searchValue.length === 0 ||
        item.title.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue) ||
        item.category.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <>
      <MediaHeroSection />
      <MediaFilterSection
        activeCategory={activeCategory}
        searchTerm={searchTerm}
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearchTerm}
      />
      <MediaGridSection items={filteredItems} />
      <MediaCtaSection />
    </>
  );
}

function MediaHeroSection() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 lg:px-20">
        <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
          Media
        </p>

        <h1 className="editorial-headline max-w-4xl">
          Teachings,
          <br />
          conversations, and
          <br />
          <em>faith-rooted leadership.</em>
        </h1>

        <p className="mt-8 max-w-2xl text-[0.95rem] font-light leading-[1.9] text-[var(--color-mist)]">
          A calm library of content for women entrepreneurs ready to lead from
          purpose, rebuild identity, and return to a grounded way of leading.
        </p>
      </div>
    </section>
  );
}

type MediaFilterSectionProps = {
  activeCategory: MediaCategory;
  searchTerm: string;
  onCategoryChange: (category: MediaCategory) => void;
  onSearchChange: (value: string) => void;
};

function MediaFilterSection({
  activeCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
}: MediaFilterSectionProps) {
  return (
    <section className="border-y border-[var(--color-champagne)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:px-16 lg:grid-cols-[1fr_0.8fr] lg:px-20">
        <div className="flex flex-wrap gap-3">
          {mediaCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  isActive
                    ? "bg-[var(--color-plum)] text-white"
                    : "border border-[var(--color-champagne)] text-[var(--color-plum)] hover:border-[var(--color-gold)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <label className="relative block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-mist)]"
          />

          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search media..."
            className="w-full border border-[var(--color-champagne)] bg-[var(--color-ivory)] py-3 pl-11 pr-5 text-sm text-[var(--color-plum)] outline-none focus:border-[var(--color-gold)]"
          />
        </label>
      </div>
    </section>
  );
}

type MediaGridSectionProps = {
  items: MediaItem[];
};

function MediaGridSection({ items }: MediaGridSectionProps) {
  return (
    <section className="bg-[var(--color-ivory)] px-6 py-24 md:px-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-px md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="border border-[var(--color-champagne)] bg-white p-8 transition hover:bg-[var(--color-blush)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
              {item.category} • {item.duration}
            </p>

            <h2 className="mt-8 font-serif text-3xl font-light leading-tight text-[var(--color-plum)]">
              {item.title}
            </h2>

            <p className="mt-5 text-sm font-light leading-7 text-[var(--color-mist)]">
              {item.description}
            </p>

            <button
              type="button"
              className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-plum)] underline underline-offset-4 transition hover:text-[var(--color-gold)]"
            >
              Watch / Listen →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function MediaCtaSection() {
  return (
    <section className="bg-[var(--color-plum)] px-6 py-24 text-center md:px-16 lg:px-20">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold-light)]">
        Continue the Journey
      </p>

      <h2 className="mx-auto max-w-4xl font-serif text-[clamp(3rem,5vw,4.8rem)] font-light leading-[1.12] tracking-[-0.01em] text-white">
        Content gives insight.
        <br />
        Coaching creates
        <br />
        <em className="font-light italic text-[var(--color-gold-light)]">
          transformation.
        </em>
      </h2>

      <div className="mt-12">
        <ButtonLink to="/sanctuary" variant="gold">
          Book a Discovery Call
        </ButtonLink>
      </div>
    </section>
  );
}

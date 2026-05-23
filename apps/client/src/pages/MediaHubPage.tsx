import { useMemo, useState } from "react";
import { Headphones, Lock, Play, Search, Video } from "lucide-react";
import {
  mediaCategories,
  mediaItems,
  type MediaCategory,
  type MediaItem,
} from "../data/mediaData";
import ButtonLink from "../components/ui/ButtonLink";
import SectionHeader from "../components/ui/SectionHeader";

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

  const featuredItem = mediaItems.find((item) => item.featured);

  return (
    <>
      <MediaHeroSection featuredItem={featuredItem} />
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

type MediaHeroSectionProps = {
  featuredItem?: MediaItem;
};

function MediaHeroSection({ featuredItem }: MediaHeroSectionProps) {
  return (
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-6 text-xs font-black uppercase tracking-[0.35em] text-[var(--color-burgundy)]">
            Media Hub
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-normal leading-tight text-[var(--color-text)] md:text-7xl">
            Videos, podcasts, prayers, and series in one calm library.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-muted-text)]">
            Social media is for discovery. The Media Hub is where content
            becomes organized, searchable, and easy to return to.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink to="/sanctuary">Start Prayer</ButtonLink>
            <ButtonLink to="/shop" variant="secondary">
              View Resources
            </ButtonLink>
          </div>
        </div>

        {featuredItem && (
          <article className="bg-white p-6 shadow-sm">
            <div className="grid aspect-video place-items-center bg-[var(--color-muted-surface)]">
              <button
                type="button"
                aria-label={`Play ${featuredItem.title}`}
                className="grid h-20 w-20 place-items-center rounded-full bg-[var(--color-burgundy)] text-white shadow-lg transition hover:scale-105"
              >
                <Play fill="currentColor" size={34} />
              </button>
            </div>

            <div className="pt-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--color-burgundy)]">
                Featured Free Video
              </p>

              <h2 className="mt-4 font-serif text-4xl text-[var(--color-text)]">
                {featuredItem.title}
              </h2>

              <p className="mt-4 text-base leading-8 text-[var(--color-muted-text)]">
                {featuredItem.description}
              </p>
            </div>
          </article>
        )}
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
    <section className="border-y border-[var(--color-border)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div className="flex flex-wrap gap-3">
          {mediaCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition ${
                  isActive
                    ? "bg-[var(--color-burgundy)] text-white"
                    : "border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:bg-[var(--color-bg)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <label className="relative block">
          <span className="sr-only">Search media</span>
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted-text)]"
          />

          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search videos, prayers, podcasts..."
            className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] py-3 pl-11 pr-5 text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-burgundy)]"
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
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeader
          eyebrow="Browse Library"
          title="Choose the content that matches your current season."
          description="Users should quickly understand what is free, what is member-only, and what type of content they are opening."
        />

        {items.length === 0 ? (
          <div className="mt-12 border border-[var(--color-border)] bg-white p-10 text-center">
            <p className="font-serif text-3xl text-[var(--color-text)]">
              No content found.
            </p>
            <p className="mt-3 text-[var(--color-muted-text)]">
              Try another category or search term.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

type MediaCardProps = {
  item: MediaItem;
};

function MediaCard({ item }: MediaCardProps) {
  const isVideo = item.category === "Videos";
  const isLocked = item.access === "Member";

  return (
    <article className="border border-[var(--color-border)] bg-white transition hover:-translate-y-1">
      <div className="grid aspect-video place-items-center bg-[var(--color-muted-surface)]">
        <div className="grid h-14 w-14 place-items-center bg-[var(--color-burgundy)] text-white">
          {isVideo ? <Video size={25} /> : <Headphones size={25} />}
        </div>
      </div>

      <div className="p-7">
        <div className="mb-5 flex items-center justify-between gap-4 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-burgundy)]">
          <span>{item.category}</span>
          <span>{item.duration}</span>
        </div>

        <h3 className="font-serif text-3xl leading-tight text-[var(--color-text)]">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[var(--color-muted-text)]">
          {item.description}
        </p>

        <div className="mt-8 flex items-center justify-between gap-3">
          <span
            className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] ${
              isLocked
                ? "bg-[var(--color-soft)] text-[var(--color-text)]"
                : "bg-[var(--color-burgundy)] text-white"
            }`}
          >
            {isLocked && <Lock size={14} />}
            {item.access}
          </span>

          <button
            type="button"
            className="border border-[var(--color-border)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--color-text)] transition hover:border-[var(--color-burgundy)]"
          >
            {isLocked ? "Preview" : "Play"}
          </button>
        </div>
      </div>
    </article>
  );
}

function MediaCtaSection() {
  return (
    <section className="bg-[#8C8279]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 text-white md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-white/80">
            Why This Matters
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
            A real platform needs content structure, not just content.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-white/80">
            This page is the bridge between social discovery and user retention.
            Visitors can search, filter, understand access level, and choose
            what to watch or listen to next.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink to="/sanctuary">Go to Sanctuary</ButtonLink>
            <ButtonLink to="/shop" variant="secondary">
              Explore Shop
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

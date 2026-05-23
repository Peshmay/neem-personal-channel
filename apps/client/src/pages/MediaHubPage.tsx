import { useMemo, useState } from "react";
import { Headphones, Lock, Play, Search, Sparkles, Video } from "lucide-react";
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
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_0.95fr]">
      <div>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#C9907A] md:text-sm">
          Media Hub
        </p>

        <h1 className="max-w-4xl text-4xl font-black leading-[1.05] md:text-6xl">
          Videos, podcasts, prayers, and series in one calm library.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#C8B8AA] md:text-lg">
          Social media is for discovery. The Media Hub is where content becomes
          organized, searchable, and easy to return to.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/sanctuary">Start Daily Prayer</ButtonLink>
          <ButtonLink to="/shop" variant="secondary">
            View Premium Resources
          </ButtonLink>
        </div>
      </div>

      {featuredItem && (
        <article className="rounded-[2rem] border border-white/10 bg-[#25231F] p-3 shadow-2xl md:p-4">
          <div className="aspect-video rounded-[1.5rem] bg-gradient-to-br from-[#4A3A32] via-[#2F2924] to-[#171615]">
            <div className="flex h-full items-center justify-center">
              <button
                type="button"
                aria-label={`Play ${featuredItem.title}`}
                className="grid h-16 w-16 place-items-center rounded-full bg-[#C9907A] text-[#171615] shadow-xl transition hover:scale-105 md:h-20 md:w-20"
              >
                <Play fill="currentColor" size={34} />
              </button>
            </div>
          </div>

          <div className="p-3 md:p-5">
            <p className="text-xs font-black uppercase tracking-widest text-[#C9907A]">
              Featured Free Video
            </p>

            <h2 className="mt-2 text-2xl font-black">{featuredItem.title}</h2>

            <p className="mt-3 text-sm leading-6 text-[#C8B8AA]">
              {featuredItem.description}
            </p>
          </div>
        </article>
      )}
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
    <section className="mx-auto max-w-6xl px-5 py-10 md:px-6">
      <div className="rounded-[2rem] border border-white/10 bg-[#25231F] p-5 shadow-xl md:p-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="flex flex-wrap gap-3">
            {mediaCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  className={`rounded-full px-5 py-3 text-sm font-black transition ${
                    isActive
                      ? "bg-[#C9907A] text-[#171615]"
                      : "border border-white/10 bg-[#171615] text-[#C8B8AA] hover:text-[#F7F0E8]"
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
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8B8AA]"
            />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search videos, prayers, podcasts..."
              className="w-full rounded-full border border-white/10 bg-[#171615] py-3 pl-12 pr-5 text-sm font-semibold text-[#F7F0E8] outline-none placeholder:text-[#7F7166] focus:border-[#C9907A]"
            />
          </label>
        </div>
      </div>
    </section>
  );
}

type MediaGridSectionProps = {
  items: MediaItem[];
};

function MediaGridSection({ items }: MediaGridSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <SectionHeader
        eyebrow="Browse Library"
        title="Choose the content that matches your current season."
        description="Users should quickly understand what is free, what is member-only, and what type of content they are opening."
      />

      {items.length === 0 ? (
        <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-[#25231F] p-8 text-center">
          <p className="text-lg font-black">No content found.</p>
          <p className="mt-2 text-sm text-[#C8B8AA]">
            Try another category or search term.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      )}
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
    <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#25231F] shadow-xl transition hover:-translate-y-1 hover:border-[#C9907A]/50">
      <div className="aspect-video bg-gradient-to-br from-[#4A3A32] to-[#171615]">
        <div className="flex h-full items-center justify-center">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-[#C9907A] text-[#171615]">
            {isVideo ? <Video size={26} /> : <Headphones size={26} />}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-[#C9907A]/20 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#E7C0B3]">
            {item.category}
          </span>

          <span className="text-xs font-black uppercase tracking-wider text-[#C9907A]">
            {item.duration}
          </span>
        </div>

        <h3 className="text-xl font-black leading-tight">{item.title}</h3>

        <p className="mt-3 text-sm leading-6 text-[#C8B8AA]">
          {item.description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-3">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-black ${
              isLocked
                ? "bg-[#171615] text-[#E7C0B3]"
                : "bg-[#C9907A] text-[#171615]"
            }`}
          >
            {isLocked && <Lock size={14} />}
            {item.access}
          </span>

          <button
            type="button"
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-black text-[#F7F0E8] transition hover:border-[#C9907A]"
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
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[#25231F] p-7 shadow-xl md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C9907A]">
            Why This Matters
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            A real platform needs content structure, not just content.
          </h2>
        </div>

        <div>
          <p className="leading-7 text-[#C8B8AA]">
            This page is the bridge between social discovery and user retention.
            Visitors can search, filter, understand access level, and choose
            what to watch or listen to next.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

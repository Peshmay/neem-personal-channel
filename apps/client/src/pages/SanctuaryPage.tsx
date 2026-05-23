import { useMemo, useState } from "react";
import {
  CalendarCheck,
  Check,
  Headphones,
  Heart,
  Moon,
  Play,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import {
  dailyChecklist,
  prayerAudios,
  returnReasons,
  type PrayerAudio,
} from "../data/sanctuaryData";
import ButtonLink from "../components/ui/ButtonLink";
import SectionHeader from "../components/ui/SectionHeader";

export default function SanctuaryPage() {
  const [completedItems, setCompletedItems] = useState<number[]>([]);
  const [activeAudioId, setActiveAudioId] = useState(prayerAudios[0].id);

  const activeAudio = useMemo(() => {
    return (
      prayerAudios.find((audio) => audio.id === activeAudioId) ??
      prayerAudios[0]
    );
  }, [activeAudioId]);

  const progress = Math.round(
    (completedItems.length / dailyChecklist.length) * 100,
  );

  const toggleChecklistItem = (id: number) => {
    setCompletedItems((currentItems) =>
      currentItems.includes(id)
        ? currentItems.filter((itemId) => itemId !== id)
        : [...currentItems, id],
    );
  };

  const resetChecklist = () => {
    setCompletedItems([]);
  };

  return (
    <>
      <SanctuaryHeroSection progress={progress} activeAudio={activeAudio} />
      <DailyPracticeSection
        completedItems={completedItems}
        progress={progress}
        onToggleItem={toggleChecklistItem}
        onReset={resetChecklist}
      />
      <PrayerAudioSection
        activeAudioId={activeAudioId}
        onSelectAudio={setActiveAudioId}
      />
      <ReturnHabitSection />
    </>
  );
}

type SanctuaryHeroSectionProps = {
  progress: number;
  activeAudio: PrayerAudio;
};

function SanctuaryHeroSection({
  progress,
  activeAudio,
}: SanctuaryHeroSectionProps) {
  return (
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-6 text-xs font-black uppercase tracking-[0.35em] text-[var(--color-burgundy)]">
            Daily Sanctuary
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-normal leading-tight text-[var(--color-text)] md:text-7xl">
            A calm daily space for prayer, reflection, and healing habits.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-muted-text)]">
            Sanctuary is the return habit of Neem. Users come back for guided
            prayer, a simple checklist, and one honest reflection each day.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink to="/media">Browse Prayers</ButtonLink>
            <ButtonLink to="/shop" variant="secondary">
              View Resources
            </ButtonLink>
          </div>
        </div>

        <article className="bg-white p-7 shadow-sm">
          <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--color-burgundy)]">
                Today’s Practice
              </p>
              <h2 className="mt-3 font-serif text-4xl text-[var(--color-text)]">
                {progress}% complete
              </h2>
            </div>

            <CalendarCheck size={40} className="text-[var(--color-burgundy)]" />
          </div>

          <div className="mt-6 h-2 bg-[var(--color-soft)]">
            <div
              className="h-full bg-[var(--color-burgundy)] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-8 bg-[var(--color-bg)] p-6">
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-[var(--color-burgundy)] text-white">
              <Play fill="currentColor" size={24} />
            </div>

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--color-burgundy)]">
              Now Playing
            </p>

            <h3 className="mt-4 font-serif text-3xl text-[var(--color-text)]">
              {activeAudio.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[var(--color-muted-text)]">
              {activeAudio.description}
            </p>

            <div className="mt-6 flex items-center justify-between text-xs font-black uppercase tracking-[0.18em] text-[var(--color-text)]">
              <span>{activeAudio.mood}</span>
              <span>{activeAudio.duration}</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

type DailyPracticeSectionProps = {
  completedItems: number[];
  progress: number;
  onToggleItem: (id: number) => void;
  onReset: () => void;
};

function DailyPracticeSection({
  completedItems,
  progress,
  onToggleItem,
  onReset,
}: DailyPracticeSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeader
            eyebrow="Daily Checklist"
            title="Small actions. Clear rhythm. Less overwhelm."
            description="This checklist turns the page into something useful, not just beautiful. It gives users a reason to return and complete a daily practice."
          />

          <button
            type="button"
            onClick={onReset}
            className="mt-10 inline-flex items-center gap-2 border border-[var(--color-border)] px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:border-[var(--color-burgundy)]"
          >
            <RotateCcw size={16} />
            Reset Today
          </button>
        </div>

        <div className="border border-[var(--color-border)] bg-[var(--color-bg)] p-7">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--color-burgundy)]">
                Progress
              </p>
              <h3 className="mt-3 font-serif text-4xl text-[var(--color-text)]">
                {completedItems.length} of {dailyChecklist.length} completed
              </h3>
            </div>

            <span className="bg-[var(--color-burgundy)] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
              {progress}%
            </span>
          </div>

          <div className="grid gap-4">
            {dailyChecklist.map((item) => {
              const isComplete = completedItems.includes(item.id);

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onToggleItem(item.id)}
                  className={`flex gap-4 border p-5 text-left transition ${
                    isComplete
                      ? "border-[var(--color-burgundy)] bg-white"
                      : "border-[var(--color-border)] bg-white hover:border-[var(--color-burgundy)]"
                  }`}
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center border ${
                      isComplete
                        ? "border-[var(--color-burgundy)] bg-[var(--color-burgundy)] text-white"
                        : "border-[var(--color-border)] text-[var(--color-muted-text)]"
                    }`}
                  >
                    {isComplete && <Check size={18} />}
                  </span>

                  <span>
                    <span className="block text-sm font-black uppercase tracking-[0.12em] text-[var(--color-text)]">
                      {item.label}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-[var(--color-muted-text)]">
                      {item.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

type PrayerAudioSectionProps = {
  activeAudioId: number;
  onSelectAudio: (id: number) => void;
};

function PrayerAudioSection({
  activeAudioId,
  onSelectAudio,
}: PrayerAudioSectionProps) {
  return (
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeader
          eyebrow="Guided Prayer Audio"
          title="Choose the prayer that matches the moment."
          description="This is where the future real audio player will live. For now, selecting a prayer updates the active audio card."
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {prayerAudios.map((audio) => {
            const isActive = activeAudioId === audio.id;

            return (
              <button
                key={audio.id}
                type="button"
                onClick={() => onSelectAudio(audio.id)}
                className={`border p-7 text-left transition hover:-translate-y-1 ${
                  isActive
                    ? "border-[var(--color-burgundy)] bg-white"
                    : "border-[var(--color-border)] bg-white"
                }`}
              >
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center bg-[var(--color-soft)] text-[var(--color-burgundy)]">
                    <Headphones size={28} />
                  </div>

                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[var(--color-burgundy)]">
                    {audio.duration}
                  </span>
                </div>

                <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--color-burgundy)]">
                  {audio.mood}
                </p>

                <h3 className="mt-4 font-serif text-3xl text-[var(--color-text)]">
                  {audio.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--color-muted-text)]">
                  {audio.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ReturnHabitSection() {
  return (
    <section className="bg-[#8C8279]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 text-white md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-white/80">
            Return Habit
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
            The goal is not just visits. The goal is daily return.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            This page proves the app has retention thinking. A person does not
            only consume content. They come back to complete a small rhythm.
          </p>
        </div>

        <div className="grid gap-4">
          {returnReasons.map((reason, index) => (
            <div
              key={reason}
              className="flex gap-4 border border-white/30 bg-white/10 p-5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center border border-white/40 text-white">
                {index === 0 && <Sparkles size={20} />}
                {index === 1 && <CalendarCheck size={20} />}
                {index === 2 && <Heart size={20} />}
                {index === 3 && <Moon size={20} />}
              </div>

              <p className="text-sm font-bold uppercase leading-6 tracking-[0.12em] text-white">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

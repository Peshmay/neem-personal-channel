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
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_0.95fr]">
      <div>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#C9907A] md:text-sm">
          Daily Sanctuary
        </p>

        <h1 className="max-w-4xl text-4xl font-black leading-[1.05] md:text-6xl">
          A calm daily space for prayer, reflection, and healing habits.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#C8B8AA] md:text-lg">
          Sanctuary is the return habit of Neem. Users come back for a guided
          prayer, a simple checklist, and one honest reflection each day.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/media">Browse Prayers</ButtonLink>
          <ButtonLink to="/shop" variant="secondary">
            View Resources
          </ButtonLink>
        </div>
      </div>

      <article className="rounded-[2rem] border border-white/10 bg-[#25231F] p-5 shadow-2xl md:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C9907A]">
              Today’s Practice
            </p>
            <h2 className="mt-2 text-2xl font-black">{progress}% complete</h2>
          </div>

          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#C9907A]/20 text-[#E7C0B3]">
            <CalendarCheck size={30} />
          </div>
        </div>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#171615]">
          <div
            className="h-full rounded-full bg-[#C9907A] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-[#171615] p-5">
          <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-[#C9907A] text-[#171615]">
            <Play fill="currentColor" size={24} />
          </div>

          <p className="text-xs font-black uppercase tracking-widest text-[#C9907A]">
            Now Playing
          </p>

          <h3 className="mt-2 text-xl font-black">{activeAudio.title}</h3>

          <p className="mt-3 text-sm leading-6 text-[#C8B8AA]">
            {activeAudio.description}
          </p>

          <div className="mt-5 flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#E7C0B3]">
            <span>{activeAudio.mood}</span>
            <span>{activeAudio.duration}</span>
          </div>
        </div>
      </article>
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
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeader
            eyebrow="Daily Checklist"
            title="Small actions. Clear rhythm. Less overwhelm."
            description="This checklist turns the page into something useful, not just beautiful. It gives users a reason to return and complete a daily practice."
          />

          <button
            type="button"
            onClick={onReset}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-black text-[#F7F0E8] transition hover:border-[#C9907A]"
          >
            <RotateCcw size={18} />
            Reset today
          </button>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#25231F] p-5 shadow-xl md:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C9907A]">
                Progress
              </p>
              <h3 className="mt-2 text-2xl font-black">
                {completedItems.length} of {dailyChecklist.length} completed
              </h3>
            </div>

            <span className="rounded-full bg-[#C9907A] px-4 py-2 text-sm font-black text-[#171615]">
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
                  className={`flex gap-4 rounded-[1.25rem] border p-5 text-left transition ${
                    isComplete
                      ? "border-[#C9907A] bg-[#C9907A]/10"
                      : "border-white/10 bg-[#171615] hover:border-[#C9907A]/60"
                  }`}
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border ${
                      isComplete
                        ? "border-[#C9907A] bg-[#C9907A] text-[#171615]"
                        : "border-white/20 text-[#C8B8AA]"
                    }`}
                  >
                    {isComplete && <Check size={18} />}
                  </span>

                  <span>
                    <span className="block font-black text-[#F7F0E8]">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-[#C8B8AA]">
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
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <SectionHeader
        eyebrow="Guided Prayer Audio"
        title="Choose the prayer that matches the moment."
        description="This is where the future real audio player will live. For now, selecting a prayer updates the active audio card."
        center
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {prayerAudios.map((audio) => {
          const isActive = activeAudioId === audio.id;

          return (
            <button
              key={audio.id}
              type="button"
              onClick={() => onSelectAudio(audio.id)}
              className={`rounded-[1.5rem] border p-6 text-left shadow-xl transition hover:-translate-y-1 ${
                isActive
                  ? "border-[#C9907A] bg-[#C9907A]/10"
                  : "border-white/10 bg-[#25231F] hover:border-[#C9907A]/50"
              }`}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#C9907A]/20 text-[#E7C0B3]">
                  <Headphones size={28} />
                </div>

                <span className="rounded-full bg-[#171615] px-3 py-2 text-xs font-black uppercase tracking-wider text-[#E7C0B3]">
                  {audio.duration}
                </span>
              </div>

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C9907A]">
                {audio.mood}
              </p>

              <h3 className="mt-3 text-xl font-black text-[#F7F0E8]">
                {audio.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#C8B8AA]">
                {audio.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function ReturnHabitSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[#25231F] p-7 shadow-xl md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C9907A]">
            Return Habit
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            The goal is not just visits. The goal is daily return.
          </h2>

          <p className="mt-5 leading-7 text-[#C8B8AA]">
            This page proves the app has retention thinking. A person does not
            only consume content. They come back to complete a small rhythm.
          </p>
        </div>

        <div className="grid gap-3">
          {returnReasons.map((reason, index) => (
            <div
              key={reason}
              className="flex gap-4 rounded-2xl border border-white/10 bg-[#171615] p-5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#C9907A]/20 text-[#E7C0B3]">
                {index === 0 && <Sparkles size={20} />}
                {index === 1 && <CalendarCheck size={20} />}
                {index === 2 && <Heart size={20} />}
                {index === 3 && <Moon size={20} />}
              </div>

              <p className="text-sm font-bold leading-6 text-[#F7F0E8]">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

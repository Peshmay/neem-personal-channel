export type ChecklistItem = {
  id: number;
  label: string;
  description: string;
};

export type PrayerAudio = {
  id: number;
  title: string;
  description: string;
  duration: string;
  mood: string;
};

export const dailyChecklist: ChecklistItem[] = [
  {
    id: 1,
    label: "Listen to today’s guided prayer",
    description: "Begin with a short audio prayer for peace and strength.",
  },
  {
    id: 2,
    label: "Write one honest reflection",
    description: "Name what you are carrying today without judging yourself.",
  },
  {
    id: 3,
    label: "Choose one healing action",
    description: "Take one small step: rest, forgive, call someone, or pray.",
  },
  {
    id: 4,
    label: "Return before sleep",
    description: "End the day with gratitude and release what felt heavy.",
  },
];

export const prayerAudios: PrayerAudio[] = [
  {
    id: 1,
    title: "Morning Prayer for Strength",
    description:
      "A gentle guided prayer to start your day with courage, clarity, and peace.",
    duration: "6 min",
    mood: "Morning",
  },
  {
    id: 2,
    title: "Prayer for Heavy Thoughts",
    description:
      "A calming prayer for moments when your mind feels crowded or tired.",
    duration: "8 min",
    mood: "Calm",
  },
  {
    id: 3,
    title: "Night Prayer for Rest",
    description:
      "A peaceful prayer to release the day and prepare your heart for rest.",
    duration: "7 min",
    mood: "Evening",
  },
];

export const returnReasons = [
  "A new guided prayer rhythm each day",
  "A simple checklist that builds emotional structure",
  "Reflection prompts that help users notice progress",
  "A calm space away from noisy social feeds",
];

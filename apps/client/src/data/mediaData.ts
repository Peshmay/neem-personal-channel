export type MediaCategory =
  | "All"
  | "Videos"
  | "Podcasts"
  | "Audio Prayers"
  | "Series";

export type MediaItem = {
  id: number;
  title: string;
  description: string;
  category: Exclude<MediaCategory, "All">;
  duration: string;
  access: "Free" | "Member";
  featured?: boolean;
};

export const mediaCategories: MediaCategory[] = [
  "All",
  "Videos",
  "Podcasts",
  "Audio Prayers",
  "Series",
];

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "Start Here: Your Healing Journey",
    description:
      "A warm introduction to Neem, the purpose of the platform, and how to begin.",
    category: "Videos",
    duration: "10 min",
    access: "Free",
    featured: true,
  },
  {
    id: 2,
    title: "Morning Prayer for Strength",
    description:
      "A guided prayer for starting the day with peace, courage, and clarity.",
    category: "Audio Prayers",
    duration: "6 min",
    access: "Free",
  },
  {
    id: 3,
    title: "Rebuilding After a Difficult Season",
    description:
      "A podcast conversation about emotional recovery, faith, and daily rhythm.",
    category: "Podcasts",
    duration: "22 min",
    access: "Free",
  },
  {
    id: 4,
    title: "Seven Days of Inner Peace",
    description:
      "A short guided series with daily reflection, prayer, and practical steps.",
    category: "Series",
    duration: "7 parts",
    access: "Member",
  },
  {
    id: 5,
    title: "Night Prayer for Rest",
    description:
      "A calming audio prayer for ending the day and releasing heavy thoughts.",
    category: "Audio Prayers",
    duration: "8 min",
    access: "Member",
  },
  {
    id: 6,
    title: "How to Build a Healing Routine",
    description:
      "A teaching video on turning inspiration into a repeatable daily practice.",
    category: "Videos",
    duration: "14 min",
    access: "Free",
  },
];

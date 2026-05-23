export type ProductCategory = "All" | "Courses" | "E-books" | "Templates";

export type ShopProduct = {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProductCategory, "All">;
  price: string;
  format: string;
  access: string;
  featured?: boolean;
};

export const productCategories: ProductCategory[] = [
  "All",
  "Courses",
  "E-books",
  "Templates",
];

export const shopProducts: ShopProduct[] = [
  {
    id: 1,
    title: "Self-Love Healing Academy",
    description:
      "A structured course for rebuilding confidence, emotional rhythm, and spiritual strength.",
    category: "Courses",
    price: "€49",
    format: "Video lessons + worksheets",
    access: "Member access",
    featured: true,
  },
  {
    id: 2,
    title: "Seven Days of Inner Peace",
    description:
      "A guided e-book with daily prayers, reflection prompts, and healing exercises.",
    category: "E-books",
    price: "€12",
    format: "PDF download",
    access: "Instant download",
  },
  {
    id: 3,
    title: "Daily Prayer Journal Template",
    description:
      "A printable template for tracking prayers, gratitude, emotions, and daily reflections.",
    category: "Templates",
    price: "€7",
    format: "PDF template",
    access: "Instant download",
  },
  {
    id: 4,
    title: "Healing Routine Workbook",
    description:
      "A practical workbook for building a simple routine around rest, prayer, and reflection.",
    category: "E-books",
    price: "€15",
    format: "PDF workbook",
    access: "Instant download",
  },
  {
    id: 5,
    title: "Reflection Prompt Cards",
    description:
      "A digital card set with prompts for journaling, prayer groups, and quiet reflection.",
    category: "Templates",
    price: "€9",
    format: "Digital cards",
    access: "Instant download",
  },
  {
    id: 6,
    title: "Guided Prayer Mini Course",
    description:
      "Short lessons and audio guidance for building a consistent prayer practice.",
    category: "Courses",
    price: "€29",
    format: "Lessons + audio",
    access: "Member access",
  },
];

export type ProductCategory = "All" | "Programs" | "Courses" | "Digital";

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
  "Programs",
  "Courses",
  "Digital",
];

export const shopProducts: ShopProduct[] = [
  {
    id: 1,
    title: "She Leads Different",
    description:
      "A private coaching experience for the woman entrepreneur ready to step into identity-first leadership.",
    category: "Programs",
    price: "Apply",
    format: "3-month private coaching",
    access: "Application only",
    featured: true,
  },
  {
    id: 2,
    title: "Becoming HER Again",
    description:
      "A premium coaching experience for the woman who has everything except herself.",
    category: "Programs",
    price: "Apply",
    format: "3-month premium experience",
    access: "Application only",
  },
  {
    id: 3,
    title: "The Divine Reset",
    description:
      "A four-phase digital program for women ready to start again from purpose, not pressure.",
    category: "Courses",
    price: "Coming Soon",
    format: "Digital program",
    access: "Application only",
  },
  {
    id: 4,
    title: "Identity-First Leadership Workbook",
    description:
      "A guided workbook for women rebuilding leadership from identity, clarity, and faith.",
    category: "Digital",
    price: "Coming Soon",
    format: "PDF workbook",
    access: "Instant download later",
  },
];

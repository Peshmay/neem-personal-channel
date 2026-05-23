import { useMemo, useState } from "react";
import {
  BookOpen,
  Check,
  CreditCard,
  Download,
  Filter,
  GraduationCap,
  LockKeyhole,
  Search,
  ShoppingBag,
} from "lucide-react";
import {
  productCategories,
  shopProducts,
  type ProductCategory,
  type ShopProduct,
} from "../data/shopData";
import ButtonLink from "../components/ui/ButtonLink";
import SectionHeader from "../components/ui/SectionHeader";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return shopProducts.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const searchValue = searchTerm.toLowerCase().trim();

      const matchesSearch =
        searchValue.length === 0 ||
        product.title.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const featuredProduct = shopProducts.find((product) => product.featured);

  return (
    <>
      <ShopHeroSection featuredProduct={featuredProduct} />
      <ShopFilterSection
        activeCategory={activeCategory}
        searchTerm={searchTerm}
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearchTerm}
      />
      <ProductGridSection products={filteredProducts} />
      <CheckoutTrustSection />
      <ShopManagerSection />
    </>
  );
}

type ShopHeroSectionProps = {
  featuredProduct?: ShopProduct;
};

function ShopHeroSection({ featuredProduct }: ShopHeroSectionProps) {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_0.95fr]">
      <div>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#C9907A] md:text-sm">
          Neem Shop
        </p>

        <h1 className="max-w-4xl text-4xl font-black leading-[1.05] md:text-6xl">
          Courses, e-books, and templates for structured healing.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#C8B8AA] md:text-lg">
          The shop turns Neem from a content platform into a real digital
          product business: clear offers, instant downloads, and premium
          learning paths.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/shop">Browse Products</ButtonLink>
          <ButtonLink to="/media" variant="secondary">
            Watch Free Content First
          </ButtonLink>
        </div>
      </div>

      {featuredProduct && (
        <article className="rounded-[2rem] border border-[#C9907A]/40 bg-[#25231F] p-5 shadow-2xl md:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className="rounded-full bg-[#C9907A] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#171615]">
              Featured
            </span>

            <span className="text-3xl font-black text-[#E7C0B3]">
              {featuredProduct.price}
            </span>
          </div>

          <div className="grid min-h-[260px] place-items-center rounded-[1.5rem] bg-gradient-to-br from-[#4A3A32] via-[#2F2924] to-[#171615] p-8 text-center">
            <div>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#C9907A] text-[#171615]">
                <GraduationCap size={34} />
              </div>

              <h2 className="mt-6 text-3xl font-black">
                {featuredProduct.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#C8B8AA]">
                {featuredProduct.description}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            <ProductMeta
              icon={<BookOpen size={18} />}
              text={featuredProduct.format}
            />
            <ProductMeta
              icon={<LockKeyhole size={18} />}
              text={featuredProduct.access}
            />
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-full bg-[#C9907A] px-6 py-4 text-sm font-black text-[#171615] transition hover:scale-[1.02]"
          >
            Preview Checkout
          </button>
        </article>
      )}
    </section>
  );
}

type ShopFilterSectionProps = {
  activeCategory: ProductCategory;
  searchTerm: string;
  onCategoryChange: (category: ProductCategory) => void;
  onSearchChange: (value: string) => void;
};

function ShopFilterSection({
  activeCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
}: ShopFilterSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 md:px-6">
      <div className="rounded-[2rem] border border-white/10 bg-[#25231F] p-5 shadow-xl md:p-6">
        <div className="mb-5 flex items-center gap-3 text-[#C9907A]">
          <Filter size={20} />
          <p className="text-xs font-black uppercase tracking-[0.25em]">
            Product Filters
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="flex flex-wrap gap-3">
            {productCategories.map((category) => {
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
            <span className="sr-only">Search products</span>
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8B8AA]"
            />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search courses, e-books, templates..."
              className="w-full rounded-full border border-white/10 bg-[#171615] py-3 pl-12 pr-5 text-sm font-semibold text-[#F7F0E8] outline-none placeholder:text-[#7F7166] focus:border-[#C9907A]"
            />
          </label>
        </div>
      </div>
    </section>
  );
}

type ProductGridSectionProps = {
  products: ShopProduct[];
};

function ProductGridSection({ products }: ProductGridSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <SectionHeader
        eyebrow="Digital Products"
        title="Clear offers, simple formats, instant value."
        description="A strong shop page does not show random products. It separates courses, e-books, and templates so buyers understand what they are paying for."
      />

      {products.length === 0 ? (
        <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-[#25231F] p-8 text-center">
          <p className="text-lg font-black">No products found.</p>
          <p className="mt-2 text-sm text-[#C8B8AA]">
            Try another category or search term.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

type ProductCardProps = {
  product: ShopProduct;
};

function ProductCard({ product }: ProductCardProps) {
  const Icon = getProductIcon(product.category);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#25231F] shadow-xl transition hover:-translate-y-1 hover:border-[#C9907A]/50">
      <div className="grid aspect-video place-items-center bg-gradient-to-br from-[#4A3A32] to-[#171615]">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#C9907A] text-[#171615]">
          <Icon size={32} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-[#C9907A]/20 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#E7C0B3]">
            {product.category}
          </span>

          <span className="text-2xl font-black text-[#E7C0B3]">
            {product.price}
          </span>
        </div>

        <h3 className="text-xl font-black leading-tight">{product.title}</h3>

        <p className="mt-3 text-sm leading-6 text-[#C8B8AA]">
          {product.description}
        </p>

        <div className="mt-6 grid gap-3">
          <ProductMeta icon={<BookOpen size={18} />} text={product.format} />
          <ProductMeta icon={<Download size={18} />} text={product.access} />
        </div>

        <button
          type="button"
          className="mt-auto w-full rounded-full border border-[#C9907A] px-5 py-3 text-sm font-black text-[#F7F0E8] transition hover:bg-[#C9907A] hover:text-[#171615]"
        >
          View Product
        </button>
      </div>
    </article>
  );
}

type ProductMetaProps = {
  icon: React.ReactNode;
  text: string;
};

function ProductMeta({ icon, text }: ProductMetaProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#171615] px-4 py-3 text-sm font-bold text-[#C8B8AA]">
      <span className="text-[#E7C0B3]">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function CheckoutTrustSection() {
  const trustItems = [
    "One secure checkout flow later with Stripe",
    "Instant download access for PDFs and templates",
    "Premium courses can unlock after purchase",
    "Clear product categories reduce buyer confusion",
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[#25231F] p-7 shadow-xl md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C9907A]">
            Checkout Thinking
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            The shop must feel simple before it becomes powerful.
          </h2>

          <p className="mt-5 leading-7 text-[#C8B8AA]">
            We are not adding real payments yet. First we design the buying
            hierarchy correctly: product type, value, price, access, and next
            action.
          </p>
        </div>

        <div className="grid gap-3">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex gap-4 rounded-2xl border border-white/10 bg-[#171615] p-5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#C9907A]/20 text-[#E7C0B3]">
                <Check size={20} />
              </div>

              <p className="text-sm font-bold leading-6 text-[#F7F0E8]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShopManagerSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <div className="rounded-[2rem] border border-[#C9907A]/40 bg-[#C9907A] p-8 text-[#171615] shadow-xl md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#171615] text-[#F7F0E8]">
            <CreditCard size={32} />
          </div>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.25em]">
            Future Admin + Payments
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            Later, the creator will manage products, prices, files, and sales.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#34241F]">
            This frontend shop is the first layer. Later we connect the REST
            API, database, admin panel, file uploads, and secure checkout.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLikeDark>Admin-ready structure</ButtonLikeDark>
            <ButtonLikeOutline>Stripe later</ButtonLikeOutline>
          </div>
        </div>
      </div>
    </section>
  );
}

type ButtonLikeProps = {
  children: React.ReactNode;
};

function ButtonLikeDark({ children }: ButtonLikeProps) {
  return (
    <span className="rounded-full bg-[#171615] px-7 py-3.5 text-sm font-black text-[#F7F0E8]">
      {children}
    </span>
  );
}

function ButtonLikeOutline({ children }: ButtonLikeProps) {
  return (
    <span className="rounded-full border border-[#171615] px-7 py-3.5 text-sm font-black">
      {children}
    </span>
  );
}

function getProductIcon(category: ShopProduct["category"]) {
  if (category === "Courses") return GraduationCap;
  if (category === "E-books") return BookOpen;
  return ShoppingBag;
}

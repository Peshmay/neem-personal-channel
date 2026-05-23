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
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-6 text-xs font-black uppercase tracking-[0.35em] text-[var(--color-burgundy)]">
            Neem Shop
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-normal leading-tight text-[var(--color-text)] md:text-7xl">
            Courses, e-books, and templates for structured healing.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-muted-text)]">
            The shop turns Neem from a content platform into a real digital
            product business: clear offers, instant downloads, and premium
            learning paths.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink to="/shop">Browse Products</ButtonLink>
            <ButtonLink to="/media" variant="secondary">
              Free Content First
            </ButtonLink>
          </div>
        </div>

        {featuredProduct && (
          <article className="bg-white p-7 shadow-sm">
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-6">
              <span className="bg-[var(--color-burgundy)] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                Featured
              </span>

              <span className="font-serif text-5xl text-[var(--color-burgundy)]">
                {featuredProduct.price}
              </span>
            </div>

            <div className="grid min-h-[280px] place-items-center bg-[var(--color-muted-surface)] p-8 text-center">
              <div>
                <div className="mx-auto grid h-16 w-16 place-items-center bg-[var(--color-burgundy)] text-white">
                  <GraduationCap size={34} />
                </div>

                <h2 className="mt-7 font-serif text-4xl text-[var(--color-text)]">
                  {featuredProduct.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[var(--color-muted-text)]">
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
              className="mt-6 w-full bg-[var(--color-burgundy)] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-[var(--color-burgundy-dark)]"
            >
              Preview Checkout
            </button>
          </article>
        )}
      </div>
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
    <section className="border-y border-[var(--color-border)] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 flex items-center gap-3 text-[var(--color-burgundy)]">
          <Filter size={18} />
          <p className="text-xs font-black uppercase tracking-[0.25em]">
            Product Filters
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="flex flex-wrap gap-3">
            {productCategories.map((category) => {
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
            <span className="sr-only">Search products</span>
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted-text)]"
            />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search courses, e-books, templates..."
              className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] py-3 pl-11 pr-5 text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-burgundy)]"
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
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeader
          eyebrow="Digital Products"
          title="Clear offers, simple formats, instant value."
          description="A strong shop page does not show random products. It separates courses, e-books, and templates so buyers understand what they are paying for."
        />

        {products.length === 0 ? (
          <div className="mt-12 border border-[var(--color-border)] bg-white p-10 text-center">
            <p className="font-serif text-3xl text-[var(--color-text)]">
              No products found.
            </p>
            <p className="mt-3 text-[var(--color-muted-text)]">
              Try another category or search term.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

type ProductCardProps = {
  product: ShopProduct;
};

function ProductCard({ product }: ProductCardProps) {
  const Icon = getProductIcon(product.category);

  return (
    <article className="flex h-full flex-col border border-[var(--color-border)] bg-white transition hover:-translate-y-1">
      <div className="grid aspect-video place-items-center bg-[var(--color-muted-surface)]">
        <div className="grid h-16 w-16 place-items-center bg-[var(--color-burgundy)] text-white">
          <Icon size={32} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[var(--color-burgundy)]">
            {product.category}
          </span>

          <span className="font-serif text-4xl text-[var(--color-burgundy)]">
            {product.price}
          </span>
        </div>

        <h3 className="font-serif text-3xl leading-tight text-[var(--color-text)]">
          {product.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[var(--color-muted-text)]">
          {product.description}
        </p>

        <div className="mt-7 grid gap-3">
          <ProductMeta icon={<BookOpen size={18} />} text={product.format} />
          <ProductMeta icon={<Download size={18} />} text={product.access} />
        </div>

        <button
          type="button"
          className="mt-auto w-full border border-[var(--color-burgundy)] px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:bg-[var(--color-burgundy)] hover:text-white"
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
    <div className="flex items-center gap-3 border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-muted-text)]">
      <span className="text-[var(--color-burgundy)]">{icon}</span>
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
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--color-burgundy)]">
            Checkout Thinking
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[var(--color-text)] md:text-6xl">
            The shop must feel simple before it becomes powerful.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--color-muted-text)]">
            We are not adding real payments yet. First we design the buying
            hierarchy correctly: product type, value, price, access, and next
            action.
          </p>
        </div>

        <div className="grid gap-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex gap-4 border border-[var(--color-border)] bg-[var(--color-bg)] p-5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center border border-[var(--color-burgundy)] text-[var(--color-burgundy)]">
                <Check size={20} />
              </div>

              <p className="text-sm font-bold uppercase leading-6 tracking-[0.12em] text-[var(--color-text)]">
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
    <section className="bg-[#8C8279]">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center text-white md:py-24">
        <div className="mx-auto grid h-16 w-16 place-items-center border border-white/40 text-white">
          <CreditCard size={32} />
        </div>

        <p className="mt-8 text-xs font-black uppercase tracking-[0.35em] text-white/80">
          Future Admin + Payments
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
          Later, the creator will manage products, prices, files, and sales.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
          This frontend shop is the first layer. Later we connect the REST API,
          database, admin panel, file uploads, and secure checkout.
        </p>
      </div>
    </section>
  );
}

function getProductIcon(category: ShopProduct["category"]) {
  if (category === "Courses") return GraduationCap;
  if (category === "E-books") return BookOpen;
  return ShoppingBag;
}

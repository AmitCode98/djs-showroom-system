"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { PRODUCTS } from "@/constants/products"
import { CATEGORIES } from "@/constants/categories"
import { BUDGET_RANGES } from "@/constants/budget-ranges"
import { Container } from "@/components/ui/container"
import ProductCard from "@/components/products/product-card"
import { BackButton } from "@/components/ui/back-button"
import { cn } from "@/lib/utils"
import { Sparkle, MagnifyingGlass, ArrowCounterClockwise, Diamond } from "@phosphor-icons/react"

// Budget filter helper
function matchesBudget(price: number | string, budgetSlug: string): boolean {
  const numPrice = typeof price === "number" ? price : parseInt(String(price).replace(/[^0-9]/g, ""), 10)
  if (isNaN(numPrice)) return true

  switch (budgetSlug) {
    case "under-10k":
      return numPrice < 10000
    case "10k-25k":
      return numPrice >= 10000 && numPrice <= 25000
    case "25k-50k":
      return numPrice > 25000 && numPrice <= 50000
    case "50k-1l":
      return numPrice > 50000 && numPrice <= 100000
    case "luxury":
      return numPrice > 100000
    default:
      return true
  }
}

function CatalogueContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  const initialBudget = searchParams.get("budget") || "all"

  const [selectedCategory, setSelectedCategory] = React.useState(initialCategory)
  const [selectedBudget, setSelectedBudget] = React.useState(initialBudget)
  const [searchQuery, setSearchQuery] = React.useState("")

  // Update if URL search params change
  React.useEffect(() => {
    const cat = searchParams.get("category")
    const bud = searchParams.get("budget")
    if (cat) setSelectedCategory(cat)
    if (bud) setSelectedBudget(bud)
  }, [searchParams])

  // Filter products
  const filteredProducts = React.useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== "all") {
        const sub = product.subcategory?.toLowerCase() || ""
        const cat = product.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")
        const slug = product.slug.toLowerCase()
        const target = selectedCategory.toLowerCase()
        const matchesCategory = sub === target || cat === target || slug.includes(target)
        if (!matchesCategory) return false
      }

      // Budget match
      if (selectedBudget !== "all") {
        if (!matchesBudget(product.price, selectedBudget)) {
          return false
        }
      }

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim()
        const nameMatch = product.name.toLowerCase().includes(q)
        const catMatch = product.category.toLowerCase().includes(q)
        const descMatch = product.description?.toLowerCase().includes(q)
        if (!nameMatch && !catMatch && !descMatch) return false
      }

      return true
    })
  }, [selectedCategory, selectedBudget, searchQuery])

  const hasActiveFilters = selectedCategory !== "all" || selectedBudget !== "all" || searchQuery !== ""

  const handleReset = () => {
    setSelectedCategory("all")
    setSelectedBudget("all")
    setSearchQuery("")
  }

  return (
    <main className="min-h-screen bg-[#FBF9F5] text-foreground pb-24 md:pb-32">
      {/* ─── Hero Header ─── */}
      <div className="relative border-b border-[#D4AF37]/20 bg-gradient-to-b from-[#2B1D0E] via-[#3C2814] to-[#2B1D0E] text-[#FDFAF5] pt-14 pb-12 md:pt-18 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(212,175,55,0.18)_0%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="mb-6">
            <BackButton label="Back to Showroom" fallbackHref="/" variant="dark" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white/10 border border-white/20 text-[11px] font-body uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
                <Sparkle weight="light" className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Showroom Master Collection</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight font-light text-white mb-3">
                Jewellery Catalogue
              </h1>
              <p className="font-body text-sm sm:text-base text-white/80 max-w-xl leading-relaxed font-light">
                Select any piece to add to your personal Viewing Tray. Our showroom staff will present the jewellery at your table for physical inspection.
              </p>
            </div>

            {/* Quick stats / Trust badge */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2.5 rounded-none shrink-0">
              <Diamond weight="light" className="w-5 h-5 text-[#D4AF37]" />
              <div className="text-xs">
                <span className="block font-semibold text-white uppercase tracking-wider">100% In-Store Ready</span>
                <span className="text-[#D4AF37]">BIS 916 Hallmarked Pure Gold</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ─── Touch-First Filter Section (Min 48px Touch Targets) ─── */}
      <section className="sticky top-20 z-30 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-4 shadow-xs">
        <Container className="flex flex-col gap-4">
          
          {/* Top Bar: Search and Reset */}
          <div className="flex items-center gap-3">
            {/* Search Input (Min 48px height) */}
            <div className="relative flex-1">
              <MagnifyingGlass weight="light" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3C2814]/45" />
              <input
                type="text"
                placeholder="Search jewellery by name or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full min-h-[48px] pl-12 pr-4 rounded-none bg-white border border-[#D4AF37]/30 text-sm font-body text-[#2B1D0E] placeholder:text-[#3C2814]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-none flex items-center justify-center text-[#3C2814]/60 hover:text-black active:scale-[0.96] transition-all"
                >
                  ✕
                </button>
              )}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleReset}
                className="min-h-[48px] px-4 rounded-none bg-[#7A1C1C]/10 border border-[#7A1C1C]/30 text-[#7A1C1C] flex items-center gap-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#7A1C1C]/20 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] shrink-0"
              >
                <ArrowCounterClockwise weight="light" className="w-4 h-4" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Row 1: Category Filter Chips (Horizontal Scroll, 48px touch bounding box) */}
          <div className="flex items-center gap-2 overflow-x-auto snap-x py-1 [-ms-overflow-style:none] scrollbar-none">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#3C2814]/60 pr-2 shrink-0">
              Category:
            </span>
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "min-h-[48px] px-5 rounded-none text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 shrink-0 flex items-center justify-center gap-1.5 border",
                selectedCategory === "all"
                  ? "bg-[#7A1C1C] text-white border-[#7A1C1C] shadow-sm"
                  : "bg-white text-[#3C2814]/80 border-[#D4AF37]/30 hover:border-[#7A1C1C] hover:text-[#7A1C1C]"
              )}
            >
              <span>All Pieces</span>
              <span className="font-bengali text-[11px] opacity-80 font-normal">সব গহনা</span>
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={cn(
                  "min-h-[48px] px-5 rounded-none text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 shrink-0 flex items-center justify-center gap-1.5 border",
                  selectedCategory === cat.slug
                    ? "bg-[#7A1C1C] text-white border-[#7A1C1C] shadow-sm"
                    : "bg-white text-[#3C2814]/80 border-[#D4AF37]/30 hover:border-[#7A1C1C] hover:text-[#7A1C1C]"
                )}
              >
                <span>{cat.title}</span>
                {cat.bengaliTitle && (
                  <span className="font-bengali text-[11px] opacity-85 font-normal">({cat.bengaliTitle})</span>
                )}
              </button>
            ))}
          </div>

          {/* Row 2: Budget Filter Chips (Horizontal Scroll, 48px touch bounding box) */}
          <div className="flex items-center gap-2 overflow-x-auto snap-x py-1 [-ms-overflow-style:none] scrollbar-none">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#3C2814]/60 pr-2 shrink-0">
              Budget:
            </span>
            <button
              type="button"
              onClick={() => setSelectedBudget("all")}
              className={cn(
                "min-h-[48px] px-5 rounded-none text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 shrink-0 flex items-center justify-center gap-1.5 border",
                selectedBudget === "all"
                  ? "bg-[#7A1C1C] text-white border-[#7A1C1C] shadow-sm"
                  : "bg-white text-[#3C2814]/80 border-[#D4AF37]/30 hover:border-[#7A1C1C] hover:text-[#7A1C1C]"
              )}
            >
              <span>Any Budget</span>
              <span className="font-bengali text-[11px] opacity-80 font-normal">সকল বাজেট</span>
            </button>
            {BUDGET_RANGES.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setSelectedBudget(b.slug)}
                className={cn(
                  "min-h-[48px] px-5 rounded-none text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 shrink-0 flex items-center justify-center gap-1.5 border",
                  selectedBudget === b.slug
                    ? "bg-[#7A1C1C] text-white border-[#7A1C1C] shadow-sm"
                    : "bg-white text-[#3C2814]/80 border-[#D4AF37]/30 hover:border-[#7A1C1C] hover:text-[#7A1C1C]"
                )}
              >
                <span>{b.title}</span>
                {b.bengaliBadge && (
                  <span className="font-bengali text-[11px] opacity-85 font-normal">({b.bengaliBadge})</span>
                )}
              </button>
            ))}
          </div>

        </Container>
      </section>

      {/* ─── Catalogue Grid Section ─── */}
      <section className="pt-8 md:pt-10">
        <Container>
          {/* Status Indicator */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D4AF37]/15 text-xs text-[#3C2814]/70">
            <span className="font-semibold uppercase tracking-wider">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"} available in showroom
            </span>
            {hasActiveFilters && (
              <span className="text-[#7A1C1C] font-medium">
                Filtered catalogue
              </span>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center max-w-md mx-auto flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-none bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                <Sparkle weight="light" className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl text-[#2B1D0E] font-normal">
                No Matching Jewellery Found
              </h3>
              <p className="font-body text-sm text-[#3C2814]/70 leading-relaxed">
                We couldn&apos;t find any pieces matching your specific filter criteria. Try selecting another budget range or category.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-2 min-h-[48px] px-8 rounded-none bg-[#2B1D0E] text-white flex items-center justify-center font-body text-xs font-semibold uppercase tracking-widest hover:bg-[#3C2814] active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-md"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  slug={product.slug}
                  title={product.name}
                  category={product.category}
                  price={product.price}
                  image={product.images.main.url}
                  href={`/products/${product.slug}`}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  )
}

export default function ProductsCataloguePage() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen bg-[#FBF9F5] flex items-center justify-center">
          <div className="flex items-center gap-3 text-gold font-body text-sm tracking-wider uppercase">
            <Sparkle weight="light" className="w-5 h-5 animate-spin" />
            Loading Showroom Catalogue...
          </div>
        </div>
      }
    >
      <CatalogueContent />
    </React.Suspense>
  )
}

"use client"

import * as React from "react"
import { NEW_ARRIVALS } from "@/constants/products"
import { Container } from "@/components/ui/container"
import ProductCard from "@/components/products/product-card"
import { BackButton } from "@/components/ui/back-button"
import { Sparkle, ArrowRight } from "@phosphor-icons/react"
import Link from "next/link"
import { getBengaliCategoryBadge } from "@/constants/bengali-badges"

export default function NewArrivalsPage() {
  const [selectedSubcategory, setSelectedSubcategory] = React.useState<string>("all")

  // Extract unique categories present in new arrivals
  const availableCategories = React.useMemo(() => {
    const cats = new Set<string>()
    NEW_ARRIVALS.forEach((p) => cats.add(p.category))
    return Array.from(cats)
  }, [])

  const filteredProducts = React.useMemo(() => {
    if (selectedSubcategory === "all") return NEW_ARRIVALS
    return NEW_ARRIVALS.filter((p) => p.category === selectedSubcategory)
  }, [selectedSubcategory])

  return (
    <main className="min-h-screen bg-[#FBF9F5] text-foreground pb-24 md:pb-32">
      {/* ─── Hero Header ─── */}
      <div className="relative border-b border-[#D4AF37]/20 bg-gradient-to-b from-[#2B1D0E] via-[#3C2814] to-[#2B1D0E] text-[#FDFAF5] pt-12 pb-14 md:pt-16 md:pb-18 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(212,175,55,0.18)_0%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="mb-6">
            <BackButton label="Back to Showroom" fallbackHref="/" variant="dark" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white/10 border border-white/20 text-[11px] font-body uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
                <Sparkle weight="light" className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>নতুন আগমনী গহনা সম্ভার</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight font-light text-white mb-3">
                New Arrivals
              </h1>
              <p className="font-body text-sm sm:text-base text-white/80 max-w-xl font-light leading-relaxed">
                Freshly crafted hallmarked gold and diamond masterpieces just arrived from our master artisans in Bengal.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-none border border-white/15 text-xs text-[#D4AF37] font-body uppercase tracking-wider self-start md:self-auto">
              <Sparkle weight="light" className="w-4 h-4" />
              <span>{filteredProducts.length} New Pieces Available</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ─── Filter Bar ─── */}
      <div className="sticky top-[69px] z-30 bg-[#FDFAF5]/95 backdrop-blur-md border-b border-[#EAD7B7]/60 py-4 shadow-2xs">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedSubcategory("all")}
              className={`min-h-[48px] px-5 rounded-none text-xs font-body uppercase tracking-[0.14em] font-medium transition-all duration-150 active:scale-[0.96] whitespace-nowrap flex items-center gap-1.5 border ${
                selectedSubcategory === "all"
                  ? "bg-[#7A1C1C] text-white border-[#7A1C1C] shadow-xs"
                  : "bg-white text-foreground/80 border-[#EAD7B7] hover:border-[#7A1C1C] hover:text-[#7A1C1C]"
              }`}
            >
              <span>All Arrivals ({NEW_ARRIVALS.length})</span>
              <span className="font-bengali text-[11px] opacity-85 font-normal">সব নতুন গহনা</span>
            </button>
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedSubcategory(cat)}
                className={`min-h-[48px] px-5 rounded-none text-xs font-body uppercase tracking-[0.14em] font-medium transition-all duration-150 active:scale-[0.96] whitespace-nowrap flex items-center gap-1.5 border ${
                  selectedSubcategory === cat
                    ? "bg-[#7A1C1C] text-white border-[#7A1C1C] shadow-xs"
                    : "bg-white text-foreground/80 border-[#EAD7B7] hover:border-[#7A1C1C] hover:text-[#7A1C1C]"
                }`}
              >
                <span>{cat}</span>
                <span className="font-bengali text-[11px] opacity-85 font-normal">({getBengaliCategoryBadge(cat)})</span>
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* ─── Product Grid ─── */}
      <Container className="pt-10">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white/50 rounded-none border border-[#EAD7B7]/50 max-w-lg mx-auto">
            <Sparkle weight="light" className="w-10 h-10 text-[#D4AF37] mx-auto mb-3 opacity-60" />
            <h3 className="font-heading text-2xl text-[#2B1D0E] mb-2 font-normal">
              No pieces in this category yet
            </h3>
            <button
              onClick={() => setSelectedSubcategory("all")}
              className="mt-4 min-h-[48px] px-8 rounded-none border border-[#2B1D0E] bg-[#2B1D0E] text-white font-body text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#7A1C1C] hover:border-[#7A1C1C] active:scale-[0.96] transition-all"
            >
              View All New Arrivals
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
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

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-none bg-[#FFFDF9] border border-[#EAD7B7] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h3 className="font-heading text-2xl text-[#2B1D0E] font-normal mb-1">
              Looking for a custom bridal order?
            </h3>
            <p className="font-body text-sm text-[#7B6A58]">
              Speak with our master karigars in the showroom for custom weight, purity, and gemstones.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 min-h-[48px] px-8 rounded-none border border-[#7A1C1C] bg-[#7A1C1C] text-white font-body text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#621616] active:scale-[0.96] transition-all shrink-0"
          >
            <span>Consult Karigar</span>
            <ArrowRight weight="light" className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </main>
  )
}

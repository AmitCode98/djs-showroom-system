"use client"

import * as React from "react"
import { PRODUCTS } from "@/constants/products"
import { Container } from "@/components/ui/container"
import ProductCard from "@/components/products/product-card"
import { BackButton } from "@/components/ui/back-button"
import { Sparkle, ArrowRight } from "@phosphor-icons/react"
import Link from "next/link"

export default function BestsellersPage() {
  // Select featured and popular heirloom pieces
  const bestsellers = React.useMemo(() => {
    return PRODUCTS.filter((p) => p.featured || p.bestseller || typeof p.price === "number" && p.price > 40000)
  }, [])

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
                <span>সর্বাধিক জনপ্রিয় গহনা</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight font-light text-white mb-3">
                Showroom Bestsellers
              </h1>
              <p className="font-body text-sm sm:text-base text-white/80 max-w-xl font-light leading-relaxed">
                The most beloved heirloom gold designs and bridal sets chosen by families across Bengal.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-none border border-white/15 text-xs text-[#D4AF37] font-body uppercase tracking-wider self-start md:self-auto">
              <Sparkle weight="light" className="w-4 h-4" />
              <span>{bestsellers.length} Customer Favorites</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ─── Product Grid ─── */}
      <Container className="pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {bestsellers.map((product) => (
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

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-none bg-[#FFFDF9] border border-[#EAD7B7] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h3 className="font-heading text-2xl text-[#2B1D0E] font-normal mb-1">
              Want to see these pieces in person?
            </h3>
            <p className="font-body text-sm text-[#7B6A58]">
              Add them to your Viewing Tray and our staff will present them on a velvet tray at your table.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 min-h-[48px] px-8 rounded-none border border-[#2B1D0E] bg-[#2B1D0E] text-white font-body text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#7A1C1C] hover:border-[#7A1C1C] active:scale-[0.96] transition-all shrink-0"
          >
            <span>Explore All Jewellery</span>
            <ArrowRight weight="light" className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </main>
  )
}

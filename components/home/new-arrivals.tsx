import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import ProductCard from "@/components/products/product-card"
import { NEW_ARRIVALS } from "@/constants/products"

export function NewArrivalsSection() {
  return (
    <section className="pt-8 pb-20 md:pt-10 md:pb-28 bg-background overflow-hidden">
      <Container>
        <SectionTitle
          title="New Arrivals"
          description="Freshly crafted designs just arrived from our master Bengal artisans, blending timeless tradition with modern luxury."
          align="center"
        />

        {/*
         * Layout Strategy:
         * Mobile (< md):  Horizontal snap-scroll slider — one card at a time, touch-friendly
         * Tablet (md):    2-column grid — comfortable card size, no horizontal scroll
         * Desktop (lg+):  4-column grid — full editorial spread
         */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-10 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 lg:gap-9 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
          {NEW_ARRIVALS.map((product) => (
            <div
              key={product.id}
              className="w-[80vw] sm:w-[60vw] shrink-0 snap-center md:w-auto md:shrink"
            >
              <ProductCard
                title={product.name}
                category={product.category}
                price={product.price}
                image={product.images.main.url}
                href={`/products/${product.slug}`}
              />
            </div>
          ))}
        </div>

        {/* Discover More — elegant gold outline button */}
        <div className="flex justify-center mt-8 md:mt-12">
          <Link
            href="/new-arrivals"
            className={[
              "inline-flex items-center justify-center",
              "h-12 px-10",
              "rounded-none border border-[#2B1D0E] bg-white/80",
              "font-body font-medium uppercase tracking-[0.16em] text-xs text-[#2B1D0E]",
              "transition-all duration-200 ease-out",
              "hover:bg-[#7A1C1C] hover:border-[#7A1C1C] hover:text-white",
              "active:scale-[0.96] shadow-xs",
            ].join(" ")}
          >
            Discover More
          </Link>
        </div>
      </Container>
    </section>
  )
}

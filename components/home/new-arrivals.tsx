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
          subtitle="New Season Essentials"
          description="Discover the latest handcrafted jewellery pieces curated for timeless elegance."
          align="center"
          className="mb-16 md:mb-20"
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
                title={product.title}
                category={product.category}
                price={product.price}
                image={product.image}
                href={product.href}
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
              "rounded-xl border border-border bg-transparent",
              "font-body font-medium uppercase tracking-wider text-sm text-foreground",
              "transition-all duration-300 ease-out",
              "hover:bg-gold hover:border-gold hover:text-white",
              "active:scale-[0.98]",
            ].join(" ")}
          >
            Discover More
          </Link>
        </div>
      </Container>
    </section>
  )
}

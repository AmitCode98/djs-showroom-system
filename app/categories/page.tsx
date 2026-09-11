import * as React from "react"
import Link from "next/link"
import { CategoryImage } from "@/components/shared/category-image"
import { COLLECTIONS } from "@/constants/collections"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { BackButton } from "@/components/ui/back-button"

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] pt-8 pb-24 md:pt-14 md:pb-32">
      <Container>
        {/* Back Navigation */}
        <div className="mb-6">
          <BackButton label="Back to Showroom" fallbackHref="/" variant="light" />
        </div>

        {/* Header Section Matching Elegance For Every Generation */}
        <SectionTitle
          title="Browse By Category"
          description="Handcrafted Bengali jewellery heritage. Select any collection to view available showroom pieces."
          align="center"
          titleLevel={1}
        />

        {/* Categories Grid (Touch-First Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-8">
          {COLLECTIONS.map((category) => (
            <Link 
              key={category.id} 
              href={category.href}
              className="group flex flex-col items-center rounded-none bg-white/60 border border-[#EAD7B7]/70 shadow-2xs hover:shadow-md transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96] overflow-hidden"
            >
              <div className="w-full aspect-4/5 relative overflow-hidden rounded-none bg-white">
                <CategoryImage
                  src={category.image}
                  alt={category.title}
                  aspectRatio="productCard"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="transition-transform duration-500 group-hover:scale-105 rounded-none"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />

                {/* Floating Bengali Badge */}
                {category.bengaliTitle && (
                  <div className="absolute top-3 left-3 z-10 pointer-events-none">
                    <span className="px-2.5 py-0.5 rounded-none bg-[#7A1C1C]/90 backdrop-blur-md text-[11px] font-bengali text-white/95 shadow-xs tracking-wide">
                      {category.bengaliTitle}
                    </span>
                  </div>
                )}
              </div>

              {/* Text Content — Permanently Visible & Accessible */}
              <div className="p-4 pb-5 flex flex-col items-center text-center w-full">
                <h3 className="font-heading text-lg md:text-xl text-foreground font-medium tracking-wide group-hover:text-[#7A1C1C] transition-colors duration-200">
                  {category.title}
                </h3>
                <span className="font-body text-[11px] text-[#7A1C1C] font-semibold tracking-wider uppercase mt-1.5 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform duration-150">
                  View Pieces <ArrowRight weight="light" className="w-3.5 h-3.5 text-[#7A1C1C]" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  )
}

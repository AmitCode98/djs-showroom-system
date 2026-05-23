import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { COLLECTIONS } from "@/constants/collections"
import { Container } from "@/components/ui/container"

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] pt-12 pb-24 md:pt-20 md:pb-32">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-gold font-body text-[11px] md:text-xs tracking-[0.2em] uppercase font-semibold mb-4 block">
            Curated For You
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground font-light tracking-wide mb-6">
            Shop Jewellery By Category
          </h1>
          <div className="w-16 h-px bg-gold/50 mx-auto" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {COLLECTIONS.map((category) => (
            <Link 
              key={category.id} 
              href={category.href}
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-4/5 relative overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_-10px_rgba(60,40,20,0.06)] mb-4 md:mb-6">
                {/* Image Wrapper */}
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-out" />
              </div>

              {/* Text Content */}
              <h3 className="font-heading text-lg md:text-xl text-foreground font-medium tracking-wider group-hover:text-gold transition-colors duration-300">
                {category.title}
              </h3>
              <span className="font-body text-[11px] text-foreground/50 tracking-widest uppercase mt-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Explore Collection
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  )
}

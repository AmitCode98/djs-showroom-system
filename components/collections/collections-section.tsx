import * as React from "react"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { CollectionCard } from "./collection-card"
import { COLLECTIONS } from "@/constants/collections"

export function CollectionsSection() {
  return (
    <section className="py-24 md:py-36 bg-background overflow-hidden">
      <Container>
        <SectionTitle
          title="Our Collection"
          subtitle="Curated pieces of timeless elegance"
          description="Discover timeless pieces crafted for modern elegance."
          align="center"
          className="mb-12 md:mb-16"
        />
        
        {/* Mobile: Snap Scroll Slider | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pt-4 pb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
          {COLLECTIONS.map((collection) => (
            <div 
              key={collection.id} 
              className="w-[80vw] sm:w-[48vw] shrink-0 snap-center md:w-auto md:shrink"
            >
              <CollectionCard
                title={collection.title}
                image={collection.image}
                href={collection.href}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

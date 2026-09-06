import * as React from "react"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { CollectionCard } from "./collection-card"
import { CATEGORIES } from "@/constants/categories"

export function CollectionsSection() {
  return (
    <section className="pt-16 pb-10 md:pt-24 md:pb-12 bg-background overflow-hidden">
      <Container>
        <SectionTitle
          title="Shop Jewellery By Category"
          subtitle="Curated Heritage Collections"
          description="Explore handcrafted collections designed for every occasion, wedding ritual, and festive celebration."
          align="center"
        />
        
        {/* Mobile: Snap Scroll Slider | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pt-4 pb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
          {CATEGORIES.map((category) => (
            <div 
              key={category.id} 
              className="w-[80vw] sm:w-[48vw] shrink-0 snap-center md:w-auto md:shrink"
            >
              <CollectionCard
                title={category.title}
                bengaliTitle={category.bengaliTitle}
                image={category.image}
                href={category.href}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

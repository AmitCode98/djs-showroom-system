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
          description="Explore handcrafted collections designed for weddings, traditional rituals, and daily celebrations."
          align="center"
        />
        
        {/* Responsive Grid: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5 md:gap-6 lg:gap-7">
          {CATEGORIES.map((category) => (
            <CollectionCard
              key={category.id}
              title={category.title}
              bengaliTitle={category.bengaliTitle}
              image={category.image}
              href={category.href}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

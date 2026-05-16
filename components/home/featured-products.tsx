import React from "react"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <SectionTitle
          subtitle="Handpicked For You"
          title="Featured Pieces"
          description="A curated selection of our most coveted jewellery, crafted to perfection."
        />

        {/* Product grid placeholder */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-secondary aspect-4/5 animate-pulse"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

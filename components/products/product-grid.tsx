import React from "react"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import ProductCard from "./product-card"

// Placeholder data — replace with API/server data as needed
const placeholderProducts = [
  { id: 1, title: "Sovereign Necklace", collection: "High Jewellery", price: 285000 },
  { id: 2, title: "Eternal Band Ring", collection: "Bridal", price: 142000 },
  { id: 3, title: "Aurora Drop Earrings", collection: "Heritage", price: 95000 },
  { id: 4, title: "Celeste Bracelet", collection: "High Jewellery", price: 320000 },
  { id: 5, title: "Soleil Pendant", collection: "Heritage", price: 68000 },
  { id: 6, title: "Lumière Choker", collection: "Bridal", price: 175000 },
]

export default function ProductGrid() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <SectionTitle
          subtitle="The Collection"
          title="All Pieces"
          description="Browse our full range of handcrafted jewellery, each piece a work of art."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              collection={product.collection}
              price={product.price}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

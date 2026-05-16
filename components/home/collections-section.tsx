import React from "react"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import Button from "@/components/ui/button"

const collections = [
  { name: "High Jewellery", description: "Masterpieces for extraordinary moments." },
  { name: "Bridal", description: "Begin forever with timeless elegance." },
  { name: "Heritage", description: "A century of craft, reborn for today." },
]

export default function CollectionsSection() {
  return (
    <section className="py-20 bg-secondary/40">
      <Container>
        <SectionTitle
          subtitle="Our World"
          title="Explore Collections"
          description="Each collection tells a story of artistry, passion, and uncompromising quality."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((col) => (
            <div
              key={col.name}
              className="group flex flex-col gap-4 p-8 rounded-2xl border border-border/60 bg-card hover:border-ring transition-colors duration-300"
            >
              {/* Image placeholder */}
              <div className="w-full aspect-video rounded-xl bg-secondary" />
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                {col.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {col.description}
              </p>
              <Button variant="outline" size="sm" className="mt-auto w-fit">
                Explore
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

import React from "react"
import { Container } from "@/components/ui/container"
import { Heading, Paragraph, Caption } from "@/components/ui/typography"

export default function AboutHero() {
  return (
    <section className="py-24 bg-foreground text-background">
      <Container>
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <Caption className="text-gold tracking-widest">Who We Are</Caption>
          <Heading level={1} className="text-background leading-tight">
            A Legacy Forged in Gold
          </Heading>
          <Paragraph className="text-background/70 text-lg">
            For over a century, DJS Showroom has stood as a beacon of luxury craftsmanship — blending tradition with modern artistry to create jewellery that transcends time.
          </Paragraph>
        </div>
      </Container>
    </section>
  )
}

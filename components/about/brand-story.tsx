import React from "react"
import { Container } from "@/components/ui/container"
import { Heading, Paragraph, Caption } from "@/components/ui/typography"

export default function BrandStory() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="w-full aspect-square rounded-3xl bg-secondary" />

          <div className="flex flex-col gap-6">
            <Caption className="text-gold tracking-widest">Our Heritage</Caption>
            <Heading level={2}>Crafted With Purpose. Built to Last.</Heading>
            <Paragraph className="text-muted-foreground">
              DJS Showroom was founded in 1920 by master goldsmith Dhiraj Jayantilal Shah. What began as a small atelier in the heart of the diamond district has blossomed into one of the most trusted names in luxury jewellery.
            </Paragraph>
            <Paragraph className="text-muted-foreground">
              Every piece we create is a testament to the belief that true luxury lies in the details — in the weight of a perfectly set diamond, the warmth of 24-karat gold, and the story that each gem carries.
            </Paragraph>
          </div>
        </div>
      </Container>
    </section>
  )
}

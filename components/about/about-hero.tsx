import React from "react"
import { Container } from "@/components/ui/container"
import { BackButton } from "@/components/ui/back-button"

export default function AboutHero() {
  return (
    <section className="pt-12 pb-24 bg-foreground text-background">
      <Container>
        <div className="mb-8">
          <BackButton label="Back to Showroom" fallbackHref="/" variant="dark" />
        </div>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
            A Legacy Forged in Gold
          </h1>
          <p className="font-body text-sm sm:text-base text-white/80 max-w-xl leading-relaxed font-light">
            For over a century, DJS Showroom has stood as a beacon of luxury craftsmanship — blending tradition with modern artistry to create jewellery that transcends time.
          </p>
        </div>
      </Container>
    </section>
  )
}

import * as React from "react"
import Link from "next/link"
import AboutHero from "@/components/about/about-hero"
import BrandStory from "@/components/about/brand-story"
import { Container } from "@/components/ui/container"
import { ArrowRight, Sparkle } from "@phosphor-icons/react/dist/ssr"

export const metadata = {
  title: "About Us | DJS Showroom System",
  description: "Learn about DJS Showroom heritage, master goldsmith craftsmanship, and century-old jewellery excellence in Bengal.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FBF9F5] text-foreground">
      <AboutHero />
      <BrandStory />

      {/* ─── Showroom Visit CTA Section ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#2B1D0E] to-[#1C1208] text-white border-t border-[#D4AF37]/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white/10 border border-white/20 text-[11px] font-body uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
              <Sparkle weight="light" className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>শোরুমে আসুন ও পরখ করুন</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
              Experience the Craftsmanship In Person
            </h2>
            <p className="font-body text-sm sm:text-base text-white/80 max-w-xl leading-relaxed font-light">
              We invite you to our Panagarh showroom to experience the weight, warmth, and beauty of authentic Bengali gold jewellery with personalized staff consultation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/products"
                className="min-h-[50px] px-8 rounded-none bg-[#D4AF37] text-[#2B1D0E] font-body text-xs font-semibold uppercase tracking-widest hover:bg-[#E5C158] active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center gap-2 shadow-lg"
              >
                <Sparkle weight="light" className="w-4 h-4 text-[#2B1D0E]" />
                <span>Browse Catalogue</span>
              </Link>
              <Link
                href="/contact"
                className="min-h-[50px] px-8 rounded-none bg-white/10 border border-white/20 text-white font-body text-xs font-semibold uppercase tracking-widest hover:bg-white/20 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center gap-2"
              >
                <span>Visit Showroom</span>
                <ArrowRight weight="light" className="w-4 h-4 text-[#D4AF37]" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

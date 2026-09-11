import React from "react"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Heading, Paragraph, Caption } from "@/components/ui/typography"
import { ShieldCheck, Medal, Sparkle, Scales } from "@phosphor-icons/react/dist/ssr"

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-[#FBF9F5]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Artisan Heritage Visual */}
          <div className="relative w-full aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden shadow-xl border border-[#D4AF37]/30 bg-[#2B1D0E]">
            <Image
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop"
              alt="DJS Artisan Jewellers at work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white">
              <span className="font-bengali text-sm text-[#D4AF37] block mb-1">
                ঐতিহ্য ও নিখুঁত কারিগরি
              </span>
              <p className="font-heading text-xl tracking-wide text-white">
                Master Goldsmiths of Bengal
              </p>
              <p className="font-body text-xs text-white/70 mt-1">
                Preserving ancestral filigree, rupa-shona, and jadao jewellery techniques since 1920.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EAD3]/50 border border-[#EAD7B7] text-[11px] font-body uppercase tracking-[0.2em] text-[#7A1C1C] self-start">
              <Sparkle weight="light" className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Our Heritage</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2B1D0E] font-light tracking-tight leading-tight">
              Crafted With Purpose. Built for Generations.
            </h2>
            <p className="font-body text-sm sm:text-base text-[#7B6A58] leading-relaxed">
              DJS Showroom was established with a singular devotion: creating heirloom jewellery that honors Bengal&apos;s celebrated artisanal traditions. Rooted in Panagarh, we have served wedding families for generations with uncompromised integrity.
            </p>
            <p className="font-body text-sm sm:text-base text-[#7B6A58] leading-relaxed">
              Every creation in our showroom is an embodiment of authentic gold purity. From hand-woven Polki chokers and ornate Sitahars to traditional gold-bound Sankha-Pola, each piece is hallmarked with BIS 916 certification.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D4AF37]/20">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/70 border border-[#D4AF37]/20 shadow-2xs">
                <ShieldCheck weight="light" className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <div className="text-xs">
                  <span className="block font-semibold text-[#2B1D0E]">100% BIS 916</span>
                  <span className="text-[#3C2814]/60">Government Hallmarked</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/70 border border-[#D4AF37]/20 shadow-2xs">
                <Medal weight="light" className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <div className="text-xs">
                  <span className="block font-semibold text-[#2B1D0E]">Certified Diamonds</span>
                  <span className="text-[#3C2814]/60">IGI & GIA Verified</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/70 border border-[#D4AF37]/20 shadow-2xs">
                <Sparkle weight="light" className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <div className="text-xs">
                  <span className="block font-semibold text-[#2B1D0E]">In-Store Viewing</span>
                  <span className="text-[#3C2814]/60">Private Tablet Concierge</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/70 border border-[#D4AF37]/20 shadow-2xs">
                <Scales weight="light" className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <div className="text-xs">
                  <span className="block font-semibold text-[#2B1D0E]">Daily Gold Rate</span>
                  <span className="text-[#3C2814]/60">Transparent Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

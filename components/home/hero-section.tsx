import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { Container } from "@/components/ui/container"
import Button from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-end justify-start overflow-hidden bg-[#1A120B]">
      {/* ─── Full-Bleed Cinematic Background Visual ─── */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=85&w=2400&auto=format&fit=crop"
          alt="DJS Pure Gold Heirloom Jewellery"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100 transition-transform duration-[2.5s] ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-105"
        />

        {/* Ambient Dark & Vignette Overlays for Maximum Legibility & Opulence */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140C06] via-[#140C06]/65 to-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_30%,rgba(0,0,0,0.55)_100%] pointer-events-none" />
      </div>

      {/* ─── Floating Cinematic Overlay Content ─── */}
      <div className="relative z-20 w-full pb-16 pt-36 md:pb-24 lg:pb-28">
        <Container>
          <div className="max-w-3xl flex flex-col gap-6 text-[#FDFAF5]">
            {/* Bengali Heritage Accent */}
            <div className="flex items-center">
              <span className="font-bengali text-sm md:text-base text-[#D4AF37] tracking-wider font-medium">
                ঐতিহ্যবাহী সোনার গহনা • ১৯২০ সাল থেকে বিশ্বস্ত
              </span>
            </div>

            {/* Primary Heading in Luxury Serif */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white leading-[1.08]">
              Timeless Artistry <br />
              <span className="italic font-heading text-[#F4DE9B]">
                Forged in 22k Gold.
              </span>
            </h1>

            {/* Lead Narrative */}
            <p className="font-body text-base md:text-lg text-white/85 max-w-xl leading-relaxed font-light">
              Experience the grandeur of Bengal’s finest goldsmiths. Curate and inspect heirloom bridal pieces right at your showroom table on our private viewing trays.
            </p>

            {/* Touch-First CTA Actions (48px+ Apple Press Physics) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/products" className="w-full sm:w-auto">
                <Button
                  variant="gold"
                  size="lg"
                  icon={<ArrowRight weight="light" className="w-4 h-4" />}
                  iconPlacement="right"
                  className="w-full sm:w-auto min-h-[54px] px-8 text-xs sm:text-sm font-semibold tracking-[0.16em]"
                >
                  Browse Catalogue
                </Button>
              </Link>

              <Link href="/categories" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto min-h-[54px] px-8 text-xs sm:text-sm font-semibold tracking-[0.16em] text-white border-white/40 hover:bg-white/15 hover:border-[#D4AF37] backdrop-blur-md"
                >
                  Explore Categories
                </Button>
              </Link>
            </div>

            {/* Subtle In-Store Trust Badges */}
            <div className="flex items-center gap-6 sm:gap-10 pt-4 border-t border-white/15 text-xs text-white/70 font-body">
              <div>
                <span className="block font-heading text-2xl font-normal text-white">100+ Years</span>
                <span className="uppercase tracking-widest text-[10px] text-[#D4AF37]">Panagarh Heritage</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <span className="block font-heading text-2xl font-normal text-white">BIS 916</span>
                <span className="uppercase tracking-widest text-[10px] text-[#D4AF37]">Guaranteed Pure Gold</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <span className="block font-heading text-2xl font-normal text-white">In-Store</span>
                <span className="uppercase tracking-widest text-[10px] text-[#D4AF37]">Tablet Concierge</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

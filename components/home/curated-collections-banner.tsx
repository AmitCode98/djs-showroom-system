import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { ArrowRight, Sparkle } from "@phosphor-icons/react/dist/ssr"

interface CuratedBannerItem {
  id: string
  slug: string
  badge: string
  bengaliBadge: string
  title: string
  subtitle: string
  description: string
  image: string
  ctaText: string
  href: string
}

const CURATED_BANNERS: CuratedBannerItem[] = [
  {
    id: "mens-collection",
    slug: "mens-collection",
    badge: "ROYAL HERITAGE",
    bengaliBadge: "পুরুষদের গহনা",
    title: "Men's Collection",
    subtitle: "Discover Our Stunning Men's Collection",
    description:
      "Handcrafted 22k gold chains, royal kadas, and artisan kurta buttons designed with poise for weddings and celebratory rituals.",
    image:
      "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=1200&auto=format&fit=crop",
    ctaText: "SHOP NOW",
    href: "/categories/mens-collection",
  },
  {
    id: "kids-collection",
    slug: "kids-collection",
    badge: "AUSPICIOUS BLESSINGS",
    bengaliBadge: "শিশুদের গহনা",
    title: "Kid's Collection",
    subtitle: "Explore Our Exclusive Kid's Collection",
    description:
      "Gentle 22k gold nazariya bracelets, protective amulets, and heirloom Annaprashan bangles crafted with rounded safety contours.",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    ctaText: "SHOP NOW",
    href: "/categories/kids-collection",
  },
]

export function CuratedCollectionsBanner() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-y border-[#EAD7B7]/40 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#7A1C1C]/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Header Matching Unified Luxury Styling */}
        <SectionTitle
          subtitle="Curated Showroom Editions"
          title="Elegance For Every Generation"
          description="Discover bespoke gold craftsmanship curated for the distinguished gentleman and cherished little blessings."
          align="center"
        />

        {/* Banners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {CURATED_BANNERS.map((banner) => (
            <div
              key={banner.id}
              className="group relative rounded-none overflow-hidden bg-[#FFFDF9] border border-[#EAD7B7] shadow-[0_12px_40px_rgba(43,29,14,0.06)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_50px_rgba(43,29,14,0.12)] hover:border-[#D4AF37]/60"
            >
              {/* Image Container with Cinematic Aspect */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#2B1D0E] rounded-none">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1D0E]/85 via-[#2B1D0E]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2B1D0E]/60 via-transparent to-transparent" />

                {/* Floating Category Badge */}
                <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-none bg-white/90 backdrop-blur-md text-[10px] font-body font-semibold tracking-[0.16em] uppercase text-[#2B1D0E] border border-white/40 shadow-xs">
                    {banner.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded-none bg-[#7A1C1C]/90 backdrop-blur-md text-[11px] font-bengali text-white/95">
                    {banner.bengaliBadge}
                  </span>
                </div>
              </div>

              {/* Content Box Styled after User's Clean Reference */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between flex-1 bg-white">
                <div className="mb-6 sm:mb-8">
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-[#2B1D0E] tracking-tight mb-2 group-hover:text-[#7A1C1C] transition-colors">
                    {banner.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[#7A1C1C] font-medium tracking-wide mb-3">
                    {banner.subtitle}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-[#7B6A58] leading-relaxed line-clamp-2">
                    {banner.description}
                  </p>
                </div>

                {/* Clean Border Button matching User's Mockup with 48px Touch Target */}
                <div className="pt-2 border-t border-[#EAD7B7]/40 flex items-center justify-between">
                  <Link
                    href={banner.href}
                    className="inline-flex items-center justify-center gap-3 px-8 min-h-[48px] border border-[#2B1D0E] text-[#2B1D0E] font-body text-xs sm:text-sm uppercase tracking-[0.18em] font-medium transition-all duration-200 hover:bg-[#7A1C1C] hover:border-[#7A1C1C] hover:text-white active:scale-[0.96] rounded-none group/btn shadow-xs"
                  >
                    <span>{banner.ctaText}</span>
                    <ArrowRight weight="light" className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    href={banner.href}
                    className="text-xs font-body text-[#7B6A58] hover:text-[#7A1C1C] tracking-wider uppercase underline underline-offset-4 decoration-[#EAD7B7] hover:decoration-[#7A1C1C] transition-colors"
                  >
                    View in Showroom
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

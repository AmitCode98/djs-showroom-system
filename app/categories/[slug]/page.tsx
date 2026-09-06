import * as React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PRODUCTS } from "@/constants/products"
import { CATEGORIES } from "@/constants/categories"
import { Container } from "@/components/ui/container"
import ProductCard from "@/components/products/product-card"
import { BackButton } from "@/components/ui/back-button"
import { ArrowLeft, Sparkle, Funnel } from "@phosphor-icons/react/dist/ssr"

// Category details with Bengali typography accents
const CATEGORY_META: Record<
  string,
  { title: string; bengaliTitle: string; description: string; imageFallback?: string }
> = {
  necklace: {
    title: "Necklaces",
    bengaliTitle: "গলার হার ও নেকলেস",
    description: "Regal chokers and royal bridal neckpieces crafted with Bengali filigree, polki diamonds, and pure 22k gold.",
  },
  chokers: {
    title: "Chokers",
    bengaliTitle: "চিক ও চোখার",
    description: "Exquisite high-neck gold and diamond chokers designed for bridal grandeur and heirloom distinction.",
  },
  bangles: {
    title: "Bangles & Bala",
    bengaliTitle: "সোনার বালা ও চুড়",
    description: "Centuries-old Bengali goldsmith traditions, from Gokhru to Ratanchur, Chur and daily wear kadas.",
  },
  earrings: {
    title: "Earrings & Jhumka",
    bengaliTitle: "কানের দুল ও ঝুমকো",
    description: "Intricately hand-engraved gold jhumkas, Kan Pashas, and vibrant gemstone ear drops.",
  },
  sitahar: {
    title: "Sitahar",
    bengaliTitle: "সীতাহার",
    description: "Grand multi-tier royal long necklaces embodying aristocratic Bengal heritage and matrimonial dignity.",
  },
  chains: {
    title: "Chains",
    bengaliTitle: "সোনার চেন",
    description: "Pure 22k hallmarked gold chains in traditional Biswa, rope, and modern comfort-link patterns.",
  },
  rings: {
    title: "Rings",
    bengaliTitle: "সোনার আংটি",
    description: "Solitaire and floral statement rings crafted with certified purity and artisan detailing.",
  },
  pendants: {
    title: "Pendants",
    bengaliTitle: "লকেট ও পেন্ডেন্ট",
    description: "Auspicious devotional motifs and contemporary gold pendants for everyday grace.",
  },
  "pearl-shell": {
    title: "Pearl & Shell",
    bengaliTitle: "মুক্তো ও মুক্তার গহনা",
    description: "Basra pearls and lustrous shell gems set in warm yellow gold for timeless aristocratic allure.",
  },
  lahari: {
    title: "Lahari Haar",
    bengaliTitle: "লাহারী হার",
    description: "Multi-strand cascading chains creating harmonious motion and majestic drape.",
  },
  "sankha-pola": {
    title: "Sankha & Pola",
    bengaliTitle: "শাঁখা ও পোলা",
    description: "Traditional Bengali bridal conch shell and red coral bound in hallmarked 22k gold wirework.",
  },
  "tiara-tikli": {
    title: "Tiara & Tikli",
    bengaliTitle: "টায়রা ও টিকলি",
    description: "Ornate forehead crowns and maang tikkas celebrating sacred matrimonial rituals.",
  },
  mantasha: {
    title: "Mantasha",
    bengaliTitle: "মানতাসা",
    description: "Opulent broad gold wrist bracelets featuring repoussé peacock and floral artistry.",
  },
  "tie-chains": {
    title: "Tie Chains",
    bengaliTitle: "টাই চেন",
    description: "Graceful gold tie chains with delicate dangling droplet motifs.",
  },
  "mens-collection": {
    title: "Men's Collection",
    bengaliTitle: "পুরুষদের গহনা সংগ্রহ",
    description: "Distinguished 22k hallmarked gold chains, royal kadas, handcrafted kurta buttons, and signet rings for the Bengali gentleman.",
  },
  "kids-collection": {
    title: "Kid's Collection",
    bengaliTitle: "শিশুদের গহনা সংগ্রহ",
    description: "Delicate, auspicious 22k gold nazariya bangles, protective amulets, and lightweight devotional pendants crafted with safety for little ones.",
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { slug } = await params
  const normalizedSlug = slug.toLowerCase()

  // Match category info
  const categoryConfig = CATEGORIES.find((c) => c.slug === normalizedSlug)
  const meta = CATEGORY_META[normalizedSlug] || (categoryConfig ? {
    title: categoryConfig.title,
    bengaliTitle: "বিশেষ গহনা সংগ্রহ",
    description: "Handcrafted jewellery pieces curated for in-store viewing.",
  } : null)

  if (!meta && !categoryConfig) {
    notFound()
  }

  // Filter products for this category
  const products = PRODUCTS.filter((p) => {
    const sub = p.subcategory?.toLowerCase()
    const cat = p.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    const pSlug = p.slug.toLowerCase()
    return (
      sub === normalizedSlug ||
      cat === normalizedSlug ||
      pSlug.includes(normalizedSlug)
    )
  })

  return (
    <main className="min-h-screen bg-[#FBF9F5] text-foreground pb-24 md:pb-32">
      {/* ─── Hero Header ─── */}
      <div className="relative border-b border-[#D4AF37]/20 bg-gradient-to-b from-[#2B1D0E] via-[#3C2814] to-[#2B1D0E] text-[#FDFAF5] pt-14 pb-16 md:pt-20 md:pb-22 overflow-hidden">
        {/* Subtle decorative gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(212,175,55,0.18)_0%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">
          {/* Back to All Categories (48px touch target) */}
          <div className="mb-8">
            <BackButton label="All Collections" fallbackHref="/categories" variant="dark" />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white/10 border border-white/20 text-[11px] font-body uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
              <Sparkle weight="light" className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{meta?.bengaliTitle || "হেরিটেজ সংগ্রহ"}</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight font-light text-white mb-3">
              {meta?.title}
            </h1>

            <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl font-light">
              {meta?.description}
            </p>

            <div className="mt-6 flex items-center gap-4 text-xs tracking-wider uppercase text-[#D4AF37]">
              <span className="flex items-center gap-1.5 font-semibold">
                <Sparkle weight="light" className="w-3.5 h-3.5" />
                {products.length} {products.length === 1 ? "Piece" : "Pieces"} in Showroom
              </span>
              <span className="text-white/40">•</span>
              <span className="text-white/70">100% BIS 916 Pure Gold</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ─── Product Grid Section ─── */}
      <section className="pt-10 md:pt-14">
        <Container>
          {/* In-Store Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#D4AF37]/15">
            <div className="text-xs font-body uppercase tracking-widest text-[#3C2814]/70 font-semibold">
              Showing available pieces for in-store preview
            </div>
            <Link
              href="/products"
              className="min-h-[48px] px-4 rounded-none flex items-center gap-2 text-xs font-semibold text-[#7A1C1C] hover:text-[#932525] active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] uppercase tracking-wider"
            >
              <Funnel weight="light" className="w-4 h-4 text-[#D4AF37]" />
              <span>Filter All Catalogue</span>
            </Link>
          </div>

          {products.length === 0 ? (
            <div className="py-20 text-center max-w-md mx-auto flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-none bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                <Sparkle weight="light" className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl text-[#2B1D0E] font-normal">
                New Designs Arriving Soon
              </h3>
              <p className="font-body text-sm text-[#3C2814]/70 leading-relaxed">
                Pieces in this collection are currently being prepared in our workshop. Please ask staff or explore the full catalogue.
              </p>
              <Link
                href="/products"
                className="mt-2 min-h-[48px] px-8 rounded-none border border-[#2B1D0E] bg-[#2B1D0E] text-white flex items-center justify-center font-body text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#7A1C1C] hover:border-[#7A1C1C] active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-md"
              >
                Browse All Jewellery
              </Link>
            </div>
          ) : (
            /* Spacious Grid — max 3 columns on tablet landscape, touch-ready */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  slug={product.slug}
                  title={product.name}
                  category={product.category}
                  price={product.price}
                  image={product.images.main.url}
                  href={`/products/${product.slug}`}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  )
}

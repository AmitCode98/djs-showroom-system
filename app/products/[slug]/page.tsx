"use client"

import * as React from "react"
import { ProductImage } from "@/components/shared/product-image"
import Link from "next/link"
import { notFound, useRouter } from "next/navigation"
import { ArrowLeft, Heart, Sparkle, Plus, Minus, Check } from "@phosphor-icons/react"
import { BackButton } from "@/components/ui/back-button"
import { PRODUCTS, NEW_ARRIVALS, FEATURED_PRODUCTS } from "@/constants/products"
import { cn } from "@/lib/utils"
import { useShowroomTray } from "@/context/showroom-tray-context"
import { getBengaliCategoryBadge } from "@/constants/bengali-badges"

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = React.use(params)
  const slug = resolvedParams.slug
  const { addItem, isInTray, setIsTrayOpen } = useShowroomTray()

  const product = PRODUCTS.find((p) => p.slug === slug)

  if (!product) {
    return notFound()
  }

  const [mainImage, setMainImage] = React.useState(product.images?.main?.url || "")
  const [quantity, setQuantity] = React.useState(1)
  const [isWishlisted, setIsWishlisted] = React.useState(false)
  const router = useRouter()

  const inTray = isInTray(product.id)

  // Mock gallery images
  const galleryImages = [
    product.images?.main?.url,
    "https://images.unsplash.com/photo-1599643478524-fb66f7f29054?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop"
  ].filter(Boolean)

  const handleAddToTray = () => {
    addItem(
      {
        id: product.id,
        slug: product.slug,
        name: product.name,
        category: product.category,
        price: product.price,
        image: mainImage || product.images?.main?.url,
        material: "22k Hallmarked Gold",
        purity: "916 BIS",
        weight: "45.5g",
      },
      quantity
    )
  }

  return (
    <div className="min-h-screen bg-[#FDFAF5] overflow-x-hidden">
      {/* ─── Breadcrumb / Back ─── */}
      <div className="container-wrapper py-6 flex items-center justify-between">
        <BackButton
          label={`Back to ${product.category || "Catalogue"}`}
          fallbackHref={product.subcategory ? `/categories/${product.subcategory}` : "/products"}
          variant="light"
        />
        <div className="hidden sm:flex items-center gap-2 text-xs font-body text-muted-foreground uppercase tracking-wider">
          <Link href="/products" className="hover:text-[#7A1C1C] transition-colors">Catalogue</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
      </div>

      <div className="container-wrapper pb-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* ─── Left: Image Gallery ─── */}
          <div className="w-full lg:w-[52%] lg:max-w-[600px] flex flex-col gap-4 lg:sticky lg:top-6">
            <div className="relative w-full aspect-square md:aspect-4/5 rounded-none overflow-hidden bg-[#F8F5F0] border border-black/5">
              <ProductImage
                src={mainImage || null}
                alt={product.name}
                aspectRatio="auto"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-none"
                priority
              />

              {/* Floating Bengali Badge */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-none bg-[#7A1C1C]/90 backdrop-blur-md text-xs font-bengali text-white/95 shadow-md tracking-wide">
                  {getBengaliCategoryBadge(product.category)}
                </span>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={cn(
                    "relative shrink-0 w-20 h-20 md:w-[88px] md:h-[88px] rounded-none overflow-hidden transition-all duration-200",
                    mainImage === img 
                      ? "border-2 border-[#D4AF37] shadow-[0_4px_12px_rgba(212,175,55,0.2)] -translate-y-0.5" 
                      : "border border-[#EAD7B7]/40 opacity-80 active:scale-95 hover:opacity-100"
                  )}
                >
                  <ProductImage src={img} alt={`Thumbnail ${idx}`} aspectRatio="thumbnail" fill sizes="88px" className="object-cover rounded-none" />
                </button>
              ))}
            </div>
          </div>

          {/* ─── Right: Product Info ─── */}
          <div className="w-full lg:w-[48%] flex flex-col gap-10 pt-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                <span className="font-body text-xs uppercase tracking-[0.2em] text-[#7A1C1C] font-semibold">
                  {product.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-none bg-[#7A1C1C]/90 text-[11px] font-bengali text-white/95 shadow-2xs">
                  {getBengaliCategoryBadge(product.category)}
                </span>
                <span className="px-2.5 py-0.5 rounded-none bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#2B1D0E] text-[10px] font-body font-semibold uppercase tracking-wider">
                  BIS 916 Pure Gold
                </span>
              </div>
              <h1 className="font-heading text-4xl lg:text-5xl tracking-wide text-[#2B1D0E] leading-tight">
                {product.name}
              </h1>
              <span className="font-body text-2xl tracking-wide text-[#3C2814]/90 mt-2">
                {typeof product.price === "number" ? `₹${product.price.toLocaleString("en-IN")}` : product.price}
              </span>
            </div>

            <div className="h-px w-full bg-[#EAD7B7]/40" />

            {/* Description */}
            <p className="font-body text-[#3C2814]/80 text-lg leading-relaxed">
              {product.description || "An exquisite piece crafted with precision, embodying the rich heritage of Bengali jewellery making. Perfect for the modern connoisseur seeking timeless elegance."}
            </p>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm font-body text-[#3C2814]/70">
              <div className="flex flex-col gap-1">
                <span className="uppercase tracking-widest text-[10px] text-[#3C2814]/50">Material</span>
                <span className="font-medium">22k Hallmarked Gold</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="uppercase tracking-widest text-[10px] text-[#3C2814]/50">Weight</span>
                <span className="font-medium">Approx. 45.5g</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="uppercase tracking-widest text-[10px] text-[#3C2814]/50">Purity</span>
                <span className="font-medium">916 BIS Hallmarked</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="uppercase tracking-widest text-[10px] text-[#3C2814]/50">Availability</span>
                <span className="font-medium text-[#D4AF37]">In Stock</span>
              </div>
            </div>

            <div className="h-px w-full bg-[#EAD7B7]/40" />

            {/* Actions */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-[#EAD7B7] rounded-none bg-white shadow-2xs overflow-hidden">
                  <button 
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                    className="w-12 h-12 flex items-center justify-center text-[#3C2814]/70 hover:text-[#7A1C1C] hover:bg-[#7A1C1C]/10 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    aria-label="Decrease quantity"
                  >
                    <Minus weight="light" className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-body text-base text-[#3C2814] font-semibold">{quantity}</span>
                  <button 
                    type="button"
                    onClick={() => setQuantity(quantity + 1)} 
                    className="w-12 h-12 flex items-center justify-center text-[#3C2814]/70 hover:text-[#7A1C1C] hover:bg-[#7A1C1C]/10 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    aria-label="Increase quantity"
                  >
                    <Plus weight="light" className="w-4 h-4" />
                  </button>
                </div>
                
                <span className="font-body text-sm tracking-wider text-[#3C2814]/70 font-medium">
                  {quantity > 1 ? "Pieces for viewing" : "Piece for viewing"}
                </span>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleAddToTray}
                  className={cn(
                    "flex-1 min-h-[54px] flex items-center justify-center gap-3 px-6 rounded-none font-body tracking-[0.16em] uppercase text-sm font-semibold transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]",
                    inTray 
                      ? "bg-[#7A1C1C] text-white shadow-[0_4px_16px_rgba(122,28,28,0.25)] border border-[#7A1C1C]"
                      : "bg-[#2B1D0E] text-white hover:bg-[#7A1C1C] hover:border-[#7A1C1C] border border-[#2B1D0E] shadow-[0_4px_14px_rgba(43,29,14,0.15)]"
                  )}
                >
                  {inTray ? (
                    <>
                      <Check weight="light" className="w-5 h-5 text-[#D4AF37]" /> In Viewing Tray
                    </>
                  ) : (
                    <>
                      <Sparkle weight="light" className="w-5 h-5 text-[#D4AF37]" /> Add to Viewing Tray
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={cn(
                    "flex items-center justify-center w-[54px] h-[54px] rounded-none border transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]",
                    isWishlisted 
                      ? "bg-[#7A1C1C]/10 border-[#7A1C1C]/40 text-[#7A1C1C] shadow-xs" 
                      : "bg-[#FDFAF5] border-[#2B1D0E]/30 text-[#3B2416] shadow-sm hover:border-[#7A1C1C] hover:text-[#7A1C1C]"
                  )}
                  aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart weight={isWishlisted ? "fill" : "light"} className={cn("w-5 h-5 transition-all duration-200", isWishlisted && "fill-current text-[#7A1C1C]")} />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsTrayOpen(true)}
                className="w-full min-h-[50px] flex items-center justify-center gap-2 py-3 rounded-none border border-[#2B1D0E] text-[#2B1D0E] font-body font-semibold tracking-[0.16em] uppercase text-xs hover:bg-[#7A1C1C] hover:text-white hover:border-[#7A1C1C] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96] shadow-2xs"
              >
                Open Viewing Tray
              </button>
            </div>


            {/* Highlights if available */}
            {product.highlights && (
              <div className="mt-4 p-6 rounded-none bg-white border border-[#EAD7B7]/50 shadow-sm">
                <h3 className="font-heading text-xl text-[#2B1D0E] mb-4">Highlights</h3>
                <ul className="flex flex-col gap-3">
                  {product.highlights.map((highlight: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 font-body text-[#3C2814]/80 text-sm">
                      <div className="w-1.5 h-1.5 rounded-none bg-[#D4AF37]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  )
}

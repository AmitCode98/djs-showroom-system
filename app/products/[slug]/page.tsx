"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound, useRouter } from "next/navigation"
import { ArrowLeft, Heart, ShoppingBag, Plus, Minus, Check } from "lucide-react"
import { NEW_ARRIVALS, FEATURED_PRODUCTS } from "@/constants/products"
import { cn } from "@/lib/utils"

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = React.use(params)
  const slug = resolvedParams.slug

  // Find product from dummy data
  let product: any = NEW_ARRIVALS.find((p) => p.href.split("/").pop() === slug)
  if (!product) {
    product = FEATURED_PRODUCTS.find((p) => p.slug === slug)
  }

  if (!product) {
    return notFound()
  }

  const [mainImage, setMainImage] = React.useState(product.image || product.primaryImage?.url)
  const [quantity, setQuantity] = React.useState(1)
  const [isWishlisted, setIsWishlisted] = React.useState(false)
  const [isAddedToCart, setIsAddedToCart] = React.useState(false)
  const router = useRouter()

  // Mock gallery images
  const galleryImages = [
    product.image || product.primaryImage?.url,
    "https://images.unsplash.com/photo-1599643478524-fb66f7f29054?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop"
  ]

  const handleAddToCart = () => {
    if (isAddedToCart) return
    setIsAddedToCart(true)
    setTimeout(() => setIsAddedToCart(false), 2500)
  }

  return (
    <div className="min-h-screen bg-[#FDFAF5] overflow-x-hidden">
      {/* ─── Breadcrumb / Back ─── */}
      <div className="container-wrapper py-6">
        <Link
          href="/"
          scroll={false}
          className="inline-flex items-center gap-2 text-[#3C2814]/70 hover:text-[#D4AF37] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-body text-sm tracking-wider uppercase">Back to Collection</span>
        </Link>
      </div>

      <div className="container-wrapper pb-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* ─── Left: Image Gallery ─── */}
          <div className="w-full lg:w-[52%] lg:max-w-[600px] flex flex-col gap-4 lg:sticky lg:top-6">
            <div className="relative w-full aspect-square md:aspect-4/5 rounded-[1.5rem] overflow-hidden bg-[#F8F5F0] border border-black/5">
              <Image
                src={mainImage}
                alt={product.title || product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={cn(
                    "relative shrink-0 w-20 h-20 md:w-[88px] md:h-[88px] rounded-xl overflow-hidden transition-all duration-200",
                    mainImage === img 
                      ? "border border-[#D4AF37] shadow-[0_4px_12px_rgba(212,175,55,0.15)] -translate-y-0.5" 
                      : "border border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <Image src={img} alt={`Thumbnail ${idx}`} fill sizes="88px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ─── Right: Product Info ─── */}
          <div className="w-full lg:w-[48%] flex flex-col gap-10 pt-4">
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                {product.category || product.collection}
              </span>
              <h1 className="font-heading text-4xl lg:text-5xl tracking-wide text-[#2B1D0E] leading-tight">
                {product.title || product.name}
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
                <div className="flex items-center border border-[#EAD7B7]/80 rounded-full px-4 py-2.5 bg-white shadow-xs">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                    className="text-[#3C2814]/50 hover:text-[#D4AF37] active:scale-90 transition-all duration-150 p-1"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-body text-[#3C2814] font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)} 
                    className="text-[#3C2814]/50 hover:text-[#D4AF37] active:scale-90 transition-all duration-150 p-1"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <span className="font-body text-sm tracking-wider text-[#3C2814]/60 font-medium">
                  {quantity > 1 ? "Pieces" : "Piece"}
                </span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-3 py-4 rounded-full font-body tracking-wider uppercase text-sm font-semibold transition-all duration-200 active:scale-[0.98]",
                    isAddedToCart 
                      ? "bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/35 shadow-[0_2px_8px_rgba(212,175,55,0.05)]"
                      : "bg-[#2B1D0E] text-white hover:bg-[#3C2814] shadow-[0_4px_12px_rgba(43,29,14,0.12)]"
                  )}
                >
                  {isAddedToCart ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Cart
                    </>
                  )}
                </button>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={cn(
                    "flex items-center justify-center w-[54px] h-[54px] rounded-full border transition-all duration-200 active:scale-[0.98]",
                    isWishlisted 
                      ? "bg-[#D4AF37]/15 border-[#D4AF37]/50 text-[#D4AF37] shadow-[0_2px_8px_rgba(212,175,55,0.05)]" 
                      : "bg-[#FDFAF5] border-[#D4AF37]/40 text-[#3B2416] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-[#D4AF37]/60"
                  )}
                >
                  <Heart className={cn("w-5 h-5 transition-all duration-200", isWishlisted && "fill-current")} />
                </button>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-4 rounded-full border border-[#D4AF37]/60 text-[#D4AF37] font-body font-semibold tracking-wider uppercase text-sm hover:bg-[#F3EAD3]/30 transition-all duration-200 active:scale-[0.98] shadow-xs">
                Enquire About This Piece
              </button>
            </div>

            {/* Highlights if available */}
            {product.highlights && (
              <div className="mt-4 p-6 rounded-2xl bg-white border border-[#EAD7B7]/50 shadow-sm">
                <h3 className="font-heading text-xl text-[#2B1D0E] mb-4">Highlights</h3>
                <ul className="flex flex-col gap-3">
                  {product.highlights.map((highlight: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 font-body text-[#3C2814]/80 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
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

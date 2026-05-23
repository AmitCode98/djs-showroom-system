"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, ShoppingBag, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ProductCardProps {
  title: string
  category: string
  price: string | number
  image?: string
  href?: string
  className?: string
}

export default function ProductCard({
  title,
  category,
  price,
  image,
  href = "#",
  className,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = React.useState(false)
  const [isAddedToCart, setIsAddedToCart] = React.useState(false)

  const formattedPrice =
    typeof price === "number" ? `₹${price.toLocaleString("en-IN")}` : price

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (isAddedToCart) return
    setIsAddedToCart(true)
    setTimeout(() => {
      setIsAddedToCart(false)
    }, 2500)
  }

  return (
    <div className={cn("group relative w-full p-3.5 rounded-[1.75rem] border border-[#785A28]/8 bg-white/35 transition-all duration-200 ease-out hover:translate-y-[-3px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(120,90,40,0.06)] hover:border-[#785A28]/15", className)}>
      {/* ─── Floating Actions Stack ─── */}
      <div className="absolute top-5 right-5 z-20 flex flex-col gap-3">
        <button
          type="button"
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            "bg-[#FDFAF5] border border-[#D4AF37]/40 text-[#3B2416]",
            "shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
            "transition-all duration-200 ease-out active:scale-[0.96]"
          )}
          aria-label={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsWishlisted((prev) => !prev)
          }}
        >
          <Heart
            className={cn(
              "w-[18px] h-[18px] transition-all duration-200",
              isWishlisted ? "fill-[#3B2416] text-[#3B2416]" : ""
            )}
          />
        </button>

        <button
          type="button"
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            "bg-[#F3EAD3] border border-[#D4AF37]/60 text-[#3B2416]",
            "shadow-[0_6px_16px_rgba(0,0,0,0.12)]",
            "transition-all duration-200 ease-out active:scale-[0.96]"
          )}
          aria-label={isAddedToCart ? "Added to Cart" : "Add to Cart"}
          onClick={handleAddToCart}
        >
          {isAddedToCart ? (
            <Check className="w-[18px] h-[18px]" />
          ) : (
            <ShoppingBag className="w-[18px] h-[18px]" />
          )}
        </button>
      </div>

      {/* ─── Main Clickable Area ─── */}
      <Link
        href={href}
        className="flex flex-col gap-4 w-full h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-[1.25rem]"
        aria-label={`View details for ${title}`}
        onClick={() => {
          if (typeof window !== "undefined") {
            sessionStorage.setItem("showroom_scroll_pos", window.scrollY.toString())
          }
        }}
      >
        {/* Image Container */}
        <div
          className={cn(
            "relative w-full aspect-4/5 rounded-[1.25rem] overflow-hidden bg-[#F8F5F0]",
            "border border-black/4 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.04)]",
            "transition-shadow duration-200 ease-out group-hover:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.09)]"
          )}
        >
          {image ? (
            <Image
              src={image}
              alt={`DJS ${title}`}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
              className="object-cover transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
          ) : (
            <div className="w-full h-full bg-secondary/30" />
          )}
        </div>

        {/* Product Information */}
        <div className="flex flex-col gap-2 px-1.5 pb-1 grow">
          <div className="flex flex-col gap-1">
            <span className="font-body text-[10px] uppercase tracking-[0.17em] text-foreground/45 font-medium">
              {category}
            </span>
            <h3 className="font-heading text-[18px] lg:text-[19px] tracking-[0.03em] text-foreground leading-snug line-clamp-1 transition-colors duration-200 ease-out group-hover:text-gold">
              {title}
            </h3>
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            <span className="font-body text-[15px] font-medium tracking-wide text-foreground/90">
              {formattedPrice}
            </span>

            <span className="inline-flex items-center gap-1.5 font-body text-[10px] uppercase tracking-widest text-[#B58D1E] font-semibold w-fit">
              <span className="relative">
                View Details
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-[#B58D1E] transition-all duration-200 ease-out group-hover:w-full" />
              </span>
              <ArrowRight className="w-3 h-3 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

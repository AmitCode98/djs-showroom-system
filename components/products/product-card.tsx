"use client"

import * as React from "react"
import Link from "next/link"
import { ProductImage } from "@/components/shared/product-image"
import { ArrowRight, Heart, Sparkle, Check } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { useShowroomTray } from "@/context/showroom-tray-context"

import { getBengaliCategoryBadge } from "@/constants/bengali-badges"

export interface ProductCardProps {
  id?: string
  slug?: string
  title: string
  category: string
  bengaliBadge?: string
  price: string | number
  image?: string
  href?: string
  className?: string
}

export default function ProductCard({
  id,
  slug,
  title,
  category,
  bengaliBadge,
  price,
  image,
  href = "#",
  className,
}: ProductCardProps) {
  const displayBengali = bengaliBadge || getBengaliCategoryBadge(category)
  const { addItem, isInTray } = useShowroomTray()
  const [isWishlisted, setIsWishlisted] = React.useState(false)

  const productId = id || slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  const productSlug = slug || href.replace("/products/", "") || productId
  const inTray = isInTray(productId)

  const formattedPrice =
    typeof price === "number" ? `₹${price.toLocaleString("en-IN")}` : price

  const handleAddToTray = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: productId,
      slug: productSlug,
      name: title,
      category,
      price,
      image,
    })
  }

  return (
    <div className={cn("group relative w-full p-3.5 rounded-none border border-[#785A28]/12 bg-white/40 transition-all duration-200 ease-out hover:translate-y-[-3px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(120,90,40,0.06)] hover:border-[#785A28]/25", className)}>
      {/* ─── Floating Actions Stack (48px touch targets) ─── */}
      <div className="absolute top-5 right-5 z-20 flex flex-col gap-2.5">
        <button
          type="button"
          className={cn(
            "w-11 h-11 rounded-none flex items-center justify-center",
            "bg-[#FDFAF5] border border-[#D4AF37]/40 text-[#3B2416]",
            "shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
            "transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]"
          )}
          aria-label={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsWishlisted((prev) => !prev)
          }}
        >
          <Heart
            weight={isWishlisted ? "fill" : "light"}
            className={cn(
              "w-5 h-5 transition-all duration-200",
              isWishlisted ? "text-[#7A1C1C]" : "text-[#3B2416]"
            )}
          />
        </button>

        <button
          type="button"
          className={cn(
            "w-11 h-11 rounded-none flex items-center justify-center",
            inTray
              ? "bg-[#7A1C1C] border-[#7A1C1C] text-white shadow-[0_4px_14px_rgba(122,28,28,0.3)]"
              : "bg-[#F3EAD3] border border-[#D4AF37]/60 text-[#3B2416] shadow-[0_6px_16px_rgba(0,0,0,0.12)]",
            "transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]"
          )}
          aria-label={inTray ? "In Viewing Tray" : "Add to Viewing Tray"}
          onClick={handleAddToTray}
        >
          {inTray ? (
            <Check weight="light" className="w-5 h-5 text-white" />
          ) : (
            <Sparkle weight="light" className="w-5 h-5 text-[#D4AF37]" />
          )}
        </button>
      </div>

      {/* ─── Main Clickable Area ─── */}
      <Link
        href={href}
        className="flex flex-col gap-4 w-full h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-none"
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
            "relative w-full aspect-4/5 rounded-none overflow-hidden bg-[#F8F5F0]",
            "border border-black/4 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.04)]",
            "transition-shadow duration-200 ease-out group-hover:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.09)]"
          )}
        >
          <ProductImage
            src={image || null}
            alt={`DJS ${title}`}
            aspectRatio="productCard"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
            className="group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-none"
          />

          {/* Floating Bengali Badge */}
          {displayBengali && (
            <div className="absolute top-3 left-3 z-10 pointer-events-none">
              <span className="px-2.5 py-0.5 rounded-none bg-[#7A1C1C]/90 backdrop-blur-md text-[11px] font-bengali text-white/95 shadow-xs tracking-wide">
                {displayBengali}
              </span>
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="flex flex-col gap-2 px-1.5 pb-1 grow">
          <div className="flex flex-col gap-1">
            <span className="font-body text-[10px] uppercase tracking-[0.18em] text-foreground/45 font-semibold">
              {category}
            </span>
            <h3 className="font-heading text-[18px] lg:text-[20px] font-normal tracking-[0.03em] text-[#2B1D0E] leading-snug line-clamp-1 transition-colors duration-200 ease-out group-hover:text-[#7A1C1C]">
              {title}
            </h3>
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            <span className="font-body text-[15px] font-semibold tracking-wide text-foreground/90">
              {formattedPrice}
            </span>

            <span className="inline-flex items-center gap-1.5 font-body text-[10px] uppercase tracking-widest text-[#7A1C1C] font-semibold w-fit">
              <span className="relative">
                View Details
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-[#7A1C1C] transition-all duration-200 ease-out group-hover:w-full" />
              </span>
              <ArrowRight weight="light" className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

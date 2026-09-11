"use client"

import * as React from "react"
import Link from "next/link"
import { CategoryImage } from "@/components/shared/category-image"
import { ArrowRight } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

import { getBengaliCategoryBadge } from "@/constants/bengali-badges"

export interface CollectionCardProps {
  title: string
  bengaliTitle?: string
  image: string
  href: string
  className?: string
}

export function CollectionCard({ title, bengaliTitle, image, href, className }: CollectionCardProps) {
  const displayBengali = bengaliTitle || getBengaliCategoryBadge(title)

  return (
    <Link 
      href={href} 
      className={cn(
        "group flex flex-col items-center cursor-pointer rounded-none border border-[#785A28]/15 bg-white/40 overflow-hidden",
        "transition-all duration-200 ease-out hover:translate-y-[-3px] active:scale-[0.98] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(120,90,40,0.06)] hover:border-[#785A28]/30",
        className
      )}
    >
      {/* Image Container with flush edge-to-edge framing */}
      <div className="relative w-full aspect-4/5 rounded-none overflow-hidden bg-[#F8F5F0]">
        <CategoryImage
          src={image || null}
          alt={`DJS ${title} Collection`}
          aspectRatio="productCard"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 33vw"
          className="group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-none"
        />

        {/* Elegant subtle dark overlay on hover to deepen the luxury feel */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-200 ease-out group-hover:bg-black/3" />

        {/* Floating Bengali Badge matching Elegance For Every Generation */}
        {displayBengali && (
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="px-2.5 py-0.5 rounded-none bg-[#7A1C1C]/90 backdrop-blur-md text-[11px] font-bengali text-white/95 shadow-xs tracking-wide">
              {displayBengali}
            </span>
          </div>
        )}
      </div>

      {/* Typography with premium responsive spacing and elegant action link */}
      <div className="flex flex-col items-center gap-1 sm:gap-1.5 relative w-full text-center p-3 sm:p-4 pb-4 sm:pb-5">
        <h3 className="font-heading text-base sm:text-lg lg:text-[19px] tracking-[0.03em] font-normal text-[#2B1D0E] transition-colors duration-200 ease-out group-hover:text-[#7A1C1C]">
          {title}
        </h3>
        
        <span className="font-body text-[10px] sm:text-[11px] text-[#7A1C1C] font-semibold tracking-wider uppercase flex items-center gap-1 group-hover:translate-x-0.5 transition-transform duration-150">
          <span>Explore</span>
          <ArrowRight weight="light" className="w-3 h-3 text-[#7A1C1C]" />
        </span>
      </div>
    </Link>
  )
}

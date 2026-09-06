import * as React from "react"
import Link from "next/link"
import { CategoryImage } from "@/components/shared/category-image"
import { cn } from "@/lib/utils"

import { getBengaliBudgetBadge } from "@/constants/bengali-badges"

export interface BudgetCardProps {
  title: string
  description?: string
  bengaliBadge?: string
  image: string
  href: string
  className?: string
}

export function BudgetCard({ title, description, bengaliBadge, image, href, className }: BudgetCardProps) {
  const displayBengali = bengaliBadge || getBengaliBudgetBadge(title)

  return (
    <Link 
      href={href} 
      className={cn(
        "group flex flex-col items-center gap-4 cursor-pointer p-3.5 rounded-none border border-[#785A28]/12 bg-card",
        "transition-all duration-250 ease-out hover:translate-y-[-3px] active:scale-[0.98] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(120,90,40,0.06)] hover:border-[#785A28]/25",
        className
      )}
    >
      {/* Image Container with precise aspect ratio and crisp framing */}
      <div className="relative w-full aspect-4/3 rounded-none overflow-hidden bg-[#F8F5F0]">
        <CategoryImage
          src={image || null}
          alt={`Shop ${title}`}
          aspectRatio="category"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
          className="group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-none"
        />

        {/* Elegant subtle dark overlay on hover to deepen the luxury feel */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-250 ease-out group-hover:bg-black/3" />

        {/* Floating Bengali Badge */}
        {displayBengali && (
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="px-2.5 py-0.5 rounded-none bg-[#7A1C1C]/90 backdrop-blur-md text-[11px] font-bengali text-white/95 shadow-xs tracking-wide">
              {displayBengali}
            </span>
          </div>
        )}
      </div>

      {/* Typography with premium spacing */}
      <div className="flex flex-col items-center text-center gap-1.5 relative w-full px-2 pb-2">
        <h3 className="font-body text-[16px] md:text-[17px] font-medium tracking-wide text-[#2B1D0E] transition-colors duration-250 ease-out group-hover:text-[#7A1C1C]">
          {title}
        </h3>
        
        <p className="font-body text-[13px] md:text-sm text-[#7B6A58] font-medium leading-snug">
          {description}
        </p>

        {/* Animated Underline */}
        <span className="h-[2px] w-0 bg-[#7A1C1C] transition-all duration-250 ease-out group-hover:w-16 opacity-0 group-hover:opacity-100 mt-2" />
      </div>
    </Link>
  )
}

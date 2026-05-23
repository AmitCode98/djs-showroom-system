import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface CollectionCardProps {
  title: string
  image: string
  href: string
  className?: string
}

export function CollectionCard({ title, image, href, className }: CollectionCardProps) {
  return (
    <Link 
      href={href} 
      className={cn(
        "group flex flex-col items-center gap-4 cursor-pointer p-3.5 rounded-[1.75rem] border border-[#785A28]/8 bg-white/35",
        "transition-all duration-200 ease-out hover:translate-y-[-3px] active:scale-[0.98] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(120,90,40,0.06)] hover:border-[#785A28]/15",
        className
      )}
    >
      {/* Image Container with precise aspect ratio and refined rounding */}
      <div className="relative w-full aspect-4/5 rounded-[1.25rem] overflow-hidden bg-[#F8F5F0]">
        <Image 
          src={image}
          alt={`DJS ${title} Collection`}
          fill
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 33vw"
          className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.01]"
        />

        {/* Elegant subtle dark overlay on hover to deepen the luxury feel */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-200 ease-out group-hover:bg-black/3" />
      </div>

      {/* Typography with premium spacing and animated gold underline */}
      <div className="flex flex-col items-center gap-1.5 relative w-full">
        <h3 className="font-heading text-lg lg:text-[19px] tracking-[0.04em] font-semibold text-[#2B1D0E] transition-colors duration-200 ease-out group-hover:text-gold">
          {title}
        </h3>
        
        {/* Animated Underline */}
        <span className="h-px w-0 bg-gold/70 transition-all duration-200 ease-out group-hover:w-20 opacity-0 group-hover:opacity-100 mt-0.5" />
      </div>
    </Link>
  )
}

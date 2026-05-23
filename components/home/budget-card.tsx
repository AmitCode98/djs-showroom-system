import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface BudgetCardProps {
  title: string
  subtitle: string
  image: string
  href: string
  className?: string
}

export function BudgetCard({ title, subtitle, image, href, className }: BudgetCardProps) {
  return (
    <Link 
      href={href} 
      className={cn(
        "group flex flex-col items-center gap-4 cursor-pointer p-3.5 rounded-[1.75rem] border border-[#785A28]/8 bg-card",
        "transition-all duration-250 ease-out hover:translate-y-[-3px] active:scale-[0.98] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(120,90,40,0.06)] hover:border-[#785A28]/15",
        className
      )}
    >
      {/* Image Container with precise aspect ratio and refined rounding */}
      <div className="relative w-full aspect-4/3 rounded-[1.25rem] overflow-hidden bg-[#F8F5F0]">
        <Image 
          src={image}
          alt={`Shop ${title}`}
          fill
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
          className="object-cover transition-transform duration-250 ease-out group-hover:scale-[1.02]"
        />

        {/* Elegant subtle dark overlay on hover to deepen the luxury feel */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-250 ease-out group-hover:bg-black/3" />
      </div>

      {/* Typography with premium spacing */}
      <div className="flex flex-col items-center text-center gap-1.5 relative w-full px-2 pb-2">
        <h3 className="font-body text-[16px] md:text-[17px] font-medium tracking-wide text-foreground/90 transition-colors duration-250 ease-out group-hover:text-gold">
          {title}
        </h3>
        
        <p className="font-body text-[13px] md:text-sm text-[#7B6A58] font-medium leading-snug">
          {subtitle}
        </p>

        {/* Animated Underline */}
        <span className="h-px w-0 bg-gold/70 transition-all duration-250 ease-out group-hover:w-16 opacity-0 group-hover:opacity-100 mt-2" />
      </div>
    </Link>
  )
}

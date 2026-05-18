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
      className={cn("group flex flex-col items-center gap-5 cursor-pointer relative w-full", className)}
    >
      {/* Image Container with precise aspect ratio and refined rounding */}
      <div className={cn(
        "relative w-full aspect-4/5 rounded-[1.25rem] overflow-hidden bg-[#F8F5F0] transition-all duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1",
        "border border-black/3 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.03)] group-hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)]"
      )}>
        <div className="relative w-full h-full overflow-hidden rounded-[1.25rem]">
          {/* Fill Next.js Image for optimal performance and responsive scaling */}
          <Image 
            src={image}
            alt={`DJS ${title} Collection`}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 33vw"
            className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02]"
          />

          {/* Elegant subtle dark overlay on hover to deepen the luxury feel */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:bg-black/3" />
        </div>
      </div>

      {/* Typography with premium spacing and animated gold underline */}
      <div className="flex flex-col items-center gap-2 relative mt-2">
        <h3 className="font-heading text-lg lg:text-[19px] tracking-[0.08em] text-foreground transition-colors duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:text-gold">
          {title}
        </h3>
        
        {/* Animated Underline */}
        <span className="h-px w-0 bg-gold/70 transition-all duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-full opacity-0 group-hover:opacity-100 mt-0.5" />
      </div>
    </Link>
  )
}

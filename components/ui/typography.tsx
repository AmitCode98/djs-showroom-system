import * as React from "react"
import { cn } from "@/lib/utils"

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, ...props }, ref) => {
    const Component = `h${level}` as const
    
    // Luxury typography scales gracefully across screen sizes matching Elegance For Every Generation
    const sizeClasses = {
      1: "text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-tight",
      2: "text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight",
      3: "text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-snug",
      4: "text-xl sm:text-2xl md:text-3xl font-light tracking-tight",
      5: "text-lg sm:text-xl md:text-2xl font-light tracking-normal",
      6: "text-base sm:text-lg md:text-xl font-normal tracking-normal",
    }

    return (
      <Component
        ref={ref}
        className={cn(
          "font-heading text-[#2B1D0E]",
          sizeClasses[level],
          className
        )}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export interface SubHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

const SubHeading = React.forwardRef<HTMLHeadingElement, SubHeadingProps>(
  ({ className, as: Component = "h3", ...props }, ref) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLHeadingElement>}
        className={cn(
          "font-body text-sm sm:text-base text-[#7A1C1C] font-medium tracking-wide",
          className
        )}
        {...props}
      />
    )
  }
)
SubHeading.displayName = "SubHeading"

const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "font-body text-sm sm:text-base leading-relaxed text-[#7B6A58]",
      className
    )}
    {...props}
  />
))
Paragraph.displayName = "Paragraph"

const Caption = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EAD3]/50 border border-[#EAD7B7] text-[11px] font-body uppercase tracking-[0.2em] text-[#7A1C1C]",
      className
    )}
    {...props}
  />
))
Caption.displayName = "Caption"

export { Heading, SubHeading, Paragraph, Caption }

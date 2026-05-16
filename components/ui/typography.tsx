import * as React from "react"
import { cn } from "@/lib/utils"

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, ...props }, ref) => {
    const Component = `h${level}` as const
    
    // Luxury typography scales gracefully across screen sizes
    const sizeClasses = {
      1: "text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight",
      2: "text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight",
      3: "text-2xl sm:text-3xl md:text-4xl font-medium",
      4: "text-xl sm:text-2xl md:text-3xl font-medium",
      5: "text-lg sm:text-xl md:text-2xl font-medium",
      6: "text-base sm:text-lg md:text-xl font-medium",
    }

    return (
      <Component
        ref={ref}
        className={cn(
          "font-heading text-foreground",
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
        // The ref type varies per element tag; casting to the HTMLHeadingElement
        // ref is safe here since all valid `as` values share the same DOM interface.
        ref={ref as React.Ref<HTMLHeadingElement>}
        className={cn(
          "font-heading text-xl sm:text-2xl text-muted-foreground font-normal tracking-wide",
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
      "font-body text-base sm:text-lg leading-relaxed text-foreground/80",
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
      "font-body text-sm text-muted-foreground uppercase tracking-wider",
      className
    )}
    {...props}
  />
))
Caption.displayName = "Caption"

export { Heading, SubHeading, Paragraph, Caption }

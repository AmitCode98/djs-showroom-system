import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionTitleVariants = cva("flex flex-col max-w-2xl mx-auto", {
  variants: {
    align: {
      left: "text-left items-start",
      center: "text-center items-center",
      right: "text-right items-end",
    },
  },
  defaultVariants: {
    align: "center",
  },
})

export interface SectionTitleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof sectionTitleVariants> {
  /** Primary heading of the section */
  title: React.ReactNode
  /** Smaller uppercase text appearing above the title inside a pill badge */
  subtitle?: React.ReactNode
  /** Descriptive body text appearing below the title */
  description?: React.ReactNode
  /** Semantic HTML heading level (defaults to 2) */
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6
}

const SectionTitle = React.forwardRef<HTMLDivElement, SectionTitleProps>(
  (
    {
      className,
      align = "center",
      title,
      subtitle,
      description,
      titleLevel = 2,
      ...props
    },
    ref
  ) => {
    const HeadingTag = `h${titleLevel}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

    return (
      <div
        ref={ref}
        className={cn(
          sectionTitleVariants({ align }),
          "mb-12 md:mb-16",
          className
        )}
        {...props}
      >


        {/* Heading in Fraunces font-light text-[#2B1D0E] */}
        <HeadingTag className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-[#2B1D0E] tracking-tight mb-3 leading-tight">
          {title}
        </HeadingTag>

        {/* Description in Albert Sans text-[#7B6A58] */}
        {description && (
          <p className="font-body text-sm sm:text-base text-[#7B6A58] leading-relaxed max-w-xl mx-auto">
            {description}
          </p>
        )}
      </div>
    )
  }
)

SectionTitle.displayName = "SectionTitle"

export { SectionTitle }

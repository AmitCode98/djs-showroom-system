import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Heading, Paragraph, Caption } from "@/components/ui/typography"
import { cn } from "@/lib/utils"

const sectionTitleVariants = cva("flex flex-col gap-4", {
  variants: {
    align: {
      left: "text-left items-start",
      center: "text-center items-center mx-auto",
      right: "text-right items-end ml-auto",
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
  /** Smaller uppercase text appearing above the title */
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
      align,
      title,
      subtitle,
      description,
      titleLevel = 2,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(sectionTitleVariants({ align }), className)}
        {...props}
      >
        {subtitle && (
          <Caption className="text-gold tracking-widest font-medium">
            {subtitle}
          </Caption>
        )}
        
        <Heading level={titleLevel} className="max-w-3xl">
          {title}
        </Heading>

        {description && (
          <Paragraph className="max-w-2xl text-muted-foreground mt-2">
            {description}
          </Paragraph>
        )}
      </div>
    )
  }
)

SectionTitle.displayName = "SectionTitle"

export { SectionTitle }

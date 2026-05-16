import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-body uppercase tracking-wider",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        outline:
          "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",

        ghost:
          "hover:bg-accent hover:text-accent-foreground",

        gold:
          "bg-gold text-white shadow-sm shadow-gold/20 hover:brightness-110 hover:-translate-y-0.5",
      },

      size: {
        sm: "h-9 px-5 text-xs",
        md: "h-12 px-8 text-sm",
        lg: "h-14 px-10 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  icon?: React.ReactNode
  iconPlacement?: "left" | "right"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      icon,
      iconPlacement = "left",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const isDisabled = disabled || isLoading
    const sharedProps = {
      className: cn(buttonVariants({ variant, size }), className),
      ref,
      disabled: isDisabled,
      ...props,
    }

    // When asChild, Slot clones the single child element and merges props into it.
    // We must NOT wrap children in a Fragment or Slot will try to pass className to it.
    if (asChild) {
      return <Comp {...sharedProps}>{children}</Comp>
    }

    return (
      <Comp {...sharedProps}>
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {icon && iconPlacement === "left" && (
              <span className="mr-2 flex items-center">{icon}</span>
            )}
            {children}
            {icon && iconPlacement === "right" && (
              <span className="ml-2 flex items-center">{icon}</span>
            )}
          </>
        )}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export default Button
export { buttonVariants }
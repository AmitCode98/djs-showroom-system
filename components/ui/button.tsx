import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { CircleNotch } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-body uppercase tracking-[0.16em] font-semibold select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-45 transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96] rounded-none",
  {
    variants: {
      variant: {
        primary:
          "rounded-none bg-[#2B1D0E] text-[#FDFAF5] border border-[#2B1D0E] hover:bg-[#7A1C1C] hover:border-[#7A1C1C] shadow-[0_4px_16px_rgba(43,29,14,0.12)]",

        secondary:
          "rounded-none bg-[#F7EAD9]/90 text-[#2B1D0E] border border-[#EAD7B7] hover:bg-[#7A1C1C] hover:text-white hover:border-[#7A1C1C]",

        outline:
          "rounded-none border border-[#2B1D0E] bg-transparent text-[#2B1D0E] hover:bg-[#7A1C1C] hover:text-white hover:border-[#7A1C1C]",

        ghost:
          "rounded-none hover:bg-[#F3E2C2]/20 text-[#2B1D0E]",

        gold:
          "rounded-none bg-gradient-to-r from-[#D4AF37] via-[#DFBC46] to-[#C29D2C] text-[#2B1D0E] border border-[#E5C158]/80 shadow-[0_4px_18px_rgba(212,175,55,0.3)] hover:brightness-105",

        pill:
          "rounded-none bg-[#7A1C1C] text-white border border-[#7A1C1C] shadow-[0_4px_16px_rgba(122,28,28,0.25)] hover:bg-[#621616]",

        box:
          "rounded-none bg-[#2B1D0E] text-[#FDFAF5] border border-[#D4AF37] hover:bg-[#7A1C1C] hover:border-[#7A1C1C] tracking-[0.18em]",
      },

      size: {
        sm: "min-h-[40px] px-5 text-[11px]",
        md: "min-h-[48px] px-7 text-xs",
        lg: "min-h-[54px] px-9 text-sm",
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

    if (asChild) {
      return <Comp {...sharedProps}>{children}</Comp>
    }

    return (
      <Comp {...sharedProps}>
        {isLoading ? (
          <CircleNotch weight="light" className="h-4 w-4 animate-spin text-[#D4AF37]" />
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
export { Button, buttonVariants }
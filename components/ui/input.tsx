import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Renders the input with an error state (red border and ring) */
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border border-input bg-transparent px-4 py-2 text-base text-foreground shadow-sm transition-all duration-300 ease-out file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground hover:border-ring/50 focus-visible:outline-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 font-body",
          error && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive hover:border-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

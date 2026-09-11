"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export interface BackButtonProps {
  label?: string
  fallbackHref?: string
  variant?: "light" | "dark"
  className?: string
}

export function BackButton({
  label = "Back",
  fallbackHref = "/",
  variant = "light",
  className,
}: BackButtonProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If there is history in the current window session, navigate back smoothly
    if (typeof window !== "undefined" && window.history.length > 1) {
      e.preventDefault()
      router.back()
    }
  }

  const baseStyles =
    "inline-flex items-center gap-2.5 min-h-[44px] px-4 rounded-none text-xs font-body uppercase tracking-[0.16em] font-medium transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96] select-none border"

  const variantStyles = {
    light:
      "bg-white/80 hover:bg-white text-[#2B1D0E] border-[#2B1D0E]/20 hover:border-[#7A1C1C] hover:text-[#7A1C1C] shadow-2xs",
    dark:
      "bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border-white/20 backdrop-blur-md shadow-xs",
  }

  return (
    <Link
      href={fallbackHref}
      onClick={handleClick}
      className={cn(baseStyles, variantStyles[variant], className)}
      aria-label={label}
    >
      <ArrowLeft
        weight="light"
        className={cn(
          "w-4 h-4 transition-transform duration-150 group-hover:-translate-x-0.5",
          variant === "light" ? "text-[#D4AF37]" : "text-[#D4AF37]"
        )}
      />
      <span>{label}</span>
    </Link>
  )
}

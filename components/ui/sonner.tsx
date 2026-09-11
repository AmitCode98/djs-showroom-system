"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { Check, Info, Warning, X, CircleNotch } from "@phosphor-icons/react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      offset={20}
      duration={3600}
      visibleToasts={1}
      expand={false}
      icons={{
        success: (
          <div className="w-6 h-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/45 flex items-center justify-center text-[#7A1C1C] shrink-0">
            <Check weight="bold" className="w-3.5 h-3.5 text-[#7A1C1C]" />
          </div>
        ),
        info: (
          <div className="w-6 h-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/45 flex items-center justify-center text-[#B8860B] shrink-0">
            <Info weight="bold" className="w-3.5 h-3.5 text-[#B8860B]" />
          </div>
        ),
        warning: (
          <div className="w-6 h-6 rounded-full bg-amber-50 border border-amber-300/60 flex items-center justify-center text-amber-700 shrink-0">
            <Warning weight="bold" className="w-3.5 h-3.5 text-amber-700" />
          </div>
        ),
        error: (
          <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#7A1C1C] shrink-0">
            <X weight="bold" className="w-3.5 h-3.5 text-[#7A1C1C]" />
          </div>
        ),
        loading: (
          <div className="w-6 h-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#B8860B] shrink-0">
            <CircleNotch weight="bold" className="w-3.5 h-3.5 text-[#B8860B] animate-spin" />
          </div>
        ),
      }}
      toastOptions={{
        classNames: {
          toast: "djs-toast",
          title: "djs-toast-title",
          description: "djs-toast-description",
          actionButton: "djs-toast-action",
          cancelButton: "djs-toast-cancel",
          closeButton: "djs-toast-close",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

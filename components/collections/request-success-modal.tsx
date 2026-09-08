"use client"

import * as React from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { CheckCircle, Clock, DeviceTablet, ArrowRight } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export interface RequestSuccessData {
  requestId: string
  tabletId: string
  itemsCount: number
  totalAmount?: number
}

export const EVENT_SHOW_REQUEST_SUCCESS = "djs:show_request_success"

export function triggerRequestSuccessModal(data: RequestSuccessData) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent<RequestSuccessData>(EVENT_SHOW_REQUEST_SUCCESS, {
        detail: data,
      })
    )
  }
}

export function RequestSuccessModal() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [data, setData] = React.useState<RequestSuccessData | null>(null)

  React.useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<RequestSuccessData>
      if (customEvent.detail) {
        setData(customEvent.detail)
        setIsOpen(true)
      }
    }

    window.addEventListener(EVENT_SHOW_REQUEST_SUCCESS, handleOpen)
    return () => window.removeEventListener(EVENT_SHOW_REQUEST_SUCCESS, handleOpen)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md sm:max-w-lg p-0 overflow-hidden border border-[#D4AF37]/40 bg-[#FDFAF5] text-[#2B1D0E] shadow-[0_25px_60px_-15px_rgba(43,29,14,0.3)] rounded-none z-80 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">
        {/* Top Gold & Dark Header Accent */}
        <div className="relative bg-gradient-to-b from-[#2B1D0E] via-[#3C2814] to-[#2B1D0E] text-white p-8 text-center overflow-hidden border-b border-[#D4AF37]/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22)_0%,transparent_70%)] pointer-events-none" />

          {/* Animated Success Seal with Spring Physics */}
          <div className="relative z-10 mx-auto mb-4 w-16 h-16 rounded-none bg-gradient-to-br from-[#D4AF37] to-[#AA8022] text-[#2B1D0E] flex items-center justify-center shadow-[0_8px_24px_rgba(212,175,55,0.4)] animate-in zoom-in-75 duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            <CheckCircle weight="light" className="w-9 h-9 text-[#2B1D0E]" />
          </div>

          <span className="relative z-10 font-bengali text-base text-[#D4AF37] block font-medium mb-1">
            দোকানের কর্মীকে অবগত করা হয়েছে
          </span>

          <h2 className="relative z-10 font-heading text-2xl sm:text-3xl font-light text-white tracking-wide">
            Showroom Associate Notified
          </h2>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex flex-col items-center text-center">
          <p className="font-body text-base sm:text-lg text-[#3C2814]/85 leading-relaxed max-w-sm mb-6">
            Please relax, a team member will bring your selected pieces to your table shortly.
          </p>

          {/* Meta Information Card */}
          <div className="w-full bg-[#F5EFE6]/70 rounded-none p-4 border border-[#D4AF37]/25 mb-6 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-body">
              <span className="text-[#3C2814]/60 uppercase tracking-wider font-semibold">Table Location</span>
              <span className="flex items-center gap-1.5 font-bold text-[#2B1D0E] bg-white px-2.5 py-1 rounded-none border border-[#D4AF37]/20 shadow-2xs">
                <DeviceTablet weight="light" className="w-4 h-4 text-[#D4AF37]" />
                {data?.tabletId || "T-01"}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs font-body">
              <span className="text-[#3C2814]/60 uppercase tracking-wider font-semibold">Request Number</span>
              <span className="font-mono font-semibold text-[#7A1C1C]">
                {data?.requestId || "REQ-001"}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs font-body">
              <span className="text-[#3C2814]/60 uppercase tracking-wider font-semibold">Selected Pieces</span>
              <span className="font-semibold text-[#2B1D0E]">
                {data?.itemsCount || 1} {data?.itemsCount === 1 ? "Piece" : "Pieces"}
              </span>
            </div>

            <div className="h-px w-full bg-[#D4AF37]/20" />

            <div className="flex items-center justify-center gap-2 text-xs font-body text-[#7A1C1C] font-semibold">
              <Clock weight="light" className="w-4 h-4 text-[#D4AF37]" />
              <span>Estimated arrival: 2–3 minutes</span>
            </div>
          </div>

          {/* Dismiss CTA (Touch-First 50px Height with Apple press physics) */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-full min-h-[50px] rounded-none border border-[#2B1D0E] bg-[#2B1D0E] text-[#FDFAF5] hover:bg-[#7A1C1C] hover:border-[#7A1C1C] active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-lg flex items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.16em]"
          >
            <span>Continue Browsing Catalogue</span>
            <ArrowRight weight="light" className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

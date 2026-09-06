"use client"

import * as React from "react"
import { WifiSlash, ArrowsClockwise } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export function OfflineBanner() {
  const [isOffline, setIsOffline] = React.useState(false)

  React.useEffect(() => {
    // Check initial online status
    if (typeof window !== "undefined") {
      setIsOffline(!window.navigator.onLine)

      const handleOffline = () => setIsOffline(true)
      const handleOnline = () => setIsOffline(false)

      window.addEventListener("offline", handleOffline)
      window.addEventListener("online", handleOnline)

      return () => {
        window.removeEventListener("offline", handleOffline)
        window.removeEventListener("online", handleOnline)
      }
    }
  }, [])

  if (!isOffline) return null

  return (
    <div className="fixed top-0 inset-x-0 z-100 animate-in slide-in-from-top duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">
      <div className="bg-[#2B1D0E]/92 backdrop-blur-xl border-b border-[#D4AF37]/40 text-[#FDFAF5] px-4 py-3 sm:py-3.5 shadow-2xl">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#7A1C1C]/40 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
              <WifiSlash weight="light" className="w-5 h-5" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading text-sm sm:text-base font-medium tracking-wide text-white">
                  Connection to Showroom Network Lost
                </span>
                <span className="hidden md:inline-block font-bengali text-xs text-[#D4AF37]">
                  • শোরুম ওয়াইফাই সংযোগ বিচ্ছিন্ন
                </span>
              </div>
              <p className="font-body text-[11px] sm:text-xs text-white/75 leading-tight">
                Viewing Tray items are safely preserved on this device. Staff requests will queue automatically.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") {
                setIsOffline(!window.navigator.onLine)
              }
            }}
            className="min-h-[40px] px-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider active:scale-[0.96] transition-all flex items-center gap-1.5 shrink-0"
          >
            <ArrowsClockwise weight="light" className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Retry</span>
          </button>
        </div>
      </div>
    </div>
  )
}

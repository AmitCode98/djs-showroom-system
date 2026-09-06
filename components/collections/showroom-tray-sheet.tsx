"use client"

import * as React from "react"
import Link from "next/link"
import {
  Sparkle,
  Minus,
  Plus,
  Trash,
  DeviceTablet,
  ChatCircle,
  PaperPlaneTilt,
  ArrowRight,
} from "@phosphor-icons/react"

import { useShowroomTray } from "@/context/showroom-tray-context"
import { requestService } from "@/services/request.service"
import { triggerRequestSuccessModal } from "@/components/collections/request-success-modal"
import { getBengaliCategoryBadge } from "@/constants/bengali-badges"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ProductImage } from "@/components/shared/product-image"
import { cn } from "@/lib/utils"

function formatINR(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`
}

export function ShowroomTraySheet() {
  const {
    items,
    tabletId,
    isTrayOpen,
    setIsTrayOpen,
    removeItem,
    updateQuantity,
    updateItemNote,
    clearTray,
    totalItemsCount,
    totalEstimatedAmount,
  } = useShowroomTray()

  const [activeNoteId, setActiveNoteId] = React.useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // Reset note id when sheet closes
  React.useEffect(() => {
    if (!isTrayOpen) {
      setActiveNoteId(null)
    }
  }, [isTrayOpen])

  const handleRequestPieces = () => {
    if (items.length === 0) return

    setIsSubmitting(true)

    setTimeout(() => {
      // Save to real-time request service
      const created = requestService.createRequest({
        tabletId,
        items,
      })

      const count = totalItemsCount
      const amount = totalEstimatedAmount

      // Reset tray context & close sheet
      clearTray()
      setIsTrayOpen(false)
      setIsSubmitting(false)

      // Trigger the customer success modal
      triggerRequestSuccessModal({
        requestId: created.id,
        tabletId,
        itemsCount: count,
        totalAmount: amount,
      })
    }, 600)
  }

  return (
    <Sheet open={isTrayOpen} onOpenChange={setIsTrayOpen}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md md:max-w-lg p-0 flex flex-col bg-[#FDFAF5] border-l border-[#EAD7B7] text-[#2B1D0E] shadow-2xl z-70"
      >
        {/* ─── Header ─── */}
        <SheetHeader className="p-5 md:p-6 border-b border-[#EAD7B7]/60 bg-[#FBF7F0]/80">
          <div className="flex items-center justify-between pr-8">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <SheetTitle className="font-heading text-2xl md:text-3xl text-[#2B1D0E] tracking-wide font-normal">
                  Viewing Tray
                </SheetTitle>
                {totalItemsCount > 0 && (
                  <span className="px-2.5 py-0.5 rounded-none bg-[#7A1C1C]/10 text-[#7A1C1C] border border-[#7A1C1C]/20 text-xs font-semibold font-body flex items-center gap-1.5">
                    <span>{totalItemsCount} {totalItemsCount === 1 ? "Piece" : "Pieces"}</span>
                    <span className="font-bengali text-[11px] font-normal">({totalItemsCount}টি গহনা)</span>
                  </span>
                )}
              </div>
              <SheetDescription className="font-body text-xs text-[#7B6A58] tracking-wider uppercase">
                Curated jewellery for in-person consultation
              </SheetDescription>
            </div>

            {/* Tablet Station Indicator */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-white border border-[#EAD7B7] text-[11px] font-body font-medium text-[#2B1D0E] shadow-2xs">
              <DeviceTablet weight="light" className="w-4 h-4 text-[#D4AF37]" />
              <span>{tabletId}</span>
            </div>
          </div>
        </SheetHeader>

        {/* ─── Body: Empty State vs Items List ─── */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-none bg-[#F7EAD9] border border-[#EAD7B7] text-[#D4AF37] flex items-center justify-center mb-4 shadow-sm">
              <Sparkle weight="light" className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl text-[#2B1D0E] mb-2 font-normal">
              Your Viewing Tray is Empty
            </h3>
            <p className="font-body text-sm text-[#7B6A58] max-w-xs leading-relaxed mb-6">
              Browse our handcrafted gold, polki, and diamond collections and tap{" "}
              <span className="text-[#7A1C1C] font-semibold">“Add to Viewing Tray”</span> to inspect them in person.
            </p>
            <button
              type="button"
              onClick={() => setIsTrayOpen(false)}
              className="min-h-[48px] px-7 rounded-none bg-[#2B1D0E] text-white text-xs font-body uppercase tracking-[0.16em] font-semibold hover:bg-[#7A1C1C] active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center gap-2 shadow-md"
            >
              <span>Explore Collections</span>
              <ArrowRight weight="light" className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <ScrollArea className="flex-1 p-4 md:p-6">
            <div className="flex flex-col gap-4 pb-4">
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="flex flex-col gap-3 p-4 rounded-none bg-white border border-[#EAD7B7]/70 shadow-2xs"
                >
                  {/* Top Row: Thumbnail + Info */}
                  <div className="flex gap-4 items-start">
                    {/* Thumbnail */}
                    <div className="w-20 h-20 shrink-0 relative rounded-none overflow-hidden border border-[#EAD7B7]/50 bg-[#F8F5F0]">
                      <ProductImage
                        src={item.image || null}
                        alt={item.name}
                        aspectRatio="thumbnail"
                        fill
                        className="object-cover rounded-none"
                      />
                    </div>

                    {/* Metadata */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-body text-[10px] uppercase tracking-widest text-[#7A1C1C] font-semibold block">
                          {item.category}
                        </span>
                        <span className="px-2 py-0.5 rounded-none bg-[#7A1C1C]/10 text-[#7A1C1C] text-[10px] font-bengali">
                          {getBengaliCategoryBadge(item.category)}
                        </span>
                      </div>
                      <h4 className="font-heading text-lg text-[#2B1D0E] leading-snug line-clamp-1 font-normal">
                        {item.name}
                      </h4>
                      <p className="font-body text-sm font-semibold text-[#2B1D0E] mt-1">
                        {formatINR(item.price)}
                      </p>
                      {(item.material || item.purity) && (
                        <p className="font-body text-[11px] text-[#7B6A58] mt-0.5">
                          {[item.material, item.purity, item.weight].filter(Boolean).join(" · ")}
                        </p>
                      )}
                    </div>

                    {/* Permanently Visible Remove Button (48px touch target) */}
                    <button
                      type="button"
                      onClick={() => removeItem(item.productId)}
                      className="w-12 h-12 rounded-none flex items-center justify-center text-[#7B6A58] hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] shrink-0"
                      aria-label={`Remove ${item.name} from tray`}
                    >
                      <Trash weight="light" className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Middle Row: Quantity Stepper (48px touch target buttons) */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#EAD7B7]/40">
                    <div className="flex items-center border border-[#EAD7B7] rounded-none bg-[#FDFAF5] overflow-hidden">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="w-12 h-12 flex items-center justify-center text-[#2B1D0E] hover:bg-[#F3EAD3]/60 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        aria-label="Decrease quantity"
                      >
                        <Minus weight="light" className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-body text-sm font-bold text-[#2B1D0E]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="w-12 h-12 flex items-center justify-center text-[#2B1D0E] hover:bg-[#F3EAD3]/60 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        aria-label="Increase quantity"
                      >
                        <Plus weight="light" className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Add note toggle */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveNoteId(activeNoteId === item.productId ? null : item.productId)
                      }
                      className={cn(
                        "min-h-[48px] px-4 rounded-none border flex items-center gap-2 font-body text-xs font-medium transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]",
                        item.customerNote
                          ? "bg-[#D4AF37]/15 border-[#D4AF37] text-[#7A1C1C]"
                          : "border-[#EAD7B7] text-[#7B6A58] hover:bg-[#FDFBF7]"
                      )}
                    >
                      <ChatCircle weight="light" className="w-4 h-4 text-[#D4AF37]" />
                      <span>{item.customerNote ? "Edit Note" : "Add Note"}</span>
                    </button>
                  </div>

                  {/* Expandable Item Customization Note */}
                  {(activeNoteId === item.productId || item.customerNote) && (
                    <div className="pt-2 flex flex-col gap-1.5 animate-in fade-in-50 duration-200">
                      <label className="text-[11px] font-body uppercase tracking-wider text-[#7B6A58] font-medium">
                        Note for Showroom Staff
                      </label>
                      <input
                        type="text"
                        value={item.customerNote || ""}
                        onChange={(e) => updateItemNote(item.productId, e.target.value)}
                        placeholder="e.g. Ask for matching earrings, or custom size"
                        className="min-h-[48px] px-3.5 rounded-none border border-[#EAD7B7] bg-[#FDFAF5] text-xs font-body text-[#2B1D0E] placeholder:text-[#7B6A58]/50 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  )}
                </div>
              ))}

              {/* Clear Tray Secondary Link */}
              <button
                type="button"
                onClick={clearTray}
                className="text-xs font-body text-[#7B6A58] hover:text-red-600 underline text-center py-2 transition-colors self-center"
              >
                Clear all items from tray
              </button>
            </div>
          </ScrollArea>
        )}

        {/* ─── Footer: Valuation & Primary CTA ─── */}
        {items.length > 0 && (
          <SheetFooter className="p-5 md:p-6 border-t border-[#EAD7B7]/60 bg-[#FBF7F0] flex flex-col gap-4">
            <div className="flex items-baseline justify-between w-full">
              <div className="flex flex-col">
                <span className="font-body text-xs uppercase tracking-wider text-[#7B6A58] font-semibold">
                  Estimated Total Value
                </span>
                <span className="font-body text-[11px] text-[#7B6A58]/80">
                  {totalItemsCount} {totalItemsCount === 1 ? "piece" : "pieces"} selected for viewing
                </span>
              </div>
              <span className="font-heading text-2xl md:text-3xl font-semibold text-[#2B1D0E] tracking-tight">
                {formatINR(totalEstimatedAmount)}
              </span>
            </div>

            <p className="text-[11px] font-body text-[#7B6A58] text-center leading-snug">
              Pieces are brought to your table by our senior jewellery consultants with 916 BIS hallmark certificates.
            </p>

            {/* Primary CTA (54px height, touch-first, Apple press physics) */}
            <button
              type="button"
              onClick={handleRequestPieces}
              disabled={isSubmitting}
              className={cn(
                "w-full min-h-[54px] rounded-none bg-[#7A1C1C] text-white font-body font-semibold tracking-[0.16em] uppercase text-sm",
                "shadow-[0_4px_16px_rgba(122,28,28,0.25)] hover:bg-[#621616] active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]",
                "flex items-center justify-center gap-3 disabled:opacity-50 border border-[#7A1C1C]"
              )}
            >
              {isSubmitting ? (
                <span>Transmitting Request...</span>
              ) : (
                <>
                  <PaperPlaneTilt weight="light" className="w-5 h-5 text-[#D4AF37]" />
                  <span>Request Pieces at Counter</span>
                </>
              )}
            </button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}

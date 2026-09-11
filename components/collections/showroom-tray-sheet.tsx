"use client"

import * as React from "react"
import {
  ShoppingCartSimple,
  Minus,
  Plus,
  Trash,
  DeviceTablet,
  ChatCircle,
  PaperPlaneTilt,
  ArrowRight,
  X,
  ShieldCheck,
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
  SheetClose,
} from "@/components/ui/sheet"
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
        showCloseButton={false}
        className="w-full data-[side=right]:w-full data-[side=right]:sm:max-w-[460px] data-[side=right]:md:max-w-[480px] p-0 flex flex-col h-full max-h-dvh bg-[#FDFAF5] border-l border-[#EAD7B7] text-[#2B1D0E] shadow-2xl z-70 gap-0 overflow-hidden"
      >
        {/* ─── Header: Never-wrapping Title & Aligned Controls ─── */}
        <SheetHeader className="shrink-0 p-4 sm:p-5 border-b border-[#EAD7B7]/60 bg-[#FBF7F0]/90">
          <div className="flex items-center justify-between gap-2.5">
            <SheetTitle className="font-heading text-xl sm:text-2xl text-[#2B1D0E] tracking-normal font-normal whitespace-nowrap">
              Viewing Tray
            </SheetTitle>

            <div className="flex items-center gap-2 shrink-0">
              {/* Tablet Station Indicator */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#EAD7B7] text-[11px] font-body font-medium text-[#2B1D0E] shadow-2xs whitespace-nowrap">
                <DeviceTablet weight="light" className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="tabular-nums font-semibold">{tabletId}</span>
              </div>

              {/* Symmetrically Integrated Close Button */}
              <SheetClose asChild>
                <button
                  type="button"
                  className="w-8 h-8 rounded-none flex items-center justify-center text-[#7B6A58] hover:text-[#2B1D0E] hover:bg-[#EAD7B7]/40 active:scale-[0.96] transition-all border border-transparent hover:border-[#EAD7B7]/60"
                  aria-label="Close viewing tray"
                >
                  <X weight="light" className="w-4 h-4" />
                </button>
              </SheetClose>
            </div>
          </div>

          {/* Sub Row: Description & Badge */}
          <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-[#EAD7B7]/30">
            <SheetDescription className="font-body text-[11px] sm:text-xs text-[#7B6A58] tracking-wider uppercase line-clamp-1">
              Curated for in-person consultation
            </SheetDescription>

            {totalItemsCount > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#7A1C1C]/10 text-[#7A1C1C] border border-[#7A1C1C]/20 text-[11px] font-semibold font-body shrink-0 whitespace-nowrap">
                <span>{totalItemsCount} {totalItemsCount === 1 ? "Piece" : "Pieces"}</span>
                <span className="font-bengali text-[11px] font-normal">({totalItemsCount}টি গহনা)</span>
              </span>
            )}
          </div>
        </SheetHeader>

        {/* ─── Body: Empty State vs Scrollable Items List ─── */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-none bg-[#F7EAD9] border border-[#EAD7B7] text-[#D4AF37] flex items-center justify-center mb-4 shadow-sm">
              <ShoppingCartSimple weight="light" className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-xl sm:text-2xl text-[#2B1D0E] mb-2 font-normal">
              Your Viewing Tray is Empty
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#7B6A58] max-w-xs leading-relaxed mb-6">
              Browse our handcrafted gold, polki, and diamond collections and tap{" "}
              <span className="text-[#7A1C1C] font-semibold">“Add to Viewing Tray”</span> to inspect them in person.
            </p>
            <button
              type="button"
              onClick={() => setIsTrayOpen(false)}
              className="h-11 px-6 rounded-none bg-[#2B1D0E] text-white text-xs font-body uppercase tracking-[0.16em] font-semibold hover:bg-[#7A1C1C] active:scale-[0.96] transition-all flex items-center gap-2 shadow-md"
            >
              <span>Explore Collections</span>
              <ArrowRight weight="light" className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-5">
            <div className="flex flex-col gap-3.5 pb-2">
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="flex flex-col gap-3 p-3.5 sm:p-4 rounded-none bg-white border border-[#EAD7B7]/70 shadow-2xs"
                >
                  {/* Top Row: Thumbnail + Info + Delete Action */}
                  <div className="flex gap-3.5 items-start">
                    {/* Thumbnail */}
                    <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 relative rounded-none overflow-hidden border border-[#EAD7B7]/50 bg-[#F8F5F0]">
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
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        <span className="font-body text-[10px] uppercase tracking-wider text-[#7A1C1C] font-semibold">
                          {item.category}
                        </span>
                        <span className="px-1.5 py-0.5 bg-[#7A1C1C]/10 text-[#7A1C1C] text-[10px] font-bengali leading-none">
                          {getBengaliCategoryBadge(item.category)}
                        </span>
                      </div>
                      <h4
                        className="font-heading text-base sm:text-lg text-[#2B1D0E] leading-snug line-clamp-1 font-normal"
                        title={item.name}
                      >
                        {item.name}
                      </h4>
                      <p className="font-body text-sm font-semibold text-[#2B1D0E] mt-0.5 tabular-nums">
                        {formatINR(item.price)}
                      </p>
                      {(item.material || item.purity) && (
                        <p className="font-body text-[11px] text-[#7B6A58] mt-0.5 line-clamp-1">
                          {[item.material, item.purity, item.weight].filter(Boolean).join(" · ")}
                        </p>
                      )}
                    </div>

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() => removeItem(item.productId)}
                      className="w-8 h-8 -mr-1 -mt-1 rounded-none flex items-center justify-center text-[#7B6A58]/70 hover:text-red-600 hover:bg-red-50 active:scale-[0.96] transition-all shrink-0"
                      aria-label={`Remove ${item.name} from tray`}
                    >
                      <Trash weight="light" className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Controls Row: Quantity Stepper & Add Note */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-[#EAD7B7]/40 gap-2">
                    {/* Stepper with internal dividers */}
                    <div className="flex items-center border border-[#EAD7B7] rounded-none bg-[#FDFAF5] h-9 shadow-2xs divide-x divide-[#EAD7B7]/60">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="w-9 h-full flex items-center justify-center text-[#2B1D0E] hover:bg-[#F3EAD3]/60 active:scale-[0.94] transition-all"
                        aria-label="Decrease quantity"
                      >
                        <Minus weight="light" className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center font-body text-xs font-bold text-[#2B1D0E] tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="w-9 h-full flex items-center justify-center text-[#2B1D0E] hover:bg-[#F3EAD3]/60 active:scale-[0.94] transition-all"
                        aria-label="Increase quantity"
                      >
                        <Plus weight="light" className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Add note toggle */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveNoteId(activeNoteId === item.productId ? null : item.productId)
                      }
                      className={cn(
                        "h-9 px-3 rounded-none border flex items-center gap-1.5 font-body text-xs font-medium transition-all active:scale-[0.96]",
                        item.customerNote
                          ? "bg-[#D4AF37]/15 border-[#D4AF37] text-[#7A1C1C]"
                          : "border-[#EAD7B7] text-[#7B6A58] hover:text-[#2B1D0E] hover:bg-[#FDFBF7]"
                      )}
                    >
                      <ChatCircle weight="light" className="w-3.5 h-3.5 text-[#D4AF37]" />
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
                        className="h-10 px-3 rounded-none border border-[#EAD7B7] bg-[#FDFAF5] text-xs font-body text-[#2B1D0E] placeholder:text-[#7B6A58]/50 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  )}
                </div>
              ))}

              {/* Clear Tray Secondary Action */}
              <div className="pt-2 pb-1 flex justify-center">
                <button
                  type="button"
                  onClick={clearTray}
                  className="inline-flex items-center gap-1.5 text-xs font-body text-[#7B6A58] hover:text-red-700 transition-colors py-1.5 px-3 hover:bg-red-50/60 border border-transparent hover:border-red-200/50"
                >
                  <Trash weight="light" className="w-3.5 h-3.5 text-[#7B6A58]/70" />
                  <span>Clear all items from tray</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── Footer: Valuation & Primary CTA (Pinned & Non-clipped) ─── */}
        {items.length > 0 && (
          <SheetFooter className="shrink-0 p-4 sm:p-5 border-t border-[#EAD7B7]/70 bg-[#FBF7F0] flex flex-col gap-3 shadow-[0_-4px_16px_rgba(43,29,14,0.04)] mt-0">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <span className="font-body text-[11px] uppercase tracking-wider text-[#7B6A58] font-semibold">
                  Estimated Total Value
                </span>
                <span className="font-body text-[11px] text-[#7B6A58]/80">
                  {totalItemsCount} {totalItemsCount === 1 ? "piece" : "pieces"} selected for viewing
                </span>
              </div>
              <span className="font-heading text-2xl sm:text-3xl font-semibold text-[#2B1D0E] tracking-tight tabular-nums">
                {formatINR(totalEstimatedAmount)}
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 bg-[#F3EAD3]/30 border border-[#EAD7B7]/40 text-[11px] font-body text-[#7B6A58]">
              <ShieldCheck weight="light" className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <p className="leading-tight text-[11px]">
                Bespoke presentation with 916 BIS hallmark certificates at your table.
              </p>
            </div>

            {/* Primary CTA */}
            <button
              type="button"
              onClick={handleRequestPieces}
              disabled={isSubmitting}
              className={cn(
                "w-full h-12 sm:h-[50px] rounded-none bg-[#7A1C1C] text-white font-body font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm",
                "shadow-[0_4px_16px_rgba(122,28,28,0.25)] hover:bg-[#621616] active:scale-[0.98] transition-all duration-150",
                "flex items-center justify-center gap-2.5 disabled:opacity-50 border border-[#7A1C1C]"
              )}
            >
              {isSubmitting ? (
                <span>Transmitting Request...</span>
              ) : (
                <>
                  <PaperPlaneTilt weight="light" className="w-4 h-4 text-[#D4AF37]" />
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

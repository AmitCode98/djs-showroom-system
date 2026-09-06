"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { DeviceTablet, Key, Sparkle, Check, Info } from "@phosphor-icons/react"

import { useShowroomTray } from "@/context/showroom-tray-context"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const tabletConfigSchema = z.object({
  tabletId: z
    .string()
    .min(2, "Tablet ID must be at least 2 characters")
    .max(20, "Tablet ID cannot exceed 20 characters")
    .regex(/^[a-zA-Z0-9_\- ]+$/, "Only letters, numbers, spaces, hyphens, and underscores are allowed"),
})

type TabletConfigFormValues = z.infer<typeof tabletConfigSchema>

const QUICK_PRESETS = ["T-01", "T-02", "T-03", "T-04", "Bridal-Lounge", "VIP-Salon"]

export function TabletConfigModal() {
  const { tabletId, setTabletId } = useShowroomTray()
  const [open, setOpen] = React.useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TabletConfigFormValues>({
    resolver: zodResolver(tabletConfigSchema),
    defaultValues: {
      tabletId: tabletId || "T-01",
    },
  })

  // Synchronize default values when tabletId from context changes
  React.useEffect(() => {
    setValue("tabletId", tabletId)
  }, [tabletId, setValue])

  // Listen for hidden staff shortcut: Ctrl+Shift+T or Cmd+Shift+T
  // Also listen for custom DOM event: "djs:open-tablet-config"
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "T" || e.key === "t")) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    const handleCustomOpen = () => setOpen(true)

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("djs:open-tablet-config", handleCustomOpen)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("djs:open-tablet-config", handleCustomOpen)
    }
  }, [])

  const onSubmit = (data: TabletConfigFormValues) => {
    setTabletId(data.tabletId.trim())
    setOpen(false)
  }

  const handleSelectPreset = (preset: string) => {
    setValue("tabletId", preset, { shouldValidate: true })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md bg-[#FDFAF5] border-[#EAD7B7] text-[#2B1D0E] p-6 shadow-2xl rounded-2xl">
        <DialogHeader className="gap-2 text-left">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#7A1C1C]/10 text-[#7A1C1C] border border-[#7A1C1C]/20 shrink-0">
              <DeviceTablet weight="light" className="w-5 h-5" />
            </div>
            <div>
              <DialogTitle className="font-heading text-xl text-[#2B1D0E] font-semibold">
                Tablet Configuration
              </DialogTitle>
              <span className="font-body text-[11px] tracking-wider uppercase text-[#D4AF37] font-semibold flex items-center gap-1 mt-0.5">
                <Key weight="light" className="w-3 h-3" /> Staff Administration Only
              </span>
            </div>
          </div>
          <DialogDescription className="text-xs font-body text-[#7B6A58] leading-relaxed pt-1">
            Assign this tablet to an in-store counter or viewing lounge. When customers request jewellery pieces to view, staff will be notified with this identifier.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 pt-2">
          {/* Input field */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="tabletId" className="text-xs font-body font-semibold uppercase tracking-wider text-[#2B1D0E]/80">
              Station Identifier
            </Label>
            <Input
              id="tabletId"
              {...register("tabletId")}
              placeholder="e.g. T-04 or Bridal Lounge"
              className={cn(
                "h-12 bg-white border-[#EAD7B7] text-[#2B1D0E] placeholder:text-[#7B6A58]/50 text-base font-body",
                "focus-visible:border-[#D4AF37] focus-visible:ring-1 focus-visible:ring-[#D4AF37]",
                errors.tabletId && "border-red-500 focus-visible:ring-red-500"
              )}
              autoFocus
            />
            {errors.tabletId && (
              <p className="text-xs text-red-600 font-body font-medium">
                {errors.tabletId.message}
              </p>
            )}
          </div>

          {/* Quick presets */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-body uppercase tracking-wider text-[#7B6A58] font-medium flex items-center gap-1">
              <Sparkle weight="light" className="w-3 h-3 text-[#D4AF37]" /> Quick Presets
            </span>
            <div className="flex flex-wrap gap-2">
              {QUICK_PRESETS.map((preset) => {
                const isSelected = preset === tabletId
                return (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    className={cn(
                      "px-3 py-2 text-xs font-body font-medium rounded-lg border transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]",
                      isSelected
                        ? "bg-[#7A1C1C] text-white border-[#7A1C1C] shadow-xs"
                        : "bg-white text-[#2B1D0E] border-[#EAD7B7] hover:border-[#D4AF37] hover:bg-[#FDFBF7]"
                    )}
                  >
                    {preset}
                  </button>
                )
              })}
            </div>
          </div>

          {/* In-store advice note */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7EAD9]/50 border border-[#EAD7B7]/60 text-[#7B6A58] text-xs font-body leading-relaxed">
            <Info weight="light" className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <span>
              This setting is saved to this physical tablet&apos;s local storage and persists across reloads and customer sessions.
            </span>
          </div>

          <DialogFooter className="gap-2 sm:gap-2 pt-2 border-t border-[#EAD7B7]/50">
            <button
              type="button"
              onClick={() => {
                reset({ tabletId })
                setOpen(false)
              }}
              className="h-12 px-5 rounded-xl border border-[#EAD7B7] text-[#2B1D0E] font-body text-sm font-medium hover:bg-white active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-12 px-6 rounded-xl bg-[#7A1C1C] text-white font-body text-sm font-semibold tracking-wider uppercase hover:bg-[#621616] active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-md flex items-center justify-center gap-2"
            >
              <Check weight="light" className="w-4 h-4" /> Save Identifier
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

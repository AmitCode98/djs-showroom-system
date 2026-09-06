"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { toast } from "sonner"
import { Sparkle, PaperPlaneTilt } from "@phosphor-icons/react"

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success("Inquiry Submitted to Showroom Concierge", {
        description: "A representative from our Panagarh showroom will connect with you shortly.",
      })
      ;(e.target as HTMLFormElement).reset()
    }, 600)
  }

  return (
    <section className="py-20 bg-white border-t border-[#D4AF37]/20">
      <Container>
        <div className="max-w-xl mx-auto flex flex-col gap-10">
          <SectionTitle
            subtitle="IN-STORE INQUIRY"
            title="Speak with a Specialist"
            description="Whether you wish to inspect a specific bridal piece or order a bespoke heirloom design, our concierge team is at your service."
          />

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="first-name" className="text-xs font-semibold uppercase tracking-wider text-[#3C2814]/70">
                  First Name
                </label>
                <input
                  id="first-name"
                  required
                  placeholder="e.g. Sourav"
                  className="w-full min-h-[48px] px-4 rounded-xl border border-[#D4AF37]/40 bg-[#FDFAF5] text-sm font-body text-[#2B1D0E] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="last-name" className="text-xs font-semibold uppercase tracking-wider text-[#3C2814]/70">
                  Last Name
                </label>
                <input
                  id="last-name"
                  required
                  placeholder="e.g. Mukherjee"
                  className="w-full min-h-[48px] px-4 rounded-xl border border-[#D4AF37]/40 bg-[#FDFAF5] text-sm font-body text-[#2B1D0E] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-[#3C2814]/70">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full min-h-[48px] px-4 rounded-xl border border-[#D4AF37]/40 bg-[#FDFAF5] text-sm font-body text-[#2B1D0E] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="occasion" className="text-xs font-semibold uppercase tracking-wider text-[#3C2814]/70">
                  Occasion
                </label>
                <select
                  id="occasion"
                  className="w-full min-h-[48px] px-4 rounded-xl border border-[#D4AF37]/40 bg-[#FDFAF5] text-sm font-body text-[#2B1D0E] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                >
                  <option value="wedding">Bengali Wedding / Bridal</option>
                  <option value="anniversary">Anniversary Celebration</option>
                  <option value="festive">Durga Puja / Dhanteras</option>
                  <option value="daily">Daily Wear Gold</option>
                  <option value="custom">Bespoke Heirloom Order</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#3C2814]/70">
                Inquiry Details
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Mention pieces of interest or specific gold weight/budget preferences..."
                className="w-full p-4 rounded-xl border border-[#D4AF37]/40 bg-[#FDFAF5] text-sm font-body text-[#2B1D0E] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full min-h-[52px] rounded-none border border-[#2B1D0E] bg-[#2B1D0E] text-[#FDFAF5] font-body text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#7A1C1C] hover:border-[#7A1C1C] active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-md flex items-center justify-center gap-2.5 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Sparkle weight="light" className="w-4 h-4 animate-spin text-[#D4AF37]" />
                  <span>Connecting to Showroom...</span>
                </>
              ) : (
                <>
                  <PaperPlaneTilt weight="light" className="w-4 h-4 text-[#D4AF37]" />
                  <span>Submit Inquiry to Concierge</span>
                </>
              )}
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}

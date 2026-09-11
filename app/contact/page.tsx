import * as React from "react"
import ShowroomInfo from "@/components/contact/showroom-info"
import ContactFormSection from "@/components/contact/contact-form-section"
import { Container } from "@/components/ui/container"
import { BackButton } from "@/components/ui/back-button"
import { Sparkle } from "@phosphor-icons/react/dist/ssr"

export const metadata = {
  title: "Contact Showroom | DJS Showroom System",
  description: "Contact DJS Showroom in Panagarh, West Bengal. Plan your private consultation for bridal gold and diamond jewellery.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FBF9F5] text-foreground">
      {/* ─── Hero Header ─── */}
      <div className="relative border-b border-[#D4AF37]/20 bg-gradient-to-b from-[#2B1D0E] via-[#3C2814] to-[#2B1D0E] text-[#FDFAF5] pt-12 pb-14 md:pt-16 md:pb-18 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(212,175,55,0.18)_0%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="mb-6">
            <BackButton label="Back to Showroom" fallbackHref="/" variant="dark" />
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white/10 border border-white/20 text-[11px] font-body uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
              <Sparkle weight="light" className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>যোগাযোগ ও শোরুম পরামর্শ</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight font-light text-white mb-3">
              Showroom Concierge
            </h1>
            <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto font-light">
              Visit our flagship showroom in Panagarh, West Bengal or connect directly with our jewellery consultants for custom bridal orders.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-none border border-white/15 text-xs text-[#D4AF37] font-body uppercase tracking-wider">
              <Sparkle weight="light" className="w-3.5 h-3.5" />
              <span>Walk-ins Welcome • Private Appointments Available</span>
            </div>
          </div>
        </Container>
      </div>

      <ShowroomInfo />
      <ContactFormSection />
    </main>
  )
}

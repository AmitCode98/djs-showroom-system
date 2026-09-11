import React from "react"
import { MapPin, Phone, Envelope, Clock, ChatCircle } from "@phosphor-icons/react/dist/ssr"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"

const details = [
  {
    icon: MapPin,
    label: "Showroom Address",
    value: "Kanksa Hat Tala, Panagarh, Debipur,\nWest Bengal 713148",
    action: {
      label: "View on Google Maps",
      href: "https://maps.google.com/?q=Panagarh,West+Bengal",
    },
  },
  {
    icon: Phone,
    label: "Direct Telephone",
    value: "+91 70744 62770",
    action: {
      label: "Call Showroom",
      href: "tel:+917074462770",
    },
  },
  {
    icon: ChatCircle,
    label: "WhatsApp Concierge",
    value: "+91 70744 62770",
    action: {
      label: "Chat on WhatsApp",
      href: "https://wa.me/917074462770?text=Hello%20DJS%20Jewellers,%20I%20would%20like%20to%20inquire%20about%20a%20jewellery%20piece.",
    },
  },
  {
    icon: Clock,
    label: "Visiting Hours",
    value: "Mon – Sat: 10:30 AM – 8:30 PM\nSunday: 11:00 AM – 6:00 PM",
    action: null,
  },
]

export default function ShowroomInfo() {
  return (
    <section className="py-16 md:py-24 bg-[#FBF9F5]">
      <Container>
        <SectionTitle
          title="Visit Us in Panagarh"
          description="Experience the artistry of Bengal goldsmiths in a serene, private environment. Our jewellery specialists are here to guide your bridal and heirloom selections."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map(({ icon: Icon, label, value, action }) => (
            <div
              key={label}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-2xs transition-all hover:shadow-md hover:border-[#D4AF37]/60"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Icon weight="light" className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body text-xs text-[#3C2814]/60 uppercase tracking-widest mb-1.5 font-semibold">
                    {label}
                  </p>
                  <p className="font-body text-sm text-[#2B1D0E] font-medium whitespace-pre-line leading-relaxed">
                    {value}
                  </p>
                </div>
              </div>

              {action && (
                <div className="mt-6 pt-4 border-t border-[#D4AF37]/15">
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-4 rounded-xl bg-[#FDFAF5] border border-[#D4AF37]/40 text-[#7A1C1C] hover:bg-[#F3EAD3]/40 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] text-xs uppercase tracking-wider font-semibold flex items-center justify-center text-center"
                  >
                    {action.label}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

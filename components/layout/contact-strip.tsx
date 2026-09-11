import * as React from "react"
import { Phone, Envelope } from "@phosphor-icons/react/dist/ssr"
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6"

import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { TRANSLATIONS } from "@/constants/translations"

const PHONE = "+91 70744 62770"
const EMAIL = "duttajewellers@gmail.com"

const socialLinks = [
  { icon: FaWhatsapp,  href: "https://wa.me/917074462770", label: "WhatsApp" },
  { icon: FaInstagram, href: "https://instagram.com/djsshowroom", label: "Instagram" },
  { icon: FaFacebookF, href: "https://facebook.com/djsshowroom", label: "Facebook" },
]

export function ContactStrip() {
  return (
    <div className="w-full min-h-[48px] bg-primary/95 backdrop-blur-sm border-b border-white/5 flex items-center">
      <Container className="flex items-center justify-between w-full py-1">

        {/* LEFT — Contact details (min 48px touch targets) */}
        <div className="flex items-center gap-2 sm:gap-4 justify-start">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="min-h-[48px] px-3 rounded-none flex items-center gap-2 font-body text-xs tracking-[0.08em] font-medium uppercase text-primary-foreground/90 hover:text-white active:scale-[0.96] transition-all whitespace-nowrap"
          >
            <Phone weight="light" className="w-4 h-4 shrink-0 text-gold" />
            <span>{PHONE}</span>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="hidden lg:flex min-h-[48px] px-3 rounded-none items-center gap-2 font-body text-xs tracking-[0.05em] font-medium normal-case text-primary-foreground/90 hover:text-white active:scale-[0.96] transition-all whitespace-nowrap"
          >
            <Envelope weight="light" className="w-4 h-4 shrink-0 text-gold" />
            <span>{EMAIL}</span>
          </a>
        </div>

        {/* CENTER — Showroom Consultation message */}
        <div className="hidden md:flex justify-center flex-1 px-4">
          <p className="font-bengali text-[13px] tracking-wide font-medium text-primary-foreground/95 text-center truncate">
            {TRANSLATIONS.bn.contactStrip}
          </p>
        </div>

        {/* RIGHT — Social icons (min 48px touch bounding box) */}
        <div className="flex items-center gap-1 justify-end">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-12 h-12 rounded-none flex items-center justify-center text-primary-foreground/70 hover:text-gold active:scale-95 transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

      </Container>
    </div>
  )
}

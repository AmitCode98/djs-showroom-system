import * as React from "react"
import { Phone, Mail } from "lucide-react"
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa6"

import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"

const PHONE = "+91 70744 62770"
const EMAIL = "duttajewellers@gmail.com"
const SHIPPING_TEXT = "FREE SHIPPING on orders above ₹1,499"

const socialLinks = [
  { icon: FaWhatsapp,  href: "#", label: "WhatsApp" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaYoutube,   href: "#", label: "YouTube" },
]

export function ContactStrip() {
  return (
    <div className="w-full h-9 bg-primary/95 backdrop-blur-sm border-b border-white/5 flex items-center">
      <Container className="grid grid-cols-2 md:grid-cols-3 items-center w-full">

        {/* LEFT — Contact details */}
        <div className="flex items-center gap-6 justify-start">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-2 font-body text-[11px] tracking-[0.12em] font-medium uppercase text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>{PHONE}</span>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="hidden lg:flex items-center gap-2 font-body text-[11px] tracking-[0.08em] font-medium normal-case text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300 whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span>{EMAIL}</span>
          </a>
        </div>

        {/* CENTER — Shipping notice (desktop only, optically centered) */}
        <div className="hidden md:flex justify-center -translate-x-2 lg:-translate-x-4">
          <p className="font-body text-[11px] tracking-[0.12em] font-semibold uppercase text-primary-foreground whitespace-nowrap">
            {SHIPPING_TEXT}
          </p>
        </div>

        {/* RIGHT — Social icons */}
        <div className="flex items-center gap-4 md:gap-3 justify-end">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={cn(
                "text-primary-foreground/40 hover:text-gold transition-colors duration-500",
                (label === "Facebook" || label === "YouTube") && "hidden sm:block"
              )}
            >
              <Icon className="w-[14px] h-[14px] md:w-4 md:h-4" />
            </a>
          ))}
        </div>

      </Container>
    </div>
  )
}

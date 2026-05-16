import * as React from "react"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"

import { Container } from "@/components/ui/container"
import { COMPANY } from "@/constants"

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <span className="font-heading text-3xl font-bold tracking-widest uppercase text-background">
                DJS<span className="text-gold">.</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm font-body">
              Crafting timeless elegance since 1920. Discover our exquisite collections of pure gold, platinum, and brilliant-cut diamonds.
            </p>
          </div>

          {/* Quick Links - Collections */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-gold uppercase tracking-widest text-sm font-semibold">
              Collections
            </h3>
            <nav className="flex flex-col gap-4">
              <Link href="/high-jewellery" className="text-sm font-body text-background/80 hover:text-gold transition-colors">High Jewellery</Link>
              <Link href="/bridal" className="text-sm font-body text-background/80 hover:text-gold transition-colors">Bridal & Engagement</Link>
              <Link href="/fine-watches" className="text-sm font-body text-background/80 hover:text-gold transition-colors">Fine Watches</Link>
              <Link href="/heritage" className="text-sm font-body text-background/80 hover:text-gold transition-colors">The Heritage Collection</Link>
            </nav>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-gold uppercase tracking-widest text-sm font-semibold">
              Customer Care
            </h3>
            <nav className="flex flex-col gap-4">
              <Link href="/book-appointment" className="text-sm font-body text-background/80 hover:text-gold transition-colors">Book an Appointment</Link>
              <Link href="/care-guide" className="text-sm font-body text-background/80 hover:text-gold transition-colors">Jewellery Care Guide</Link>
              <Link href="/shipping-returns" className="text-sm font-body text-background/80 hover:text-gold transition-colors">Shipping & Returns</Link>
              <Link href="/faq" className="text-sm font-body text-background/80 hover:text-gold transition-colors">FAQ</Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-gold uppercase tracking-widest text-sm font-semibold">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="w-5 h-5 shrink-0 text-gold mt-0.5" />
                <span className="text-sm font-body leading-relaxed">
                  123 Luxury Avenue,<br />
                  Diamond District, NY 10036
                </span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="w-5 h-5 shrink-0 text-gold" />
                <span className="text-sm font-body">+91 70744 62770</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-5 h-5 shrink-0 text-gold" />
                <span className="text-sm font-body">duttajewellers@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-background/10">
          <p className="text-xs font-body text-background/60 tracking-wider uppercase">
            &copy; {new Date().getFullYear()} DJS Showroom. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href={COMPANY.social.instagram} className="text-background/60 hover:text-gold transition-colors" aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href={COMPANY.social.facebook} className="text-background/60 hover:text-gold transition-colors" aria-label="Facebook">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href={COMPANY.social.twitter} className="text-background/60 hover:text-gold transition-colors" aria-label="Twitter / X">
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

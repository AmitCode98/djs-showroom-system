import * as React from "react"
import Link from "next/link"
import { MapPin, Phone, Envelope, ShieldCheck, Sparkle } from "@phosphor-icons/react/dist/ssr"
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6"

import { Container } from "@/components/ui/container"
import { COMPANY } from "@/constants"

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8 mt-auto border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-block">
              <span className="font-heading text-3xl font-light tracking-widest uppercase text-background">
                DJS<span className="text-gold">.</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm font-body font-light">
              Crafting timeless elegance since 1920. Panagarh&apos;s trusted destination for 916 BIS hallmarked pure gold, heirloom polki, and certified bridal diamond jewellery.
            </p>
            <div className="flex items-center gap-2 text-xs font-body text-gold/90 font-medium">
              <ShieldCheck weight="light" className="w-4 h-4 text-gold" />
              <span>100% BIS 916 Hallmarked Pure Gold</span>
            </div>
          </div>

          {/* Quick Links - Collections */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading text-gold uppercase tracking-widest text-sm font-semibold">
              Showroom Collections
            </h3>
            <nav className="flex flex-col gap-3.5">
              <Link href="/categories/necklace" className="text-sm font-body text-background/80 hover:text-gold transition-colors py-1">
                Royal Polki & Necklaces
              </Link>
              <Link href="/categories/mens-collection" className="text-sm font-body text-background/80 hover:text-gold transition-colors py-1">
                Men&apos;s Collection
              </Link>
              <Link href="/categories/kids-collection" className="text-sm font-body text-background/80 hover:text-gold transition-colors py-1">
                Kid&apos;s Collection
              </Link>
              <Link href="/categories/sitahar" className="text-sm font-body text-background/80 hover:text-gold transition-colors py-1">
                Bridal Sitahar & Chokers
              </Link>
              <Link href="/categories/sankha-pola" className="text-sm font-body text-background/80 hover:text-gold transition-colors py-1">
                Gold Sankha & Pola
              </Link>
            </nav>
          </div>

          {/* Showroom & Trust (In-Store Assurances) */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading text-gold uppercase tracking-widest text-sm font-semibold">
              Showroom & Trust
            </h3>
            <nav className="flex flex-col gap-3.5">
              <Link href="/about" className="text-sm font-body text-background/80 hover:text-gold transition-colors py-1 flex items-center gap-2">
                <Sparkle weight="light" className="w-3.5 h-3.5 text-gold" />
                <span>Today&apos;s Gold Rate (22k / 24k)</span>
              </Link>
              <Link href="/about" className="text-sm font-body text-background/80 hover:text-gold transition-colors py-1">
                BIS 916 Hallmark Guarantee
              </Link>
              <Link href="/about" className="text-sm font-body text-background/80 hover:text-gold transition-colors py-1">
                Artisan Craftsmanship Heritage
              </Link>
              <Link href="/contact" className="text-sm font-body text-background/80 hover:text-gold transition-colors py-1">
                In-Store Staff Assistance
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading text-gold uppercase tracking-widest text-sm font-semibold">
              Visit Our Showroom
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-background/80">
                <MapPin weight="light" className="w-5 h-5 shrink-0 text-gold mt-1" />
                <span className="text-sm font-body leading-relaxed">
                  Kanksa Hat Tala,<br />
                  Panagarh, Debipur,<br />
                  West Bengal 713148
                </span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone weight="light" className="w-5 h-5 shrink-0 text-gold" />
                <span className="text-sm font-body">+91 70744 62770</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Envelope weight="light" className="w-5 h-5 shrink-0 text-gold" />
                <span className="text-sm font-body">duttajewellers@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & 48px Touch Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-background/10">
          <p className="text-xs font-body text-background/60 tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Dutta Jewellers (DJS Showroom). All rights reserved.
          </p>
          
          <div className="flex items-center gap-2">
            <a
              href={COMPANY.social.instagram}
              className="w-12 h-12 rounded-none flex items-center justify-center text-background/70 hover:text-gold hover:bg-white/5 active:scale-95 transition-all"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href={COMPANY.social.facebook}
              className="w-12 h-12 rounded-none flex items-center justify-center text-background/70 hover:text-gold hover:bg-white/5 active:scale-95 transition-all"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/917074462770"
              className="w-12 h-12 rounded-none flex items-center justify-center text-background/70 hover:text-gold hover:bg-white/5 active:scale-95 transition-all"
              aria-label="WhatsApp Showroom Support"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

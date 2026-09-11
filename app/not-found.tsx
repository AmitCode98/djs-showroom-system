import * as React from "react"
import Link from "next/link"
import { Sparkle, ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { Container } from "@/components/ui/container"

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#FDFBF7] text-[#2B1D0E] relative overflow-hidden py-20">
      {/* Subtle atmospheric luxury background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10 text-center max-w-xl mx-auto flex flex-col items-center">
        {/* Decorative Seal */}
        <div className="w-16 h-16 rounded-none bg-[#F5EDE1] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-6 shadow-sm">
          <Sparkle weight="light" className="w-8 h-8 text-[#D4AF37]" />
        </div>

        {/* Bengali Tagline */}
        <span className="font-bengali text-base text-[#D4AF37] tracking-wider block mb-2 font-medium">
          পৃষ্ঠাটি পাওয়া যায়নি • শোরুম সংগ্রহে ফিরুন
        </span>

        {/* 404 Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-[#2B1D0E] tracking-wide mb-4">
          Piece or Page Not Found
        </h1>

        <p className="font-body text-sm sm:text-base text-[#7B6A58] leading-relaxed mb-8 max-w-md">
          The requested collection or piece may have been moved or is currently in our vault. Please return to the master jewellery catalogue to view available pieces.
        </p>

        {/* Action Buttons (48px+ touch targets) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            href="/products"
            className="w-full sm:w-auto min-h-[50px] px-8 rounded-none border border-[#2B1D0E] bg-[#2B1D0E] text-[#FDFAF5] hover:bg-[#7A1C1C] hover:border-[#7A1C1C] active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-lg flex items-center justify-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.16em]"
          >
            <Sparkle weight="light" className="w-4 h-4 text-[#D4AF37]" />
            <span>Return to Catalogue</span>
          </Link>

          <Link
            href="/categories"
            className="w-full sm:w-auto min-h-[50px] px-8 rounded-none bg-white border border-[#2B1D0E] text-[#2B1D0E] hover:bg-[#7A1C1C] hover:text-white hover:border-[#7A1C1C] active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.16em]"
          >
            <span>Explore Categories</span>
            <ArrowRight weight="light" className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </main>
  )
}

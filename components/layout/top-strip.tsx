import * as React from "react"

const Bullet = () => (
  <span className="px-8 md:px-12 text-gold/40 select-none flex items-center justify-center">•</span>
)

const AnnouncementBlock = () => (
  <>
    <span>✨ Complimentary Jewellery Consultation</span>
    <Bullet />
    <span>🚚 Free Insured Shipping</span>
    <Bullet />
    <span>🪙 Hallmarked 24K Gold</span>
    <Bullet />
  </>
)

export function TopStrip() {
  return (
    <div className="w-full h-8 md:h-9 bg-foreground border-b border-white/5 flex items-center overflow-hidden">
      {/*
        Inner track contains 4 copies of the announcement block.
        The keyframe translates by -50%, which equals exactly 2 copies.
        This means the loop resets invisibly: copy 3+4 are identical to copy 1+2,
        so there is never a gap or jump at any viewport width.
      */}
      <div className="flex items-center w-max animate-marquee pause-on-hover transform-gpu">
        <span className="flex items-center font-body text-[10px] md:text-[11px] text-gold/90 uppercase tracking-[0.2em] whitespace-nowrap transition-opacity duration-500 hover:opacity-75 antialiased">
          <AnnouncementBlock />
          <AnnouncementBlock />
          <AnnouncementBlock />
          <AnnouncementBlock />
        </span>
      </div>
    </div>
  )
}

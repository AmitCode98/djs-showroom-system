import * as React from "react"
import { SHOWROOM_MESSAGING } from "@/constants/translations"

const Bullet = () => (
  <span className="px-14 md:px-24 text-gold/30 select-none flex items-center justify-center text-[10px] transform-gpu">✦</span>
)

const AnnouncementBlock = () => (
  <>
    {SHOWROOM_MESSAGING.marquee.map((phrase, idx) => (
      <React.Fragment key={idx}>
        <span>{phrase}</span>
        <Bullet />
      </React.Fragment>
    ))}
  </>
)

export function TopStrip() {
  return (
    <div className="w-full h-9 md:h-10 bg-foreground border-b border-white/5 flex items-center overflow-hidden">
      {/*
        Inner track contains 4 copies of the announcement block.
        The keyframe translates by -50%, which equals exactly 2 copies.
        This means the loop resets invisibly: copy 3+4 are identical to copy 1+2,
        so there is never a gap or jump at any viewport width.
      */}
      <div className="flex items-center w-max animate-marquee pause-on-hover transform-gpu">
        <span className="flex items-center font-bengali text-[13px] md:text-[14px] font-normal text-gold/90 tracking-wide whitespace-nowrap transition-opacity duration-500 hover:opacity-75 antialiased pt-0.5">
          <AnnouncementBlock />
          <AnnouncementBlock />
          <AnnouncementBlock />
          <AnnouncementBlock />
        </span>
      </div>
    </div>
  )
}


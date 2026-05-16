"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingBag, Search, User, Heart } from "lucide-react"

import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { NAV_LINKS } from "@/constants/navigation"

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  // Handle transparent to solid transition on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent background scrolling when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-60 w-full transition-all duration-500 ease-out",
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-sm py-3"
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <Container className="flex items-center justify-between relative">
        
        {/* MOBILE: Left (Hamburger / Close) — always above overlay */}
        <div className="flex lg:hidden flex-1 justify-start relative z-60">
          <button
            className="p-1 -ml-2 focus:outline-none relative w-10 h-10 flex items-center justify-center group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu 
              className={cn(
                "absolute transition-all duration-500 group-hover:text-gold",
                isMobileMenuOpen
                  ? "opacity-0 rotate-90 scale-50 text-foreground"
                  : "opacity-100 rotate-0 scale-100 text-foreground"
              )} 
              strokeWidth={1.5} 
              size={28}
            />
            <X 
              className={cn(
                "absolute transition-all duration-500 text-foreground group-hover:text-gold",
                isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
              )} 
              strokeWidth={2} 
              size={26}
            />
          </button>
        </div>

        {/* LOGO: Center on Mobile, Left on Desktop */}
        <div className="flex justify-center lg:justify-start shrink-0 z-50">
          <Link 
            href="/" 
            className="flex items-center gap-2 relative group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="font-heading text-[22px] lg:text-[28px] font-bold tracking-[0.15em] uppercase text-foreground transition-colors duration-300 group-hover:text-gold/90">
              DJS<span className="text-gold">.</span>
            </span>
          </Link>
        </div>

        {/* CENTER: Desktop Navigation (Single Line) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[11px] xl:text-xs font-body uppercase tracking-[0.08em] font-medium transition-colors duration-300 relative group whitespace-nowrap hover:text-gold",
                  isActive ? "text-gold" : "text-foreground/80"
                )}
              >
                {link.name}
                {/* Premium animated underline effect */}
                <span className={cn(
                  "absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300",
                  isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                )} />
              </Link>
            )
          })}
        </nav>

        {/* RIGHT: Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6 shrink-0 justify-end">
          <button className="text-foreground/70 hover:text-gold transition-colors duration-300" aria-label="Search">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button className="text-foreground/70 hover:text-gold transition-colors duration-300" aria-label="Account">
            <User className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button className="text-foreground/70 hover:text-gold transition-colors duration-300" aria-label="Wishlist">
            <Heart className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button className="text-foreground/70 hover:text-gold transition-colors duration-300 relative group" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* RIGHT: Mobile Actions */}
        <div className="flex lg:hidden items-center justify-end gap-4 flex-1">
          <button className="text-foreground/80 hover:text-gold transition-colors duration-300" aria-label="Search">
            <Search className="w-5 h-5" strokeWidth={1.25} />
          </button>
          <button className="text-foreground/80 hover:text-gold transition-colors duration-300" aria-label="Account">
            <User className="w-5 h-5" strokeWidth={1.25} />
          </button>
          <button className="text-foreground/80 hover:text-gold transition-colors duration-300 relative group" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.25} />
            {/* Elegant Cart Badge Indicator */}
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-gold rounded-full" />
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/98 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out lg:hidden flex flex-col",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        {/* Spacer matching navbar height */}
        <div className="h-[72px] shrink-0" />

        {/* Divider */}
        <div className="border-t border-border/20 mx-6" />

        {/* Navigation links */}
        <nav className="flex flex-col items-center text-center pt-14 pb-6 gap-4 overflow-y-auto">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-heading tracking-widest uppercase transition-colors duration-300 hover:text-gold py-1",
                  isActive ? "text-gold" : "text-foreground/90"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

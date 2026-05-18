"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingBag, Search, User, Heart } from "lucide-react"

import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { NAV_LINKS } from "@/constants/navigation"
import { COLLECTIONS, BUDGETS } from "@/constants/collections"

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
        "sticky top-0 z-60 w-full transition-all duration-500 ease-out border-b",
        isScrolled
          ? "bg-[#F8F5F0]/95 backdrop-blur-md border-[#3C2814]/6 shadow-[0_10px_30px_-15px_rgba(60,40,20,0.08)] py-3"
          : "bg-[#F8F5F0] border-[#3C2814]/4 py-4 md:py-5"
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
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 absolute left-1/2 -translate-x-1/2 h-full">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            const isCollections = link.name === "Collections"

            return (
              <div key={link.name} className="relative group flex items-center h-full">
                <Link
                  href={link.href}
                  className={cn(
                    "text-[11px] xl:text-xs font-body uppercase tracking-[0.08em] font-semibold transition-colors duration-300 relative whitespace-nowrap hover:text-gold py-2",
                    isActive ? "text-gold" : "text-foreground/90"
                  )}
                >
                  {link.name}
                  {/* Premium animated underline effect */}
                  <span className={cn(
                    "absolute bottom-0 left-0 h-px bg-gold transition-all duration-300",
                    isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  )} />
                </Link>

                {/* MEGA MENU DROPDOWN */}
                {isCollections && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[750px] xl:w-[850px] bg-[#F8F5F0] border border-[#3C2814]/6 shadow-[0_20px_60px_-15px_rgba(60,40,20,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out translate-y-3 group-hover:translate-y-0 p-10 grid grid-cols-12 gap-8 xl:gap-16 cursor-default z-50 rounded-b-2xl before:absolute before:-top-6 before:left-0 before:w-full before:h-6">
                    
                    {/* LEFT COLUMN: Collections List */}
                    <div className="col-span-8 flex flex-col gap-2">
                      <p className="font-heading text-sm font-semibold tracking-widest text-foreground uppercase mb-6">Shop By Category</p>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {COLLECTIONS.map(collection => (
                          <Link 
                            key={collection.id} 
                            href={collection.href}
                            className="font-body text-[13px] text-foreground/70 hover:text-gold transition-colors duration-300"
                          >
                            {collection.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Budget List */}
                    <div className="col-span-4 flex flex-col gap-2">
                      <p className="font-heading text-sm font-semibold tracking-widest text-foreground uppercase mb-6">Shop By Budget</p>
                      <div className="flex flex-col gap-4">
                        {BUDGETS.map(budget => (
                          <Link 
                            key={budget.id} 
                            href={budget.href}
                            className="font-body text-[13px] text-foreground/70 hover:text-gold transition-colors duration-300"
                          >
                            {budget.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
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
          "fixed inset-0 bg-[#F8F5F0] z-40 transition-all duration-500 ease-in-out lg:hidden flex flex-col",
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
            const isCollections = link.name === "Collections"

            return (
              <React.Fragment key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-lg font-heading tracking-widest uppercase transition-colors duration-300 hover:text-gold py-1",
                    isActive ? "text-gold" : "text-foreground/90"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>

                {/* Sub-menu rendering for Mobile collections directly inline */}
                {isCollections && (
                  <div className="flex flex-col gap-6 mt-4 mb-6 items-center w-full">
                    
                    <div className="flex flex-col items-center gap-3">
                      <p className="font-heading text-xs font-semibold tracking-widest text-foreground/50 uppercase mb-1">Shop By Category</p>
                      {COLLECTIONS.map(col => (
                        <Link
                          key={col.id}
                          href={col.href}
                          className="text-sm font-body text-foreground/70 hover:text-gold transition-colors duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {col.title}
                        </Link>
                      ))}
                    </div>

                    <div className="w-8 h-px bg-border/40" />

                    <div className="flex flex-col items-center gap-3">
                      <p className="font-heading text-xs font-semibold tracking-widest text-foreground/50 uppercase mb-1">Shop By Budget</p>
                      {BUDGETS.map(budget => (
                        <Link
                          key={budget.id}
                          href={budget.href}
                          className="text-sm font-body text-foreground/70 hover:text-gold transition-colors duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {budget.title}
                        </Link>
                      ))}
                    </div>

                    {/* Tiny divider to separate sub-menu from next main links */}
                    <div className="w-8 h-px bg-border/40 mt-2" />
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

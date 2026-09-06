"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { List, X, Sparkle, MagnifyingGlass, CaretDown, ArrowRight } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { NAV_LINKS } from "@/constants/navigation"
import { CATEGORIES } from "@/constants/categories"
import { BUDGET_RANGES } from "@/constants/budget-ranges"
import { useShowroomTray } from "@/context/showroom-tray-context"

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { totalItemsCount, toggleTray } = useShowroomTray()

  const categoriesRef = React.useRef<HTMLDivElement>(null)

  // Secret staff trigger: triple-tap logo to open tablet config modal
  const logoClickCountRef = React.useRef(0)
  const logoClickTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleLogoTap = (e: React.MouseEvent) => {
    logoClickCountRef.current += 1
    if (logoClickTimeoutRef.current) clearTimeout(logoClickTimeoutRef.current)

    if (logoClickCountRef.current >= 3) {
      e.preventDefault()
      window.dispatchEvent(new CustomEvent("djs:open-tablet-config"))
      logoClickCountRef.current = 0
      return
    }

    logoClickTimeoutRef.current = setTimeout(() => {
      logoClickCountRef.current = 0
    }, 600)
  }

  // Handle transparent to solid transition on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close categories menu on outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
        setIsCategoriesMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close menus on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsCategoriesMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
        isScrolled
          ? "bg-[#FDFAF5]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(43,29,14,0.06)] border-b border-[#EAD7B7]/80 py-2.5"
          : "bg-[#FDFAF5] border-b border-[#EAD7B7]/40 py-3.5"
      )}
    >
      <Container className="flex items-center justify-between relative">
        {/* LEFT: Mobile / Tablet Menu Button (48px Touch Target) */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="w-12 h-12 rounded-none flex items-center justify-center text-foreground hover:text-[#7A1C1C] active:scale-[0.96] transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X weight="light" className="w-6 h-6" />
            ) : (
              <List weight="light" className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* LEFT / LOGO: Brand Heritage Mark */}
        <div className="flex items-center">
          <Link
            href="/"
            onClick={handleLogoTap}
            className="group flex flex-col focus-visible:outline-none select-none py-1"
            aria-label="DJS Showroom Home"
          >
            <span className="font-heading text-2xl sm:text-3xl font-light tracking-[0.22em] text-[#2B1D0E] uppercase transition-colors group-hover:text-[#7A1C1C]">
              DJS<span className="text-gold">.</span>
            </span>
          </Link>
        </div>

        {/* CENTER: Desktop Navigation (Single Line with Tap Mega-Menu) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2 h-full">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            const isCategories = link.dropdown

            if (isCategories) {
              return (
                <div key={link.label} ref={categoriesRef} className="relative flex items-center h-full">
                  <button
                    type="button"
                    onClick={() => setIsCategoriesMenuOpen((prev) => !prev)}
                    className={cn(
                      "text-xs font-body uppercase tracking-[0.14em] font-medium transition-colors duration-200 relative whitespace-nowrap py-2 flex items-center gap-1.5 min-h-[48px]",
                      isActive || isCategoriesMenuOpen ? "text-[#7A1C1C] font-semibold" : "text-foreground/90 hover:text-[#7A1C1C]"
                    )}
                    aria-expanded={isCategoriesMenuOpen}
                    aria-label="Toggle Categories Menu"
                  >
                    <span>{link.label}</span>
                    <CaretDown
                      weight="light"
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        isCategoriesMenuOpen && "rotate-180 text-[#7A1C1C]"
                      )}
                    />
                    <span
                      className={cn(
                        "absolute bottom-1 left-0 h-[2px] bg-[#7A1C1C] transition-all duration-200",
                        isActive || isCategoriesMenuOpen ? "w-full opacity-100" : "w-0 opacity-0"
                      )}
                    />
                  </button>

                  {/* MEGA MENU: Tap-friendly Popover for Tablets & Desktops */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] xl:w-[860px] bg-[#FDFAF5] border border-[#EAD7B7] shadow-[0_24px_60px_-15px_rgba(60,40,20,0.18)] p-8 grid grid-cols-12 gap-8 z-50 rounded-none transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                      isCategoriesMenuOpen
                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    )}
                  >
                    {/* LEFT COLUMN: Categories */}
                    <div className="col-span-8 flex flex-col gap-2">
                      <div className="flex items-center justify-between mb-4 border-b border-[#EAD7B7]/60 pb-2.5">
                        <div className="flex items-center gap-2">
                          <p className="font-heading text-xl font-normal tracking-wide text-[#2B1D0E] uppercase">
                            Browse By Category
                          </p>
                          <span className="text-[10px] font-body uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded-none bg-[#EAD7B7]/30">
                            {CATEGORIES.length} Collections
                          </span>
                        </div>
                        <Link
                          href="/categories"
                          className="text-xs font-body text-[#7A1C1C] hover:underline uppercase tracking-wider font-semibold flex items-center gap-1.5"
                          onClick={() => setIsCategoriesMenuOpen(false)}
                        >
                          <span>View All</span>
                          <ArrowRight weight="light" className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 max-h-[320px] overflow-y-auto px-1 pr-3 scrollbar-thin scrollbar-thumb-[#EAD7B7]/80 scrollbar-track-transparent">
                        {CATEGORIES.map((category) => {
                          const isSpecial = category.slug === "mens-collection" || category.slug === "kids-collection"
                          return (
                            <Link 
                              key={category.id} 
                              href={category.href}
                              className={cn(
                                "font-body text-sm px-3.5 py-2.5 rounded-none transition-all flex items-center justify-between active:scale-[0.98]",
                                isSpecial
                                    ? "text-[#7A1C1C] font-semibold bg-[#F3EAD3]/60 hover:bg-[#F3EAD3] border border-[#D4AF37]/30"
                                  : "text-foreground/80 hover:text-[#7A1C1C] hover:bg-[#7A1C1C]/5"
                              )}
                              onClick={() => setIsCategoriesMenuOpen(false)}
                            >
                              <div className="flex items-center gap-2">
                                <span>{category.title}</span>
                                {isSpecial && (
                                  <span className="text-[9px] px-1.5 py-0.5 rounded-none bg-[#D4AF37] text-[#2B1D0E] font-bold uppercase tracking-wider">
                                    New
                                  </span>
                                )}
                              </div>
                              <ArrowRight weight="light" className="w-3.5 h-3.5 text-gold/60" />
                            </Link>
                          )
                        })}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Budget Tiers */}
                    <div className="col-span-4 flex flex-col gap-2 border-l border-[#EAD7B7]/60 pl-6">
                      <div className="flex items-center justify-between mb-4 border-b border-[#EAD7B7]/60 pb-2.5">
                        <p className="font-heading text-xl font-normal tracking-wide text-[#2B1D0E] uppercase">
                          Shop By Budget
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {BUDGET_RANGES.map((budget) => (
                          <Link 
                            key={budget.id} 
                            href={budget.href}
                            className="font-body text-sm text-foreground/85 hover:text-[#7A1C1C] hover:bg-[#7A1C1C]/5 px-3.5 py-2.5 rounded-none transition-colors flex items-center justify-between active:scale-[0.98] border border-transparent hover:border-[#EAD7B7]/40"
                            onClick={() => setIsCategoriesMenuOpen(false)}
                          >
                            <span className="font-medium">{budget.title}</span>
                            <span className="text-[11px] text-muted-foreground font-light">{budget.description?.split(" ")[0]}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <div key={link.label} className="relative flex items-center h-full">
                <Link
                  href={link.href}
                  className={cn(
                    "text-xs font-body uppercase tracking-[0.14em] font-medium transition-colors duration-200 relative whitespace-nowrap hover:text-[#7A1C1C] py-2 min-h-[48px] flex items-center",
                    isActive ? "text-[#7A1C1C] font-semibold" : "text-foreground/90"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute bottom-1 left-0 h-[2px] bg-[#7A1C1C] transition-all duration-200",
                    isActive ? "w-full opacity-100" : "w-0 opacity-0 hover:w-full hover:opacity-100"
                  )} />
                </Link>
              </div>
            )
          })}
        </nav>

        {/* RIGHT: Desktop Actions (48px Touch Targets) */}
        <div className="hidden lg:flex items-center gap-2 shrink-0 justify-end">
          <Link
            href="/products"
            className="w-12 h-12 rounded-none flex items-center justify-center text-foreground/75 hover:text-[#7A1C1C] hover:bg-[#7A1C1C]/5 active:scale-[0.96] transition-all"
            aria-label="Search Catalogue"
          >
            <MagnifyingGlass weight="light" className="w-5 h-5" />
          </Link>

          {/* Showroom Viewing Tray */}
          <button
            onClick={toggleTray}
            className={cn(
              "w-12 h-12 rounded-none flex items-center justify-center transition-all duration-200 relative active:scale-[0.96]",
              totalItemsCount > 0
                ? "bg-[#7A1C1C] text-white shadow-md hover:bg-[#621616]"
                : "text-foreground/80 hover:text-[#7A1C1C] hover:bg-[#7A1C1C]/5 border border-[#EAD7B7]/50 hover:border-[#7A1C1C]/40"
            )}
            aria-label={`Showroom Viewing Tray with ${totalItemsCount} pieces`}
          >
            <Sparkle weight="light" className="w-5 h-5" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-[#D4AF37] text-[#2B1D0E] text-[10px] font-bold font-body rounded-none flex items-center justify-center shadow-xs">
                {totalItemsCount}
              </span>
            )}
          </button>
        </div>

        {/* RIGHT: Mobile / Tablet Actions (48px Touch Targets) */}
        <div className="flex lg:hidden items-center justify-end gap-1.5 flex-1">
          <Link
            href="/products"
            className="w-12 h-12 rounded-none flex items-center justify-center text-foreground/80 hover:text-[#7A1C1C] active:scale-[0.96] transition-all"
            aria-label="Search Catalogue"
          >
            <MagnifyingGlass weight="light" className="w-5 h-5" />
          </Link>
          <button
            onClick={toggleTray}
            className={cn(
              "w-12 h-12 rounded-none flex items-center justify-center transition-all duration-200 relative active:scale-[0.96]",
              totalItemsCount > 0
                ? "bg-[#7A1C1C] text-white shadow-md"
                : "text-foreground/80 hover:text-[#7A1C1C] border border-[#EAD7B7]/50 hover:border-[#7A1C1C]/40"
            )}
            aria-label={`Showroom Viewing Tray with ${totalItemsCount} pieces`}
          >
            <Sparkle weight="light" className="w-5 h-5" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-[#D4AF37] text-[#2B1D0E] text-[10px] font-bold font-body rounded-none flex items-center justify-center shadow-xs">
                {totalItemsCount}
              </span>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile / Tablet Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-[#FDFAF5] z-40 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] lg:hidden flex flex-col",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="h-[74px] shrink-0" />
        <div className="border-t border-[#EAD7B7]/40 mx-6" />

        <nav className="flex flex-col items-center text-center pt-8 pb-8 gap-4 overflow-y-auto px-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "font-heading text-2xl uppercase tracking-widest transition-colors duration-200 py-3 min-h-[48px] flex items-center justify-center active:scale-[0.96]",
                  isActive ? "text-[#7A1C1C] font-normal" : "text-foreground/90 hover:text-[#7A1C1C]"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

// ============================================================
// NAVIGATION CONSTANTS
// ============================================================

export interface NavLink {
  name: string
  href: string
}

export interface NavGroup {
  label: string
  links: NavLink[]
}

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "Jewellery", href: "/products" },
  { name: "Bestsellers", href: "/bestsellers" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Track Order", href: "/track-order" },
  { name: "About Us", href: "/about" },
]

export const FOOTER_NAV_GROUPS: NavGroup[] = [
  {
    label: "Collections",
    links: [
      { name: "High Jewellery", href: "/high-jewellery" },
      { name: "Bridal & Engagement", href: "/bridal" },
      { name: "Fine Watches", href: "/fine-watches" },
      { name: "The Heritage Collection", href: "/heritage" },
    ],
  },
  {
    label: "Customer Care",
    links: [
      { name: "Book an Appointment", href: "/book-appointment" },
      { name: "Jewellery Care Guide", href: "/care-guide" },
      { name: "Shipping & Returns", href: "/shipping-returns" },
      { name: "FAQ", href: "/faq" },
    ],
  },
]

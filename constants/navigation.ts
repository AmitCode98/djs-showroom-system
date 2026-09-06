// ============================================================
// NAVIGATION CONSTANTS — In-Store Showroom Platform
// ============================================================

export interface NavLink {
  label: string
  href: string
  dropdown?: boolean
}

export interface NavGroup {
  label: string
  links: NavLink[]
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories", dropdown: true },
  { label: "Men's", href: "/categories/mens-collection" },
  { label: "Kid's", href: "/categories/kids-collection" },
  { label: "All Jewellery", href: "/products" },
  { label: "About Us", href: "/about" },
]

export const FOOTER_NAV_GROUPS: NavGroup[] = [
  {
    label: "Collections",
    links: [
      { label: "High Jewellery", href: "/categories/necklace" },
      { label: "Bridal & Wedding", href: "/categories/sitahar" },
      { label: "Traditional Bengali", href: "/categories/sankha-pola" },
      { label: "Men's Collection", href: "/categories/mens-collection" },
      { label: "Kid's Collection", href: "/categories/kids-collection" },
      { label: "The Heritage Collection", href: "/categories/bangles" },
    ],
  },
  {
    label: "Showroom & Trust",
    links: [
      { label: "Today's Gold Rate", href: "/about#rates" },
      { label: "BIS 916 Hallmark", href: "/about#hallmark" },
      { label: "Artisan Heritage", href: "/about#heritage" },
      { label: "Showroom Assistance", href: "/contact" },
    ],
  },
]

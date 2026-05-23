// ============================================================
// PRODUCT CONSTANTS — Placeholder/Seed Data
// Replace with real API data once the backend is connected.
// ============================================================

import type { ProductSummary } from "@/types"

export const FEATURED_PRODUCTS: ProductSummary[] = [
  {
    id: "prod_001",
    slug: "sovereign-necklace",
    name: "Sovereign Necklace",
    collection: "High Jewellery",
    price: 285000,
    primaryImage: {
      url: "https://images.unsplash.com/photo-1599643478514-4a4e09b52342?q=80&w=800&auto=format&fit=crop",
      alt: "Sovereign Necklace — 24k Gold with Diamond Setting",
      isPrimary: true,
    },
    status: "in_stock",
  },
  {
    id: "prod_002",
    slug: "eternal-band-ring",
    name: "Eternal Band Ring",
    collection: "Bridal Collection",
    price: 142000,
    primaryImage: {
      url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
      alt: "Eternal Band Ring — Platinum with Pavé Diamonds",
      isPrimary: true,
    },
    status: "in_stock",
  },
  {
    id: "prod_003",
    slug: "aurora-drop-earrings",
    name: "Aurora Drop Earrings",
    collection: "Heritage Pieces",
    price: 95000,
    primaryImage: {
      url: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop",
      alt: "Aurora Drop Earrings — Rose Gold with Ruby Drops",
      isPrimary: true,
    },
    status: "made_to_order",
  },
  {
    id: "prod_004",
    slug: "celeste-bracelet",
    name: "Celeste Bracelet",
    collection: "High Jewellery",
    price: 320000,
    primaryImage: {
      url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
      alt: "Celeste Bracelet — 18k Gold with Sapphire Accents",
      isPrimary: true,
    },
    status: "in_stock",
  },
  {
    id: "prod_005",
    slug: "soleil-pendant",
    name: "Soleil Pendant",
    collection: "Heritage Pieces",
    price: 68000,
    primaryImage: {
      url: "https://images.unsplash.com/photo-1599643478514-4a4e09b52342?q=80&w=800&auto=format&fit=crop",
      alt: "Soleil Pendant — Yellow Gold Sunburst Design",
      isPrimary: true,
    },
    status: "in_stock",
  },
  {
    id: "prod_006",
    slug: "lumiere-choker",
    name: "Lumière Choker",
    collection: "Bridal Collection",
    price: 175000,
    primaryImage: {
      url: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop",
      alt: "Lumière Choker — Diamond & Pearl Statement Necklace",
      isPrimary: true,
    },
    status: "out_of_stock",
  },
]

export const PRODUCT_STATUS_LABELS: Record<string, string> = {
  in_stock: "In Stock",
  out_of_stock: "Out of Stock",
  made_to_order: "Made to Order",
}

export interface NewArrivalProduct {
  id: string
  title: string
  category: string
  price: string
  image: string
  href: string
  isNew?: boolean
  description?: string
  highlights?: string[]
}

export const NEW_ARRIVALS: NewArrivalProduct[] = [
  {
    id: "na_1",
    title: "Royal Polki Necklace",
    category: "High Jewellery",
    price: "₹2,45,000",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop",
    href: "/products/royal-polki-necklace",
    isNew: true,
    description:
      "A regal expression of uncut diamond artistry. Crafted by master artisans in the Mughal tradition, this polki necklace embodies the grandeur of royal heritage jewellery.",
    highlights: ["Handcrafted Finish", "Bengali Heritage Design", "Bridal Collection", "Uncut Diamond Setting"],
  },
  {
    id: "na_2",
    title: "Classic Diamond Choker",
    category: "Bridal Collection",
    price: "₹1,85,000",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop",
    href: "/products/classic-diamond-choker",
    isNew: true,
    description:
      "Refined and timeless, this diamond choker is designed for the modern bride. Each stone is carefully selected for brilliance and set in hallmarked gold with exceptional care.",
    highlights: ["Hallmarked 22k Gold", "Bridal Collection", "Lightweight Wear", "Custom Sizing Available"],
  },
  {
    id: "na_3",
    title: "Heritage Gold Bangles",
    category: "Everyday Classics",
    price: "₹95,000",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
    href: "/products/heritage-gold-bangles",
    description:
      "Inspired by centuries-old Bengali goldsmith traditions, these bangles carry the soul of artisan craftsmanship. Comfortable for everyday wear with an enduring heirloom quality.",
    highlights: ["Handcrafted Finish", "Bengali Heritage Design", "Lightweight Wear", "Heirloom Quality"],
  },
  {
    id: "na_4",
    title: "Emerald Drop Earrings",
    category: "Statement Pieces",
    price: "₹1,25,000",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
    href: "/products/emerald-drop-earrings",
    isNew: true,
    description:
      "Vivid Colombian emeralds suspended in hand-engraved 22k gold drops. A statement of confident elegance suited for festive occasions and bridal ceremonies alike.",
    highlights: ["Colombian Emeralds", "Hand-Engraved Gold", "Statement Collection", "Festive & Bridal Wear"],
  },
]

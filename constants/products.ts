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
      url: "/images/products/sovereign-necklace.jpg",
      alt: "Sovereign Necklace — 24k Gold with Diamond Setting",
      isPrimary: true,
    },
    status: "in_stock",
  },
  {
    id: "prod_002",
    slug: "eternal-band-ring",
    name: "Eternal Band Ring",
    collection: "Bridal",
    price: 142000,
    primaryImage: {
      url: "/images/products/eternal-band-ring.jpg",
      alt: "Eternal Band Ring — Platinum with Pavé Diamonds",
      isPrimary: true,
    },
    status: "in_stock",
  },
  {
    id: "prod_003",
    slug: "aurora-drop-earrings",
    name: "Aurora Drop Earrings",
    collection: "Heritage",
    price: 95000,
    primaryImage: {
      url: "/images/products/aurora-drop-earrings.jpg",
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
      url: "/images/products/celeste-bracelet.jpg",
      alt: "Celeste Bracelet — 18k Gold with Sapphire Accents",
      isPrimary: true,
    },
    status: "in_stock",
  },
  {
    id: "prod_005",
    slug: "soleil-pendant",
    name: "Soleil Pendant",
    collection: "Heritage",
    price: 68000,
    primaryImage: {
      url: "/images/products/soleil-pendant.jpg",
      alt: "Soleil Pendant — Yellow Gold Sunburst Design",
      isPrimary: true,
    },
    status: "in_stock",
  },
  {
    id: "prod_006",
    slug: "lumiere-choker",
    name: "Lumière Choker",
    collection: "Bridal",
    price: 175000,
    primaryImage: {
      url: "/images/products/lumiere-choker.jpg",
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

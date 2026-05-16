// ============================================================
// JEWELLERY CATEGORY CONSTANTS
// ============================================================

import type { CategorySummary } from "@/types"

export const CATEGORIES: CategorySummary[] = [
  {
    id: "cat_high_jewellery",
    slug: "high-jewellery",
    name: "High Jewellery",
    imageUrl: "/images/categories/high-jewellery.jpg",
  },
  {
    id: "cat_bridal",
    slug: "bridal",
    name: "Bridal & Engagement",
    imageUrl: "/images/categories/bridal.jpg",
  },
  {
    id: "cat_fine_watches",
    slug: "fine-watches",
    name: "Fine Watches",
    imageUrl: "/images/categories/fine-watches.jpg",
  },
  {
    id: "cat_heritage",
    slug: "heritage",
    name: "Heritage Collection",
    imageUrl: "/images/categories/heritage.jpg",
  },
]

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug)

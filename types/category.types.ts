// ============================================================
// CATEGORY TYPES
// ============================================================

export interface Category {
  id: string
  slug: string
  name: string
  description?: string
  imageUrl?: string
  parentId?: string          // null = top-level, string = sub-category
  children?: Category[]
  productCount?: number
  createdAt: string
  updatedAt: string
}

export interface CategorySummary {
  id: string
  slug: string
  name: string
  imageUrl?: string
}

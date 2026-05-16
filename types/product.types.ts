// ============================================================
// PRODUCT TYPES
// ============================================================

export type ProductStatus = "in_stock" | "out_of_stock" | "made_to_order"

export interface ProductImage {
  url: string
  alt: string
  isPrimary?: boolean
}

export interface Product {
  id: string
  slug: string
  name: string
  description: string
  price: number
  compareAtPrice?: number
  categoryId: string
  collection: string
  images: ProductImage[]
  status: ProductStatus
  isFeatured: boolean
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface ProductSummary {
  id: string
  slug: string
  name: string
  price: number
  collection: string
  primaryImage: ProductImage
  status: ProductStatus
}

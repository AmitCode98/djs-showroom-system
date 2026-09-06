// ============================================================
// CENTRALIZED PRODUCT AND CONTENT TYPES
// ============================================================

export interface ProductImage {
  url: string
  alt: string
  isPrimary?: boolean
}

export interface ProductImages {
  main: ProductImage
  gallery: ProductImage[]
  thumbnail: ProductImage
}

export interface Product {
  id: string
  slug: string
  name: string
  category: string
  subcategory?: string
  description?: string
  price: number | string
  featured?: boolean
  bestseller?: boolean
  newArrival?: boolean
  inStock: boolean
  status?: "in_stock" | "out_of_stock" | "made_to_order"
  purity?: string
  weight?: string
  material?: string
  highlights?: string[]
  images: ProductImages
  tags?: string[]
}

export type ProductSummary = Pick<Product, 'id' | 'slug' | 'name' | 'price' | 'category' | 'images' | 'status'>

export interface Category {
  id: number | string
  slug: string
  title: string
  bengaliTitle?: string
  image: string
  href: string
}

export type CategorySummary = Pick<Category, 'id' | 'slug' | 'title' | 'image' | 'href'>

export interface BudgetRange {
  id: number | string
  slug: string
  title: string
  bengaliBadge?: string
  description?: string
  image: string
  href: string
}

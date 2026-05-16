// ============================================================
// PRODUCT SERVICE
// All product-related API calls live here.
// Currently returns placeholder data — swap apiClient calls
// once the backend is connected.
// ============================================================

import { apiClient } from "./api-client"
import type { Product, ProductSummary, PaginatedResponse } from "@/types"
import { FEATURED_PRODUCTS } from "@/constants"

// ---- Types specific to this service ----

export interface GetProductsParams {
  page?: number
  pageSize?: number
  categorySlug?: string
  collection?: string
  search?: string
  sortField?: string
  sortOrder?: "asc" | "desc"
}

// ============================================================
// PLACEHOLDER IMPLEMENTATIONS
// Each function is wired to the real endpoint shape,
// but returns static data until the backend is ready.
// ============================================================

/**
 * Fetch a paginated list of all products.
 */
export async function getProducts(
  params: GetProductsParams = {}
): Promise<PaginatedResponse<ProductSummary>> {
  // TODO: Replace with real call when backend is ready:
  // return apiClient<PaginatedResponse<ProductSummary>>("/products", {
  //   revalidate: 60,
  // })

  void apiClient  // silence unused import warning during placeholder phase
  void params

  return {
    data: FEATURED_PRODUCTS,
    pagination: {
      page: 1,
      pageSize: 10,
      totalItems: FEATURED_PRODUCTS.length,
      totalPages: 1,
      hasNextPage: false,
      hasPrevPage: false,
    },
  }
}

/**
 * Fetch a single product by slug.
 */
export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  // TODO: return apiClient<ApiResponse<Product>>(`/products/${slug}`, { revalidate: 30 }).then(r => r.data)
  void slug
  return null
}

/**
 * Fetch featured/hero products for the homepage.
 */
export async function getFeaturedProducts(): Promise<ProductSummary[]> {
  // TODO: return apiClient<ApiResponse<ProductSummary[]>>("/products/featured", { revalidate: 300 }).then(r => r.data)
  return FEATURED_PRODUCTS
}

// ============================================================
// CATEGORY SERVICE
// All category-related API calls live here.
// ============================================================

import { apiClient } from "./api-client"
import type { Category, CategorySummary } from "@/types"
import { CATEGORIES } from "@/constants"

/**
 * Fetch all top-level categories (for navigation / category listing page).
 */
export async function getCategories(): Promise<CategorySummary[]> {
  // TODO: return apiClient<ApiResponse<CategorySummary[]>>("/categories", { revalidate: 3600 }).then(r => r.data)
  void apiClient
  return CATEGORIES
}

/**
 * Fetch a single category with its children by slug.
 */
export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  // TODO: return apiClient<ApiResponse<Category>>(`/categories/${slug}`, { revalidate: 600 }).then(r => r.data)
  void slug
  return null
}

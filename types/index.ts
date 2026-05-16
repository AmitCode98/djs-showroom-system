// ============================================================
// TYPES — BARREL EXPORT
// Import all types from a single entry point:
//   import type { Product, ApiResponse } from "@/types"
// ============================================================

export type {
  // Product
  Product,
  ProductSummary,
  ProductImage,
  ProductStatus,
} from "./product.types"

export type {
  // Category
  Category,
  CategorySummary,
} from "./category.types"

export type {
  // User
  User,
  UserSummary,
  UserAddress,
  UserRole,
} from "./user.types"

export type {
  // API
  ApiResponse,
  ApiError,
  // Pagination
  PaginationMeta,
  PaginatedResponse,
  // Sort
  SortOrder,
  SortOption,
  // Utilities
  RequireFields,
  DeepPartial,
  SelectOption,
} from "./common.types"

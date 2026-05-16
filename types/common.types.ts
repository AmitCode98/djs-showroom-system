// ============================================================
// COMMON / SHARED TYPES
// ============================================================

// ----- API Response Wrappers -----

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface ApiError {
  message: string
  statusCode: number
  errors?: Record<string, string[]>
}

// ----- Pagination -----

export interface PaginationMeta {
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: PaginationMeta
}

// ----- Sorting & Filtering -----

export type SortOrder = "asc" | "desc"

export interface SortOption {
  field: string
  order: SortOrder
}

// ----- Generic Utilities -----

/** Makes specified keys of T required */
export type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>

/** Makes every property in T optional recursively */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

/** A simple key-value option, used for selects and dropdowns */
export interface SelectOption {
  label: string
  value: string
}

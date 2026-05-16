// ============================================================
// USER TYPES
// ============================================================

export type UserRole = "customer" | "admin" | "staff"

export interface UserAddress {
  line1: string
  line2?: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault?: boolean
}

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  role: UserRole
  addresses?: UserAddress[]
  createdAt: string
  updatedAt: string
}

export interface UserSummary {
  id: string
  firstName: string
  lastName: string
  email: string
  role: UserRole
}

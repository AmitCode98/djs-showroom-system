// ============================================================
// ADMIN TYPES
// All admin-panel-specific types live here.
// Product, Category, BudgetRange types come from @/types/product
// ============================================================

// ---- Purchase Request / Orders ----

export type RequestStatus = "requested" | "preparing" | "ready" | "completed"

export interface RequestedProduct {
  productId: string
  productName: string
  quantity: number
  price: number
}

export interface PurchaseRequest {
  id: string
  tabletNumber: string
  products: RequestedProduct[]
  totalAmount: number
  requestedAt: string // ISO date string
  status: RequestStatus
  notes?: string
}

// ---- Admin Navigation ----

export interface AdminNavItem {
  label: string
  href: string
  icon: string // lucide icon name
  badge?: number // notification count
  section?: "main" | "content" | "system"
}

// ---- Dashboard Statistics ----

export interface DashboardStat {
  label: string
  value: number | string
  icon: string
  description?: string
  trend?: {
    direction: "up" | "down" | "neutral"
    value: string
  }
}

// ---- Announcements ----

export type AnnouncementLang = "bn" | "en"

export interface AnnouncementItem {
  id: string
  text: string
  lang: AnnouncementLang
  active: boolean
  order: number
}

// ---- Showroom Settings ----

export interface ShowroomSettings {
  name: string
  phone: string
  whatsapp: string
  email: string
  address: {
    line1: string
    line2?: string
    city: string
    state: string
    postalCode: string
  }
  hours: {
    weekdays: string
    weekend: string
  }
  consultationMessage: string
  instagram?: string
  facebook?: string
}

// ---- Homepage Curation ----

export interface HomeSection {
  id: string
  label: string
  visible: boolean
  productIds: string[]
}

export interface HomepageCuration {
  featured: HomeSection
  newArrivals: HomeSection
  bestsellers: HomeSection
  heroBannerUrl: string
}

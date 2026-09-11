// ============================================================
// SHOWROOM TRAY TYPES
// Core state models for in-store tablet jewellery curation
// ============================================================

export interface TrayItem {
  productId: string
  slug: string
  name: string
  category: string
  price: number
  image?: string
  material?: string
  purity?: string
  weight?: string
  quantity: number
  customerNote?: string // Specific customization or request (e.g., "Would like to see matching earrings")
  addedAt: string // ISO timestamp
}

export interface ShowroomTrayContextType {
  items: TrayItem[]
  tabletId: string
  setTabletId: (id: string) => void
  addItem: (
    product: {
      id: string
      slug: string
      name: string
      category: string
      price: number | string
      image?: string
      material?: string
      purity?: string
      weight?: string
    },
    quantity?: number,
    note?: string
  ) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  updateItemNote: (productId: string, note: string) => void
  clearTray: () => void
  isInTray: (productId: string) => boolean
  totalItemsCount: number
  totalEstimatedAmount: number
  isTrayOpen: boolean
  setIsTrayOpen: (open: boolean) => void
  toggleTray: () => void
}

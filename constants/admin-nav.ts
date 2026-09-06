// ============================================================
// ADMIN NAVIGATION — Centralized sidebar nav configuration
// ============================================================

export interface AdminNavItem {
  label: string
  href: string
  iconName: string // matches lucide-react icon names
  badge?: number
  section: "main" | "content" | "system"
}

export const ADMIN_NAV_ITEMS: AdminNavItem[] = [
  // Main Operations
  { label: "Dashboard",          href: "/admin",               iconName: "LayoutDashboard", section: "main" },
  { label: "Products",           href: "/admin/products",      iconName: "Package",          section: "main" },
  { label: "Categories",         href: "/admin/categories",    iconName: "Tag",              section: "main" },
  { label: "Orders",             href: "/admin/orders",        iconName: "ShoppingBag",      section: "main", badge: 2 },

  // Content Management
  { label: "Homepage",           href: "/admin/homepage",      iconName: "Home",             section: "content" },
  { label: "Budget Collections", href: "/admin/budget",        iconName: "Wallet",           section: "content" },
  { label: "Announcements",      href: "/admin/announcements", iconName: "Megaphone",        section: "content" },

  // System
  { label: "Settings",           href: "/admin/settings",      iconName: "Settings",         section: "system" },
]

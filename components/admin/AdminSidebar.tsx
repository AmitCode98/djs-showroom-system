"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ADMIN_NAV_ITEMS } from "@/constants/admin-nav"
import {
  SquaresFour,
  Package,
  Tag,
  Sparkle,
  House,
  Wallet,
  Megaphone,
  Gear,
  CaretLeft,
  CaretRight,
  Diamond,
} from "@phosphor-icons/react"

const ICON_MAP: Record<string, React.ElementType> = {
  LayoutDashboard: SquaresFour,
  Package,
  Tag,
  ShoppingBag: Sparkle,
  Home: House,
  Wallet,
  Megaphone,
  Settings: Gear,
}

interface AdminSidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export function AdminSidebar({ collapsed, onToggle }: AdminSidebarProps) {
  const pathname = usePathname()

  const sections = {
    main: ADMIN_NAV_ITEMS.filter((i) => i.section === "main"),
    content: ADMIN_NAV_ITEMS.filter((i) => i.section === "content"),
    system: ADMIN_NAV_ITEMS.filter((i) => i.section === "system"),
  }

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin"
    return pathname.startsWith(href)
  }

  return (
    <aside
      className={cn(
        "relative flex flex-col h-full bg-white border-r border-slate-200 transition-all duration-200 ease-out shrink-0",
        collapsed ? "w-[60px]" : "w-[220px]"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 h-14 px-4 border-b border-slate-200 shrink-0">
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 shrink-0">
          <Diamond weight="light" className="w-4 h-4 text-white" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="text-[13px] font-semibold text-slate-900 leading-tight whitespace-nowrap">DJS Admin</p>
            <p className="text-[11px] text-slate-400 whitespace-nowrap">Showroom Control</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-2">
        <NavSection label="Operations" items={sections.main} collapsed={collapsed} isActive={isActive} />
        <NavSection label="Content" items={sections.content} collapsed={collapsed} isActive={isActive} />
        <NavSection label="System" items={sections.system} collapsed={collapsed} isActive={isActive} />
      </nav>

      {/* Collapse toggle */}
      <div className="shrink-0 border-t border-slate-200 p-2">
        <button
          onClick={onToggle}
          className="flex items-center justify-center w-full h-8 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <CaretRight weight="light" className="w-4 h-4" /> : <CaretLeft weight="light" className="w-4 h-4" />}
        </button>
      </div>
    </aside>
  )
}

function NavSection({
  label,
  items,
  collapsed,
  isActive,
}: {
  label: string
  items: typeof ADMIN_NAV_ITEMS
  collapsed: boolean
  isActive: (href: string) => boolean
}) {
  if (!items.length) return null

  return (
    <div className="mb-4">
      {!collapsed && (
        <p className="px-2 mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">{label}</p>
      )}
      <ul className="flex flex-col gap-0.5">
        {items.map((item) => {
          const Icon = ICON_MAP[item.iconName] ?? Package
          const active = isActive(item.href)

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                title={collapsed ? item.label : undefined}
                className={cn(
                  "flex items-center gap-2.5 rounded-md px-2 h-9 text-[13px] font-medium transition-colors duration-150",
                  active
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <Icon weight="light" className="w-4 h-4 shrink-0" />
                {!collapsed && (
                  <span className="flex-1 truncate">{item.label}</span>
                )}
                {!collapsed && item.badge && item.badge > 0 && (
                  <span className={cn(
                    "flex items-center justify-center min-w-5 h-5 rounded-full text-[10px] font-bold px-1",
                    active ? "bg-white text-slate-900" : "bg-blue-500 text-white"
                  )}>
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  TrendUp,
  TrendDown,
  Minus,
  SquaresFour,
  Package,
  Tag,
  Sparkle,
  House,
  Wallet,
  Megaphone,
  Gear,
  Star,
  CheckSquare,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr"
import type { DashboardStat } from "@/types/admin"

const ICON_MAP: Record<string, React.ElementType> = {
  LayoutDashboard: SquaresFour,
  Package,
  Tag,
  ShoppingBag: Sparkle,
  Home: House,
  Wallet,
  Megaphone,
  Settings: Gear,
  Star,
  PackageCheck: CheckSquare,
  AlertCircle: WarningCircle,
}

interface StatCardProps {
  stat: DashboardStat
  className?: string
}

export function StatCard({ stat, className }: StatCardProps) {
  const Icon = ICON_MAP[stat.icon] ?? Package

  return (
    <div className={cn(
      "bg-white rounded-xl border border-slate-200 p-5 flex flex-col gap-3",
      "shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-out",
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100">
          <Icon weight="light" className="w-4.5 h-4.5 text-slate-600" />
        </div>
        {stat.trend && (
          <div className={cn(
            "flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-full",
            stat.trend.direction === "up" && "bg-emerald-50 text-emerald-600",
            stat.trend.direction === "down" && "bg-red-50 text-red-500",
            stat.trend.direction === "neutral" && "bg-slate-100 text-slate-500",
          )}>
            {stat.trend.direction === "up" && <TrendUp weight="light" className="w-3 h-3" />}
            {stat.trend.direction === "down" && <TrendDown weight="light" className="w-3 h-3" />}
            {stat.trend.direction === "neutral" && <Minus weight="light" className="w-3 h-3" />}
            {stat.trend.value}
          </div>
        )}
      </div>

      <div>
        <p className="text-2xl font-bold text-slate-900 leading-none">{stat.value}</p>
        <p className="text-[13px] text-slate-500 mt-1">{stat.label}</p>
        {stat.description && (
          <p className="text-[11px] text-slate-400 mt-0.5">{stat.description}</p>
        )}
      </div>
    </div>
  )
}

import * as React from "react"
import { cn } from "@/lib/utils"
import type { RequestStatus } from "@/types/admin"

const STATUS_CONFIG: Record<RequestStatus, { label: string; className: string }> = {
  requested: {
    label: "Requested",
    className: "bg-blue-50 text-blue-600 border-blue-200",
  },
  preparing: {
    label: "Preparing",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  ready: {
    label: "Ready",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  completed: {
    label: "Completed",
    className: "bg-slate-100 text-slate-500 border-slate-200",
  },
}

interface StatusBadgeProps {
  status: RequestStatus
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status]
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border tracking-wide",
      config.className,
      className
    )}>
      <span className={cn(
        "w-1.5 h-1.5 rounded-full mr-1.5",
        status === "requested" && "bg-blue-500",
        status === "preparing" && "bg-amber-500 animate-pulse",
        status === "ready" && "bg-emerald-500",
        status === "completed" && "bg-slate-400",
      )} />
      {config.label}
    </span>
  )
}

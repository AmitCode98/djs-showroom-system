import * as React from "react"
import { cn } from "@/lib/utils"
import type { Icon } from "@phosphor-icons/react"

interface EmptyStateProps {
  icon?: Icon | React.ComponentType<any>
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

export function EmptyState({
  icon: IconComponent,
  title,
  description,
  action,
  className
}: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 text-center", className)}>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4">
        {IconComponent && <IconComponent weight="light" className="w-6 h-6 text-slate-400" />}
      </div>
      <h3 className="text-[14px] font-semibold text-slate-900">{title}</h3>
      {description && (
        <p className="text-[13px] text-slate-500 mt-1 max-w-sm">{description}</p>
      )}
      {action && (
        <div className="mt-5">
          {action}
        </div>
      )}
    </div>
  )
}

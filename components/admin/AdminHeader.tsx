import * as React from "react"
import Link from "next/link"
import { ArrowSquareOut, Storefront } from "@phosphor-icons/react/dist/ssr"
import { COMPANY } from "@/constants/company"

interface AdminHeaderProps {
  title: string
  description?: string
  actions?: React.ReactNode
}

export function AdminHeader({ title, description, actions }: AdminHeaderProps) {
  return (
    <header className="flex items-center justify-between h-14 px-6 bg-white border-b border-slate-200 shrink-0">
      {/* Left: Page title */}
      <div>
        <h1 className="text-[15px] font-semibold text-slate-900 leading-tight">{title}</h1>
        {description && (
          <p className="text-[12px] text-slate-400 mt-0.5 hidden sm:block">{description}</p>
        )}
      </div>

      {/* Right: Actions + store link */}
      <div className="flex items-center gap-3">
        {actions}
        <div className="hidden sm:flex items-center gap-1.5 px-3 h-8 rounded-md bg-slate-100 border border-slate-200">
          <Storefront weight="light" className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[12px] text-slate-600 font-medium">{COMPANY.name}</span>
        </div>
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-1.5 px-3 h-8 rounded-md text-[12px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
        >
          <ArrowSquareOut weight="light" className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">View Storefront</span>
        </Link>
      </div>
    </header>
  )
}

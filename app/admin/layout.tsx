"use client"

import * as React from "react"
import { AdminSidebar } from "@/components/admin/AdminSidebar"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <html lang="en">
      <body className="h-screen overflow-hidden bg-slate-50 font-body antialiased">
        <div className="flex h-full">
          {/* Sidebar */}
          <AdminSidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />

          {/* Main content area */}
          <div className={cn("flex-1 flex flex-col min-w-0 overflow-hidden")}>
            {children}
          </div>
        </div>
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  )
}

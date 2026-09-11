"use client"

import * as React from "react"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { StatCard } from "@/components/admin/StatCard"
import { StatusBadge } from "@/components/admin/StatusBadge"
import { PRODUCTS } from "@/constants/products"
import { CATEGORIES } from "@/constants/categories"
import { SEED_REQUESTS } from "@/lib/data/admin"
import type { DashboardStat } from "@/types/admin"
import { ProductImage } from "@/components/shared/product-image"
import Link from "next/link"
import { ArrowRight, Clock } from "@phosphor-icons/react"

function formatINR(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`
}

function timeAgo(iso: string) {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
  if (diff < 60) return `${diff}s ago`
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  return `${Math.floor(diff / 3600)}h ago`
}

export default function AdminDashboardPage() {
  const pendingCount = SEED_REQUESTS.filter(
    (r) => r.status === "requested" || r.status === "preparing"
  ).length

  const stats: DashboardStat[] = [
    {
      label: "Total Products",
      value: PRODUCTS.length,
      icon: "Package",
      description: "In inventory",
    },
    {
      label: "New Arrivals",
      value: PRODUCTS.filter((p) => p.newArrival).length,
      icon: "Star",
      trend: { direction: "up", value: "+2 this week" },
    },
    {
      label: "Featured",
      value: PRODUCTS.filter((p) => p.featured).length,
      icon: "PackageCheck",
      description: "On homepage",
    },
    {
      label: "Categories",
      value: CATEGORIES.length,
      icon: "Tag",
    },
    {
      label: "Pending Requests",
      value: pendingCount,
      icon: "AlertCircle",
      trend: pendingCount > 0
        ? { direction: "up", value: "Needs attention" }
        : { direction: "neutral", value: "All clear" },
    },
  ]

  const recentRequests = [...SEED_REQUESTS]
    .sort((a, b) => new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime())
    .slice(0, 5)

  const recentProducts = [...PRODUCTS].reverse().slice(0, 5)

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <AdminHeader
        title="Dashboard"
        description="Showroom operations overview"
      />

      <main className="flex-1 overflow-y-auto p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Purchase Requests */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
              <h2 className="text-[13px] font-semibold text-slate-900">Recent Requests</h2>
              <Link
                href="/admin/orders"
                className="flex items-center gap-1 text-[12px] text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                View all <ArrowRight weight="light" className="w-3 h-3" />
              </Link>
            </div>
            <div className="divide-y divide-slate-100">
              {recentRequests.map((req) => (
                <div key={req.id} className="flex items-center justify-between px-5 py-3 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-semibold text-slate-800">{req.id}</span>
                      <span className="text-[11px] text-slate-400">Tablet {req.tabletNumber}</span>
                    </div>
                    <span className="text-[12px] text-slate-500">
                      {req.products.length} item{req.products.length > 1 ? "s" : ""} · {formatINR(req.totalAmount)}
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <StatusBadge status={req.status} />
                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Clock weight="light" className="w-3 h-3" />
                      {timeAgo(req.requestedAt)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recently Added Products */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
              <h2 className="text-[13px] font-semibold text-slate-900">Recent Products</h2>
              <Link
                href="/admin/products"
                className="flex items-center gap-1 text-[12px] text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Manage <ArrowRight weight="light" className="w-3 h-3" />
              </Link>
            </div>
            <div className="divide-y divide-slate-100">
              {recentProducts.map((product) => (
                <div key={product.id} className="flex items-center gap-3 px-5 py-3 hover:bg-slate-50 transition-colors">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                    <ProductImage
                      src={product.images.main.url || null}
                      alt={product.name}
                      aspectRatio="square"
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-slate-800 truncate">{product.name}</p>
                    <p className="text-[11px] text-slate-400">{product.category}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[13px] font-semibold text-slate-800">
                      {formatINR(typeof product.price === "number" ? product.price : 0)}
                    </p>
                    <span className={[
                      "text-[11px] font-medium",
                      product.inStock ? "text-emerald-600" : "text-red-500"
                    ].join(" ")}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

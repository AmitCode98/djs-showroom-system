"use client"

import * as React from "react"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { PRODUCTS } from "@/constants/products"
import { DEFAULT_HOMEPAGE_CURATION } from "@/lib/data/admin"
import type { HomepageCuration } from "@/types/admin"
import { ProductImage } from "@/components/shared/product-image"
import { Eye, EyeSlash, Check } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

const TAB_KEYS = ["featured", "newArrivals", "bestsellers"] as const
type TabKey = typeof TAB_KEYS[number]
const TAB_LABELS: Record<TabKey, string> = {
  featured: "Featured Products",
  newArrivals: "New Arrivals",
  bestsellers: "Bestsellers",
}

function formatINR(price: number | string) {
  if (typeof price === "number") return `₹${price.toLocaleString("en-IN")}`
  return price
}

export default function HomepagePage() {
  const [curation, setCuration] = React.useState<HomepageCuration>(DEFAULT_HOMEPAGE_CURATION)
  const [activeTab, setActiveTab] = React.useState<TabKey>("featured")

  function toggleSection(key: TabKey) {
    setCuration((prev) => ({
      ...prev,
      [key]: { ...prev[key], visible: !prev[key].visible },
    }))
  }

  function toggleProduct(tab: TabKey, productId: string) {
    setCuration((prev) => {
      const current = prev[tab].productIds
      const next = current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
      return {
        ...prev,
        [tab]: { ...prev[tab], productIds: next },
      }
    })
  }

  function handleSave() {
    toast.success("Homepage curation saved")
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <AdminHeader
        title="Homepage Curation"
        description="Manage featured collections, new arrivals, and bestsellers on the showroom display"
        actions={
          <button
            onClick={handleSave}
            className="px-4 h-9 rounded-md text-[13px] font-semibold transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] bg-slate-900 text-white hover:bg-slate-700 active:scale-[0.96]"
          >
            Save Changes
          </button>
        }
      />

      <main className="flex-1 overflow-y-auto p-6">
        {/* Section Visibility Controls */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 mb-6">
          <h2 className="text-[13px] font-semibold text-slate-900 mb-4">Section Visibility</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {TAB_KEYS.map((key) => (
              <div
                key={key}
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50/50"
              >
                <div>
                  <p className="text-[13px] font-semibold text-slate-800">{TAB_LABELS[key]}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {curation[key].productIds.length} items curated
                  </p>
                </div>
                <button
                  onClick={() => toggleSection(key)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 h-8 rounded-lg text-[12px] font-semibold border transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]",
                    curation[key].visible
                      ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                      : "bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200"
                  )}
                >
                  {curation[key].visible ? <Eye weight="light" className="w-3.5 h-3.5" /> : <EyeSlash weight="light" className="w-3.5 h-3.5" />}
                  {curation[key].visible ? "Visible" : "Hidden"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Banner */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 mb-6">
          <h2 className="text-[13px] font-semibold text-slate-900 mb-3">Hero Banner Image</h2>
          <div className="flex gap-3 items-start">
            <input
              type="text"
              value={curation.heroBannerUrl}
              onChange={(e) => setCuration((p) => ({ ...p, heroBannerUrl: e.target.value }))}
              className="flex-1 h-10 px-3 text-[13px] rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder:text-slate-400"
              placeholder="https://..."
            />
            {curation.heroBannerUrl && (
              <div className="relative w-16 h-9 rounded-md overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                <ProductImage src={curation.heroBannerUrl || null} alt="Banner preview" aspectRatio="auto" fill className="object-cover" sizes="64px" />
              </div>
            )}
          </div>
        </div>

        {/* Product Selection */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-slate-200 bg-slate-50 sticky top-0 z-10">
            {TAB_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "flex-1 px-4 py-3 text-[12px] font-medium transition-colors border-b-2",
                  activeTab === key
                    ? "text-slate-900 border-slate-900 bg-white"
                    : "text-slate-500 border-transparent hover:text-slate-700"
                )}
              >
                {TAB_LABELS[key]}
                <span className={cn(
                  "ml-1.5 inline-flex items-center justify-center min-w-5 h-4 rounded-full text-[10px] font-bold px-1",
                  activeTab === key ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-600"
                )}>
                  {curation[activeTab].productIds.length}
                </span>
              </button>
            ))}
          </div>

          {/* Product list */}
          <div className="divide-y divide-slate-100">
            {PRODUCTS.map((product) => {
              const isSelected = curation[activeTab].productIds.includes(product.id)
              return (
                <div
                  key={product.id}
                  onClick={() => toggleProduct(activeTab, product.id)}
                  className={cn(
                    "flex items-center gap-4 px-5 py-3 cursor-pointer transition-colors hover:bg-slate-50",
                    isSelected && "bg-slate-50/80"
                  )}
                >
                  <div className={cn(
                    "flex items-center justify-center w-5 h-5 rounded border-2 shrink-0 transition-colors",
                    isSelected ? "bg-slate-900 border-slate-900" : "border-slate-300"
                  )}>
                    {isSelected && <Check weight="light" className="w-3 h-3 text-white" />}
                  </div>
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                    <ProductImage src={product.images.main.url || null} alt={product.name} aspectRatio="square" fill className="object-cover" sizes="40px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-slate-800 truncate">{product.name}</p>
                    <p className="text-[11px] text-slate-400">{product.category}</p>
                  </div>
                  <p className="text-[13px] font-semibold text-slate-700 shrink-0">
                    {formatINR(product.price)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

"use client"

import * as React from "react"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { BUDGET_RANGES } from "@/constants/budget-ranges"
import type { BudgetRange } from "@/types"
import { PencilSimple, Eye, EyeSlash, Check, X } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { CategoryImage } from "@/components/shared/category-image"
import { toast } from "sonner"

interface EditableBudget extends BudgetRange {
  visible: boolean
}

export default function BudgetPage() {
  const [budgets, setBudgets] = React.useState<EditableBudget[]>(
    BUDGET_RANGES.map((b) => ({ ...b, visible: true }))
  )
  const [editingId, setEditingId] = React.useState<string | number | null>(null)
  const [editData, setEditData] = React.useState<Partial<BudgetRange>>({})

  function startEdit(budget: EditableBudget) {
    setEditingId(budget.id)
    setEditData({ title: budget.title, description: budget.description, image: budget.image, href: budget.href })
  }

  function cancelEdit() {
    setEditingId(null)
    setEditData({})
  }

  function saveEdit(id: string | number) {
    setBudgets((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...editData } : b))
    )
    setEditingId(null)
    setEditData({})
    toast.success("Budget range updated")
  }

  function toggleVisible(id: string | number) {
    setBudgets((prev) =>
      prev.map((b) => (b.id === id ? { ...b, visible: !b.visible } : b))
    )
    toast.success("Visibility toggled")
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <AdminHeader
        title="Budget Ranges"
        description="Configure budget brackets displayed across showroom navigation"
      />

      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {budgets.map((budget) => {
            const isEditing = editingId === budget.id

            return (
              <div
                key={budget.id}
                className={cn(
                  "bg-white rounded-2xl border overflow-hidden shadow-sm transition-all duration-200",
                  isEditing ? "border-slate-400 ring-2 ring-slate-400/20" : "border-slate-200",
                  !budget.visible && "opacity-50"
                )}
              >
                {/* Image preview */}
                <div className="aspect-4/3 relative bg-slate-100">
                  <CategoryImage
                    src={isEditing ? editData.image ?? budget.image : budget.image}
                    alt={budget.title}
                    aspectRatio="productCard"
                    sizes="250px"
                  />
                  {!budget.visible && (
                    <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                      <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-1 rounded-md shadow-xs">
                        Hidden
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  {isEditing ? (
                    <div className="flex flex-col gap-2.5">
                      <input
                        className="w-full h-9 px-3 text-[13px] rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 font-semibold"
                        value={editData.title ?? ""}
                        onChange={(e) => setEditData((d) => ({ ...d, title: e.target.value }))}
                        placeholder="Range Title"
                      />
                      <input
                        className="w-full h-9 px-3 text-[13px] rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder:text-slate-400"
                        value={editData.description ?? ""}
                        onChange={(e) => setEditData((d) => ({ ...d, description: e.target.value }))}
                        placeholder="Description"
                      />
                      <input
                        className="w-full h-9 px-3 text-[13px] rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder:text-slate-400"
                        value={editData.image ?? ""}
                        onChange={(e) => setEditData((d) => ({ ...d, image: e.target.value }))}
                        placeholder="Image URL"
                      />
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => saveEdit(budget.id)}
                          className="flex-1 flex items-center justify-center gap-1 h-8 rounded-md bg-slate-900 text-white text-[12px] font-semibold active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        >
                          <Check weight="light" className="w-3.5 h-3.5" /> Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="flex-1 flex items-center justify-center gap-1 h-8 rounded-md bg-slate-100 text-slate-600 text-[12px] font-semibold hover:bg-slate-200 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        >
                          <X weight="light" className="w-3.5 h-3.5" /> Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <p className="text-[14px] font-semibold text-slate-800">{budget.title}</p>
                        {budget.description && (
                          <p className="text-[12px] text-slate-500 mt-0.5">{budget.description}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <button
                          onClick={() => startEdit(budget)}
                          className="flex-1 flex items-center justify-center gap-1.5 h-8 rounded-md border border-slate-200 text-slate-600 text-[12px] font-medium hover:bg-slate-50 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        >
                          <PencilSimple weight="light" className="w-3.5 h-3.5" /> Edit
                        </button>
                        <button
                          onClick={() => toggleVisible(budget.id)}
                          className={cn(
                            "flex items-center justify-center w-8 h-8 rounded-md border text-[12px] active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]",
                            budget.visible
                              ? "border-slate-200 text-slate-500 hover:bg-slate-50"
                              : "border-slate-200 text-slate-400 hover:bg-slate-50"
                          )}
                          title={budget.visible ? "Hide" : "Show"}
                        >
                          {budget.visible ? <Eye weight="light" className="w-4 h-4" /> : <EyeSlash weight="light" className="w-4 h-4" />}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

"use client"

import * as React from "react"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { CATEGORIES } from "@/constants/categories"
import type { Category } from "@/types"
import { CategoryImage } from "@/components/shared/category-image"
import { PencilSimple, Trash, Plus, Check, X, DotsSixVertical, Tag } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { EmptyState } from "@/components/admin/empty-state"

interface EditableCategory extends Category {
  visible: boolean
}

const inputCls = "w-full h-9 px-3 text-[13px] rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder:text-slate-400"

export default function CategoriesPage() {
  const [cats, setCats] = React.useState<EditableCategory[]>(
    CATEGORIES.map((c) => ({ ...c, visible: true }))
  )
  const [editingId, setEditingId] = React.useState<string | number | null>(null)
  const [editData, setEditData] = React.useState<Partial<Category>>({})
  const [isAdding, setIsAdding] = React.useState(false)
  const [newCat, setNewCat] = React.useState<Partial<Category>>({
    title: "",
    slug: "",
    image: "",
    href: "/",
  })

  function startEdit(cat: EditableCategory) {
    setEditingId(cat.id)
    setEditData({ title: cat.title, slug: cat.slug, image: cat.image, href: cat.href })
  }

  function cancelEdit() {
    setEditingId(null)
    setEditData({})
  }

  function saveEdit(id: string | number) {
    setCats((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...editData } : c))
    )
    setEditingId(null)
    setEditData({})
    toast.success("Category updated")
  }

  function deleteCategory(id: string | number) {
    setCats((prev) => prev.filter((c) => c.id !== id))
    toast.success("Category deleted")
  }

  function addCategory() {
    if (!newCat.title?.trim()) {
      toast.error("Category title is required")
      return
    }
    const id = `cat_${Date.now()}`
    setCats((prev) => [...prev, {
      id,
      title: newCat.title!,
      slug: newCat.slug || newCat.title!.toLowerCase().replace(/\s+/g, "-"),
      image: newCat.image || "",
      href: newCat.href || `/categories/${newCat.slug}`,
      visible: true,
    }])
    setIsAdding(false)
    setNewCat({ title: "", slug: "", image: "", href: "/" })
    toast.success("Category added")
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <AdminHeader
        title="Categories"
        description="Manage jewellery categories"
        actions={
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-1.5 px-4 h-9 rounded-md bg-slate-900 text-white text-[13px] font-semibold hover:bg-slate-700 transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]"
          >
            <Plus weight="light" className="w-3.5 h-3.5" /> Add Category
          </button>
        }
      />

      <main className="flex-1 overflow-y-auto p-6">
        {/* Add Category Form */}
        {isAdding && (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 mb-6">
            <h2 className="text-[13px] font-semibold text-slate-900 mb-4">New Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Title</label>
                <input className={inputCls} value={newCat.title} onChange={(e) => setNewCat((d) => ({ ...d, title: e.target.value }))} placeholder="e.g. Bangles" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Slug</label>
                <input className={inputCls} value={newCat.slug} onChange={(e) => setNewCat((d) => ({ ...d, slug: e.target.value }))} placeholder="e.g. bangles" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Image URL</label>
                <input className={inputCls} value={newCat.image} onChange={(e) => setNewCat((d) => ({ ...d, image: e.target.value }))} placeholder="https://..." />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Href</label>
                <input className={inputCls} value={newCat.href} onChange={(e) => setNewCat((d) => ({ ...d, href: e.target.value }))} placeholder="/categories/..." />
              </div>
            </div>
            <div className="flex gap-2 mt-5">
              <button onClick={addCategory} className="flex items-center gap-1.5 px-5 h-9 rounded-md bg-slate-900 text-white text-[13px] font-semibold hover:bg-slate-700 transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]">
                <Check weight="light" className="w-3.5 h-3.5" /> Create
              </button>
              <button onClick={() => setIsAdding(false)} className="flex items-center gap-1.5 px-5 h-9 rounded-md bg-slate-100 text-slate-600 text-[13px] font-semibold hover:bg-slate-200 transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]">
                <X weight="light" className="w-3.5 h-3.5" /> Cancel
              </button>
            </div>
          </div>
        )}

        {/* Category Grid */}
        {cats.length === 0 ? (
          <EmptyState
            icon={Tag}
            title="No categories found"
            description="Get started by creating your first product category."
            action={
              <button
                onClick={() => setIsAdding(true)}
                className="px-4 h-9 rounded-md bg-slate-900 text-white text-[13px] font-semibold hover:bg-slate-700 transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]"
              >
                Add Category
              </button>
            }
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cats.map((cat) => {
              const isEditing = editingId === cat.id

              return (
                <div key={cat.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-out">
                {/* Image */}
                <div className="relative w-full aspect-4/3 bg-slate-100">
                  <CategoryImage
                    src={isEditing ? (editData.image || cat.image || null) : (cat.image || null)}
                    alt={cat.title}
                    aspectRatio="category"
                    sizes="300px"
                  />
                  <div className="absolute top-2 left-2 z-10">
                    <DotsSixVertical weight="light" className="w-4 h-4 text-white drop-shadow cursor-grab" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {isEditing ? (
                    <div className="space-y-2">
                      <input className={inputCls} value={editData.title ?? ""} onChange={(e) => setEditData((d) => ({ ...d, title: e.target.value }))} placeholder="Title" />
                      <input className={inputCls} value={editData.slug ?? ""} onChange={(e) => setEditData((d) => ({ ...d, slug: e.target.value }))} placeholder="Slug" />
                      <input className={inputCls} value={editData.image ?? ""} onChange={(e) => setEditData((d) => ({ ...d, image: e.target.value }))} placeholder="Image URL" />
                      <input className={inputCls} value={editData.href ?? ""} onChange={(e) => setEditData((d) => ({ ...d, href: e.target.value }))} placeholder="Href" />
                      <div className="flex gap-2 pt-2">
                        <button onClick={() => saveEdit(cat.id)} className="flex-1 flex items-center justify-center gap-1 h-8 rounded-md bg-slate-900 text-white text-[12px] font-semibold active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
                          <Check weight="light" className="w-3 h-3" /> Save
                        </button>
                        <button onClick={cancelEdit} className="flex-1 flex items-center justify-center gap-1 h-8 rounded-md bg-slate-100 text-slate-600 text-[12px] font-semibold hover:bg-slate-200 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
                          <X weight="light" className="w-3 h-3" /> Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-[14px] font-semibold text-slate-800 truncate">{cat.title}</p>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">{cat.slug}</p>
                      <div className="flex items-center gap-2 mt-4">
                        <button onClick={() => startEdit(cat)} className="flex-1 flex items-center justify-center gap-1.5 h-8 rounded-md border border-slate-200 text-slate-600 text-[12px] font-medium hover:bg-slate-50 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
                          <PencilSimple weight="light" className="w-3.5 h-3.5" /> Edit
                        </button>
                        <button onClick={() => deleteCategory(cat.id)} className="flex items-center justify-center w-8 h-8 rounded-md border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
                          <Trash weight="light" className="w-4 h-4" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
          </div>
        )}
      </main>
    </div>
  )
}

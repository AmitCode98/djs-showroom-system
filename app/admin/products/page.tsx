"use client"

import * as React from "react"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { PRODUCTS } from "@/constants/products"
import { CATEGORIES } from "@/constants/categories"
import type { Product } from "@/types"
import { ProductImage } from "@/components/shared/product-image"
import {
  Plus, MagnifyingGlass, PencilSimple, Trash, Star, Package, XCircle,
  SealCheck, X, Check
} from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { EmptyState } from "@/components/admin/empty-state"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

// ── Helper ──────────────────────────────────────────────────

function formatINR(price: number | string) {
  if (typeof price === "number") return `₹${price.toLocaleString("en-IN")}`
  return price
}

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

const EMPTY_PRODUCT: Omit<Product, "id"> = {
  slug: "",
  name: "",
  category: "",
  subcategory: "",
  price: 0,
  description: "",
  material: "",
  weight: "",
  purity: "",
  highlights: [],
  tags: [],
  inStock: true,
  status: "in_stock",
  featured: false,
  bestseller: false,
  newArrival: false,
  images: { main: { url: "", alt: "" }, gallery: [], thumbnail: { url: "", alt: "" } },
}

// ── Toggle Chip ──────────────────────────────────────────────

function ToggleChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-1.5 px-3 h-7 rounded-full text-[11px] font-semibold border transition-colors",
        active
          ? "bg-slate-900 text-white border-slate-900"
          : "bg-white text-slate-500 border-slate-300 hover:border-slate-400"
      )}
    >
      {active && <Check className="w-3 h-3" />}
      {label}
    </button>
  )
}

// ── Product Dialog ────────────────────────────────────────────

interface ProductDialogProps {
  open: boolean
  onClose: () => void
  initial?: Product | null
  onSave: (product: Product) => void
}

const inputCls = "w-full h-10 px-3 text-[13px] rounded-lg border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
const labelCls = "text-[12px] font-semibold text-slate-500 uppercase tracking-wider mb-1 block"

function ProductDialog({ open, onClose, initial, onSave }: ProductDialogProps) {
  const isEdit = !!initial
  const [form, setForm] = React.useState<Omit<Product, "id">>(
    initial ? { ...initial } : { ...EMPTY_PRODUCT }
  )
  const [highlightInput, setHighlightInput] = React.useState("")

  React.useEffect(() => {
    setForm(initial ? { ...initial } : { ...EMPTY_PRODUCT })
  }, [initial, open])

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((p) => ({ ...p, [key]: value }))
  }

  function autoSlug(name: string) {
    set("name", name)
    if (!isEdit) set("slug", slugify(name))
  }

  function addHighlight() {
    if (!highlightInput.trim()) return
    set("highlights", [...(form.highlights ?? []), highlightInput.trim()])
    setHighlightInput("")
  }

  function removeHighlight(idx: number) {
    set("highlights", (form.highlights ?? []).filter((_, i) => i !== idx))
  }

  function handleSave() {
    onSave({ ...form, id: initial?.id ?? `prod_${Date.now()}` })
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[15px] font-semibold text-slate-900">
            {isEdit ? "Edit Product" : "Add New Product"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
          {/* Name */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Product Name *</label>
            <input className={inputCls} value={form.name} onChange={(e) => autoSlug(e.target.value)} placeholder="e.g. Royal Polki Necklace" />
          </div>

          {/* Slug */}
          <div>
            <label className={labelCls}>Slug</label>
            <input className={`${inputCls} font-mono text-[12px]`} value={form.slug} onChange={(e) => set("slug", e.target.value)} placeholder="auto-generated" />
          </div>

          {/* Category */}
          <div>
            <label className={labelCls}>Category *</label>
            <select
              className={`${inputCls} cursor-pointer`}
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
            >
              <option value="">Select category...</option>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.title}>{c.title}</option>
              ))}
            </select>
          </div>

          {/* Subcategory */}
          <div>
            <label className={labelCls}>Subcategory</label>
            <input className={inputCls} value={form.subcategory ?? ""} onChange={(e) => set("subcategory", e.target.value)} placeholder="Optional" />
          </div>

          {/* Price */}
          <div>
            <label className={labelCls}>Price (₹)</label>
            <input className={inputCls} type="number" value={form.price} onChange={(e) => set("price", Number(e.target.value))} placeholder="0" />
          </div>

          {/* Material */}
          <div>
            <label className={labelCls}>Material</label>
            <input className={inputCls} value={form.material ?? ""} onChange={(e) => set("material", e.target.value)} placeholder="e.g. 22k Hallmarked Gold" />
          </div>

          {/* Weight */}
          <div>
            <label className={labelCls}>Weight</label>
            <input className={inputCls} value={form.weight ?? ""} onChange={(e) => set("weight", e.target.value)} placeholder="e.g. 45.5g" />
          </div>

          {/* Purity */}
          <div>
            <label className={labelCls}>Purity</label>
            <input className={inputCls} value={form.purity ?? ""} onChange={(e) => set("purity", e.target.value)} placeholder="e.g. 916 BIS Hallmarked" />
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Description</label>
            <textarea
              className={`${inputCls} h-20 py-2 resize-none`}
              value={form.description ?? ""}
              onChange={(e) => set("description", e.target.value)}
              placeholder="Short description..."
            />
          </div>

          {/* Main Image */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Main Image URL</label>
            <div className="flex gap-2">
              <input
                className={inputCls}
                value={form.images.main.url}
                onChange={(e) => set("images", { ...form.images, main: { ...form.images.main, url: e.target.value } })}
                placeholder="https://..."
              />
              {form.images.main.url && (
                <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                  <ProductImage src={form.images.main.url || null} alt="preview" aspectRatio="square" fill className="object-cover" sizes="36px" />
                </div>
              )}
            </div>
          </div>

          {/* Highlights */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Highlights</label>
            <div className="flex gap-2 mb-2">
              <input
                className={inputCls}
                value={highlightInput}
                onChange={(e) => setHighlightInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addHighlight())}
                placeholder="Add a highlight and press Enter..."
              />
              <button type="button" onClick={addHighlight} className="px-3 h-9 rounded-lg bg-slate-100 text-slate-700 text-[12px] font-semibold hover:bg-slate-200 transition-colors shrink-0">Add</button>
            </div>
            {(form.highlights ?? []).length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {(form.highlights ?? []).map((h, i) => (
                  <span key={i} className="flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-600 text-[12px] rounded-full">
                    {h}
                    <button type="button" onClick={() => removeHighlight(i)} className="text-slate-400 hover:text-red-500 ml-0.5">
                      <X weight="light" className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Flags */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Flags</label>
            <div className="flex flex-wrap gap-2">
              <ToggleChip label="In Stock" active={form.inStock} onClick={() => set("inStock", !form.inStock)} />
              <ToggleChip label="New Arrival" active={!!form.newArrival} onClick={() => set("newArrival", !form.newArrival)} />
              <ToggleChip label="Featured" active={!!form.featured} onClick={() => set("featured", !form.featured)} />
              <ToggleChip label="Bestseller" active={!!form.bestseller} onClick={() => set("bestseller", !form.bestseller)} />
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2 mt-4">
          <button type="button" onClick={onClose} className="px-4 h-10 rounded-lg border border-slate-200 text-slate-600 text-[13px] font-medium hover:bg-slate-50 active:scale-[0.98] transition-all">
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={!form.name || !form.category}
            className="px-5 h-10 rounded-lg bg-slate-900 text-white text-[13px] font-semibold hover:bg-slate-700 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isEdit ? "Save Changes" : "Add Product"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// ── Main Page ─────────────────────────────────────────────────

export default function ProductsPage() {
  const [products, setProducts] = React.useState<Product[]>(PRODUCTS)
  const [search, setSearch] = React.useState("")
  const [catFilter, setCatFilter] = React.useState("all")
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [editingProduct, setEditingProduct] = React.useState<Product | null>(null)
  const [deleteId, setDeleteId] = React.useState<string | null>(null)
  const [selectedIds, setSelectedIds] = React.useState<string[]>([])

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    const matchCat = catFilter === "all" || p.category === catFilter
    return matchSearch && matchCat
  })

  function openAdd() {
    setEditingProduct(null)
    setDialogOpen(true)
  }

  function openEdit(product: Product) {
    setEditingProduct(product)
    setDialogOpen(true)
  }

  function handleSave(product: Product) {
    setProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id)
      return exists
        ? prev.map((p) => p.id === product.id ? product : p)
        : [...prev, product]
    })
    toast.success(`Product ${editingProduct ? "updated" : "added"} successfully`)
  }

  function handleDelete(id: string) {
    setProducts((prev) => prev.filter((p) => p.id !== id))
    setSelectedIds((prev) => prev.filter((pid) => pid !== id))
    setDeleteId(null)
    toast.success("Product deleted")
  }

  function toggleFlag(id: string, flag: keyof Pick<Product, "inStock" | "featured" | "newArrival" | "bestseller">) {
    setProducts((prev) =>
      prev.map((p) => p.id === id ? { ...p, [flag]: !p[flag] } : p)
    )
    toast.success(`Product status updated`)
  }

  function handleBulkDelete() {
    setProducts((prev) => prev.filter((p) => !selectedIds.includes(p.id)))
    toast.success(`${selectedIds.length} products deleted`)
    setSelectedIds([])
  }

  function toggleSelectAll() {
    if (selectedIds.length === filtered.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(filtered.map((p) => p.id))
    }
  }

  function toggleSelect(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    )
  }

  const uniqueCats = Array.from(new Set(products.map((p) => p.category)))

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <AdminHeader
        title="Products"
        description="Manage jewellery inventory"
        actions={
          <button
            onClick={openAdd}
            className="flex items-center gap-1.5 px-4 h-8 rounded-md bg-slate-900 text-white text-[12px] font-semibold hover:bg-slate-700 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Add Product
          </button>
        }
      />

      <main className="flex-1 overflow-y-auto p-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1 max-w-sm">
            <MagnifyingGlass weight="light" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              className="w-full h-10 pl-9 pr-3 text-[13px] rounded-lg border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="h-10 px-3 text-[13px] rounded-lg border border-slate-300 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 cursor-pointer"
            value={catFilter}
            onChange={(e) => setCatFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            {uniqueCats.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <div className="flex items-center text-[12px] text-slate-400 font-medium px-1">
            {filtered.length} of {products.length} products
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead className="sticky top-0 z-10 bg-slate-50 shadow-sm">
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 w-10">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                      checked={filtered.length > 0 && selectedIds.length === filtered.length}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 w-12"></th>
                  <th className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Product</th>
                  <th className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 hidden md:table-cell">Category</th>
                  <th className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Price</th>
                  <th className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 hidden lg:table-cell">Flags</th>
                  <th className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Stock</th>
                  <th className="text-right px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-4 py-12">
                      <EmptyState
                        icon={Package}
                        title="No products found"
                        description={search ? "Try adjusting your search or filters." : "Get started by adding your first product."}
                        action={
                          !search ? (
                            <button
                              onClick={openAdd}
                              className="px-4 h-9 rounded-md bg-slate-900 text-white text-[13px] font-semibold hover:bg-slate-700 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                            >
                              Add Product
                            </button>
                          ) : undefined
                        }
                      />
                    </td>
                  </tr>
                )}
                {filtered.map((product) => {
                  const isSelected = selectedIds.includes(product.id)
                  return (
                    <tr
                      key={product.id}
                      className={cn(
                        "transition-colors group",
                        isSelected ? "bg-slate-50/80" : "hover:bg-slate-50"
                      )}
                    >
                      {/* Checkbox */}
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                          checked={isSelected}
                          onChange={() => toggleSelect(product.id)}
                        />
                      </td>

                      {/* Thumbnail */}
                    <td className="px-4 py-3">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                        <ProductImage
                          src={product.images.main.url || null}
                          alt={product.name}
                          aspectRatio="square"
                          fill className="object-cover" sizes="40px"
                        />
                      </div>
                    </td>

                    {/* Name + Slug */}
                    <td className="px-4 py-3">
                      <p className="font-semibold text-slate-800 truncate max-w-[200px]">{product.name}</p>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">{product.slug}</p>
                    </td>

                    {/* Category */}
                    <td className="px-4 py-3 text-slate-500 hidden md:table-cell">{product.category}</td>

                    {/* Price */}
                    <td className="px-4 py-3 font-semibold text-slate-800">{formatINR(product.price)}</td>

                    {/* Flags */}
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <div className="flex items-center gap-1.5">
                        {product.featured && (
                          <span className="px-1.5 py-0.5 bg-purple-50 text-purple-600 text-[10px] font-semibold rounded border border-purple-200">Featured</span>
                        )}
                        {product.newArrival && (
                          <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-semibold rounded border border-blue-200">New</span>
                        )}
                        {product.bestseller && (
                          <span className="px-1.5 py-0.5 bg-amber-50 text-amber-600 text-[10px] font-semibold rounded border border-amber-200">Best</span>
                        )}
                      </div>
                    </td>

                    {/* Stock toggle */}
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => toggleFlag(product.id, "inStock")}
                        className={cn(
                          "flex items-center gap-2 px-4 min-h-[48px] rounded-xl text-xs font-semibold border transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]",
                          product.inStock
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                            : "bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
                        )}
                      >
                        {product.inStock ? <Package weight="light" className="w-4 h-4" /> : <XCircle weight="light" className="w-4 h-4" />}
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </button>
                    </td>

                    {/* Actions — Permanently Visible with 48px Touch Bounding Box */}
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => toggleFlag(product.id, "featured")}
                          className={cn(
                            "flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]",
                            product.featured
                              ? "text-purple-700 bg-purple-100 border border-purple-200"
                              : "text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200"
                          )}
                          title="Toggle featured"
                          aria-label="Toggle featured"
                        >
                          <SealCheck weight="light" className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleFlag(product.id, "newArrival")}
                          className={cn(
                            "flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]",
                            product.newArrival
                              ? "text-blue-700 bg-blue-100 border border-blue-200"
                              : "text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200"
                          )}
                          title="Toggle new arrival"
                          aria-label="Toggle new arrival"
                        >
                          <Star weight="light" className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => openEdit(product)}
                          className="flex items-center justify-center w-12 h-12 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]"
                          title="Edit product"
                          aria-label="Edit product"
                        >
                          <PencilSimple weight="light" className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteId(product.id)}
                          className="flex items-center justify-center w-12 h-12 rounded-xl text-red-500 hover:text-red-700 hover:bg-red-50 border border-red-200 transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]"
                          title="Delete product"
                          aria-label="Delete product"
                        >
                          <Trash weight="light" className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer count */}
        <div className="mt-3 text-[12px] text-slate-400 text-center">
          Showing {filtered.length} products · {products.filter((p) => p.inStock).length} in stock · {products.filter((p) => !p.inStock).length} out of stock
        </div>
      </main>

      {/* Floating Bulk Action Toolbar */}
      {selectedIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-700 px-5 py-2 flex items-center gap-4 z-50 animate-in slide-in-from-bottom-5">
          <span className="text-[13px] font-medium">{selectedIds.length} selected</span>
          <div className="w-px h-5 bg-slate-700"></div>
          <button
            onClick={handleBulkDelete}
            className="flex items-center gap-2 min-h-[48px] px-3 text-[13px] font-semibold text-red-400 hover:text-red-300 transition-colors active:scale-95"
          >
            <Trash className="w-4 h-4" /> Delete
          </button>
          <button
            onClick={() => setSelectedIds([])}
            className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors active:scale-95"
            aria-label="Dismiss selection"
          >
            <X weight="light" className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Product Add/Edit Dialog */}
      <ProductDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        initial={editingProduct}
        onSave={handleSave}
      />

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteId} onOpenChange={(o) => !o && setDeleteId(null)}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-[15px] font-semibold text-slate-900">Delete Product</DialogTitle>
          </DialogHeader>
          <p className="text-[13px] text-slate-500 py-2">
            Are you sure you want to delete <strong className="text-slate-700">{products.find((p) => p.id === deleteId)?.name}</strong>?
            This action cannot be undone.
          </p>
          <DialogFooter className="gap-2 mt-4">
            <button onClick={() => setDeleteId(null)} className="px-4 h-10 rounded-lg border border-slate-200 text-slate-600 text-[13px] font-medium hover:bg-slate-50 active:scale-[0.98] transition-all">
              Cancel
            </button>
            <button onClick={() => deleteId && handleDelete(deleteId)} className="px-5 h-10 rounded-lg bg-red-500 text-white text-[13px] font-semibold hover:bg-red-600 active:scale-[0.98] transition-all">
              Delete
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

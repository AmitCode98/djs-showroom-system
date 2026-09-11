"use client"

import * as React from "react"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { SEED_ANNOUNCEMENTS } from "@/lib/data/admin"
import { MARQUEE_MESSAGES_BN } from "@/constants/marquee"
import type { AnnouncementItem } from "@/types/admin"
import { Plus, Trash, DotsSixVertical, Eye, EyeSlash } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export default function AnnouncementsPage() {
  const [items, setItems] = React.useState<AnnouncementItem[]>(SEED_ANNOUNCEMENTS)
  const [newText, setNewText] = React.useState("")
  const [contactMsg, setContactMsg] = React.useState("দোকানে প্রিমিয়াম জুয়েলারি পরামর্শ উপলব্ধ")
  const [saved, setSaved] = React.useState(false)

  function toggleActive(id: string) {
    setItems((prev) =>
      prev.map((item) => item.id === id ? { ...item, active: !item.active } : item)
    )
  }

  function deleteItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  function addItem() {
    if (!newText.trim()) return
    const newItem: AnnouncementItem = {
      id: `ann-${Date.now()}`,
      text: newText.trim(),
      lang: "bn",
      active: true,
      order: items.length + 1,
    }
    setItems((prev) => [...prev, newItem])
    setNewText("")
  }

  function handleSave() {
    // TODO: POST to /api/admin/announcements
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <AdminHeader
        title="Announcements"
        description="Manage Bengali marquee messages and showroom notices"
        actions={
          <button
            onClick={handleSave}
            className={cn(
              "px-4 h-8 rounded-md text-[12px] font-semibold transition-colors",
              saved
                ? "bg-emerald-500 text-white"
                : "bg-slate-900 text-white hover:bg-slate-700"
            )}
          >
            {saved ? "Saved ✓" : "Save Changes"}
          </button>
        }
      />

      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Bengali Marquee Messages */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="text-[13px] font-semibold text-slate-900">Top Strip Marquee Messages</h2>
            <p className="text-[12px] text-slate-400 mt-0.5">Bengali phrases displayed in the moving top strip. Toggle to show/hide each message.</p>
          </div>

          <div className="divide-y divide-slate-100">
            {items.map((item) => (
              <div key={item.id} className="group flex items-center gap-3 px-5 py-3">
                <DotsSixVertical weight="light" className="w-4 h-4 text-slate-300 group-hover:text-slate-400 cursor-grab shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className={cn(
                    "text-[14px] font-bengali",
                    item.active ? "text-slate-800" : "text-slate-400 line-through"
                  )}>
                    {item.text}
                  </p>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider">
                    {item.lang === "bn" ? "Bengali" : "English"}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => toggleActive(item.id)}
                    className={cn(
                      "flex items-center justify-center w-7 h-7 rounded-md transition-colors",
                      item.active
                        ? "text-emerald-600 hover:bg-emerald-50"
                        : "text-slate-400 hover:bg-slate-100"
                    )}
                    title={item.active ? "Deactivate" : "Activate"}
                  >
                    {item.active ? <Eye weight="light" className="w-4 h-4" /> : <EyeSlash weight="light" className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="flex items-center justify-center w-7 h-7 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                    title="Delete"
                  >
                    <Trash weight="light" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add new */}
          <div className="px-5 py-4 border-t border-slate-200 bg-slate-50">
            <div className="flex gap-2">
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addItem()}
                placeholder="নতুন ঘোষণা যোগ করুন..."
                className="flex-1 h-9 px-3 text-[13px] font-bengali rounded-lg border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
              <button
                onClick={addItem}
                className="flex items-center gap-1.5 px-3 h-9 rounded-lg bg-slate-900 text-white text-[12px] font-semibold hover:bg-slate-700 transition-colors"
              >
                <Plus weight="light" className="w-3.5 h-3.5" /> Add
              </button>
            </div>
          </div>
        </div>

        {/* Contact Strip Message */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="text-[13px] font-semibold text-slate-900">Consultation Strip Message</h2>
            <p className="text-[12px] text-slate-400 mt-0.5">Shown in the contact/info bar below the navbar.</p>
          </div>
          <div className="px-5 py-4 space-y-3">
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5 block">Bengali Version</label>
              <input
                type="text"
                value={contactMsg}
                onChange={(e) => setContactMsg(e.target.value)}
                className="w-full h-10 px-3 text-[14px] font-bengali rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5 block">English Version</label>
              <input
                type="text"
                defaultValue="PREMIUM JEWELLERY CONSULTATION AVAILABLE IN STORE"
                className="w-full h-10 px-3 text-[13px] rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="text-[13px] font-semibold text-slate-900">Live Preview</h2>
            <p className="text-[12px] text-slate-400 mt-0.5">How the active messages will appear in the top strip.</p>
          </div>
          <div className="p-5">
            <div className="w-full h-9 bg-slate-900 rounded-lg overflow-hidden flex items-center px-4">
              <p className="text-[13px] font-bengali text-yellow-400 whitespace-nowrap truncate">
                {items.filter((i) => i.active).map((i) => i.text).join("  ✦  ")}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

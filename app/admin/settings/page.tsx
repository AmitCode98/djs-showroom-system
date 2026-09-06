"use client"

import * as React from "react"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { DEFAULT_SETTINGS } from "@/lib/data/admin"
import type { ShowroomSettings } from "@/types/admin"
import { cn } from "@/lib/utils"

function FormField({
  label,
  children,
  hint,
}: {
  label: string
  children: React.ReactNode
  hint?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold text-slate-600 uppercase tracking-wider">{label}</label>
      {children}
      {hint && <p className="text-[11px] text-slate-400">{hint}</p>}
    </div>
  )
}

const inputCls = "h-10 px-3 text-[13px] rounded-lg border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 w-full"

export default function SettingsPage() {
  const [settings, setSettings] = React.useState<ShowroomSettings>(DEFAULT_SETTINGS)
  const [saved, setSaved] = React.useState(false)

  function update<K extends keyof ShowroomSettings>(key: K, value: ShowroomSettings[K]) {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  function updateAddress(key: keyof ShowroomSettings["address"], value: string) {
    setSettings((prev) => ({ ...prev, address: { ...prev.address, [key]: value } }))
  }

  function updateHours(key: keyof ShowroomSettings["hours"], value: string) {
    setSettings((prev) => ({ ...prev, hours: { ...prev.hours, [key]: value } }))
  }

  function handleSave() {
    // TODO: POST to /api/admin/settings
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <AdminHeader
        title="Settings"
        description="Manage showroom contact and operational details"
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

      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl space-y-6">
          {/* Showroom Identity */}
          <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
            <h2 className="text-[13px] font-semibold text-slate-900 pb-2 border-b border-slate-200">Showroom Identity</h2>
            <FormField label="Showroom Name">
              <input className={inputCls} value={settings.name} onChange={(e) => update("name", e.target.value)} />
            </FormField>
          </section>

          {/* Contact Info */}
          <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
            <h2 className="text-[13px] font-semibold text-slate-900 pb-2 border-b border-slate-200">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="Phone">
                <input className={inputCls} value={settings.phone} onChange={(e) => update("phone", e.target.value)} />
              </FormField>
              <FormField label="WhatsApp">
                <input className={inputCls} value={settings.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} />
              </FormField>
              <FormField label="Email" hint="Used for customer enquiries">
                <input className={inputCls} type="email" value={settings.email} onChange={(e) => update("email", e.target.value)} />
              </FormField>
            </div>
          </section>

          {/* Address */}
          <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
            <h2 className="text-[13px] font-semibold text-slate-900 pb-2 border-b border-slate-200">Store Address</h2>
            <FormField label="Address Line 1">
              <input className={inputCls} value={settings.address.line1} onChange={(e) => updateAddress("line1", e.target.value)} />
            </FormField>
            <div className="grid grid-cols-2 gap-4">
              <FormField label="City">
                <input className={inputCls} value={settings.address.city} onChange={(e) => updateAddress("city", e.target.value)} />
              </FormField>
              <FormField label="State">
                <input className={inputCls} value={settings.address.state} onChange={(e) => updateAddress("state", e.target.value)} />
              </FormField>
              <FormField label="Postal Code">
                <input className={inputCls} value={settings.address.postalCode} onChange={(e) => updateAddress("postalCode", e.target.value)} />
              </FormField>
            </div>
          </section>

          {/* Store Hours */}
          <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
            <h2 className="text-[13px] font-semibold text-slate-900 pb-2 border-b border-slate-200">Store Hours</h2>
            <FormField label="Weekdays (Mon–Sat)">
              <input className={inputCls} value={settings.hours.weekdays} onChange={(e) => updateHours("weekdays", e.target.value)} placeholder="Mon – Sat: 10am – 7pm" />
            </FormField>
            <FormField label="Weekend">
              <input className={inputCls} value={settings.hours.weekend} onChange={(e) => updateHours("weekend", e.target.value)} placeholder="Sunday: By Appointment" />
            </FormField>
          </section>

          {/* Consultation Message */}
          <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
            <h2 className="text-[13px] font-semibold text-slate-900 pb-2 border-b border-slate-200">Consultation Message</h2>
            <FormField label="Bengali Message" hint="Displayed in the contact strip below the navbar">
              <input
                className={`${inputCls} font-bengali text-[14px]`}
                value={settings.consultationMessage}
                onChange={(e) => update("consultationMessage", e.target.value)}
              />
            </FormField>
          </section>

          {/* Social Links */}
          <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
            <h2 className="text-[13px] font-semibold text-slate-900 pb-2 border-b border-slate-200">Social Links</h2>
            <FormField label="Instagram URL">
              <input className={inputCls} value={settings.instagram ?? ""} onChange={(e) => update("instagram", e.target.value)} placeholder="https://instagram.com/..." />
            </FormField>
            <FormField label="Facebook URL">
              <input className={inputCls} value={settings.facebook ?? ""} onChange={(e) => update("facebook", e.target.value)} placeholder="https://facebook.com/..." />
            </FormField>
          </section>
        </div>
      </main>
    </div>
  )
}

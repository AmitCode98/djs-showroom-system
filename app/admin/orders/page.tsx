"use client"

import * as React from "react"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { StatusBadge } from "@/components/admin/StatusBadge"
import { requestService } from "@/services/request.service"
import type { PurchaseRequest, RequestStatus } from "@/types/admin"
import {
  Clock,
  CaretRight,
  Package,
  DeviceTablet,
  ArrowCounterClockwise,
  Sparkle,
  SquaresFour,
  List,
  Check,
  ArrowRight,
  ChatCircle,
  CheckCircle,
} from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { EmptyState } from "@/components/admin/empty-state"

const STATUS_COLUMNS: { key: RequestStatus; title: string; subtitle: string; color: string }[] = [
  { key: "requested", title: "Requested", subtitle: "Awaiting Staff Pickup", color: "border-amber-400 bg-amber-50/50" },
  { key: "preparing", title: "Preparing", subtitle: "Retrieving from Vault", color: "border-blue-400 bg-blue-50/50" },
  { key: "ready", title: "Ready", subtitle: "Ready for Table Service", color: "border-purple-400 bg-purple-50/50" },
  { key: "completed", title: "Completed", subtitle: "Presented to Customer", color: "border-emerald-400 bg-emerald-50/50" },
]

function formatINR(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`
}

function formatTime(iso: string) {
  const d = new Date(iso)
  return d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true })
}

function timeAgo(iso: string) {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
  if (diff < 60) return `${diff}s ago`
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  return `${Math.floor(diff / 3600)}h ago`
}

export default function OrdersPage() {
  const [requests, setRequests] = React.useState<PurchaseRequest[]>([])
  const [activeTab, setActiveTab] = React.useState<string>("all")
  const [viewMode, setViewMode] = React.useState<"kanban" | "list">("kanban")
  const [expandedId, setExpandedId] = React.useState<string | null>(null)

  // Real-time live synchronization
  React.useEffect(() => {
    // Initial fetch
    setRequests(requestService.getRequests())

    // Subscribe to real-time events (same-tab custom events + cross-tab storage events)
    const unsubscribe = requestService.subscribe((updated) => {
      setRequests([...updated])
    })

    return () => unsubscribe()
  }, [])

  const handleStatusChange = (id: string, newStatus: RequestStatus) => {
    const updated = requestService.updateStatus(id, newStatus)
    if (updated) {
      toast.success(`Request ${id} status: ${newStatus.toUpperCase()}`, {
        description: `Station ${updated.tabletNumber} notified`,
      })
    }
  }

  const handleAdvance = (req: PurchaseRequest) => {
    const order: RequestStatus[] = ["requested", "preparing", "ready", "completed"]
    const idx = order.indexOf(req.status)
    if (idx < order.length - 1) {
      handleStatusChange(req.id, order[idx + 1])
    }
  }

  const handleResetSeed = () => {
    requestService.resetToSeed()
    toast.info("Sample requests reset to showroom default")
  }

  const filtered = activeTab === "all" ? requests : requests.filter((r) => r.status === activeTab)

  const counts: Record<string, number> = {
    all: requests.length,
    requested: requests.filter((r) => r.status === "requested").length,
    preparing: requests.filter((r) => r.status === "preparing").length,
    ready: requests.filter((r) => r.status === "ready").length,
    completed: requests.filter((r) => r.status === "completed").length,
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden bg-slate-50 min-h-screen">
      <AdminHeader
        title="Showroom Requests"
        description="Live in-store tablet requests from customer viewing trays"
      />

      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          {/* Status Tabs (min 48px touch targets) */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setActiveTab("all")}
              className={cn(
                "min-h-[48px] px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 flex items-center gap-2 border",
                activeTab === "all"
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              )}
            >
              <span>All Requests</span>
              <span className={cn(
                "px-2 py-0.5 rounded-full text-[10px] font-bold",
                activeTab === "all" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"
              )}>
                {counts.all}
              </span>
            </button>

            {STATUS_COLUMNS.map((col) => (
              <button
                key={col.key}
                onClick={() => setActiveTab(col.key)}
                className={cn(
                  "min-h-[48px] px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 flex items-center gap-2 border",
                  activeTab === col.key
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                )}
              >
                <span>{col.title}</span>
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-[10px] font-bold",
                  activeTab === col.key ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"
                )}>
                  {counts[col.key]}
                </span>
              </button>
            ))}
          </div>

          {/* Right Controls: View mode + Seed reset */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode("kanban")}
                className={cn(
                  "min-h-[44px] min-w-[44px] px-3 rounded-lg flex items-center gap-1.5 text-xs font-semibold transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]",
                  viewMode === "kanban" ? "bg-white text-slate-900 shadow-2xs" : "text-slate-500 hover:text-slate-800"
                )}
                title="Kanban Board View"
              >
                <SquaresFour weight="light" className="w-4 h-4" />
                <span className="hidden sm:inline">Kanban</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "min-h-[44px] min-w-[44px] px-3 rounded-lg flex items-center gap-1.5 text-xs font-semibold transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]",
                  viewMode === "list" ? "bg-white text-slate-900 shadow-2xs" : "text-slate-500 hover:text-slate-800"
                )}
                title="Table / List View"
              >
                <List weight="light" className="w-4 h-4" />
                <span className="hidden sm:inline">List</span>
              </button>
            </div>

            <button
              onClick={handleResetSeed}
              className="min-h-[48px] px-3.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] text-xs font-semibold flex items-center gap-2"
              title="Reset sample showroom requests"
            >
              <ArrowCounterClockwise weight="light" className="w-4 h-4" />
              <span className="hidden md:inline">Reset Data</span>
            </button>
          </div>
        </div>

        {/* Live Indicator Alert */}
        <div className="flex items-center justify-between px-5 py-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <span className="font-semibold uppercase tracking-wider">
              Live Real-Time Showroom Feed
            </span>
            <span className="hidden sm:inline text-amber-700">
              — Incoming tablet viewing tray requests appear instantly without page refresh
            </span>
          </div>
          <span className="font-semibold text-amber-800">
            {counts.requested} Pending Action
          </span>
        </div>

        {/* ─── KANBAN BOARD VIEW ─── */}
        {viewMode === "kanban" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
            {STATUS_COLUMNS.map((col) => {
              const colRequests = requests.filter((r) => r.status === col.key)
              return (
                <div
                  key={col.key}
                  className="flex flex-col gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 shadow-xs"
                >
                  {/* Column Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm tracking-wide">
                        {col.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {col.subtitle}
                      </p>
                    </div>
                    <span className="flex items-center justify-center min-w-6 h-6 px-2 rounded-full bg-slate-900 text-white text-xs font-bold">
                      {colRequests.length}
                    </span>
                  </div>

                  {/* Cards */}
                  {colRequests.length === 0 ? (
                    <div className="py-8 text-center text-xs text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
                      No requests {col.title.toLowerCase()}
                    </div>
                  ) : (
                    colRequests.map((req) => {
                      const waitMs = Date.now() - new Date(req.requestedAt).getTime()
                      const isOverdue = Math.floor(waitMs / 60000) >= 10 && req.status !== "completed"

                      return (
                        <div
                          key={req.id}
                          className="flex flex-col gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        >
                          {/* Top Row: ID, Tablet Station Badge, Time */}
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex flex-col">
                              <span className="font-mono font-bold text-sm text-slate-900">
                                {req.id}
                              </span>
                              <span className={cn(
                                "flex items-center gap-1 text-[11px] mt-0.5",
                                isOverdue ? "text-red-500 font-semibold" : "text-slate-400"
                              )}>
                                <Clock weight="light" className="w-3.5 h-3.5" />
                                {timeAgo(req.requestedAt)}
                                {isOverdue && (
                                  <span className="ml-1 px-1.5 py-0.5 bg-red-100 text-red-600 rounded text-[9px] font-bold uppercase">
                                    Overdue
                                  </span>
                                )}
                              </span>
                            </div>

                            {/* Prominent Tablet Badge */}
                            <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs shrink-0">
                              <DeviceTablet weight="light" className="w-3.5 h-3.5 text-amber-700" />
                              <span>{req.tabletNumber}</span>
                            </div>
                          </div>

                          {/* Customer Note Callout if provided */}
                          {req.notes && (
                            <div className="p-2.5 rounded-lg bg-[#FFF9ED] border border-[#F3E2BD] text-[#785412] text-xs flex items-start gap-2">
                              <ChatCircle weight="light" className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                              <div className="leading-snug">
                                <span className="font-semibold block text-[10px] uppercase tracking-wider text-[#A06C0C]">
                                  Customer Request Note
                                </span>
                                {req.notes}
                              </div>
                            </div>
                          )}

                          {/* Products List */}
                          <div className="flex flex-col gap-1.5 pt-1">
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                              Requested Pieces ({req.products.length})
                            </span>
                            <div className="flex flex-col gap-1">
                              {req.products.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between text-xs py-0.5">
                                  <span className="text-slate-700 truncate pr-2 font-medium">
                                    {item.productName}
                                  </span>
                                  <span className="text-slate-500 shrink-0 font-mono text-[11px]">
                                    {formatINR(item.price)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Total Amount & Primary Touch Action */}
                          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                            <div>
                              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Total</span>
                              <span className="text-sm font-bold text-slate-900 font-mono">
                                {formatINR(req.totalAmount)}
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <StatusBadge status={req.status} />
                            </div>
                          </div>

                          {/* 48px Touch Action Button */}
                          <div className="pt-1">
                            {req.status === "requested" && (
                              <button
                                type="button"
                                onClick={() => handleStatusChange(req.id, "preparing")}
                                className="w-full min-h-[48px] rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs uppercase tracking-wider active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center gap-2 shadow-sm"
                              >
                                <span>Start Preparing</span>
                                <ArrowRight weight="light" className="w-4 h-4" />
                              </button>
                            )}
                            {req.status === "preparing" && (
                              <button
                                type="button"
                                onClick={() => handleStatusChange(req.id, "ready")}
                                className="w-full min-h-[48px] rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center gap-2 shadow-sm"
                              >
                                <span>Mark Ready for Table</span>
                                <Check weight="light" className="w-4 h-4" />
                              </button>
                            )}
                            {req.status === "ready" && (
                              <button
                                type="button"
                                onClick={() => handleStatusChange(req.id, "completed")}
                                className="w-full min-h-[48px] rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center gap-2 shadow-sm"
                              >
                                <CheckCircle weight="light" className="w-4 h-4" />
                                <span>Complete Presentation</span>
                              </button>
                            )}
                            {req.status === "completed" && (
                              <div className="min-h-[48px] rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center justify-center gap-1.5">
                                <CheckCircle weight="light" className="w-4 h-4" />
                                <span>Service Completed</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          /* ─── LIST VIEW ─── */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_auto_auto_auto_auto] gap-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-5 py-4 border-b border-slate-200 bg-slate-50 hidden md:grid">
              <span>Request / Customer</span>
              <span className="px-4">Station</span>
              <span className="px-4">Pieces</span>
              <span className="px-4">Amount</span>
              <span className="px-4">Status</span>
              <span className="px-4 text-right">Action (48px Touch)</span>
            </div>

            {filtered.length === 0 && (
              <div className="py-16">
                <EmptyState
                  icon={Package}
                  title="No requests found"
                  description="There are currently no active requests matching this status."
                />
              </div>
            )}

            <div className="divide-y divide-slate-100">
              {filtered.map((req) => {
                const isLast = req.status === "completed"
                const isExpanded = expandedId === req.id
                const waitMs = Date.now() - new Date(req.requestedAt).getTime()
                const isOverdue = Math.floor(waitMs / 60000) >= 10 && !isLast

                return (
                  <div key={req.id} className="transition-colors hover:bg-slate-50/70">
                    <div
                      className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto_auto_auto] items-center px-5 py-4 cursor-pointer gap-3"
                      onClick={() => setExpandedId(isExpanded ? null : req.id)}
                    >
                      {/* ID + Time */}
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900">{req.id}</span>
                          <CaretRight weight="light" className={cn(
                            "w-4 h-4 text-slate-400 transition-transform",
                            isExpanded && "rotate-90"
                          )} />
                        </div>
                        <span className={cn(
                          "flex items-center gap-1.5 text-xs",
                          isOverdue ? "text-red-500 font-semibold" : "text-slate-400"
                        )}>
                          <Clock weight="light" className="w-3.5 h-3.5" />
                          {formatTime(req.requestedAt)} · {timeAgo(req.requestedAt)}
                          {isOverdue && (
                            <span className="ml-1 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider bg-red-100 text-red-600 border border-red-200">
                              Overdue
                            </span>
                          )}
                        </span>
                        {req.notes && (
                          <span className="text-xs text-amber-800 bg-amber-50 px-2 py-1 rounded-md border border-amber-200 inline-flex items-center gap-1 w-fit mt-1">
                            <ChatCircle weight="light" className="w-3 h-3" />
                            {req.notes}
                          </span>
                        )}
                      </div>

                      {/* Station */}
                      <div className="px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
                          <DeviceTablet weight="light" className="w-3.5 h-3.5 text-amber-700" />
                          {req.tabletNumber}
                        </span>
                      </div>

                      {/* Items */}
                      <div className="px-4 text-xs text-slate-600 font-medium">
                        {req.products.length} {req.products.length === 1 ? "piece" : "pieces"}
                      </div>

                      {/* Amount */}
                      <div className="px-4 text-sm font-bold text-slate-900">
                        {formatINR(req.totalAmount)}
                      </div>

                      {/* Status */}
                      <div className="px-4">
                        <StatusBadge status={req.status} />
                      </div>

                      {/* Action (48px height touch target) */}
                      <div className="px-4 flex justify-end">
                        {!isLast ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleAdvance(req)
                            }}
                            className="min-h-[48px] px-4 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-700 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] whitespace-nowrap flex items-center gap-2 shadow-sm"
                          >
                            {req.status === "requested" && <span>→ Start Preparing</span>}
                            {req.status === "preparing" && <span>→ Mark Ready</span>}
                            {req.status === "ready" && <span>✓ Complete</span>}
                          </button>
                        ) : (
                          <span className="min-h-[48px] px-4 flex items-center text-xs font-medium text-emerald-600">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expanded Detail Panel */}
                    {isExpanded && (
                      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col gap-3">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Curated Items Requested by Customer at Station {req.tabletNumber}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {req.products.map((prod, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between bg-white rounded-xl p-3 border border-slate-200"
                            >
                              <div className="flex flex-col">
                                <span className="text-xs font-semibold text-slate-800">
                                  {prod.productName}
                                </span>
                                <span className="text-[11px] text-slate-400">
                                  Item Code: {prod.productId}
                                </span>
                              </div>
                              <div className="text-right">
                                <span className="block text-xs font-bold text-slate-900">
                                  {formatINR(prod.price)}
                                </span>
                                <span className="text-[11px] text-slate-500">
                                  Qty: {prod.quantity}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

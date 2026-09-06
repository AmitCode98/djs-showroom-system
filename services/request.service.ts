import type { PurchaseRequest, RequestStatus, RequestedProduct } from "@/types/admin"
import { SEED_REQUESTS } from "@/lib/data/admin"
import type { TrayItem } from "@/types/tray"

export const STORAGE_KEY_REQUESTS = "djs_active_requests"
export const EVENT_REQUESTS_UPDATED = "djs:requests_updated"

export interface CreateShowroomRequestInput {
  tabletId: string
  items: TrayItem[]
  customerNote?: string
}

class ShowroomRequestService {
  /**
   * Reads current active requests from localStorage.
   * If empty, populates with SEED_REQUESTS for realistic showroom data.
   */
  getRequests(): PurchaseRequest[] {
    if (typeof window === "undefined") return SEED_REQUESTS

    try {
      const stored = localStorage.getItem(STORAGE_KEY_REQUESTS)
      if (!stored) {
        // Initialize with default seed requests
        localStorage.setItem(STORAGE_KEY_REQUESTS, JSON.stringify(SEED_REQUESTS))
        return SEED_REQUESTS
      }
      return JSON.parse(stored) as PurchaseRequest[]
    } catch (e) {
      console.error("Failed to read showroom requests from localStorage:", e)
      return SEED_REQUESTS
    }
  }

  /**
   * Persists requests array to localStorage and broadcasts the update event.
   */
  private saveAndBroadcast(requests: PurchaseRequest[]): void {
    if (typeof window === "undefined") return

    try {
      localStorage.setItem(STORAGE_KEY_REQUESTS, JSON.stringify(requests))

      // Dispatch custom in-tab event
      window.dispatchEvent(
        new CustomEvent<PurchaseRequest[]>(EVENT_REQUESTS_UPDATED, {
          detail: requests,
        })
      )

      // Storage event is natively triggered cross-tab by localStorage.setItem,
      // but dispatching manually guarantees same-tab listeners also wake up immediately.
    } catch (e) {
      console.error("Failed to save showroom requests to localStorage:", e)
    }
  }

  /**
   * Creates a new showroom purchase request from customer's viewing tray.
   */
  createRequest({ tabletId, items, customerNote }: CreateShowroomRequestInput): PurchaseRequest {
    const existing = this.getRequests()

    // Calculate total amount
    let totalAmount = 0
    const products: RequestedProduct[] = items.map((item) => {
      const unitPrice =
        typeof item.price === "number"
          ? item.price
          : parseInt(String(item.price).replace(/[^0-9]/g, ""), 10) || 0
      const subtotal = unitPrice * item.quantity
      totalAmount += subtotal

      const noteSuffix = item.customerNote ? ` (Note: "${item.customerNote}")` : ""
      return {
        productId: item.productId,
        productName: `${item.name}${noteSuffix}`,
        quantity: item.quantity,
        price: unitPrice,
      }
    })

    // Generate unique sequential-style request code
    const timestamp = Date.now()
    const count = existing.length + 1
    const id = `REQ-${String(count).padStart(3, "0")}`

    // Aggregate any notes
    const itemNotes = items
      .filter((i) => i.customerNote && i.customerNote.trim().length > 0)
      .map((i) => `${i.name}: ${i.customerNote}`)
      .join(" | ")

    const finalNotes = [customerNote, itemNotes].filter(Boolean).join(" • ")

    const newRequest: PurchaseRequest = {
      id,
      tabletNumber: tabletId || "T-01",
      products,
      totalAmount,
      requestedAt: new Date(timestamp).toISOString(),
      status: "requested",
      notes: finalNotes || undefined,
    }

    const updated = [newRequest, ...existing]
    this.saveAndBroadcast(updated)
    return newRequest
  }

  /**
   * Updates status of an existing request.
   */
  updateStatus(id: string, newStatus: RequestStatus): PurchaseRequest | null {
    const requests = this.getRequests()
    let updatedItem: PurchaseRequest | null = null

    const updated = requests.map((req) => {
      if (req.id === id) {
        updatedItem = { ...req, status: newStatus }
        return updatedItem
      }
      return req
    })

    if (updatedItem) {
      this.saveAndBroadcast(updated)
    }

    return updatedItem
  }

  /**
   * Deletes a request from the active list.
   */
  deleteRequest(id: string): void {
    const requests = this.getRequests()
    const filtered = requests.filter((r) => r.id !== id)
    this.saveAndBroadcast(filtered)
  }

  /**
   * Resets all requests back to SEED_REQUESTS.
   */
  resetToSeed(): void {
    this.saveAndBroadcast(SEED_REQUESTS)
  }

  /**
   * Subscribes to changes in showroom requests (both same-window custom events and cross-tab storage events).
   */
  subscribe(callback: (requests: PurchaseRequest[]) => void): () => void {
    if (typeof window === "undefined") return () => {}

    const handleCustom = (e: Event) => {
      const customEvent = e as CustomEvent<PurchaseRequest[]>
      callback(customEvent.detail || this.getRequests())
    }

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY_REQUESTS && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue) as PurchaseRequest[]
          callback(parsed)
        } catch {
          callback(this.getRequests())
        }
      }
    }

    window.addEventListener(EVENT_REQUESTS_UPDATED, handleCustom)
    window.addEventListener("storage", handleStorage)

    return () => {
      window.removeEventListener(EVENT_REQUESTS_UPDATED, handleCustom)
      window.removeEventListener("storage", handleStorage)
    }
  }
}

export const requestService = new ShowroomRequestService()

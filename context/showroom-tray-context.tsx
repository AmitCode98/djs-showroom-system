"use client"

import * as React from "react"
import { toast } from "sonner"
import { Check, Trash } from "@phosphor-icons/react"
import type { TrayItem, ShowroomTrayContextType } from "@/types/tray"

const STORAGE_KEY_TRAY = "djs_showroom_tray"
const STORAGE_KEY_TABLET = "djs_tablet_id"
const DEFAULT_TABLET_ID = "T-01"

const ShowroomTrayContext = React.createContext<ShowroomTrayContextType | undefined>(undefined)

export function ShowroomTrayProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<TrayItem[]>([])
  const [tabletId, setTabletIdState] = React.useState<string>(DEFAULT_TABLET_ID)
  const [isTrayOpen, setIsTrayOpen] = React.useState<boolean>(false)
  const [isHydrated, setIsHydrated] = React.useState<boolean>(false)

  // Initialize from localStorage on client mount
  React.useEffect(() => {
    try {
      const savedTray = localStorage.getItem(STORAGE_KEY_TRAY)
      if (savedTray) {
        setItems(JSON.parse(savedTray))
      }

      const savedTabletId = localStorage.getItem(STORAGE_KEY_TABLET)
      if (savedTabletId) {
        setTabletIdState(savedTabletId)
      } else {
        localStorage.setItem(STORAGE_KEY_TABLET, DEFAULT_TABLET_ID)
      }
    } catch (e) {
      console.warn("Failed to load Showroom Tray from localStorage:", e)
    } finally {
      setIsHydrated(true)
    }
  }, [])

  // Persist items changes
  React.useEffect(() => {
    if (!isHydrated) return
    try {
      localStorage.setItem(STORAGE_KEY_TRAY, JSON.stringify(items))
    } catch (e) {
      console.warn("Failed to save Showroom Tray to localStorage:", e)
    }
  }, [items, isHydrated])

  // Persist tabletId changes
  const setTabletId = React.useCallback((newId: string) => {
    const formatted = newId.trim() || DEFAULT_TABLET_ID
    setTabletIdState(formatted)
    try {
      localStorage.setItem(STORAGE_KEY_TABLET, formatted)
      toast.success(`Tablet identifier set to "${formatted}"`)
    } catch (e) {
      console.warn("Failed to save tablet identifier:", e)
    }
  }, [])

  const addItem = React.useCallback(
    (
      product: {
        id: string
        slug: string
        name: string
        category: string
        price: number | string
        image?: string
        material?: string
        purity?: string
        weight?: string
      },
      quantity: number = 1,
      note: string = ""
    ) => {
      const numericPrice =
        typeof product.price === "number"
          ? product.price
          : parseFloat(String(product.price).replace(/[^0-9.]/g, "")) || 0

      let wasAlreadyInTray = false
      let finalQty = quantity

      setItems((prevItems) => {
        const existingIndex = prevItems.findIndex((item) => item.productId === product.id)

        if (existingIndex > -1) {
          wasAlreadyInTray = true
          const updated = [...prevItems]
          const current = updated[existingIndex]
          finalQty = current.quantity + quantity
          updated[existingIndex] = {
            ...current,
            quantity: finalQty,
            customerNote: note.trim() || current.customerNote,
          }
          return updated
        }

        const newItem: TrayItem = {
          productId: product.id,
          slug: product.slug,
          name: product.name,
          category: product.category,
          price: numericPrice,
          image: product.image,
          material: product.material,
          purity: product.purity,
          weight: product.weight,
          quantity: Math.max(1, quantity),
          customerNote: note.trim() || undefined,
          addedAt: new Date().toISOString(),
        }

        return [...prevItems, newItem]
      })

      // Stable deterministic toast ID: Prevents duplicate queuing and phantom blank white cards
      const toastId = `tray-item-${product.id}`
      toast.success(
        wasAlreadyInTray
          ? `Updated "${product.name}" in Viewing Tray (${finalQty} pieces)`
          : `Added "${product.name}" to Viewing Tray`,
        {
          id: toastId,
          description: `Tablet: ${tabletId} · Item ready for showroom staff review`,
          icon: (
            <div className="w-6 h-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/45 flex items-center justify-center text-[#7A1C1C] shrink-0">
              <Check weight="bold" className="w-3.5 h-3.5 text-[#7A1C1C]" />
            </div>
          ),
          action: {
            label: "View Tray",
            onClick: () => setIsTrayOpen(true),
          },
        }
      )
    },
    [tabletId, setIsTrayOpen]
  )

  const removeItem = React.useCallback(
    (productId: string) => {
      let removedTarget: TrayItem | undefined

      setItems((prev) => {
        const target = prev.find((item) => item.productId === productId)
        if (target) {
          removedTarget = target
        }
        return prev.filter((item) => item.productId !== productId)
      })

      if (removedTarget) {
        const itemToRestore = removedTarget
        toast(`Removed "${itemToRestore.name}" from Viewing Tray`, {
          id: `tray-item-${productId}`,
          description: "Piece removed from in-person consultation tray",
          icon: (
            <div className="w-6 h-6 rounded-full bg-[#7A1C1C]/10 border border-[#7A1C1C]/35 flex items-center justify-center text-[#7A1C1C] shrink-0">
              <Trash weight="bold" className="w-3.5 h-3.5 text-[#7A1C1C]" />
            </div>
          ),
          action: {
            label: "Undo",
            onClick: () => {
              addItem(
                {
                  id: itemToRestore.productId,
                  slug: itemToRestore.slug,
                  name: itemToRestore.name,
                  category: itemToRestore.category,
                  price: itemToRestore.price,
                  image: itemToRestore.image,
                  material: itemToRestore.material,
                  purity: itemToRestore.purity,
                  weight: itemToRestore.weight,
                },
                itemToRestore.quantity,
                itemToRestore.customerNote || ""
              )
            },
          },
        })
      }
    },
    [addItem]
  )

  const updateQuantity = React.useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId)
        return
      }

      setItems((prev) =>
        prev.map((item) => (item.productId === productId ? { ...item, quantity } : item))
      )
    },
    [removeItem]
  )

  const updateItemNote = React.useCallback((productId: string, note: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, customerNote: note.trim() || undefined }
          : item
      )
    )
  }, [])

  const clearTray = React.useCallback(() => {
    setItems([])
    try {
      localStorage.removeItem(STORAGE_KEY_TRAY)
    } catch (e) {
      console.warn("Failed to clear tray from localStorage:", e)
    }
  }, [])

  const isInTray = React.useCallback(
    (productId: string) => {
      return items.some((item) => item.productId === productId)
    },
    [items]
  )

  const toggleTray = React.useCallback(() => {
    setIsTrayOpen((prev) => !prev)
  }, [])

  const totalItemsCount = React.useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0)
  }, [items])

  const totalEstimatedAmount = React.useMemo(() => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }, [items])

  const value: ShowroomTrayContextType = {
    items,
    tabletId,
    setTabletId,
    addItem,
    removeItem,
    updateQuantity,
    updateItemNote,
    clearTray,
    isInTray,
    totalItemsCount,
    totalEstimatedAmount,
    isTrayOpen,
    setIsTrayOpen,
    toggleTray,
  }

  return (
    <ShowroomTrayContext.Provider value={value}>
      {children}
    </ShowroomTrayContext.Provider>
  )
}

export function useShowroomTray(): ShowroomTrayContextType {
  const context = React.useContext(ShowroomTrayContext)
  if (!context) {
    throw new Error("useShowroomTray must be used within a <ShowroomTrayProvider />")
  }
  return context
}

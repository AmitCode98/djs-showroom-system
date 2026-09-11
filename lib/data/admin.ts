// ============================================================
// ADMIN SEED DATA — Purchase Requests
// Replace with real API data once backend is connected.
// ============================================================

import type { PurchaseRequest, AnnouncementItem, HomepageCuration, ShowroomSettings } from "@/types/admin"

export const SEED_REQUESTS: PurchaseRequest[] = [
  {
    id: "REQ-001",
    tabletNumber: "T-01",
    products: [
      { productId: "prod_001", productName: "Royal Polki Necklace", quantity: 1, price: 245000 },
      { productId: "prod_003", productName: "Emerald Drop Earrings", quantity: 1, price: 125000 },
    ],
    totalAmount: 370000,
    requestedAt: new Date(Date.now() - 1000 * 60 * 8).toISOString(),
    status: "preparing",
  },
  {
    id: "REQ-002",
    tabletNumber: "T-03",
    products: [
      { productId: "prod_002", productName: "Classic Diamond Choker", quantity: 1, price: 185000 },
    ],
    totalAmount: 185000,
    requestedAt: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
    status: "ready",
  },
  {
    id: "REQ-003",
    tabletNumber: "T-02",
    products: [
      { productId: "prod_004", productName: "Heritage Gold Bangles", quantity: 2, price: 95000 },
      { productId: "prod_005", productName: "Sovereign Necklace", quantity: 1, price: 285000 },
    ],
    totalAmount: 475000,
    requestedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    status: "completed",
  },
  {
    id: "REQ-004",
    tabletNumber: "T-01",
    products: [
      { productId: "prod_006", productName: "Eternal Band Ring", quantity: 1, price: 142000 },
    ],
    totalAmount: 142000,
    requestedAt: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
    status: "requested",
  },
  {
    id: "REQ-005",
    tabletNumber: "T-04",
    products: [
      { productId: "prod_007", productName: "Celeste Bracelet", quantity: 1, price: 320000 },
      { productId: "prod_001", productName: "Royal Polki Necklace", quantity: 1, price: 245000 },
    ],
    totalAmount: 565000,
    requestedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    status: "completed",
  },
]

export const SEED_ANNOUNCEMENTS: AnnouncementItem[] = [
  { id: "ann-1", text: "বিশ্বস্ত সোনার গহনার অভিজ্ঞতা", lang: "bn", active: true, order: 1 },
  { id: "ann-2", text: "প্রিমিয়াম ইন-স্টোর জুয়েলারি পরিষেবা", lang: "bn", active: true, order: 2 },
  { id: "ann-3", text: "হলমার্কড সোনা ও হীরের সংগ্রহ", lang: "bn", active: true, order: 3 },
  { id: "ann-4", text: "আধুনিক রুচির জন্য বিশেষ সংগ্রহ", lang: "bn", active: true, order: 4 },
  { id: "ann-5", text: "দোকানে সরাসরি গহনা নির্বাচন সুবিধা", lang: "bn", active: true, order: 5 },
  { id: "ann-6", text: "অভিজাত গহনার বিশ্বস্ত ঠিকানা", lang: "bn", active: true, order: 6 },
  { id: "ann-7", text: "নিখুঁত কারিগরিতে তৈরি বিশেষ সংগ্রহ", lang: "bn", active: false, order: 7 },
]

export const DEFAULT_HOMEPAGE_CURATION: HomepageCuration = {
  featured: {
    id: "featured",
    label: "Featured Products",
    visible: true,
    productIds: ["prod_005", "prod_006", "prod_007"],
  },
  newArrivals: {
    id: "new-arrivals",
    label: "New Arrivals",
    visible: true,
    productIds: ["prod_001", "prod_002", "prod_003", "prod_004"],
  },
  bestsellers: {
    id: "bestsellers",
    label: "Bestsellers",
    visible: true,
    productIds: [],
  },
  heroBannerUrl: "https://images.unsplash.com/photo-1629391434033-59d770c19ef9?q=80&w=1600",
}

export const DEFAULT_SETTINGS: ShowroomSettings = {
  name: "DJS Showroom",
  phone: "+91 70744 62770",
  whatsapp: "+91 70744 62770",
  email: "duttajewellers@gmail.com",
  address: {
    line1: "123 Luxury Avenue",
    city: "Kolkata",
    state: "West Bengal",
    postalCode: "700001",
  },
  hours: {
    weekdays: "Mon – Sat: 10am – 7pm",
    weekend: "Sunday: By Appointment",
  },
  consultationMessage: "দোকানে প্রিমিয়াম জুয়েলারি পরামর্শ উপলব্ধ",
  instagram: "https://instagram.com/djsshowroom",
  facebook: "https://facebook.com/djsshowroom",
}

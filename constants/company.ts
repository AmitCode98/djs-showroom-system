// ============================================================
// COMPANY CONSTANTS
// ============================================================

export const COMPANY = {
  name: "DJS Showroom",
  tagline: "Elegance Forged in Pure Gold.",
  foundedYear: 1920,
  email: "duttajewellers@gmail.com",
  phone: "+91 70744 62770",
  address: {
    line1: "123 Luxury Avenue",
    city: "New York",
    state: "NY",
    postalCode: "10036",
    country: "USA",
    formatted: "123 Luxury Avenue, Diamond District, NY 10036",
  },
  hours: {
    weekdays: "Mon – Sat: 10am – 7pm",
    weekend: "Sunday: By Appointment",
  },
  social: {
    instagram: "https://instagram.com/djsshowroom",
    facebook: "https://facebook.com/djsshowroom",
    twitter: "https://twitter.com/djsshowroom",
  },
} as const

export const TRUST_INDICATORS = [
  { value: "100+", label: "Years Heritage" },
  { value: "24k", label: "Purest Gold" },
  { value: "10k+", label: "Pieces Crafted" },
  { value: "5★", label: "Client Rating" },
] as const

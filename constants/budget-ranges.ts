import type { BudgetRange } from "@/types"

export const BUDGET_RANGES: BudgetRange[] = [
  { 
    id: 1, 
    slug: "under-10k",
    title: "Under ₹10K", 
    bengaliBadge: "১০ হাজার টাকার নিচে",
    description: "Elegant daily wear selections",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", 
    href: "/products?budget=under-10k" 
  },
  { 
    id: 2, 
    slug: "10k-25k",
    title: "₹10K – ₹25K", 
    bengaliBadge: "১০ – ২৫ হাজার টাকা",
    description: "Perfect for gifting & celebrations",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop", 
    href: "/products?budget=10k-25k" 
  },
  { 
    id: 3, 
    slug: "25k-50k",
    title: "₹25K – ₹50K", 
    bengaliBadge: "২৫ – ৫০ হাজার টাকা",
    description: "Curated premium gold collections",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", 
    href: "/products?budget=25k-50k" 
  },
  { 
    id: 4, 
    slug: "50k-1l",
    title: "₹50K – ₹1L", 
    bengaliBadge: "৫০ হাজার – ১ লাখ",
    description: "Refined bridal & occasion jewellery",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", 
    href: "/products?budget=50k-1l" 
  },
  { 
    id: 5, 
    slug: "luxury",
    title: "Luxury Collection", 
    bengaliBadge: "রাজকীয় ব্রাইডাল গহনা",
    description: "Exclusive handcrafted masterpieces",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop", 
    href: "/products?budget=luxury" 
  },
]

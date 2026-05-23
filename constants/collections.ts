export interface CollectionData {
  id: number
  title: string
  image: string
  href: string
}

export interface BudgetData {
  id: number
  title: string
  subtitle: string
  image: string
  href: string
}

export const COLLECTIONS: CollectionData[] = [
  { id: 1, title: "Necklace", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", href: "/categories/necklace" },
  { id: 2, title: "Chokers", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop", href: "/categories/chokers" },
  { id: 3, title: "Bangles", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", href: "/categories/bangles" },
  { id: 4, title: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", href: "/categories/earrings" },
  { id: 5, title: "Sitahar", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", href: "/categories/sitahar" },
  { id: 6, title: "Chains", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", href: "/categories/chains" },
  { id: 7, title: "Rings", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", href: "/categories/rings" },
  { id: 8, title: "Pendants", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", href: "/categories/pendants" },
  { id: 9, title: "Pearl & Shell", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", href: "/categories/pearl-shell" },
  { id: 10, title: "Lahari", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop", href: "/categories/lahari" },
  { id: 11, title: "Sankha and Pola", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", href: "/categories/sankha-pola" },
  { id: 12, title: "Tiara and Tikli", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", href: "/categories/tiara-tikli" },
  { id: 13, title: "Mantasha", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", href: "/categories/mantasha" },
  { id: 14, title: "Tie Chains", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", href: "/categories/tie-chains" },
]

export const BUDGETS: BudgetData[] = [
  { 
    id: 1, 
    title: "Under ₹10K", 
    subtitle: "Elegant daily wear selections",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", 
    href: "/categories?budget=under-10k" 
  },
  { 
    id: 2, 
    title: "₹10K – ₹25K", 
    subtitle: "Perfect for gifting & celebrations",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop", 
    href: "/categories?budget=10k-25k" 
  },
  { 
    id: 3, 
    title: "₹25K – ₹50K", 
    subtitle: "Curated premium gold collections",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", 
    href: "/categories?budget=25k-50k" 
  },
  { 
    id: 4, 
    title: "₹50K – ₹1L", 
    subtitle: "Refined bridal & occasion jewellery",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", 
    href: "/categories?budget=50k-1l" 
  },
  { 
    id: 5, 
    title: "Luxury Collection", 
    subtitle: "Exclusive handcrafted masterpieces",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", 
    href: "/categories?budget=luxury" 
  },
]

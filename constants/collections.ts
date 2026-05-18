export interface CollectionData {
  id: number
  title: string
  image: string
  href: string
}

export interface BudgetData {
  id: number
  title: string
  href: string
}

export const COLLECTIONS: CollectionData[] = [
  { id: 1, title: "Necklace", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", href: "/collections/necklace" },
  { id: 2, title: "Chokers", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop", href: "/collections/chokers" },
  { id: 3, title: "Bangles", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", href: "/collections/bangles" },
  { id: 4, title: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", href: "/collections/earrings" },
  { id: 5, title: "Sitahar", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", href: "/collections/sitahar" },
  { id: 6, title: "Lahari", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop", href: "/collections/lahari" },
  { id: 7, title: "Chur", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", href: "/collections/chur" },
  { id: 8, title: "Pearl & Shell", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", href: "/collections/pearl-shell" },
  { id: 9, title: "Chains", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", href: "/collections/chains" },
  { id: 10, title: "Tie Chains", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", href: "/collections/tie-chains" },
  { id: 11, title: "Sankha and Pola", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", href: "/collections/sankha-pola" },
  { id: 12, title: "Tiara and Tikli", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", href: "/collections/tiara-tikli" },
  { id: 13, title: "Mantasha", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", href: "/collections/mantasha" },
  { id: 14, title: "Rings", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", href: "/collections/rings" },
  { id: 15, title: "Pendants", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", href: "/collections/pendants" },
]

export const BUDGETS: BudgetData[] = [
  { id: 1, title: "Under ₹1999", href: "/collections?budget=1999" },
  { id: 2, title: "Under ₹2999", href: "/collections?budget=2999" },
  { id: 3, title: "Under ₹3499", href: "/collections?budget=3499" },
  { id: 4, title: "Under ₹3999", href: "/collections?budget=3999" },
  { id: 5, title: "Under ₹4999", href: "/collections?budget=4999" },
  { id: 6, title: "Above ₹5000", href: "/collections?budget=5000-plus" },
]

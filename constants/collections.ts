export interface CollectionData {
  id: number
  title: string
  bengaliTitle?: string
  image: string
  href: string
}

export interface BudgetData {
  id: number
  title: string
  subtitle: string
  bengaliBadge?: string
  image: string
  href: string
}

export const COLLECTIONS: CollectionData[] = [
  { id: 1, title: "Necklace", bengaliTitle: "গলার হার", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", href: "/categories/necklace" },
  { id: 2, title: "Chokers", bengaliTitle: "চিক ও চোখার", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop", href: "/categories/chokers" },
  { id: 3, title: "Bangles", bengaliTitle: "সোনার বালা", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", href: "/categories/bangles" },
  { id: 4, title: "Earrings", bengaliTitle: "কানের দুল ও ঝুমকো", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", href: "/categories/earrings" },
  { id: 5, title: "Sitahar", bengaliTitle: "সীতাহার", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", href: "/categories/sitahar" },
  { id: 6, title: "Chains", bengaliTitle: "সোনার চেন", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", href: "/categories/chains" },
  { id: 7, title: "Rings", bengaliTitle: "সোনার আংটি", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", href: "/categories/rings" },
  { id: 8, title: "Pendants", bengaliTitle: "লকেট ও পেন্ডেন্ট", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", href: "/categories/pendants" },
  { id: 9, title: "Pearl & Shell", bengaliTitle: "মুক্তার গহনা", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", href: "/categories/pearl-shell" },
  { id: 10, title: "Lahari", bengaliTitle: "লাহারী হার", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop", href: "/categories/lahari" },
  { id: 11, title: "Sankha and Pola", bengaliTitle: "শাঁখা ও পোলা", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", href: "/categories/sankha-pola" },
  { id: 12, title: "Tiara and Tikli", bengaliTitle: "টায়রা ও টিকলি", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", href: "/categories/tiara-tikli" },
  { id: 13, title: "Mantasha", bengaliTitle: "মানতাসা", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", href: "/categories/mantasha" },
  { id: 14, title: "Tie Chains", bengaliTitle: "টাই চেন", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", href: "/categories/tie-chains" },
  { id: 15, title: "Men's Collection", bengaliTitle: "পুরুষদের গহনা", image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=800&auto=format&fit=crop", href: "/categories/mens-collection" },
  { id: 16, title: "Kid's Collection", bengaliTitle: "শিশুদের গহনা", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", href: "/categories/kids-collection" },
]

export const BUDGETS: BudgetData[] = [
  { 
    id: 1, 
    title: "Under ₹10K", 
    subtitle: "Elegant daily wear selections",
    bengaliBadge: "১০ হাজার টাকার নিচে",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", 
    href: "/products?budget=under-10k" 
  },
  { 
    id: 2, 
    title: "₹10K – ₹25K", 
    subtitle: "Perfect for gifting & celebrations",
    bengaliBadge: "১০ – ২৫ হাজার টাকা",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop", 
    href: "/products?budget=10k-25k" 
  },
  { 
    id: 3, 
    title: "₹25K – ₹50K", 
    subtitle: "Curated premium gold collections",
    bengaliBadge: "২৫ – ৫০ হাজার টাকা",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", 
    href: "/products?budget=25k-50k" 
  },
  { 
    id: 4, 
    title: "₹50K – ₹1L", 
    subtitle: "Refined bridal & occasion jewellery",
    bengaliBadge: "৫০ হাজার – ১ লাখ",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", 
    href: "/products?budget=50k-1l" 
  },
  { 
    id: 5, 
    title: "Luxury Collection", 
    subtitle: "Exclusive handcrafted masterpieces",
    bengaliBadge: "রাজকীয় ব্রাইডাল গহনা",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop", 
    href: "/products?budget=luxury" 
  },
]

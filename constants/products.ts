import type { Product } from "@/types"

export const PRODUCTS: Product[] = [
  {
    id: "prod_001",
    slug: "royal-polki-necklace",
    name: "Royal Polki Necklace",
    category: "Necklace",
    subcategory: "necklace",
    price: 245000,
    status: "in_stock",
    inStock: true,
    newArrival: true,
    description: "A regal expression of uncut diamond artistry. Crafted by master artisans in the Mughal and Bengali tradition.",
    highlights: ["Handcrafted Finish", "Bengali Heritage Design", "Bridal Collection", "Uncut Diamond Setting"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", alt: "Royal Polki Necklace" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_002",
    slug: "classic-diamond-choker",
    name: "Classic Diamond Choker",
    category: "Chokers",
    subcategory: "chokers",
    price: 185000,
    status: "in_stock",
    inStock: true,
    newArrival: true,
    description: "Refined and timeless, this diamond choker is designed for the modern bride seeking heritage elegance.",
    highlights: ["Hallmarked 22k Gold", "Bridal Collection", "Lightweight Wear", "Custom Sizing Available"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop", alt: "Classic Diamond Choker" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_003",
    slug: "emerald-drop-earrings",
    name: "Emerald Drop Earrings",
    category: "Earrings",
    subcategory: "earrings",
    price: 125000,
    status: "in_stock",
    inStock: true,
    newArrival: true,
    description: "Vivid Colombian emeralds suspended in hand-engraved 22k gold drops.",
    highlights: ["Colombian Emeralds", "Hand-Engraved Gold", "Statement Collection", "Festive & Bridal Wear"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", alt: "Emerald Drop Earrings" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_004",
    slug: "heritage-gold-bangles",
    name: "Heritage Gold Bangles",
    category: "Bangles",
    subcategory: "bangles",
    price: 95000,
    status: "in_stock",
    inStock: true,
    newArrival: true,
    description: "Inspired by centuries-old Bengali goldsmith traditions, these bangles carry the soul of artisan craftsmanship.",
    highlights: ["Handcrafted Finish", "Bengali Heritage Design", "Lightweight Wear", "Heirloom Quality"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", alt: "Heritage Gold Bangles" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_005",
    slug: "sovereign-necklace",
    name: "Sovereign Necklace",
    category: "Necklace",
    subcategory: "necklace",
    price: 285000,
    status: "in_stock",
    inStock: true,
    featured: true,
    images: {
      main: { url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop", alt: "Sovereign Necklace" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_006",
    slug: "eternal-band-ring",
    name: "Eternal Band Ring",
    category: "Rings",
    subcategory: "rings",
    price: 42000,
    status: "in_stock",
    inStock: true,
    featured: true,
    images: {
      main: { url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop", alt: "Eternal Band Ring" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_007",
    slug: "celeste-bracelet",
    name: "Celeste Bracelet",
    category: "Mantasha",
    subcategory: "mantasha",
    price: 320000,
    status: "in_stock",
    inStock: true,
    featured: true,
    images: {
      main: { url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", alt: "Celeste Bracelet" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_008",
    slug: "aparupa-bridal-sitahar",
    name: "Aparupa Bridal Sitahar",
    category: "Sitahar",
    subcategory: "sitahar",
    price: 345000,
    status: "in_stock",
    inStock: true,
    featured: true,
    description: "Grand traditional Bengali multi-tier Sitahar with royal filigree motifs and delicate ruby accents.",
    highlights: ["22k BIS Hallmarked Pure Gold", "Multi-Tier Handcrafted Filigree", "Signature Bengali Bridal Wear"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", alt: "Aparupa Bridal Sitahar" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_009",
    slug: "kolkata-jadao-sankha-bandhano",
    name: "Kolkata Jadao Sankha Bandhano",
    category: "Sankha and Pola",
    subcategory: "sankha-pola",
    price: 48000,
    status: "in_stock",
    inStock: true,
    newArrival: true,
    description: "Natural conch shell Sankha encased in ornate 22k gold wirework and traditional floral engravings.",
    highlights: ["Natural Conch Shell", "22k Gold Wire Binding", "Bengali Wedding Essential"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", alt: "Kolkata Jadao Sankha Bandhano" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_010",
    slug: "royal-filigree-pola-badhano",
    name: "Royal Filigree Pola Badhano",
    category: "Sankha and Pola",
    subcategory: "sankha-pola",
    price: 42000,
    status: "in_stock",
    inStock: true,
    newArrival: true,
    description: "Deep red coral Pola with delicate gold crown leaf motifs, crafted for bridal prosperity.",
    highlights: ["Genuine Red Coral", "Hallmarked 22k Gold Wrap", "Traditional Bengali Craft"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", alt: "Royal Filigree Pola Badhano" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_011",
    slug: "mayur-mayuri-gold-mantasha",
    name: "Mayur Mayuri Gold Mantasha",
    category: "Mantasha",
    subcategory: "mantasha",
    price: 178000,
    status: "in_stock",
    inStock: true,
    featured: true,
    description: "Extravagant broad gold bracelet featuring intricate peacock feather engravings and adjustable chain fastening.",
    highlights: ["Broad Bengali Mantasha", "Peacock Repoussé Art", "22k 916 Hallmark"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", alt: "Mayur Mayuri Gold Mantasha" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_012",
    slug: "shona-tiara-tikli-set",
    name: "Shona Tiara & Tikli Set",
    category: "Tiara and Tikli",
    subcategory: "tiara-tikli",
    price: 92000,
    status: "in_stock",
    inStock: true,
    newArrival: true,
    description: "Artisanal forehead ornament adorned with pearls and crescent gold filigree for the traditional bride.",
    highlights: ["Forehead Crown & Maang Tikka", "Pure 22k Gold", "Heirloom Bridal Piece"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", alt: "Shona Tiara & Tikli Set" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_013",
    slug: "navratna-lahari-haar",
    name: "Navratna Lahari Haar",
    category: "Lahari",
    subcategory: "lahari",
    price: 215000,
    status: "in_stock",
    inStock: true,
    description: "Cascading five-layer gold chain with auspicious precious gemstones, creating harmonious movement.",
    highlights: ["Five Strand Cascading Design", "Auspicious Navratna Stones", "Handmade Gold Chains"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop", alt: "Navratna Lahari Haar" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_014",
    slug: "padma-pearl-shell-choker",
    name: "Padma Pearl & Shell Choker",
    category: "Pearl & Shell",
    subcategory: "pearl-shell",
    price: 68000,
    status: "in_stock",
    inStock: true,
    description: "Lustrous Basra pearls woven into a lotus gold centerpiece, evoking vintage aristocratic Bengal charm.",
    highlights: ["Natural Basra Pearls", "22k Lotus Carving", "Soft Velvet Tie Back"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", alt: "Padma Pearl & Shell Choker" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_015",
    slug: "solid-22k-biswa-chains",
    name: "Solid 22k Biswa Chain",
    category: "Chains",
    subcategory: "chains",
    price: 84000,
    status: "in_stock",
    inStock: true,
    description: "Strong hand-linked heavy gold chain built for daily prestige and family heritage passing.",
    highlights: ["Solid Linked 22k Gold", "Durable In-Store Lifetime Polish", "Unisex Elegance"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", alt: "Solid 22k Biswa Chain" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_016",
    slug: "minakari-ganesha-pendant",
    name: "Minakari Ganesha Pendant",
    category: "Pendants",
    subcategory: "pendants",
    price: 24000,
    status: "in_stock",
    inStock: true,
    description: "Devotional Lord Ganesha motif enhanced with authentic red and green Meenakari enamel on 22k gold.",
    highlights: ["Hand-Painted Meenakari Enamel", "Temple Jewellery Inspired", "BIS 916 Stamp"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", alt: "Minakari Ganesha Pendant" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_017",
    slug: "daily-wear-delicate-gold-ring",
    name: "Daily Wear Delicate Gold Ring",
    category: "Rings",
    subcategory: "rings",
    price: 9500,
    status: "in_stock",
    inStock: true,
    description: "Minimalist floral gold ring crafted for everyday understated refinement.",
    highlights: ["Under ₹10k Budget Friendly", "Lightweight & Sturdy", "22k Pure Gold"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop", alt: "Daily Wear Delicate Gold Ring" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_018",
    slug: "artisan-classic-tie-chain",
    name: "Artisan Classic Tie Chain",
    category: "Tie Chains",
    subcategory: "tie-chains",
    price: 21500,
    status: "in_stock",
    inStock: true,
    description: "Graceful gold tie chain with dangling micro-droplets designed to accent festive attire.",
    highlights: ["Hand-Finished Gold Droplets", "Lightweight Festive Wear", "Comfort Fit Clasp"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", alt: "Artisan Classic Tie Chain" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_019",
    slug: "sovereign-gold-kurta-button-set",
    name: "Sovereign Gold Kurta Button Set",
    category: "Men's Collection",
    subcategory: "mens-collection",
    price: 48000,
    status: "in_stock",
    inStock: true,
    featured: true,
    newArrival: true,
    description: "Handcrafted 22k gold kurta buttons connected with a delicate link chain, featuring regal Bengali filigree engraving.",
    highlights: ["22k BIS Hallmarked Gold", "Four-Button Linked Set", "Handcrafted Filigree Detailing", "Ideal for Groom & Festive Wear"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=800&auto=format&fit=crop", alt: "Sovereign Gold Kurta Button Set" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_020",
    slug: "royal-rajbarhi-mens-kada",
    name: "Royal Rajbarhi Men's Kada",
    category: "Men's Collection",
    subcategory: "mens-collection",
    price: 115000,
    status: "in_stock",
    inStock: true,
    featured: true,
    description: "A commanding solid 22k gold kada with carved floral terminals, embodying Bengali aristocratic lineage and masculine poise.",
    highlights: ["Heavy Solid 22k Gold", "Artisan Hand-Chased Motifs", "Comfort Inner Contouring", "Heirloom Investment Piece"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", alt: "Royal Rajbarhi Men's Kada" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_021",
    slug: "heritage-biswa-mens-gold-chain",
    name: "Heritage Biswa Men's Gold Chain",
    category: "Men's Collection",
    subcategory: "mens-collection",
    price: 84000,
    status: "in_stock",
    inStock: true,
    newArrival: true,
    description: "Classic Bengali Biswa woven gold chain with polished faceted links that catch the light with subtle sophistication.",
    highlights: ["22k Pure Yellow Gold", "Traditional Biswa Weave", "Reinforced Security S-Hook", "Durable Everyday & Occasion Wear"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", alt: "Heritage Biswa Men's Gold Chain" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_022",
    slug: "royal-polki-signet-ring",
    name: "Royal Polki Men's Signet Ring",
    category: "Men's Collection",
    subcategory: "mens-collection",
    price: 36500,
    status: "in_stock",
    inStock: true,
    description: "Understated 22k gold signet ring embedded with an uncut natural Polki diamond center.",
    highlights: ["Natural Polki Diamond", "22k Gold Signet", "Comfort Fit Band", "Bengali Artisan Made"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop", alt: "Royal Polki Men's Signet Ring" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_023",
    slug: "auspicious-gold-nazariya-bracelet",
    name: "Auspicious Gold Nazariya Bracelet",
    category: "Kid's Collection",
    subcategory: "kids-collection",
    price: 12500,
    status: "in_stock",
    inStock: true,
    featured: true,
    newArrival: true,
    description: "Protective black bead and 22k hallmarked gold nazariya bracelet with smooth baby-safe rounded contours.",
    highlights: ["Baby-Safe Smooth Finishes", "Auspicious Protective Beads", "22k Certified Gold", "Adjustable Fit Links"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", alt: "Auspicious Gold Nazariya Bracelet" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_024",
    slug: "chhoto-shona-baby-bangles",
    name: "Chhoto Shona Fluted Baby Bangles (Pair)",
    category: "Kid's Collection",
    subcategory: "kids-collection",
    price: 28000,
    status: "in_stock",
    inStock: true,
    featured: true,
    description: "Pair of pure 22k gold lightweight baby bangles with smooth fluted edges, perfect for Annaprashan ceremonies.",
    highlights: ["Traditional Annaprashan Gift", "Expandable Gentle Fitting", "Sold as a Pair", "Zero Sharp Edge Polish"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop", alt: "Chhoto Shona Fluted Baby Bangles" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_025",
    slug: "bal-ganesh-devotional-gold-pendant",
    name: "Bal-Ganesh Devotional Gold Pendant",
    category: "Kid's Collection",
    subcategory: "kids-collection",
    price: 9800,
    status: "in_stock",
    inStock: true,
    description: "Miniature 22k gold Bal-Ganesh pendant designed as a blessed keepsake for young children.",
    highlights: ["Under ₹10k Gift", "Auspicious Blessing", "Lightweight 22k Gold", "Smooth Contours"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", alt: "Bal-Ganesh Devotional Gold Pendant" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  },
  {
    id: "prod_026",
    slug: "shuktara-little-star-gold-studs",
    name: "Shuktara Little Star Gold Studs",
    category: "Kid's Collection",
    subcategory: "kids-collection",
    price: 14200,
    status: "in_stock",
    inStock: true,
    newArrival: true,
    description: "Whimsical star-shaped gold earrings with screw-back closures designed specifically for children's delicate ears.",
    highlights: ["Kid-Safe Screw Backs", "22k Yellow Gold", "Hypoallergenic Comfort", "Daily Wear Safe"],
    images: {
      main: { url: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop", alt: "Shuktara Little Star Gold Studs" },
      gallery: [],
      thumbnail: { url: "", alt: "" }
    }
  }
]

export const NEW_ARRIVALS = PRODUCTS.filter(p => p.newArrival)
export const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.featured)

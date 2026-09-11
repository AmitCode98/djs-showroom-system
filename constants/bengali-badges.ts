// ============================================================
// BENGALI BADGE CONSTANTS & LOCALIZATION HELPERS
// ============================================================

export const BENGALI_CATEGORY_BADGES: Record<string, string> = {
  necklace: "গলার হার",
  necklaces: "গলার হার",
  chokers: "চিক ও চোখার",
  choker: "চিক ও চোখার",
  bangles: "সোনার বালা",
  bangle: "সোনার বালা",
  earrings: "কানের দুল ও ঝুমকো",
  earring: "কানের দুল",
  sitahar: "সীতাহার",
  chains: "সোনার চেন",
  chain: "সোনার চেন",
  rings: "সোনার আংটি",
  ring: "সোনার আংটি",
  pendants: "লকেট ও পেন্ডেন্ট",
  pendant: "লকেট",
  "pearl-shell": "মুক্তার গহনা",
  "pearl-and-shell": "মুক্তার গহনা",
  "pearl & shell": "মুক্তার গহনা",
  lahari: "লাহারী হার",
  "sankha-pola": "শাঁখা ও পোলা",
  "sankha and pola": "শাঁখা ও পোলা",
  "tiara-tikli": "টায়রা ও টিকলি",
  "tiara and tikli": "টায়রা ও টিকলি",
  mantasha: "মানতাসা",
  "tie-chains": "টাই চেন",
  "tie chains": "টাই চেন",
  "mens-collection": "পুরুষদের গহনা",
  "men's collection": "পুরুষদের গহনা",
  "kids-collection": "শিশুদের গহনা",
  "kid's collection": "শিশুদের গহনা",
  bridal: "বিবাহের গহনা",
}

export const BENGALI_BUDGET_BADGES: Record<string, string> = {
  "under-10k": "১০ হাজার টাকার নিচে",
  "10k-25k": "১০ – ২৫ হাজার টাকা",
  "25k-50k": "২৫ – ৫০ হাজার টাকা",
  "50k-1l": "৫০ হাজার – ১ লাখ",
  luxury: "রাজকীয় ব্রাইডাল সংগ্রহ",
}

/**
 * Returns an authentic Bengali badge label for any jewellery category or product type.
 */
export function getBengaliCategoryBadge(categoryOrSlug?: string): string {
  if (!categoryOrSlug) return "সোনার গহনা"
  const normalized = categoryOrSlug.toLowerCase().trim().replace(/[^a-z0-9&'-]+/g, "-")

  if (BENGALI_CATEGORY_BADGES[normalized]) {
    return BENGALI_CATEGORY_BADGES[normalized]
  }

  // Substring match
  for (const [k, v] of Object.entries(BENGALI_CATEGORY_BADGES)) {
    if (normalized.includes(k) || k.includes(normalized)) {
      return v
    }
  }

  return "সোনার গহনা"
}

/**
 * Returns an authentic Bengali badge label for any budget tier.
 */
export function getBengaliBudgetBadge(budgetSlugOrTitle?: string): string {
  if (!budgetSlugOrTitle) return "বাজেট সংগ্রহ"
  const normalized = budgetSlugOrTitle.toLowerCase().trim().replace(/[^a-z0-9-]+/g, "-")

  if (BENGALI_BUDGET_BADGES[normalized]) {
    return BENGALI_BUDGET_BADGES[normalized]
  }

  if (normalized.includes("10k") && normalized.includes("under")) return "১০ হাজার টাকার নিচে"
  if (normalized.includes("10k") && normalized.includes("25k")) return "১০ – ২৫ হাজার টাকা"
  if (normalized.includes("25k") && normalized.includes("50k")) return "২৫ – ৫০ হাজার টাকা"
  if (normalized.includes("50k") || normalized.includes("1l")) return "৫০ হাজার – ১ লাখ"
  if (normalized.includes("lux")) return "রাজকীয় ব্রাইডাল সংগ্রহ"

  return "বাজেট সংগ্রহ"
}

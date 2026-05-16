import { useState, useEffect } from "react"

/**
 * useIsMobile
 *
 * Returns `true` when the viewport width is below the given breakpoint.
 * Defaults to Tailwind's `md` breakpoint (768px).
 *
 * Use this to conditionally render mobile vs desktop UI logic in Client Components.
 * Prefer CSS-only responsive classes (Tailwind) for pure styling concerns.
 *
 * @param breakpoint - pixel threshold (default: 768)
 */
export function useIsMobile(breakpoint: number = 768): boolean {
  // Lazily initialize from matchMedia so the very first render is correct
  // and avoids the synchronous-setState-inside-effect lint error.
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches
  })

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)

    // Only update state inside the event handler callback — never synchronously
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    query.addEventListener("change", handler)

    return () => query.removeEventListener("change", handler)
  }, [breakpoint])

  return isMobile
}

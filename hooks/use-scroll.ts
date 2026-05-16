import { useState, useEffect } from "react"

export interface ScrollState {
  /** Current vertical scroll position in pixels */
  scrollY: number
  /** True once the user has scrolled past the given threshold */
  isScrolled: boolean
  /** True when the user is actively scrolling down */
  isScrollingDown: boolean
}

/**
 * useScroll
 *
 * Tracks the window's vertical scroll position and derives common
 * scroll-based states (e.g. "has scrolled past N pixels", "scrolling down").
 *
 * Ideal for:
 * - Sticky navbar background transitions
 * - Showing/hiding a "scroll to top" button
 * - Triggering scroll-based animations
 *
 * @param threshold - scrollY pixel value to flip `isScrolled` (default: 20)
 */
export function useScroll(threshold: number = 20): ScrollState {
  const [scrollY, setScrollY] = useState(0)
  const [prevScrollY, setPrevScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      setScrollY((prev) => {
        setPrevScrollY(prev)
        return current
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return {
    scrollY,
    isScrolled: scrollY > threshold,
    isScrollingDown: scrollY > prevScrollY,
  }
}

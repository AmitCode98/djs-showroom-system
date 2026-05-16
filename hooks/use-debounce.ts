import { useState, useEffect } from "react"

/**
 * useDebounce
 *
 * Delays updating the returned value until `delay` milliseconds have passed
 * without `value` changing. Prevents expensive operations (e.g. API calls,
 * filtering large lists) from firing on every keystroke.
 *
 * Ideal for:
 * - Search input with live API queries
 * - Product filtering / autocomplete
 * - Window resize calculations
 *
 * @param value - the value to debounce
 * @param delay - milliseconds to wait (default: 400)
 *
 * @example
 * const [query, setQuery] = useState("")
 * const debouncedQuery = useDebounce(query, 400)
 *
 * useEffect(() => {
 *   if (debouncedQuery) fetchProducts(debouncedQuery)
 * }, [debouncedQuery])
 */
export function useDebounce<T>(value: T, delay: number = 400): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

import { useState, useCallback } from "react"

export interface UseToggleReturn {
  /** Current boolean state */
  value: boolean
  /** Flip the current state */
  toggle: () => void
  /** Explicitly set to true */
  setTrue: () => void
  /** Explicitly set to false */
  setFalse: () => void
}

/**
 * useToggle
 *
 * A minimal, stable boolean toggle hook.
 * All returned callbacks are memoized with `useCallback` to prevent
 * unnecessary child re-renders.
 *
 * Ideal for:
 * - Modal open/close state
 * - Mobile menu open state
 * - Accordion expanded state
 * - Any on/off UI flag
 *
 * @param initialValue - starting state (default: false)
 */
export function useToggle(initialValue: boolean = false): UseToggleReturn {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => setValue((v) => !v), [])
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])

  return { value, toggle, setTrue, setFalse }
}

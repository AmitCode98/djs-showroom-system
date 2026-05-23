"use client"

import { useEffect } from "react"

export function ScrollRestoration() {
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }

    const scrollPos = sessionStorage.getItem("showroom_scroll_pos")
    if (scrollPos) {
      window.scrollTo({
        top: parseInt(scrollPos, 10),
        behavior: "instant",
      })
      sessionStorage.removeItem("showroom_scroll_pos")
    }
  }, [])

  return null
}

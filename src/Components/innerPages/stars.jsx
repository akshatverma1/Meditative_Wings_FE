"use client"

import { useEffect, useRef } from "react"

export function Stars() {
  const starsRef = useRef(null)

  useEffect(() => {
    if (!starsRef.current) return

    const container = starsRef.current
    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight

    // Clear any existing stars
    container.innerHTML = ""

    // Add stars
    const starCount = 100
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.classList.add("star")

      // Random position
      const left = Math.floor(Math.random() * containerWidth)
      const top = Math.floor(Math.random() * containerHeight)

      // Random size
      const size = Math.random() * 2

      // Random opacity
      const opacity = Math.random() * 0.7 + 0.3

      star.style.left = `${left}px`
      star.style.top = `${top}px`
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.opacity = opacity.toString()

      container.appendChild(star)
    }
  }, [])

  return <div ref={starsRef} className="stars" />
}


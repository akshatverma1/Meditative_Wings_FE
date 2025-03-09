"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog-grid"
import { Categories } from "@/components/categories"
import { Stars } from "@/components/stars"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Stars />
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto text-center relative">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Explore <span className="featured-gradient">Meditative</span> Content
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Discover insights, thoughts, and creative expressions that inspire mindfulness and deeper understanding.
          </p>
        </section>

        <Categories />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  )
}


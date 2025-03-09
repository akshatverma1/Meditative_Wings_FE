"use client"

import { useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Stars } from "../components/Stars"
import { BlogGrid } from "../components/BlogGrid"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Search, Filter } from "lucide-react"

function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen flex flex-col relative">
      <Stars />
      <Header />
      <main className="flex-1">
        <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Explore Content</h1>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <Button variant="secondary" size="sm">
              All
            </Button>
            <Button variant="outline" size="sm">
              Knowledge
            </Button>
            <Button variant="outline" size="sm">
              Thoughts
            </Button>
            <Button variant="outline" size="sm">
              Films
            </Button>
            <Button variant="outline" size="sm">
              Writings
            </Button>
            <Button variant="outline" size="sm">
              Shayari
            </Button>
          </div>

          <BlogGrid searchTerm={searchTerm} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ExplorePage


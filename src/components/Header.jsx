"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Menu, X, PenTool, Home, BookOpen, Users, MessageCircle } from "lucide-react"
import { Button } from "./ui/Button"
import { useMediaQuery } from "../hooks/useMediaQuery"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <header className="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-1">
              <PenTool className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">MeditativeBlogs</span>
          </Link>
        </div>

        {!isMobile && (
          <nav className="mx-4 flex items-center space-x-4 lg:space-x-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              to="/explore"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Explore
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-4">
          {!isMobile && (
            <form className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search posts..."
                className="rounded-full border border-input bg-background px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[200px] lg:w-[300px]"
              />
            </form>
          )}

          {!isMobile ? (
            <>
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          )}
        </div>
      </div>

      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-50 mt-px bg-background pb-6 shadow-lg">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-3 py-6">
              <form className="relative mb-4">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search posts..."
                  className="w-full rounded-full border border-input bg-background px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </form>
              <Link
                to="/"
                className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                to="/explore"
                className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                Explore
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Users className="h-4 w-4" />
                About
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                Contact
              </Link>
              <div className="border-t border-border/40 pt-5 mt-2">
                <div className="flex gap-3">
                  <Button className="w-full" size="sm">
                    Get Started
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


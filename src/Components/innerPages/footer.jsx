// import Link from "next/link"
import Link from "react-router-dom"
import { PenTool, Twitter, Github, Linkedin, Rss } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="rounded-full bg-primary p-1">
              <PenTool className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">MeditativeBlogs</span>
          </Link>
          <p className="text-muted-foreground mb-6">
            A community dedicated to sharing meditative knowledge, thoughts, and creative expressions.
          </p>
          <div className="flex gap-4">
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="/rss" className="text-muted-foreground hover:text-primary">
              <Rss className="h-5 w-5" />
              <span className="sr-only">RSS Feed</span>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href="/explore" className="text-muted-foreground hover:text-foreground">
                Explore
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/write" className="text-muted-foreground hover:text-foreground">
                Write a Post
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/category/knowledge" className="text-muted-foreground hover:text-foreground">
                Meditative Knowledge
              </Link>
            </li>
            <li>
              <Link href="/category/thoughts" className="text-muted-foreground hover:text-foreground">
                Meditative Thoughts
              </Link>
            </li>
            <li>
              <Link href="/category/films" className="text-muted-foreground hover:text-foreground">
                Meditative Films
              </Link>
            </li>
            <li>
              <Link href="/category/writings" className="text-muted-foreground hover:text-foreground">
                Meditative Writings
              </Link>
            </li>
            <li>
              <Link href="/category/shayari" className="text-muted-foreground hover:text-foreground">
                Meditative Shayari
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Subscribe to Newsletter</h3>
          <p className="text-muted-foreground mb-4">Get the latest meditative content directly to your inbox.</p>
          <form className="space-y-2">
            <Input type="email" placeholder="Enter your email" className="bg-secondary" />
            <Button className="w-full">Subscribe</Button>
          </form>
        </div>
      </div>

      <div className="border-t border-border/40 mt-12 pt-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} MeditativeBlogs. All rights reserved.</p>
      </div>
    </footer>
  )
}


import { Link } from "react-router-dom"
import { PenTool, Twitter, Github, Linkedin, Rss } from "lucide-react"
import { Input } from "./ui/Input"
import { Button } from "./ui/Button"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="rounded-full bg-primary p-1">
              <PenTool className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">Meditative Wings</span>
          </Link>
          <p className="text-muted-foreground mb-6">
            A community dedicated for sharing meditative knowledge,thoughts and creative expressions.
          </p>
          <div className="flex gap-4">
            {/* <a href="https://twitter.com" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a> */}
            {/* <a href="https://github.com" className="text-muted-foreground hover:text-primary">
             
              <i class="fa-brands fa-youtube"></i>
              <span className="sr-only">Youtube</span>
            </a> */}
            {/* <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
              <i class="fa-brands fa-instagram"></i>
              <span className="sr-only">Instagram</span>
            </a> */}
            {/* <Link to="/rss" className="text-muted-foreground hover:text-primary">
              <Rss className="h-5 w-5" />
              <span className="sr-only">RSS Feed</span>
            </Link> */}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            {/* <li>
              <Link to="/explore" className="text-muted-foreground hover:text-foreground">
                Explore
              </Link>
            </li> */}
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/OurTeam" className="text-muted-foreground hover:text-foreground">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/tweet" className="text-muted-foreground hover:text-foreground">
                Writing
              </Link>
            </li>
            <li>
              <Link to="/payment" className="text-muted-foreground hover:text-foreground">
                Donation
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/disclamier" className="text-muted-foreground hover:text-foreground">
                Disclamier
              </Link>
            </li>
            
            {/* <li>
              <Link to="/write" className="text-muted-foreground hover:text-foreground">
                Write a Post
              </Link>
            </li> */}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/category/1" className="text-muted-foreground hover:text-foreground">
                Meditative Knowledge
              </Link>
            </li>
            <li>
              <Link to="/category/2" className="text-muted-foreground hover:text-foreground">
                Meditative Thoughts
              </Link>
            </li>
            <li>
              <Link to="/category/3" className="text-muted-foreground hover:text-foreground">
                Meditative Films
              </Link>
            </li>
            <li>
              <Link to="/category/4" className="text-muted-foreground hover:text-foreground">
                Meditative Writings
              </Link>
            </li>
            <li>
              <Link to="/category/6" className="text-muted-foreground hover:text-foreground">
                Meditative Shayari
              </Link>
            </li>
            <li>
              <Link to="/Lock" className="text-muted-foreground hover:text-foreground">
                New Post
              </Link>
            </li>
            <li>
              <Link to="/TweetLock" className="text-muted-foreground hover:text-foreground">
                New Tweet
              </Link>
            </li>
          </ul>
        </div>
        {/* 
        <div>
          <h3 className="font-semibold mb-4">Subscribe to Newsletter</h3>
          <p className="text-muted-foreground mb-4">Get the latest meditative content directly to your inbox.</p>
          <form className="space-y-2">
            <Input type="email" placeholder="Enter your email" className="bg-secondary" />
            <Button className="w-full">Subscribe</Button>
          </form>
        </div> */}
      </div>

      <div className="border-t border-border/40 mt-12 pt-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Meditative Wings. All rights reserved.</p>
      </div>
    </footer>
  )
}


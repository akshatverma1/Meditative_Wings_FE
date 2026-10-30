import { Link } from "react-router-dom"
import { PenTool } from "lucide-react"
import { Input } from "./ui/Input"
import { Button } from "./ui/Button"

export function Footer() {
  // 🔹 Scroll to top when clicking any footer link
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" onClick={handleScrollTop} className="flex items-center gap-2 mb-4">
            <div className="rounded-full bg-primary p-1">
              <PenTool className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">Meditative Wings</span>
          </Link>
          <p className="text-muted-foreground mb-6">
            A community dedicated for sharing meditative knowledge,thoughts and creative expressions.
          </p>
          <div className="flex gap-4">
            {/* social icons (commented) */}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/OurTeam" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/tweet" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Writing
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Meditative Shop
              </Link>
            </li>
            <li>
              <Link to="/payment" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Donation
              </Link>
            </li>
            <li>
              <Link to="/privacy" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/disclamier" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Disclamier
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/category/1" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Meditative Knowledge
              </Link>
            </li>
            <li>
              <Link to="/category/2" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Meditative Thoughts
              </Link>
            </li>
            <li>
              <Link to="/category/3" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Meditative Films
              </Link>
            </li>
            <li>
              <Link to="/category/4" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Meditative Writings
              </Link>
            </li>
            <li>
              <Link to="/category/6" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                Meditative Shayari
              </Link>
            </li>
            <li>
              <Link to="/Lock" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                New Post
              </Link>
            </li>
            <li>
              <Link to="/TweetLock" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                New Tweet
              </Link>
            </li>
            <li>
              <Link to="/ShopLock" onClick={handleScrollTop} className="text-muted-foreground hover:text-foreground">
                New Product
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/40 mt-12 pt-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Meditative Wings. All rights reserved.</p>
      </div>
    </footer>
  )
}

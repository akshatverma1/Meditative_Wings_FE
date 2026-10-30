import { useEffect, useState } from "react"
import { ShoppingBag } from "lucide-react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Stars } from "../components/Stars"
import { Button } from "../components/ui/Button"

// WhatsApp number that receives orders (country code + number, digits only)
const WHATSAPP_NUMBER = "919597381588"

const PRODUCTS_API = "https://meditative-wings-backend-three.vercel.app/shopProducts"

function getWhatsAppLink(product) {
  const message =
    `Namaste Meditative Wings 🙏\n\n` +
    `I would like to order the following product:\n\n` +
    `Product: ${product.productTitle}\n` +
    `Product Code: ${product.productCode}\n\n` +
    `Please share the price, availability and delivery details.\n\n` +
    `Thank you!`

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function ShopPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(PRODUCTS_API)
        if (!response.ok) throw new Error(`Request failed: ${response.status}`)
        const data = await response.json()
        setProducts(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    document.title = "Meditative Shop | Meditative Wings"
    return () => {
      document.title = "Meditative Wings"
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col relative">
      <Stars />
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4 md:px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-indigo-600 opacity-10"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Meditative <span className="featured-gradient">Shop</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Discover mindful essentials for a peaceful and balanced life
            </p>
          </div>
        </section>

        <section className="py-12 px-4 md:px-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : products.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg py-12">Products coming soon.</p>
          ) : (
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="group relative bg-card/40 border border-border/50 rounded-lg overflow-hidden backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <img
                    src={product.productImageLink}
                    alt={product.productTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {product.productTitle}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">{product.productDesp}</p>

                  <a href={getWhatsAppLink(product)} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                      <ShoppingBag className="h-4 w-4" />
                      Order Now
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ShopPage

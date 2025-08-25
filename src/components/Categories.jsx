import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/Button"
import Placeholder from "./placeholder.svg"
import Postnew from "./../categories/Postnew.jsx"

const categories = [
  {
    id: 1,
    title: "MEDITATIVE KNOWLEDGE",
    description: "Ancient sacred knowledge of the universe and the earth civilization",
    image: "https://i.pinimg.com/736x/f3/a2/1f/f3a21f6813f9d8b0c4d172a3542f732e.jpg",
    color: "from-purple-600 to-indigo-600",
    apiUrl :"http://localhost:3000/meditativeKnowledge"
  },
  {
    id: 2,
    title: "MEDITATIVE THOUGHTS/ IDEAS ",
    description: "Ancient hidden secrets to inspire Life Journey",
    image: "https://i.pinimg.com/736x/2f/a2/e1/2fa2e18a23853aa807a88a0ce38f02e9.jpg",
    color: "from-pink-500 to-purple-600",
    apiUrl :"http://localhost:3000/meditativeKnowledge"
  },
  {
    id: 3,
    title: "MEDITATIVE MOVIE/FILM",
    description: "Ancient wisdom revealing Life Secrets",
    image: "https://i.pinimg.com/736x/bb/09/6d/bb096d4dd7866a432b5b36995b424761.jpg",
    color: "from-blue-500 to-indigo-600",
    apiUrl :"http://localhost:3000/meditativeKnowledge"
  },
  {
    id: 4,
    title: "MEDITATIVE WRITINGS",
    description: "Ancient wonders on spirituality and mindfulness",
    image: "https://i.pinimg.com/736x/07/08/d4/0708d4e95e2961987eb0322081fc7c1e.jpg",
    color: "from-violet-600 to-purple-600",
    apiUrl :"http://localhost:3000/meditativeKnowledge"
  },
  {
    id: 6,
    title: "MEDITATIVE SHAYARI (hindi)",
    description: "Ode expressing divinity, love and life",
    image: "https://i.pinimg.com/736x/a2/06/f9/a206f9728d41914a6cfc490cb0c21fe7.jpg",
    color: "from-rose-500 to-pink-600",
    apiUrl :"http://localhost:3000/meditativeKnowledge"
  },
  {
    id: 7,
    title: "MEDITATIVE SHAYARI MOVIE/FILM",
    description: "Ode expressing divine consciousness,Silence and Nothingness",
    image: "https://i.pinimg.com/736x/4b/c8/8d/4bc88d2bd99e9069b08a6cc2a71f8cf5.jpg",
    color: "from-amber-500 to-orange-600",
    apiUrl :"http://localhost:3000/meditativeKnowledge"
  },
  {
    id: 8,
    title: "MEDITATIVE SHAYARI WRITINGS",
    description: "ode expressing God and Love.",
    image: "https://i.pinimg.com/736x/2f/02/16/2f02167788768c6ae63786ea68a4065e.jpg",
    color: "from-emerald-500 to-green-600",
    apiUrl :"http://localhost:3000/meditativeKnowledge"
  },
  {
    id: 9,
    title: "MEDITATIVE WINGS MEDIA",
    description: "Artists showcasing arts,love and purity",
    image: "https://i.pinimg.com/736x/9c/74/26/9c7426472b79489c3e707fdaf9a0a8c2.jpg",
    color: "from-emerald-500 to-green-600",
    apiUrl :"http://localhost:3000/meditativeKnowledge"
  },
]

export function Categories() {
  return (
    <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">All Categories</h2>
        {/* <Link to="/categories" className="text-primary hover:underline">
          View all
        </Link> */}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card bg-card/40 border border-border/50 backdrop-blur overflow-hidden rounded-lg"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 z-10`}></div>
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="w-full h-full object-cover category-image"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 line-clamp-1">{category.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{category.description}</p>
              <Button variant="outline" size="sm" className="w-full group">
                <Link to={`/category/${category.id}/`} className="flex items-center justify-center w-full">
                  <span>Open</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


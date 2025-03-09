// import Image from "next/image"
// import Link from "next/link"
import Image from "react-image"
import { Link } from "react-router-dom"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    title: "MEDITATIVE KNOWLEDGE",
    description: "Explore ancient and modern wisdom on meditation practices",
    image: "/placeholder.svg?height=300&width=500",
    color: "from-purple-600 to-indigo-600",
  },
  {
    id: 2,
    title: "MEDITATIVE THOUGHTS/IDEAS",
    description: "Insights and reflections to inspire your meditation journey",
    image: "/placeholder.svg?height=300&width=500",
    color: "from-pink-500 to-purple-600",
  },
  {
    id: 3,
    title: "MEDITATIVE MOVIE/FILM",
    description: "Films and documentaries that promote mindfulness",
    image: "/placeholder.svg?height=300&width=500",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 4,
    title: "MEDITATIVE WRITINGS",
    description: "Essays and articles on meditation and mindfulness",
    image: "/placeholder.svg?height=300&width=500",
    color: "from-violet-600 to-purple-600",
  },
  {
    id: 5,
    title: "LIFE UNDERSTANDING MOVIE/FILM",
    description: "Films that offer profound insights into the human experience",
    image: "/placeholder.svg?height=300&width=500",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 6,
    title: "MEDITATIVE SHAYARI (hindi)",
    description: "Poetic expressions of mindfulness in Hindi",
    image: "/placeholder.svg?height=300&width=500",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: 7,
    title: "MEDITATIVE SHAYARI MOVIE/FILM",
    description: "Films featuring poetic meditative expressions",
    image: "/placeholder.svg?height=300&width=500",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 8,
    title: "MEDITATIVE SHAYARI WRITINGS",
    description: "Written works of meditative poetry and expression",
    image: "/placeholder.svg?height=300&width=500",
    color: "from-emerald-500 to-green-600",
  },
]

export function Categories() {
  return (
    <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">All Categories</h2>
        <Link href="/categories" className="text-primary hover:underline">
          View all
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="category-card bg-card/40 border-border/50 backdrop-blur overflow-hidden">
            <div className="relative aspect-video w-full overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-70 z-10`}></div>
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover category-image"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2 line-clamp-1">{category.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{category.description}</p>
              <Button variant="outline" size="sm" className="w-full group" asChild>
                <Link href={`/category/${category.id}`}>
                  <span>Open</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


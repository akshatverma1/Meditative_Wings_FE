"use client"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Stars } from "../components/Stars"
import { BlogGrid } from "../components/BlogGrid"

const categoryData = {
  1: {
    title: "MEDITATIVE KNOWLEDGE",
    description: "Explore ancient and modern wisdom on meditation practices",
    color: "from-purple-600 to-indigo-600",
    backend_api : "http://localhost:3000/meditativeKnowledge"
  },
  2: {
    title: "MEDITATIVE THOUGHTS/IDEAS",
    description: "Insights and reflections to inspire your meditation journey",
    color: "from-pink-500 to-purple-600",
    backend_api : "http://localhost:3000/meditativeThoughts"
  },
  3: {
    title: "MEDITATIVE MOVIE/FILM",
    description: "Films and documentaries that promote mindfulness",
    color: "from-blue-500 to-indigo-600",
    backend_api : "http://localhost:3000/meditativeMovie"
  },
  4: {
    title: "MEDITATIVE WRITINGS",
    description: "Essays and articles on meditation and mindfulness",
    color: "from-violet-600 to-purple-600",
    backend_api : "http://localhost:3000/meditativeWritings"
  },
  5: {
    title: "LIFE UNDERSTANDING MOVIE/FILM",
    description: "Films that offer profound insights into the human experience",
    color: "from-cyan-500 to-blue-600",
    backend_api : "http://localhost:3000/lifeUnderstanding"
  },
  6: {
    title: "MEDITATIVE SHAYARI (hindi)",
    description: "Poetic expressions of mindfulness in Hindi",
    color: "from-rose-500 to-pink-600",
    backend_api : "http://localhost:3000/meditativeShayari"
  },
  7: {
    title: "MEDITATIVE SHAYARI MOVIE/FILM",
    description: "Films featuring poetic meditative expressions",
    color: "from-amber-500 to-orange-600",
    backend_api : "http://localhost:3000/meditativeShayariMovie"
  },
  8: {
    title: "MEDITATIVE SHAYARI WRITINGS",
    description: "Written works of meditative poetry and expression",
    color: "from-emerald-500 to-green-600",
    backend_api : "http://localhost:3000/meditativeShayariWritings"
  },
}

function CategoryPage() {
  const { id } = useParams()
  const category = categoryData[id] || {
    title: "Category Not Found",
    description: "This category does not exist",
    color: "from-gray-600 to-gray-800",
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <Stars />
      <Header />
      <main className="flex-1">
        <section className={`py-20 px-4 md:px-6 relative`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10`}></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">{category.title}</h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">{category.description}</p>
          </div>
        </section>

        {/* <BlogGrid categoryId={id} /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default CategoryPage


"use client"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Stars } from "../components/Stars"
import { BlogGrid } from "../components/BlogGrid"
import Postnew from "./../categories/Postnew.jsx"

const categoryData = {
  1: {
    title: "MEDITATIVE KNOWLEDGE",
    description: "Ancient sacred knowledge of the universe and the earth civilization",
    color: "from-purple-600 to-indigo-600",
    backend_api : "http://localhost:3000/meditativeKnowledge",
    apiUrl :"https://meditative-wings-backend-final.vercel.app/meditativeKnowledge"
  },
  2: {
    title: "MEDITATIVE THOUGHTS/IDEAS",
    description: "Ancient hidden secrets to inspire Life Journey",
    color: "from-pink-500 to-purple-600",
    backend_api : "http://localhost:3000/meditativeThoughts",
    apiUrl :"https://meditative-wings-backend-final.vercel.app/meditativeThoughts"
  },
  3: {
    title: "MEDITATIVE MOVIE/FILM",
    description: "Ancient wisdom revealing Life Secrets",
    color: "from-blue-500 to-indigo-600",
    backend_api : "http://localhost:3000/meditativeMovie",
    apiUrl :"https://meditative-wings-backend-final.vercel.app/meditativeMovie"
  },
  4: {
    title: "MEDITATIVE WRITINGS",
    description: "Ancient wonders on spirituality and mindfulness",
    color: "from-violet-600 to-purple-600",
    backend_api : "http://localhost:3000/meditativeWritings",
    apiUrl :"https://meditative-wings-backend-final.vercel.app/meditativeWritings"
  },
  5: {
    title: "LIFE UNDERSTANDING MOVIE/FILM",
    description: "Understandings offering deep insights into human experiences",
    color: "from-cyan-500 to-blue-600",
    backend_api : "http://localhost:3000/lifeUnderstanding",
    apiUrl :"https://meditative-wings-backend-final.vercel.app/lifeUnderstanding"
  },
  6: {
    title: "MEDITATIVE SHAYARI (hindi)",
    description: "Ode expressing divinity, love and life",
    color: "from-rose-500 to-pink-600",
    backend_api : "http://localhost:3000/meditativeShayari",
    apiUrl :"https://meditative-wings-backend-final.vercel.app/meditativeShayari"
  },
  7: {
    title: "MEDITATIVE SHAYARI MOVIE/FILM",
    description: "Ode expressing divine consciousness,Silence and Nothingness.",
    color: "from-amber-500 to-orange-600",
    backend_api : "http://localhost:3000/meditativeShayariMovie",
    apiUrl :"https://meditative-wings-backend-final.vercel.app/meditativeShayariMovie"
  },
  8: {
    title: "MEDITATIVE SHAYARI WRITINGS",
    description: "ode expressing God and Love.",
    color: "from-emerald-500 to-green-600",
    backend_api : "http://localhost:3000/meditativeShayariWritings",
    apiUrl :"https://meditative-wings-backend-final.vercel.app/meditativeShayariWritings"
  },
  9: {
    title: "MEDITATIVE WINGS MEDIA",
    description: "Artists showcasing arts,love and purity",
    color: "from-emerald-500 to-green-600",
    backend_api : "http://localhost:3000/meditativeShayariWritings",
    apiUrl :"https://meditative-wings-backend-final.vercel.app/meditativeWingsMedia"
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
        <Postnew apiUrl={category.apiUrl} />
        {/* <BlogGrid categoryId={id} /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default CategoryPage


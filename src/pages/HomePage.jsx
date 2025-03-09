import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { BlogGrid } from "../components/BlogGrid"
import { Categories } from "../components/Categories"
import { Stars } from "../components/Stars"

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Stars />
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto text-center relative">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Explore <span className="featured-gradient">Meditative</span> Content
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Discover insights, thoughts, and creative expressions that inspire mindfulness and deeper understanding.
          </p>
        </section>

        <Categories />
        {/* <BlogGrid /> */}
      </main>
      <Footer />
    </div>
  )
}

export default HomePage


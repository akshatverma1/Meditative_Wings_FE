import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
// import { Stars } from "../components/Stars"
import { TweetList } from "../components/TweetList"

function TweetPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* <Stars /> */}
      <Header />
      <main className="flex-1">
        <section className="py-12 px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-center">
            Latest <span className="featured-gradient">Writing</span>
          </h1>
          <p className="text-muted-foreground text-center mb-10">
          "Ƶ" Breathing Technique and Samurai Iaijutsu & Kendo
          </p>
          <TweetList />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default TweetPage


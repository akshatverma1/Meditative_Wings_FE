// import { Header } from "../components/Header"
// import { Footer } from "../components/Footer"
// import { Stars } from "../components/Stars"
// import { TeamGrid } from "../components/TeamGrid"
import { TeamGrid } from "./TeamGrid.jsx"
import { Header } from "../components/Header.jsx"
import { Footer } from "../components/Footer.jsx"

function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* <Stars /> */}
      <Header />
      <main className="flex-1">
        <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Meet Our <span className="featured-gradient">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            The passionate individuals behind our meditation community.
          </p>
          <TeamGrid />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default TeamPage


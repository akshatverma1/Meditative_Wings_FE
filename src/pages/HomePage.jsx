import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { BlogGrid } from "../components/BlogGrid"
import { Categories } from "../components/Categories"
import { Stars } from "../components/Stars"
import { BackgroundImage } from "../categories/BackgroundImage.jsx"
const backgroundImageUrl = "/backgroundimage.svg?height=1080&width=1920"
function HomePage() {
  
  return (
    // <BackgroundImage imageUrl={backgroundImageUrl} opacity={0.75}>
    // <div className="min-h-screen flex flex-col relative overflow-hidden">
    //   <Stars />
    //   <Header />
    //   <main className="flex-1">
    //     <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto text-center relative">
    //       <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
    //         Explore <span className="featured-gradient">Meditative</span> Content
    //       </h1>
    //       <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
    //         Discover insights, thoughts, and creative expressions that inspire mindfulness and deeper understanding.
    //       </p>
    //     </section>

    //     <Categories />
    //     {/* <BlogGrid /> */}
    //   </main>
    //   <Footer />
    // </div>
    // </BackgroundImage>

    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f82122ee-1050-4cc4-b34a-568eb80ae9ca-YUPXOS2UmGnAtf0sKoIioMfmRRVA5A.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="relative z-10">
        {/* <Stars /> */}
        <Header />
        <main className="flex-1">
          {/* Logo Section */}
          {/* <div className="flex justify-center py-12">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f82122ee-1050-4cc4-b34a-568eb80ae9ca-YUPXOS2UmGnAtf0sKoIioMfmRRVA5A.svg"
              alt="Meditation Blog Logo"
              className="w-64 md:w-96 h-auto"
            />
          </div> */}

          <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto text-center relative">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Explore <span className="featured-gradient">Meditative</span> Content
            </h1>
            <h4>The Songs of Silence , God and Love</h4>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">Infinite love at the point of Infinity. <br></br>Ancient revealations of the universe, multidimension and the earth civilizations promoting mindfulness and life deeper understanding
            </p>
          </section>

          {/* <Akshat /> */}
          <Categories />
          {/* <BlogGrid /> */}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage


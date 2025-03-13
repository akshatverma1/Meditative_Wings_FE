"use client"
import { useParams, useNavigate } from "react-router-dom"
import { Header } from "./Header.jsx"
import { Footer } from "./Footer.jsx"
// import { Stars } from "../components/Stars"
import { VideoShow } from "./Videoshow.jsx"
import { Button } from "./ui/Button.jsx"
import { ChevronLeft, ChevronRight } from "lucide-react"

function VideoPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  // For demo purposes - in a real app, you'd get the total count from your API

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* <Stars /> */}
      <Header />
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-center">
            <span className="featured-gradient">Meditation</span> Video
          </h1>

          <VideoShow id={id} />

   
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default VideoPage


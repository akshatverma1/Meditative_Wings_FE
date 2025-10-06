"use client"

import { useState, useEffect } from "react"
import { AlertCircle, Loader2 } from "lucide-react"
import { useParams } from "react-router-dom"
import { Header } from "./Header.jsx"
import { Footer } from "./Footer.jsx"

export function VideoShow({ id }) {
  const [video, setVideo] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const { ids } = useParams()
  const url = `https://meditative-wings-backend-three.vercel.app/search/${ids}`

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)

    const fetchData = async () => {
      try {
        console.log("API Calling:", url)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setVideo(data)
      } catch (error) {
        console.error("Error fetching video:", error)
        setError("An error occurred. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="animate-spin h-8 w-8 text-primary" />
        </main>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center text-red-500">
          <AlertCircle className="h-5 w-5 mr-2" /> {error}
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {video.length > 0 && (
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-center">
              <span className="featured-gradient">Meditative Wings</span> Videos
            </h1>
          )}
          <div className="bg-card/40 border border-border/50 rounded-lg overflow-hidden">
            <div className="aspect-video w-full">
              {video.map((videos) => (
                <iframe
                  key={videos._id}
                  src={`https://www.youtube.com/embed/${videos.youtubeLink}?controls=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ))}
            </div>

            {video.map((videos) => (
              <div className="p-6" key={videos._id}>
                <h2 className="text-2xl font-bold mb-2">{videos.videoTitle}</h2>
                <p className="text-muted-foreground mb-4">{videos.videoDesp}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                    {videos.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

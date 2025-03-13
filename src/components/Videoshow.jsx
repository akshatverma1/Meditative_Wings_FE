"use client"

import { useState, useEffect } from "react"
import { AlertCircle, Loader2 } from "lucide-react"
import { useParams,useNavigate } from "react-router-dom"
import { Header } from "./Header.jsx"
import { Footer } from "./Footer.jsx"

export function VideoShow({ id }) {
  const [video, setVideo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { ids } = useParams();
  console.log(ids);
  useEffect(() => {
    // Simulate API call to fetch video data
    setLoading(true)
    setError(null)

    setTimeout(() => {
      const foundVideo = videoData.find((v) => v.id === id)

      if (foundVideo) {
        setVideo(foundVideo)
        setLoading(false)
      } else {
        setError("Video not found")
        setLoading(false)
      }
    }, 800) // Simulate network delay
  }, [id])


  return (
    <div className="min-h-screen flex flex-col relative">
          {/* <Stars /> */}
          <Header />
          <main className="flex-1 py-12 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-center">
                <span className="featured-gradient">Meditation</span> Video
              </h1>
    
              <div className="bg-card/40 border border-border/50 rounded-lg overflow-hidden">
      <div className="aspect-video w-full">
        <iframe
          src="https://www.youtube.com/embed/_mR6bY-ndso"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      {/* <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{video.title}</h2>
        <p className="text-muted-foreground mb-4">{video.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">{video.category}</span>
          <span className="text-sm text-muted-foreground">{video.views.toLocaleString()} views</span>
        </div>
      </div> */}
    </div>
       
            </div>
          </main>
          <Footer />
        </div>
    
  )
}


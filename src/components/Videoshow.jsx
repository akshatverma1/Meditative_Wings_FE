"use client"

import { useState, useEffect } from "react"
import { AlertCircle, Loader2 } from "lucide-react"

// Sample video data - in a real app, this would come from an API or database
const videoData = [
  {
    id: "1",
    title: "Introduction to Mindful Breathing",
    description: "Learn the basics of mindful breathing techniques for beginners.",
    youtubeId: "dQw4w9WgXcQ", // Example YouTube ID
    category: "Meditation",
    views: 1245,
  },
  {
    id: "2",
    title: "Guided Meditation for Sleep",
    description: "A calming guided meditation to help you fall asleep peacefully.",
    youtubeId: "inpok4MKVLM", // Example YouTube ID
    category: "Sleep",
    views: 2890,
  },
  {
    id: "3",
    title: "Chakra Balancing Meditation",
    description: "Align your chakras with this comprehensive meditation practice.",
    youtubeId: "jeGT1VXv2Gc", // Example YouTube ID
    category: "Energy Work",
    views: 1678,
  },
  {
    id: "4",
    title: "Mindfulness for Anxiety Relief",
    description: "Reduce anxiety with these proven mindfulness techniques.",
    youtubeId: "O-6f5wQXSu8", // Example YouTube ID
    category: "Mental Health",
    views: 3421,
  },
]

export function VideoShow({ id }) {
  const [video, setVideo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center p-12 min-h-[400px] bg-card/40 border border-border/50 rounded-lg">
//         <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
//         <p className="text-muted-foreground">Loading video...</p>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center p-12 min-h-[400px] bg-card/40 border border-border/50 rounded-lg">
//         <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
//         <p className="text-lg font-semibold mb-2">Error Loading Video</p>
//         <p className="text-muted-foreground">{error}</p>
//       </div>
//     )
//   }

//   if (!video) {
//     return null
//   }

  return (
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
  )
}


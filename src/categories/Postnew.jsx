

import { useState, useEffect } from "react"
import { Play, ExternalLink, Clock, Eye, BookmarkPlus } from "lucide-react"
import { Button } from "./../components/ui/Button.jsx"
import { Badge } from "./../components/ui/Badge.jsx"
import { Header } from "../components/Header.jsx"
import { Footer } from "../components/Footer.jsx"
// Sample JSON data - in a real app, this would be fetched from an API
const sampleData = [
  {
    id: 1,
    title: "The Art of Mindful Breathing",
    description:
      "Discover the transformative power of conscious breathing techniques for stress reduction and mental clarity.",
    thumbnailUrl: "/placeholder.svg",
    videoUrl: "https://example.com/video1",
    duration: "12:45",
    views: 1245,
    category: "Meditation",
    featured: true,
  },
  {
    id: 2,
    title: "Guided Meditation for Inner Peace",
    description: "A calming journey to your center, helping you find tranquility in the midst of daily chaos.",
    thumbnailUrl: "/placeholder.svg",
    videoUrl: "https://example.com/video2",
    duration: "18:30",
    views: 2890,
    category: "Guided Meditation",
    featured: true,
  },
  {
    id: 3,
    title: "Understanding the Mind-Body Connection",
    description:
      "Explore the profound relationship between mental states and physical well-being through meditative practices.",
    thumbnailUrl: "/placeholder.svg",
    videoUrl: "https://example.com/video3",
    duration: "22:15",
    views: 1678,
    category: "Mindfulness",
    featured: false,
  },
  {
    id: 4,
    title: "Zen in Daily Life: Practical Applications",
    description:
      "Learn how to incorporate Zen principles into your everyday routines for greater presence and awareness.",
    thumbnailUrl: "/placeholder.svg",
    videoUrl: "https://example.com/video4",
    duration: "15:20",
    views: 3421,
    category: "Zen",
    featured: true,
  },
]

export default function Akshat({ data = sampleData, title = "Featured Meditations" }) {
  const [videos, setVideos] = useState([])
  const [hoveredId, setHoveredId] = useState(null)

  // Simulate fetching data
  useEffect(() => {
    // In a real app, you would fetch data here
    setVideos(data)
  }, [data])

  // Filter featured videos if needed
  const featuredVideos = videos.filter((video) => video.featured)

  return (
    <>
    <Header></Header>
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          {title}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform translate-y-2"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVideos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-card/40 border border-border/50 rounded-lg overflow-hidden backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={video.thumbnailUrl || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70"></div>

                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{video.category}</Badge>

                <div className="absolute bottom-3 left-3 flex items-center gap-3 text-xs text-white">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{video.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    <span>{video.views.toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 h-8 w-8 bg-black/20 backdrop-blur hover:bg-black/40"
                >
                  <BookmarkPlus className="h-4 w-4" />
                  <span className="sr-only">Save video</span>
                </Button>

                {hoveredId === video.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-16 w-16 rounded-full bg-primary/90 hover:bg-primary text-white"
                    >
                      <Play className="h-8 w-8 fill-current" />
                      <span className="sr-only">Play video</span>
                    </Button>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{video.description}</p>
                <Button
                  className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  onClick={() => window.open(video.videoUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4" />
                  Watch Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {featuredVideos.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No featured videos available at the moment.</p>
          </div>
        )}
      </div>
    </section>
    <Footer></Footer>
    </>
  )
}


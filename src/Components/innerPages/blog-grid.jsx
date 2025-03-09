import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, BookmarkPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Mindful Breathing: A Beginner's Guide",
    excerpt: "Discover how mindful breathing can transform your meditation practice and daily life.",
    coverImage: "/placeholder.svg?height=300&width=500",
    category: "Meditation",
    badgeColor: "bg-primary",
    author: {
      name: "Deepak Sharma",
      avatar: "/placeholder.svg",
      initials: "DS",
    },
    date: "Mar 1, 2025",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "5 Meditative Films That Will Change Your Perspective",
    excerpt: "These thought-provoking films offer profound insights into mindfulness and self-awareness.",
    coverImage: "/placeholder.svg?height=300&width=500",
    category: "Films",
    badgeColor: "bg-accent",
    author: {
      name: "Priya Patel",
      avatar: "/placeholder.svg",
      initials: "PP",
    },
    date: "Feb 28, 2025",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Ancient Wisdom for Modern Times: Vedic Meditation Techniques",
    excerpt: "Explore how ancient Vedic meditation practices can be applied to our busy modern lives.",
    coverImage: "/placeholder.svg?height=300&width=500",
    category: "Knowledge",
    badgeColor: "bg-blue-600",
    author: {
      name: "Rahul Gupta",
      avatar: "/placeholder.svg",
      initials: "RG",
    },
    date: "Feb 26, 2025",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "The Power of Silence: Finding Peace in a Noisy World",
    excerpt: "Learn how embracing silence can lead to profound inner transformation and clarity.",
    coverImage: "/placeholder.svg?height=300&width=500",
    category: "Mindfulness",
    badgeColor: "bg-green-600",
    author: {
      name: "Ananya Singh",
      avatar: "/placeholder.svg",
      initials: "AS",
    },
    date: "Feb 24, 2025",
    readTime: "9 min read",
  },
  {
    id: 5,
    title: "Meditative Shayari: The Poetry of Consciousness",
    excerpt: "Discover how Hindi shayari can be a form of meditation and spiritual expression.",
    coverImage: "/placeholder.svg?height=300&width=500",
    category: "Shayari",
    badgeColor: "bg-accent",
    author: {
      name: "Vikram Khanna",
      avatar: "/placeholder.svg",
      initials: "VK",
    },
    date: "Feb 22, 2025",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Journaling as Meditation: Writing Your Way to Clarity",
    excerpt: "How the simple practice of daily journaling can become a powerful meditative tool.",
    coverImage: "/placeholder.svg?height=300&width=500",
    category: "Writings",
    badgeColor: "bg-yellow-600",
    author: {
      name: "Meera Joshi",
      avatar: "/placeholder.svg",
      initials: "MJ",
    },
    date: "Feb 20, 2025",
    readTime: "5 min read",
  },
  {
    id: 7,
    title: "Understanding the Self Through Meditative Cinema",
    excerpt: "How certain films can serve as mirrors for self-reflection and spiritual growth.",
    coverImage: "/placeholder.svg?height=300&width=500",
    category: "Films",
    badgeColor: "bg-purple-600",
    author: {
      name: "Arjun Mehta",
      avatar: "/placeholder.svg",
      initials: "AM",
    },
    date: "Feb 18, 2025",
    readTime: "6 min read",
  },
  {
    id: 8,
    title: "The Language of Consciousness: Poetic Expressions in Hindi",
    excerpt: "Exploring how Hindi poetry captures the essence of spiritual awakening.",
    coverImage: "/placeholder.svg?height=300&width=500",
    category: "Shayari",
    badgeColor: "bg-accent",
    author: {
      name: "Neha Kapoor",
      avatar: "/placeholder.svg",
      initials: "NK",
    },
    date: "Feb 16, 2025",
    readTime: "7 min read",
  },
]

export function BlogGrid() {
  return (
    <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Latest Articles</h2>
        <Link href="/blog" className="text-primary hover:underline">
          View all
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="bg-card/40 border-border/50 backdrop-blur overflow-hidden">
            <div className="relative aspect-video w-full">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={`Cover image for ${post.title}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2">
                <Badge className={`${post.badgeColor} text-white`}>{post.category}</Badge>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 bg-black/20 backdrop-blur hover:bg-black/40"
              >
                <BookmarkPlus className="h-4 w-4" />
                <span className="sr-only">Save article</span>
              </Button>
            </div>
            <CardContent className="p-4">
              <Link href={`/post/${post.id}`}>
                <h3 className="font-bold line-clamp-2 hover:text-primary transition-colors">{post.title}</h3>
              </Link>
              <p className="text-muted-foreground text-sm mt-2 line-clamp-2 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.initials}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{post.author.name}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </section>
  )
}


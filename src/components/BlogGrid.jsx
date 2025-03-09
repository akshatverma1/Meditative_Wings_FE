import { Link } from "react-router-dom"
import { Clock, BookmarkPlus } from "lucide-react"
import { Button } from "./ui/Button"
import { Badge } from "./ui/Badge"
import { Avatar } from "./ui/Avatar"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Mindful Breathing: A Beginner's Guide",
    excerpt: "Discover how mindful breathing can transform your meditation practice and daily life.",
    coverImage: "/placeholder.svg",
    category: "Meditation",
    badgeColor: "bg-primary",
    author: {
      name: "Deepak Sharma",
      avatar: "/placeholder.svg",
      initials: "DS",
    },
    date: "Mar 1, 2025",
    readTime: "6 min read",
    categoryId: "1",
  },
  {
    id: 2,
    title: "5 Meditative Films That Will Change Your Perspective",
    excerpt: "These thought-provoking films offer profound insights into mindfulness and self-awareness.",
    coverImage: "/placeholder.svg",
    category: "Films",
    badgeColor: "bg-accent",
    author: {
      name: "Priya Patel",
      avatar: "/placeholder.svg",
      initials: "PP",
    },
    date: "Feb 28, 2025",
    readTime: "4 min read",
    categoryId: "3",
  },
  {
    id: 3,
    title: "Ancient Wisdom for Modern Times: Vedic Meditation Techniques",
    excerpt: "Explore how ancient Vedic meditation practices can be applied to our busy modern lives.",
    coverImage: "/placeholder.svg",
    category: "Knowledge",
    badgeColor: "bg-blue-600",
    author: {
      name: "Rahul Gupta",
      avatar: "/placeholder.svg",
      initials: "RG",
    },
    date: "Feb 26, 2025",
    readTime: "7 min read",
    categoryId: "1",
  },
  {
    id: 4,
    title: "The Power of Silence: Finding Peace in a Noisy World",
    excerpt: "Learn how embracing silence can lead to profound inner transformation and clarity.",
    coverImage: "/placeholder.svg",
    category: "Mindfulness",
    badgeColor: "bg-green-600",
    author: {
      name: "Ananya Singh",
      avatar: "/placeholder.svg",
      initials: "AS",
    },
    date: "Feb 24, 2025",
    readTime: "9 min read",
    categoryId: "2",
  },
  {
    id: 5,
    title: "Meditative Shayari: The Poetry of Consciousness",
    excerpt: "Discover how Hindi shayari can be a form of meditation and spiritual expression.",
    coverImage: "/placeholder.svg",
    category: "Shayari",
    badgeColor: "bg-accent",
    author: {
      name: "Vikram Khanna",
      avatar: "/placeholder.svg",
      initials: "VK",
    },
    date: "Feb 22, 2025",
    readTime: "8 min read",
    categoryId: "6",
  },
  {
    id: 6,
    title: "Journaling as Meditation: Writing Your Way to Clarity",
    excerpt: "How the simple practice of daily journaling can become a powerful meditative tool.",
    coverImage: "/placeholder.svg",
    category: "Writings",
    badgeColor: "bg-yellow-600",
    author: {
      name: "Meera Joshi",
      avatar: "/placeholder.svg",
      initials: "MJ",
    },
    date: "Feb 20, 2025",
    readTime: "5 min read",
    categoryId: "4",
  },
  {
    id: 7,
    title: "Understanding the Self Through Meditative Cinema",
    excerpt: "How certain films can serve as mirrors for self-reflection and spiritual growth.",
    coverImage: "/placeholder.svg",
    category: "Films",
    badgeColor: "bg-purple-600",
    author: {
      name: "Arjun Mehta",
      avatar: "/placeholder.svg",
      initials: "AM",
    },
    date: "Feb 18, 2025",
    readTime: "6 min read",
    categoryId: "5",
  },
  {
    id: 8,
    title: "The Language of Consciousness: Poetic Expressions in Hindi",
    excerpt: "Exploring how Hindi poetry captures the essence of spiritual awakening.",
    coverImage: "/placeholder.svg",
    category: "Shayari",
    badgeColor: "bg-accent",
    author: {
      name: "Neha Kapoor",
      avatar: "/placeholder.svg",
      initials: "NK",
    },
    date: "Feb 16, 2025",
    readTime: "7 min read",
    categoryId: "8",
  },
]

export function BlogGrid({ categoryId, searchTerm }) {
  // Filter posts based on category if provided
  const filteredPosts = categoryId ? blogPosts.filter((post) => post.categoryId === categoryId) : blogPosts

  // Further filter by search term if provided
  const displayedPosts = searchTerm
    ? filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : filteredPosts

  return (
    <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Latest Articles</h2>
        <Link to="/blog" className="text-primary hover:underline">
          View all
        </Link>
      </div>

      {displayedPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedPosts.map((post) => (
            <div key={post.id} className="bg-card/40 border border-border/50 backdrop-blur overflow-hidden rounded-lg">
              <div className="relative aspect-video w-full">
                <img
                  src={post.coverImage || "/placeholder.svg"}
                  alt={`Cover image for ${post.title}`}
                  className="w-full h-full object-cover"
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
              <div className="p-4">
                <Link to={`/post/${post.id}`}>
                  <h3 className="font-bold line-clamp-2 hover:text-primary transition-colors">{post.title}</h3>
                </Link>
                <p className="text-muted-foreground text-sm mt-2 line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <img src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <div>{post.author.initials}</div>
                    </Avatar>
                    <span className="font-medium">{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </section>
  )
}


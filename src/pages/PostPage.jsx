"use client"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Stars } from "../components/Stars"
import { Badge } from "../components/ui/Badge"
import { Avatar } from "../components/ui/Avatar"
import { Button } from "../components/ui/Button"
import { CalendarDays, Clock, BookmarkPlus, Share2, Heart, MessageSquare } from "lucide-react"

function PostPage() {
  const { id } = useParams()

  return (
    <div className="min-h-screen flex flex-col relative">
      <Stars />
      <Header />
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 py-10 md:py-16">
          <div className="mb-8 text-center">
            <Badge className="bg-primary text-primary-foreground mb-4">Meditation</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The Art of Mindful Breathing: A Beginner's Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Discover how mindful breathing can transform your meditation practice and daily life.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <img src="/placeholder.svg" alt="@author" />
                  <div>DS</div>
                </Avatar>
                <div className="text-left">
                  <p className="text-sm font-medium">Deepak Sharma</p>
                  <p className="text-xs text-muted-foreground">Meditation Teacher</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <CalendarDays className="h-4 w-4" />
                <span>Mar 1, 2025</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Clock className="h-4 w-4" />
                <span>6 min read</span>
              </div>
            </div>
            <div className="relative w-full aspect-[16/9] mb-8">
              <img
                src="/placeholder.svg"
                alt="Blog post cover image"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Introduction to Mindful Breathing</h2>
            <p>
              Breathing is something we do every moment of our lives, yet we rarely pay attention to it. Mindful
              breathing is the practice of bringing awareness to the breath – observing its natural rhythm without
              trying to control it.
            </p>
            <p>
              This simple practice forms the foundation of many meditation techniques and can be a powerful tool for
              reducing stress, improving focus, and cultivating a sense of inner peace.
            </p>

            <h2>The Benefits of Mindful Breathing</h2>
            <p>Regular practice of mindful breathing can lead to numerous benefits:</p>
            <ul>
              <li>Reduced stress and anxiety</li>
              <li>Improved concentration and mental clarity</li>
              <li>Better emotional regulation</li>
              <li>Enhanced self-awareness</li>
              <li>Improved sleep quality</li>
              <li>Lower blood pressure</li>
            </ul>

            <h2>A Simple Mindful Breathing Practice</h2>
            <p>Here's a basic mindful breathing meditation that you can practice anywhere:</p>
            <ol>
              <li>Find a comfortable seated position with your back straight but not rigid.</li>
              <li>Close your eyes or maintain a soft gaze downward.</li>
              <li>
                Bring your attention to your breath, noticing the sensation of air moving in and out of your body.
              </li>
              <li>Observe where you feel the breath most prominently – perhaps at the nostrils, chest, or abdomen.</li>
              <li>When your mind wanders (which is natural), gently bring your attention back to the breath.</li>
              <li>
                Continue for 5-10 minutes, gradually increasing the duration as you become more comfortable with the
                practice.
              </li>
            </ol>

            <h2>Common Challenges and How to Overcome Them</h2>
            <p>Many beginners face challenges when starting a mindful breathing practice:</p>
            <p>
              <strong>Mind wandering:</strong> This is completely normal. Each time you notice your mind has wandered,
              simply acknowledge it and gently return your attention to the breath. This act of returning is the
              practice itself.
            </p>
            <p>
              <strong>Physical discomfort:</strong> If you experience discomfort while sitting, adjust your position or
              try practicing while lying down. The most important thing is to maintain a posture that allows you to be
              alert yet relaxed.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-border/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Heart className="h-4 w-4" />
                  <span>120 Likes</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>24 Comments</span>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <BookmarkPlus className="h-4 w-4" />
                  <span>Save</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default PostPage


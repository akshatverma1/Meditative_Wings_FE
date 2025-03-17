import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Stars } from "../components/Stars"
import { Instagram, Youtube, Twitter, Facebook } from "lucide-react"
import { Button } from "../components/ui/Button"

// Social media data
const socialMediaData = {
  social_media: {
    Instagram: ["meditativewings", "meditativewings_shayari", "meditativewingsmedia"],
    YouTube: {
      meditative_wings_world: "https://youtube.com/@meditativewingsworld?si=bHkf8Xl0nTJHDWlz",
      meditative_wings:"https://youtube.com/@meditativewings?si=5GZ-7JtYGcXBeWQP",
      meditative_wings_infinity: "https://youtube.com/@meditativewingsinfinity?si=b3PxkLVpSw0N72Qh",
      meditative_wings_media: "https://youtube.com/@meditativewingsmedia?si=lb1cnozz991e0pPg",
    },
    Twitter_X: {
      meditative_wings: "https://x.com/meditativewings",
    },
    Facebook: {
      Aditya_Kumar: "https://www.facebook.com/meditativewings",
      meditative_wings_shayari: "https://www.facebook.com/meditativewingsshayari",
      meditative_wings_media: "https://www.facebook.com/meditativewingsmedia",
    },
    Snapchat: {
      meditativewings: "https://www.snapchat.com/add/meditativewings?share_id=VGwySdfxTr0&locale=en-US",
    }
  },
}

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Stars />
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-center">
            About <span className="featured-gradient">Meditative Wings</span>
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
            <p>
              INFINITE LOVE AT THE POINT OF INFINITY
            </p>
            <p>
              MEDITATIVE WINGS is a Govt registered media & entertainment company to publish "original creation" digitally or through print media in any field including education streams, health & fitness, yoga, sports, fashion,music,arts, sayari and many more.
            </p>
            <p>
            One idea/thought/creation can change the world to be a better place to live in. "Meditative wings" provides one the platform to present one's ideas/thoughts/creations before the world. Acknowledgement will be given in the form of "identity recognition and financial benefits" under the name of "Meditative wings".
            </p>

            <h2 className="text-center">Our Vision</h2>
            <p>
              We believe that meditation and mindfulness are powerful tools for personal transformation and collective well-being. Through our platform, we aim to make these practices more accessible and relatable to people from all walks of life.
            </p>

            {/* <h2 className="text-center">What We Offer</h2>
            <p>Our content spans across various categories:</p>
            <ul className="list-none p-0 flex flex-col items-center">
              <li>
                <strong>Meditative Knowledge:</strong> Insights from ancient wisdom traditions and modern research
              </li>
              <li>
                <strong>Meditative Thoughts/Ideas:</strong> Reflections and perspectives on mindfulness
              </li>
              <li>
                <strong>Meditative Films:</strong> Reviews and discussions of movies that inspire mindfulness
              </li>
              <li>
                <strong>Meditative Writings:</strong> Essays, articles, and guides on meditation practices
              </li>
              <li>
                <strong>Meditative Shayari:</strong> Poetic expressions in Hindi that capture the essence of meditation
              </li>
            </ul> */}

            <h2 className="text-center">Join Our Community</h2>
            <p>
              We invite you to be part of our growing community of meditation enthusiasts, practitioners, and seekers.
              Whether you're a beginner just starting your meditation journey or an experienced practitioner, there's
              something here for you.
            </p>
            <p>
              Feel free to explore our content, share your thoughts and connect with like-minded individuals who are
              passionate about mindfulness and inner growth.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Connect With <span className="featured-gradient">Us</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
              {/* Instagram Section */}
              <div className="bg-card/40 border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                  <Instagram className="h-6 w-6 text-pink-500" />
                  <span>Instagram</span>
                </h3>
                <div className="space-y-3">
                  {socialMediaData.social_media.Instagram.map((handle, index) => (
                    <a
                      key={index}
                      href={`https://instagram.com/${handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/10 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                        <Instagram className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">@{handle}</p>
                        <p className="text-sm text-muted-foreground">Follow us on Instagram</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* YouTube Section */}
              <div className="bg-card/40 border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                  <Youtube className="h-6 w-6 text-red-500" />
                  <span>YouTube</span>
                </h3>
                <div className="space-y-3">
                  {Object.entries(socialMediaData.social_media.YouTube).map(([name, url], index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/10 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center">
                        <Youtube className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">
                          {name
                            .split("_")
                            .join(" ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </p>
                        <p className="text-sm text-muted-foreground">Subscribe to our channel</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Twitter Section */}
              <div className="bg-card/40 border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                  <Twitter className="h-6 w-6 text-blue-400" />
                  <span>Twitter / X</span>
                </h3>
                <div className="space-y-3">
                  {Object.entries(socialMediaData.social_media.Twitter_X).map(([name, url], index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/10 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
                        <Twitter className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">@{name.split("_").join("")}</p>
                        <p className="text-sm text-muted-foreground">Follow us on Twitter/X</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Facebook Section */}
              <div className="bg-card/40 border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                  <Facebook className="h-6 w-6 text-blue-600" />
                  <span>Facebook</span>
                </h3>
                <div className="space-y-3">
                  {Object.entries(socialMediaData.social_media.Facebook).map(([name, url], index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/10 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                        <Facebook className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">
                          {name
                            .split("_")
                            .join(" ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </p>
                        <p className="text-sm text-muted-foreground">Like our Facebook page</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
               {/* Snapchat Section */}
               <div className="bg-card/40 border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-yellow-400"
                  >
                    <path d="M12.166 0c-1.336 0-1.9.6-1.9.6l-.038-.047C9.285.218 8.354 0 7.3 0a4.358 4.358 0 0 0-3.98 2.903c-.17.47-.214.93-.214 1.4 0 .79.169 1.523.507 2.258.338.735.845 1.39 1.47 1.978.625.589 1.396 1.055 2.186 1.402.79.347 1.636.564 2.473.652.084.009.169.014.253.017a.75.75 0 0 1 .745.75c0 .413-.334.75-.745.75-.084.003-.169.008-.253.017a8.962 8.962 0 0 1-2.473.652 7.381 7.381 0 0 1-2.186 1.402 6.227 6.227 0 0 1-1.47 1.978 5.095 5.095 0 0 1-.507 2.258c0 .47.044.93.214 1.4A4.358 4.358 0 0 0 7.3 24c1.054 0 1.985-.218 2.928-.553l.038-.047s.564.6 1.9.6c1.336 0 1.9-.6 1.9-.6l.038.047C15.047 23.782 15.978 24 17.032 24a4.358 4.358 0 0 0 3.98-2.903c.17-.47.214-.93.214-1.4 0-.79-.169-1.523-.507-2.258a6.227 6.227 0 0 1-1.47-1.978 7.381 7.381 0 0 1-2.186-1.402 8.962 8.962 0 0 1-2.473-.652c-.084-.009-.169-.014-.253-.017a.75.75 0 0 1-.745-.75c0-.413.334-.75.745-.75.084-.003.169-.008.253-.017a8.962 8.962 0 0 0 2.473-.652 7.381 7.381 0 0 0 2.186-1.402 6.227 6.227 0 0 0 1.47-1.978c.338-.735.507-1.468.507-2.258 0-.47-.044-.93-.214-1.4A4.358 4.358 0 0 0 17.032 0c-1.054 0-1.985.218-2.928.553l-.038.047s-.564-.6-1.9-.6z" />
                  </svg>
                  <span>Snapchat</span>
                </h3>
                <div className="space-y-3">
                  {Object.entries(socialMediaData.social_media.Snapchat).map(([name, url], index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/10 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                          <path d="M12.166 0c-1.336 0-1.9.6-1.9.6l-.038-.047C9.285.218 8.354 0 7.3 0a4.358 4.358 0 0 0-3.98 2.903c-.17.47-.214.93-.214 1.4 0 .79.169 1.523.507 2.258.338.735.845 1.39 1.47 1.978.625.589 1.396 1.055 2.186 1.402.79.347 1.636.564 2.473.652.084.009.169.014.253.017a.75.75 0 0 1 .745.75c0 .413-.334.75-.745.75-.084.003-.169.008-.253.017a8.962 8.962 0 0 1-2.473.652 7.381 7.381 0 0 1-2.186 1.402 6.227 6.227 0 0 1-1.47 1.978 5.095 5.095 0 0 1-.507 2.258c0 .47.044.93.214 1.4A4.358 4.358 0 0 0 7.3 24c1.054 0 1.985-.218 2.928-.553l.038-.047s.564.6 1.9.6c1.336 0 1.9-.6 1.9-.6l.038.047C15.047 23.782 15.978 24 17.032 24a4.358 4.358 0 0 0 3.98-2.903c.17-.47.214-.93.214-1.4 0-.79-.169-1.523-.507-2.258a6.227 6.227 0 0 1-1.47-1.978 7.381 7.381 0 0 1-2.186-1.402 8.962 8.962 0 0 1-2.473-.652c-.084-.009-.169-.014-.253-.017a.75.75 0 0 1-.745-.75c0-.413.334-.75.745-.75.084-.003.169-.008.253-.017a8.962 8.962 0 0 0 2.473-.652 7.381 7.381 0 0 0 2.186-1.402 6.227 6.227 0 0 0 1.47-1.978c.338-.735.507-1.468.507-2.258 0-.47-.044-.93-.214-1.4A4.358 4.358 0 0 0 17.032 0c-1.054 0-1.985.218-2.928.553l-.038.047s-.564-.6-1.9-.6z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-medium">@{name}</p>
                        <p className="text-sm text-muted-foreground">Follow us on Snapchat</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* <div className="mt-8 text-center">
              <Button
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                size="lg"
              >
                Join Our Community
              </Button>
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage


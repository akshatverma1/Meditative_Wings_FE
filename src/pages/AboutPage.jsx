import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Stars } from "../components/Stars"

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Stars />
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-center">
            About <span className="featured-gradient">Meditative Wings</span>
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <br></br>
            <br></br>
            <p>
            INFINITE LOVE AT THE POINT OF INFINITY
            </p>
            <p>
            MEDITATIVE WINGS is a Govt registered media & entertainment company to publish "original creation" digitally or through print media in any field including education streams, health & fitness, yoga, sports, fashion,music,arts, sayari and many more.
            </p>
          
            <p>One idea/thought/creation can change the world to be a better place to live in. "Meditative wings" provides one the platform to present one's ideas/thoughts/creations before the world.
Acknowledgement will be given in the form of "identity recognition and financial benefits" under the name of
"Meditative wings".</p>

            <h2>Our Vision</h2>
            <p>
              We believe that meditation and mindfulness are powerful tools for personal transformation and collective
              well-being. Through our platform, we aim to make these practices more accessible and relatable to people
              from all walks of life.
            </p>

            <h2>What We Offer</h2>
            <p>Our content spans across various categories:</p>
            <ul>
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
            </ul>

            <h2>Join Our Community</h2>
            <p>
              We invite you to be part of our growing community of meditation enthusiasts, practitioners, and seekers.
              Whether you're a beginner just starting your meditation journey or an experienced practitioner, there's
              something here for you.
            </p>
            <p>
              Feel free to explore our content, share your thoughts, and connect with like-minded individuals who are
              passionate about mindfulness and inner growth.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage


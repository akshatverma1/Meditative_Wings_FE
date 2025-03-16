import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Stars } from "../components/Stars"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Textarea } from "../components/ui/Textarea"
import { Mail, Phone, MapPin } from "lucide-react"

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Stars />
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-center">
            Contact <span className="featured-gradient">Us</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions, suggestions or want to contribute to MeditativeBlogs? We'd love to hear from you. Fill
                out the form and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">meditativewings@gmail.com</p>
                    {/* <p className="text-muted-foreground"> ramchandrashiv8@gmail.com</p> */}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+91-9597381588</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">
                    6h/76,Bahadurpur Housing Colony
                      <br />
                      Bhootnath,Kankarbagh
                      <br />
                      Patna-800026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div>
              <form action="https://meditative-wings-fe-brown.vercel.app/" method="get"   className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject of your message" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={6} />
                </div>

                <Button className="w-full md:w-auto">Send Message</Button>
              </form>
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage


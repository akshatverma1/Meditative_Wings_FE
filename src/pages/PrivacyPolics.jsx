import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Stars } from "../components/Stars"
import { Instagram, Youtube, Twitter, Facebook } from "lucide-react"
import { Button } from "../components/ui/Button"


function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col relative">
            <Stars />
            <Header />
            <main className="flex-1">
                <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-center">
                        Privacy Policy - <span className="featured-gradient">Meditative Wings</span>
                    </h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                        <p>
                            Privacy Policy – MeditativeWings.com

                            At Meditative Wings, we understand that when you visit our website, you’re not just looking for information — you’re trusting us with a small part of your digital presence. Whether you're here for meditation tips, mindfulness techniques, or simply to find peace in a fast-moving world, we want to make sure your experience on our site is smooth, safe, and respectful of your privacy. That’s why this Privacy Policy exists — not as a formality, but as a sincere commitment to you.

                            We want to be as transparent as possible, so this page will walk you through exactly what kind of data we collect, why we collect it, how we use it, and what rights you have when it comes to that data. We’re not lawyers, so we’ve tried to keep the language simple, honest, and easy to understand — just like the rest of our site.

                            Let’s start with the basics. When you visit MeditativeWings.com, some data is automatically collected — things like your IP address, the pages you visit, the time you spend on the site, and the browser or device you’re using. This kind of information helps us understand how people are using the site so we can improve it. For example, if we see that most of our visitors are reading articles on breathing techniques but skipping over longer reads, we might create more short-form content to meet that need.

                            We also use tools like Google Analytics and other traffic analysis software to get a general sense of how users engage with our content. These tools collect anonymous usage data and help us answer questions like: How many people are visiting? Which blog posts are most popular? Where are most users located? We never use these tools to track you as an individual or to invade your privacy — they’re purely to help us understand broad trends.

                            Like most websites, we use cookies — small text files stored on your browser that help remember your preferences and improve your experience. Cookies don’t give us access to your computer or any personal data unless you choose to share that information with us. You can always choose to disable cookies in your browser settings, though doing so might limit some aspects of your experience here (like how fast pages load or whether your previous visits are remembered).

                            If you choose to leave a comment on our blog or subscribe to our newsletter, we’ll ask for your name and email address. That’s because we want to be able to respond to your comments and send you updates if you’ve requested them. We will never share, sell, rent, or trade your email address or any other personal information with any third party without your explicit consent. Your inbox is sacred to us, and we hate spam just as much as you do.

                            Speaking of email, we may occasionally send newsletters or updates to users who have voluntarily subscribed. These emails might include new blog posts, updates about the site, or helpful tips we think you’ll enjoy. You can unsubscribe at any time with a single click — no questions asked, and no hard feelings. We want our communication to be valuable, not annoying.

                            Sometimes, we may offer free resources — like downloadable meditation guides or audio files — in exchange for your email address. When you sign up for these, your information is securely stored and used only for the purpose stated at the time of signup. We never enroll anyone into our email list without clear and voluntary consent.

                            We also want to be clear about third-party services. Our site may use platforms like Google AdSense to display ads. These services may use cookies or similar technologies to serve ads based on your prior visits to this and other websites. Google may collect and use data according to their own privacy policies. You can opt out of personalized ads by visiting Google’s Ads Settings page. We do not have direct control over these third-party data practices, but we do our best to only work with reputable partners.

                            Our website might contain links to external sites — maybe a reference to a useful book, a meditation app, or an article on another blog. Once you click those links, you’re leaving our site, and we can’t control or guarantee what happens after that. We recommend reviewing the privacy policies of any external websites you visit, especially if they ask for your personal information.

                            We take data security seriously. While no system can be 100% secure, we take all reasonable precautions to protect your data, including encrypted connections (HTTPS), secure plugins, and regular software updates. We don’t store sensitive data on our servers, and we don’t ask for anything like credit card numbers or passwords. If there is ever a data breach or issue that compromises your information, we’ll notify you as soon as possible.

                            If you’re located in the European Union or other regions with data protection laws, you have certain rights — including the right to access your personal data, request corrections, or ask us to delete your information. If you want to do any of these things, just reach out to us via our contact form. We’ll respond promptly and respectfully.

                            We don’t knowingly collect data from children under the age of 13. If you are a parent or guardian and believe your child has submitted personal information without your consent, please contact us immediately. We’ll take steps to remove that information from our systems.

                            Over time, we may update this Privacy Policy to reflect changes in laws, tools, or the way our site functions. When we do, we’ll post a clear notice on this page and, if the change is significant, alert our users via email or site announcement. We encourage you to check back occasionally to stay informed.

                            Our entire mission at Meditative Wings is based on mindfulness, presence, and respect — and that includes how we treat your privacy. We promise never to take your trust for granted, never to misuse your information, and never to clutter your inbox or browser with unwanted content. We’re here to help you breathe a little deeper, not worry more.

                            If you ever have questions about this policy, or want clarification about how your data is handled, don’t hesitate to reach out. We’re just one message away and always open to honest conversations. We believe that privacy and peace of mind go hand-in-hand — and both matter equally on your journey toward a more balanced life.

                            Thanks for being here. Thanks for trusting us. And thanks for being part of the Meditative Wings family.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default AboutPage


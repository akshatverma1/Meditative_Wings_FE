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
                        Terms and Conditions - <span className="featured-gradient">Meditative Wings</span>
                    </h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                        <p>
                            Terms and Conditions – MeditativeWings.com

                            Welcome to Meditative Wings. When you visit our website, read our articles, download our free resources, or otherwise use our content, we want everything to be clear, fair, and respectful from the start. That’s what this page is about. These Terms and Conditions (or “Terms” for short) serve as a mutual agreement between you and us — a set of basic expectations that help protect both your rights and ours while using this website.

                            We believe terms and conditions don’t have to sound robotic or overly legal. So, we’ve written them in plain, everyday language. We want you to feel informed, not confused. Still, by using this site, you’re agreeing to these terms. If you don’t agree with any part of what’s written here, it’s best not to use our website or services. That said, we’re always open to feedback and clarity, so don’t hesitate to contact us if you have questions.

                            Let’s begin with what Meditative Wings is and what it offers. This website is a digital space where we share articles, blog posts, meditative techniques, mindfulness practices, breathing exercises, and other well-being tools. The intention is to educate, inspire, and support people on their personal growth or mental wellness journeys. None of the content is meant to replace medical advice, mental health therapy, or professional counseling. We’re here to complement your wellness practices — not to replace medical professionals.

                            Now, about your use of this website. You agree to use MeditativeWings.com only for lawful purposes. That means you won’t try to hack into our system, manipulate the website, upload viruses, or spam others through comments or forms. You’re also agreeing not to misuse any content, copy it without permission, or try to republish our materials as your own.

                            All of the original content on this site — articles, graphics, logos, videos, and downloadable PDFs — are the intellectual property of Meditative Wings unless otherwise stated. That means we worked hard to create it and it’s protected under copyright law. You may read, share, and even reference our content for personal or educational purposes (and we love that!), but please don’t copy-paste it to your own blog or website without linking back and crediting us. Commercial use, redistribution, or republishing of our content without written consent is not allowed.

                            Comments are a big part of a community-based website like ours. When you leave a comment, you agree to stay respectful, constructive, and kind. Any hateful, discriminatory, or spammy messages will be deleted. We reserve the right to moderate, remove, or edit comments for any reason — especially if they violate the tone and spirit of the Meditative Wings community.

                            We also sometimes include affiliate links to products or services we genuinely believe in. If you click on these links and make a purchase, we may earn a small commission at no extra cost to you. We disclose this to stay transparent. However, we are never paid to write biased reviews, and we do not endorse any product or service we wouldn’t use ourselves. Our trust with our readers is more important than any commission.

                            Google AdSense and other ad networks may also display advertisements on our website. These networks may use cookies or similar technologies to display relevant ads based on your browsing behavior. By using our website, you consent to the use of such third-party tools, provided they comply with user privacy laws. You can opt out of personalized ads through your browser settings or directly on Google's ad settings page.

                            Sometimes, our website may include external links to helpful blogs, videos, or articles we think you’ll enjoy. These third-party sites have their own terms and privacy policies, which we do not control. Once you leave MeditativeWings.com, you’re subject to the rules of that external website. We are not responsible for the accuracy, reliability, or safety of content found on those external sites.

                            Now, about downloading our free or paid resources: We often offer meditation guides, audio tracks, or ebooks. When you download anything from our site, you agree not to re-upload, resell, or share those files publicly without permission. These resources are intended for personal use only. Sharing them privately with a friend is fine — but selling them or uploading them to other websites is not.

                            We do our absolute best to ensure the information on Meditative Wings is accurate, well-researched, and helpful. However, we cannot guarantee that every single article is error-free, up to date, or applicable to every situation. All content is provided “as is,” and we make no warranties, either express or implied. It’s up to you to decide how the information suits your personal journey, and we always recommend speaking with a health or wellness professional if needed.

                            We are not liable for any loss or damage that may arise from using our website, relying on our content, or downloading our resources. This includes but isn’t limited to loss of data, business interruption, health decisions, or dissatisfaction from a meditation technique not working for you. We encourage you to use your best judgment, and always seek expert advice when in doubt.

                            If you create an account on our site (e.g., for subscribing, accessing exclusive content, or leaving comments), you are responsible for keeping your account credentials safe. Do not share your password with others, and please let us know immediately if you believe your account has been compromised.

                            We reserve the right to modify, suspend, or even terminate parts of the website at any time without notice. Whether it’s for maintenance, updates, or a shift in content direction, we may change things as needed to improve the user experience. That includes editing these Terms and Conditions. When we do update this page, we’ll make a note of the last revision date at the top or bottom. Your continued use of the site after those changes means you accept the new terms.

                            These Terms are governed by applicable laws of the country in which our site is based. In case of any dispute, we’ll try our best to resolve things amicably and respectfully. But if legal steps are necessary, the dispute shall be handled by the local court jurisdiction unless otherwise required by international laws.

                            If you’re unsure about any part of these Terms, feel free to reach out via our contact page. We’re real people behind this site, and we’re happy to explain things or clear up confusion.

                            In essence, Meditative Wings is built on honesty, mindfulness, and mutual respect. We welcome everyone who visits with that same intention. Our Terms and Conditions exist to keep that experience fair, kind, and legally safe for everyone involved. Thank you for taking the time to read and respect them.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default AboutPage


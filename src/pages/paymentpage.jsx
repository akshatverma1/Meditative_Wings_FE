import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
// import { Stars } from "../components/Stars"
import { PaymentDetails } from "./paymentDeatils.jsx"

function PaymentPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* <Stars /> */}
      <Header />
      <main className="flex-1">
        <section className="py-12 px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-center">
            <span className="featured-gradient">Donation</span>
          </h1>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          By making a secure donation to MEDITATIVE WINGS you can help our platform to grow,diversify and make our presence visible worldwide <br></br>
          working for the welfare of the people, promoting balanced and beautiful life in the direction of achieving Sustainable development goals having the vision of Vasudhaiva Kutumbakam.
          </p>

          <PaymentDetails />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PaymentPage


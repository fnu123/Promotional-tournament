import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { ImageCarousel } from "@/components/landing/image-carousel"
import { TrustSection } from "@/components/landing/trust-section"
import { Features } from "@/components/landing/features"
import { WhyChooseUs } from "@/components/landing/why-choose-us"
import { WhoItsFor } from "@/components/landing/who-its-for"
import { Testimonials } from "@/components/landing/testimonials"
import { CTASection } from "@/components/landing/cta-section"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <ImageCarousel />
      <TrustSection />
      <Features />
      <WhyChooseUs />
      <WhoItsFor />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  )
}

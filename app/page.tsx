import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { AboutSection } from "@/components/landing/about-section"
import { CoreOffer } from "@/components/landing/core-offer"
import { ComparisonSection } from "@/components/landing/comparison-section"
import { ImageCarousel } from "@/components/landing/image-carousel"
import { CTASection } from "@/components/landing/cta-section"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <CoreOffer />
      <ComparisonSection />
      <ImageCarousel />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  )
}

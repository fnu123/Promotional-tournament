"use client"

import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              {"DON'T GAMBLE ON THE SUCCESS OF YOUR BUSINESS"}
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-primary font-semibold mb-8">
              ADVERTISING AND PROMOTION — WE {"DON'T"}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Button size="lg" className="rounded-full px-8 group" asChild>
                <a href="#contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-card border border-border rounded-2xl overflow-hidden shadow-xl relative group">
              {/* Video Placeholder - Replace src with actual video */}
              <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Video Placeholder
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Replace with your promotional video
                  </p>
                </div>
              </div>
              {/* Overlay text for video */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <p className="text-foreground font-medium text-sm">
                  See how Mav-Rick can help grow your business
                </p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

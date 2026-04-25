"use client"

import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const reasons = [
  "No financial risk — never wager your own money",
  "Legitimate promotional contest format",
  "Substantial cash prizes up to $100,000",
  "Simple qualification through partner engagement",
  "Professional tournament organization",
  "Growing community of skilled players",
  "Multiple tournament formats and styles",
  "Transparent rules and fair play guaranteed",
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              The PromoPlay Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Why Choose PromoPlay?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We&apos;ve built a platform that combines the excitement of poker tournaments 
              with a completely risk-free, legitimate promotional format.
            </p>

            {/* Reasons List */}
            <ul className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="rounded-full px-8 group" asChild>
              <a href="#contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-12">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-secondary/50 rounded-2xl">
                  <p className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">
                    $100K+
                  </p>
                  <p className="text-muted-foreground text-sm">Prize Pool</p>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-2xl">
                  <p className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">
                    10K+
                  </p>
                  <p className="text-muted-foreground text-sm">Active Players</p>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-2xl">
                  <p className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">
                    500+
                  </p>
                  <p className="text-muted-foreground text-sm">Tournaments Held</p>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-2xl">
                  <p className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">
                    100%
                  </p>
                  <p className="text-muted-foreground text-sm">Free to Enter</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

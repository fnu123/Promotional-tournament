"use client"

import { Handshake, MousePointerClick, Trophy } from "lucide-react"

const steps = [
  {
    icon: Handshake,
    title: "Advertisers Partner With Us",
    description:
      "Leading brands and advertisers join our platform to connect with engaged audiences through exciting promotional events.",
    step: "01",
  },
  {
    icon: MousePointerClick,
    title: "You Engage With Partners",
    description:
      "Interact with our partner advertisers through simple actions like watching content, completing offers, or signing up for trials.",
    step: "02",
  },
  {
    icon: Trophy,
    title: "Earn Tournament Access",
    description:
      "Your engagement unlocks entry to exclusive poker-style tournaments where you can compete for substantial cash prizes.",
    step: "03",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Simple Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting started is easy. Follow these three simple steps to begin your tournament journey.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-border" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Step {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

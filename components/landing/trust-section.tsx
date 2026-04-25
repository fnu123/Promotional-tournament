"use client"

import { ShieldCheck, Ban, Gift, Scale } from "lucide-react"

const trustItems = [
  {
    icon: Ban,
    title: "Non-Gambling",
    description: "This is a promotional contest, not gambling. No real money wagered.",
  },
  {
    icon: Gift,
    title: "No Buy-In Required",
    description: "Entry is completely free through our advertising partners.",
  },
  {
    icon: ShieldCheck,
    title: "Promotional Contest",
    description: "Legal promotional sweepstakes-style tournament format.",
  },
  {
    icon: Scale,
    title: "Fair & Transparent",
    description: "Clear rules and transparent prize distribution process.",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Trust Banner */}
        <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 mb-12 text-center relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            100% Legitimate
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Not Gambling — A Promotional Contest
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            We want to be crystal clear: PromoPlay operates as a promotional contest platform. 
            Players never wager their own money. All tournament entries are earned through engagement with our advertising partners.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-background px-4 py-2 rounded-full border border-border">
              No Real Money Wagering
            </span>
            <span className="bg-background px-4 py-2 rounded-full border border-border">
              Free Entry
            </span>
            <span className="bg-background px-4 py-2 rounded-full border border-border">
              Skill-Based Competition
            </span>
          </div>
        </div>

        {/* Trust Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

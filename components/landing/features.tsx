"use client"

import { Trophy, DollarSign, Lock, Gamepad2, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Exclusive Access",
    description:
      "Get entry to members-only tournaments that aren't available to the general public.",
  },
  {
    icon: DollarSign,
    title: "No Entry Fee",
    description:
      "Never pay to play. All tournament access is earned through partner engagement.",
  },
  {
    icon: Trophy,
    title: "Massive Prize Pools",
    description:
      "Compete for your share of $100,000 in cash prizes across multiple tournament formats.",
  },
  {
    icon: Gamepad2,
    title: "Fun Tournament Experience",
    description:
      "Enjoy the thrill of poker-style competition in a safe, legal promotional format.",
  },
  {
    icon: Users,
    title: "Growing Community",
    description:
      "Join thousands of players who compete regularly in our exciting tournaments.",
  },
  {
    icon: Zap,
    title: "Instant Entry",
    description:
      "Complete partner offers and gain immediate access to upcoming tournaments.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Why Players Love Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Features & Benefits
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the excitement of high-stakes poker tournaments without the financial risk.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

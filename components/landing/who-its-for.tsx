"use client"

import { User, Briefcase, Heart, TrendingUp } from "lucide-react"

const audiences = [
  {
    icon: User,
    title: "Poker Enthusiasts",
    description:
      "Love poker but don't want to risk your own money? Enjoy tournament-style play with real prizes and zero financial risk.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Players",
    description:
      "Test your skills against thousands of players. Climb the leaderboards and prove you have what it takes to win.",
  },
  {
    icon: Heart,
    title: "Casual Gamers",
    description:
      "Looking for exciting entertainment? Join tournaments at your own pace and experience the thrill of competition.",
  },
  {
    icon: Briefcase,
    title: "Smart Deal Seekers",
    description:
      "Get value from partner offers while earning tournament access. It's a win-win for savvy consumers.",
  },
]

export function WhoItsFor() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Perfect Match
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Who Is PromoPlay For?
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you&apos;re a seasoned player or just looking for some excitement, 
            PromoPlay is designed with you in mind.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

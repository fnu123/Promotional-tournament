"use client"

import { Eye, Trophy } from "lucide-react"

export function ComparisonSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Others */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-muted-foreground/30" />
              <Eye className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Most Businesses
              </h3>
              <p className="text-muted-foreground">
                Give away tickets to a sporting event...
              </p>
            </div>

            {/* Mav-Rick */}
            <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                NOT US
              </h3>
              <p className="text-foreground font-medium">
                We do something different.
              </p>
            </div>
          </div>

          {/* Slogan */}
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <blockquote className="relative">
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance leading-relaxed">
                {'"Don\'t give your customers a seat to watch an event.'}
              </p>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary text-balance leading-relaxed">
                {'Give them seats in the event."'}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

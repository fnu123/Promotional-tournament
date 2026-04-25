"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Michael R.",
    role: "Tournament Winner",
    avatar: "M",
    content:
      "I was skeptical at first, but PromoPlay delivered exactly what they promised. Won $5,000 in my first major tournament — and I never paid a dime to enter!",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Regular Player",
    avatar: "S",
    content:
      "The best part is knowing it's completely legitimate. No gambling, no buy-ins — just skill-based competition with real prizes. This is how it should be done.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Community Member",
    avatar: "J",
    content:
      "I've been playing for 6 months now. The community is great, the tournaments are well-organized, and the prizes are real. Highly recommend to anyone who loves poker.",
    rating: 5,
  },
  {
    name: "Emily K.",
    role: "Top 10 Player",
    avatar: "E",
    content:
      "Finally, a platform that lets me enjoy poker tournaments without risking my own money. The partner offers are easy to complete and the tournaments are thrilling!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Player Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What Our Players Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from real players who have experienced the excitement of PromoPlay tournaments.
          </p>
        </div>

        {/* Demo Notice */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
            Sample Testimonials (Demo)
          </span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 relative transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • Sample Customer (Demo)
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

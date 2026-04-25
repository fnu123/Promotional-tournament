"use client"

import { Pen, Shirt, Coffee, Target, Lightbulb, Building2 } from "lucide-react"

const products = [
  { icon: Pen, label: "Pens" },
  { icon: Shirt, label: "Shirts & Jackets" },
  { icon: Coffee, label: "Cups & Mugs" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Mav-Rick
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Advertising & Promotional Products
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Mav-Rick can advertise your business and offer you the best prices for your businesses, promotional logo items(pens, shirts, jackets, caps, cups, mugs and much more.)
              </p>
              <p>
                We'll also help advise you on the best ways to promote your business or event with our products.
              </p>
              <p className="text-foreground font-medium">
                {"At Mav-Rick, we don't just advertise your business — we focus on helping build it, with a unique twist."}
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-1 gap-6">
                {/* Products */}
                <div className="flex flex-wrap justify-center gap-4">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-secondary/50 px-5 py-3 rounded-full"
                    >
                      <product.icon className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium text-sm">
                        {product.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Points */}
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-6 bg-secondary/50 rounded-2xl">
                    <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-foreground font-semibold">Targeted Advertising</p>
                  </div>
                  <div className="text-center p-6 bg-secondary/50 rounded-2xl">
                    <Lightbulb className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-foreground font-semibold">Expert Advice</p>
                  </div>
                  <div className="text-center p-6 bg-secondary/50 rounded-2xl">
                    <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-foreground font-semibold">Build Your Business</p>
                  </div>
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

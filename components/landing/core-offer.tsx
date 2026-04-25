"use client"

import { Gift, Shield, Users, Sparkles } from "lucide-react"

export function CoreOffer() {
  return (
    <section id="core-offer" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gift className="w-4 h-4" />
            BONUS GIFT
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
            $100,000 Texas Turbo {"Hold'em"} Tournaments
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              {"At Mav-Rick, we provide seats into our $100,000 Texas Turbo Hold'em Tournaments as a"} <span className="text-primary font-bold">{'"BONUS GIFT."'}</span>
            </p>
            <p className="text-foreground font-semibold text-xl">
              {"There are NO BUY-IN's for these tournaments."}
            </p>
            <p>
              These seats are designed as incentives for advertisers and their customers when advertising on the Mav-Rick website.
            </p>
            <p>
              Our tournaments are designed to be simple, approachable, and not intimidating for the average player.
            </p>
            <p className="text-2xl font-serif text-foreground italic">
              {'"Texas Hold\'em on training wheels."'}
            </p>
          </div>
        </div>

        {/* Clarity Section */}
        <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
            Important Clarifications
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <p className="font-bold text-foreground mb-1">No Buy-In Required</p>
              <p className="text-sm text-muted-foreground">Completely free entry</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Gift className="w-7 h-7 text-primary" />
              </div>
              <p className="font-bold text-foreground mb-1">Promotional Incentive Only</p>
              <p className="text-sm text-muted-foreground">Bonus for advertisers</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <p className="font-bold text-foreground mb-1">Designed for Participation</p>
              <p className="text-sm text-muted-foreground">Entertainment focused</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

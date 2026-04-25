"use client"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Contest Rules", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Contact Support", href: "#contact" },
    { label: "Advertiser Inquiry", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-serif text-xl font-bold text-foreground">
                PromoPlay
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-4">
              Exclusive poker-style promotional tournaments. No gambling, no buy-in — just skill-based competition.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-bold text-foreground mb-4">Contact (Demo)</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>123 Tournament Street</p>
              <p>Los Angeles, CA 90001</p>
              <p className="pt-2">
                <a
                  href="mailto:support@promoplay.com"
                  className="hover:text-foreground transition-colors"
                >
                  support@promoplay.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+15551234567"
                  className="hover:text-foreground transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} PromoPlay. All rights reserved. This is a promotional contest platform — not gambling.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="bg-secondary px-3 py-1 rounded-full text-xs">
              Non-Gambling
            </span>
            <span className="bg-secondary px-3 py-1 rounded-full text-xs">
              No Buy-In
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

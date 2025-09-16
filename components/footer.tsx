import Link from "next/link"
import { Linkedin, Mail, MapPin, Phone } from "lucide-react"

const navigation = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact-form" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Investment Disclaimer", href: "/investment-disclaimer" },
    { name: "Regulatory Information", href: "/regulatory" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/60 border-t border-border/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Vortex Capital
              </span>
              <p className="mt-4 text-sm leading-6 text-muted-foreground max-w-md">
                Singapore's premier investment platform specializing in strategic joint ventures with Vietnamese
                companies. Creating value through strategic partnerships.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group">
                <MapPin className="h-4 w-4 text-accent group-hover:text-accent/80 transition-colors duration-200" />
                <span>1 Raffles Place, Singapore 048616</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group">
                <Phone className="h-4 w-4 text-accent group-hover:text-accent/80 transition-colors duration-200" />
                <Link href="tel:+19782463591" className="hover:underline">+1 (978) 246-3591</Link>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group">
                <Mail className="h-4 w-4 text-accent group-hover:text-accent/80 transition-colors duration-200" />
                <Link href="mailto:contact@vortexcapital.sg" className="hover:underline">contact@vortexcapital.sg</Link>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@vortexcapital.sg"
                className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110 group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-bold leading-6 text-foreground uppercase tracking-wider mb-2 text-primary">
                Company
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-accent/50 mb-6"></div>
              <ul role="list" className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 block relative group"
                    >
                      <span className="group-hover:text-primary transition-colors duration-200">{item.name}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold leading-6 text-foreground uppercase tracking-wider mb-2 text-primary">
                Legal
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-accent/50 mb-6"></div>
              <ul role="list" className="space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 block relative group"
                    >
                      <span className="group-hover:text-primary transition-colors duration-200">{item.name}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 sm:mt-20 lg:mt-24 relative">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; 2024 Vortex Capital Pte Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent/60"></div>
              <p className="text-xs leading-5 text-muted-foreground">
                Regulated by the Monetary Authority of Singapore
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

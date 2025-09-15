import Link from "next/link"
import { Linkedin, Mail, MapPin, Phone } from "lucide-react"

const navigation = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#process" },
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
    <footer className="bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold text-primary">Vortex Capital</span>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Singapore's premier investment platform specializing in strategic joint ventures with Vietnamese
                companies. Creating value through strategic partnerships.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>1 Raffles Place, Singapore 048616</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (978) 246-3591</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@vortexcapital.sg</span>
              </div>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; 2024 Vortex Capital Pte Ltd. All rights reserved.
            </p>
            <p className="text-xs leading-5 text-muted-foreground mt-4 sm:mt-0">
              Regulated by the Monetary Authority of Singapore
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

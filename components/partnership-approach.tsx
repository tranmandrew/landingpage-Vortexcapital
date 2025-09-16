import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Globe, Target } from "lucide-react"

const partnershipApproach = [
  {
    icon: TrendingUp,
    title: "Strategic Joint Ventures",
    why: "Form powerful partnerships that leverage complementary strengths and accelerate market penetration in Vietnam.",
    how: "We conduct comprehensive legal due diligence, financial qualification, and asset verification of Vietnamese companies before structuring project-specific subsidiaries.",
    image: "/professional-business-handshake-between-singapore-.jpg",
    details: ["Legal compliance verification", "Financial health assessment", "Partnership structuring", "Asset verification"]
  },
  {
    icon: Shield,
    title: "Asset-Backed Security & Risk Management",
    why: "Vietnamese companies pledge real assets (land, equipment, inventory) as collateral while each investment operates through dedicated subsidiaries, protecting your portfolio.",
    how: "We establish subsidiary formations with asset collateral arrangements and implement comprehensive risk isolation setups with ongoing performance monitoring.",
    image: "/professional-financial-advisors-analyzing-charts-a.jpg",
    details: ["Asset collateral arrangements", "Risk isolation setup", "Performance monitoring", "Regular reporting"]
  },
  {
    icon: Globe,
    title: "Singapore Hub Advantages",
    why: "Benefit from Singapore's strategic location, robust legal framework, and favorable business environment for Asian expansion.",
    how: "We leverage Singapore's regulatory framework to secure capital flows through structured subsidiaries with strategic guidance and stakeholder reporting.",
    image: "/singapore-marina-bay-financial-district-aerial-vie.jpg",
    details: ["Singapore legal framework", "Secure capital transfer", "Strategic guidance", "Regulatory compliance"]
  },
  {
    icon: Target,
    title: "Complete Exit Strategy Management",
    why: "Professional exit planning from Day 1 with multiple routes: trade sales, management buyouts, asset liquidation for maximum returns.",
    how: "We implement strategic positioning and value maximization techniques, ensuring clean divestment processes and optimized return distribution to investors.",
    image: "/upward-trending-business-growth-chart-with-vietnam.jpg",
    details: ["Exit strategy planning", "Strategic positioning", "Value maximization", "Return distribution"]
  },
]

export function PartnershipApproach() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Partnership Approach
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We combine Singapore's strategic advantages with deep Vietnamese market expertise.
            Here's why and how we deliver exceptional value for our partners.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {partnershipApproach.map((approach) => (
              <Card key={approach.title} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[5/3] overflow-hidden">
                    <img
                      src={approach.image || "/placeholder.svg"}
                      alt={`${approach.title} - Professional business imagery`}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-x-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-primary/80">
                        <approach.icon className="h-7 w-7 text-primary-foreground" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold leading-7 text-foreground">{approach.title}</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Why This Matters</h4>
                        <p className="text-sm text-muted-foreground leading-6">{approach.why}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">How We Deliver</h4>
                        <p className="text-sm text-muted-foreground leading-6">{approach.how}</p>
                      </div>

                      <div className="pt-4 border-t border-border/50">
                        <ul className="grid grid-cols-2 gap-2">
                          {approach.details.map((detail, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-center">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
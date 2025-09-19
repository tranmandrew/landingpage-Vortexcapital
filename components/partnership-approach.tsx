import { Card, CardContent } from "@/components/ui/card"

const partnershipApproach = [
  {
    title: "Strategic Joint Ventures",
    why: "Form powerful partnerships that leverage complementary strengths and accelerate market penetration in Vietnam.",
    how: "We conduct comprehensive legal due diligence, financial qualification, and asset verification of Vietnamese companies before structuring project-specific subsidiaries.",
    image: "/professional-business-handshake-between-singapore-.jpg",
    details: ["Legal compliance verification", "Financial health assessment", "Partnership structuring", "Asset verification"]
  },
  {
    title: "Asset-Backed Security & Risk Management",
    why: "Vietnamese companies pledge real assets (land, equipment, inventory) as collateral while each investment operates through dedicated subsidiaries, protecting your portfolio.",
    how: "We establish subsidiary formations with asset collateral arrangements and implement comprehensive risk isolation setups with ongoing performance monitoring.",
    image: "/professional-financial-advisors-analyzing-charts-a.jpg",
    details: ["Asset collateral arrangements", "Risk isolation setup", "Performance monitoring", "Regular reporting"]
  },
  {
    title: "Singapore Hub Advantages",
    why: "Benefit from Singapore's strategic location, robust legal framework, and favorable business environment for Asian expansion.",
    how: "We leverage Singapore's regulatory framework to secure capital flows through structured subsidiaries with strategic guidance and stakeholder reporting.",
    image: "/professional-singapore-business-district-skyline-w.jpg",
    details: ["Singapore legal framework", "Secure capital transfer", "Strategic guidance", "Regulatory compliance"]
  },
  {
    title: "Complete Exit Strategy Management",
    why: "Professional exit planning from Day 1 with multiple routes: trade sales, management buyouts, asset liquidation for maximum returns.",
    how: "We implement strategic positioning and value maximization techniques, ensuring clean divestment processes and optimized return distribution to investors.",
    image: "/Vietnam-Singapore-Partnership-Advances-with-Focus-on-Sustainability-Investment-and-Trade.jpg",
    details: ["Exit strategy planning", "Strategic positioning", "Value maximization", "Return distribution"]
  },
]

export function PartnershipApproach() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 relative"
      style={{
        backgroundImage: 'url(/singapore-marina-bay-financial-district-aerial-vie.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
                    <div className="mb-6">
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
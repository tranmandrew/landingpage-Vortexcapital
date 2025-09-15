import { Card, CardContent } from "@/components/ui/card"
import { Search, Handshake, DollarSign, Target } from "lucide-react"

const steps = [
  {
    step: 1,
    title: "Pre-Investment Vetting",
    description:
      "Comprehensive legal due diligence, financial qualification, asset verification, and business model validation of Vietnamese companies.",
    icon: Search,
    image: "/professional-financial-advisors-analyzing-charts-a.jpg",
    details: ["Legal compliance check", "Financial health assessment", "Asset verification", "Market positioning evaluation"]
  },
  {
    step: 2,
    title: "Investment Structuring",
    description: "Create project-specific subsidiaries and structure asset-backed joint ventures with built-in exit strategies.",
    icon: Handshake,
    image: "/professional-business-handshake-between-singapore-.jpg",
    details: ["Subsidiary formation", "Asset collateral arrangements", "Risk isolation setup", "Exit strategy planning"]
  },
  {
    step: 3,
    title: "Capital Deployment",
    description: "Secure capital flows through subsidiary structure with ongoing performance monitoring and management.",
    icon: DollarSign,
    image: "/singapore-marina-bay-financial-district-aerial-vie.jpg",
    details: ["Secure capital transfer", "Performance monitoring", "Regular stakeholder reporting", "Strategic guidance"]
  },
  {
    step: 4,
    title: "Exit Execution",
    description:
      "Professional exit strategy activation through trade sales, management buyouts, or asset liquidation for maximum returns.",
    icon: Target,
    image: "/upward-trending-business-growth-chart-with-vietnam.jpg",
    details: ["Strategic positioning", "Value maximization", "Clean divestment", "Return distribution"]
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Investment Process</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A systematic approach to creating value through strategic partnerships
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={step.image || "/placeholder.svg"}
                        alt={`${step.title} - Professional business process imagery`}
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-x-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-lg">
                          {step.step}
                        </div>
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-6 mb-4">{step.description}</p>
                      <ul className="space-y-1">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

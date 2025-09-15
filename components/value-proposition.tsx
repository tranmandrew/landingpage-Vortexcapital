import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Globe, Shield, Zap, Lock } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Strategic Joint Ventures",
    description:
      "Form powerful partnerships that leverage complementary strengths and accelerate market penetration in Vietnam.",
    image: "/professional-business-handshake-between-singapore-.jpg",
  },
  {
    icon: Lock,
    title: "Asset-Backed Security",
    description:
      "Vietnamese companies pledge real assets (land, equipment, inventory) as collateral, providing unparalleled investment security.",
    image: "/professional-financial-advisors-analyzing-charts-a.jpg",
  },
  {
    icon: Globe,
    title: "Singapore Hub Advantages",
    description:
      "Benefit from Singapore's strategic location, robust legal framework, and favorable business environment for Asian expansion.",
    image: "/singapore-marina-bay-financial-district-aerial-vie.jpg",
  },
  {
    icon: Shield,
    title: "Project-Specific Risk Isolation",
    description:
      "Each investment operates through dedicated subsidiaries, protecting your portfolio from individual project risks.",
    image: "/professional-financial-advisors-analyzing-charts-a.jpg",
  },
  {
    icon: Zap,
    title: "Complete Exit Strategy Management",
    description:
      "Professional exit planning from Day 1 with multiple routes: trade sales, management buyouts, asset liquidation.",
    image: "/upward-trending-business-growth-chart-with-vietnam.jpg",
  },
]

export function ValueProposition() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Partner With Vortex Capital?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We combine Singapore's strategic advantages with deep Vietnamese market expertise to create exceptional
            value for our partners.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={benefit.image || "/placeholder.svg"}
                      alt={`${benefit.title} - Professional business imagery`}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <benefit.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                      </div>
                      <dt className="text-base font-semibold leading-7 text-foreground">{benefit.title}</dt>
                    </div>
                    <dd className="mt-4 text-base leading-7 text-muted-foreground">{benefit.description}</dd>
                  </div>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

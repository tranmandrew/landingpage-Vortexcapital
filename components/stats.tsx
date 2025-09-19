import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, DollarSign, Shield, Target } from "lucide-react"

const stats = [
  {
    value: "200+",
    label: "Companies Assessed",
    description: "Comprehensive due diligence completed across Southeast Asia",
    icon: TrendingUp
  },
  {
    value: "$75M+",
    label: "Assets Under Management",
    description: "Total capital deployed across active partnerships",
    icon: DollarSign
  },
  {
    value: "28%",
    label: "Selection Rate",
    description: "Companies meeting our institutional-grade standards",
    icon: Shield
  },
  {
    value: "$3.2M",
    label: "Average Investment",
    description: "Optimal size for sustainable growth and returns",
    icon: Target
  },
]

export function Stats() {
  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Proven Track Record</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our disciplined approach delivers consistent results across multiple successful partnerships
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-background border-2 border-border/50 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <dd className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-3">{stat.value}</dd>
                  <dt className="text-base leading-7 text-foreground font-semibold mb-2">{stat.label}</dt>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-muted/50 rounded-xl p-6 border border-border/50">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Disclaimer:</strong> Past performance is not indicative of future results. All investments involve risk of loss.
              The metrics shown represent historical performance of completed partnerships and do not guarantee future returns.
              Vortex Capital facilitates investment opportunities and does not provide investment advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

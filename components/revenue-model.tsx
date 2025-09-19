import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, DollarSign, TrendingUp, CheckCircle } from "lucide-react"

const revenueStreams = [
  {
    icon: Search,
    title: "Vetting Fees",
    timing: "Upfront Revenue",
    description: "Comprehensive due diligence and qualification process for Vietnamese companies seeking capital",
    structure: "Fixed fees paid regardless of investment outcome",
    benefit: "Immediate revenue covering operational costs and ensuring serious participants",
    highlight: "Paid upfront",
    color: "bg-blue-500"
  },
  {
    icon: CheckCircle,
    title: "Success Fees",
    timing: "Transaction-Based",
    description: "Performance-based fees aligned with successful capital deployment",
    structure: "2%-5% of total capital raised",
    benefit: "Scales with deal size and ensures aligned incentives",
    highlight: "$64K-$160K per deal",
    color: "bg-green-500"
  },
  {
    icon: TrendingUp,
    title: "Equity Participation",
    timing: "Long-Term Revenue",
    description: "Strategic ownership stakes in high-potential joint ventures",
    structure: "Equity positions with exit value realization",
    benefit: "Sustained growth potential and strategic influence",
    highlight: "Long-term value creation",
    color: "bg-purple-500"
  }
]

export function RevenueModel() {
  return (
    <section className="py-16 sm:py-20 bg-neutral-100 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] bg-[length:100%_30px]"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Diversified Revenue Model
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Multiple revenue streams ensure sustainable growth and aligned incentives across all stakeholders
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {revenueStreams.map((stream, index) => (
              <Card key={stream.title} className="hover:shadow-lg transition-shadow border-primary/20 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-xl">{stream.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {stream.timing}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed flex-shrink-0">
                    {stream.description}
                  </p>

                  <div className="space-y-3 flex-1">
                    <div className="bg-muted/50 rounded-lg p-3 h-20 flex flex-col justify-center">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Structure</p>
                      <p className="text-sm font-medium leading-tight">{stream.structure}</p>
                    </div>

                    <div className="bg-accent/10 rounded-lg p-3 h-20 flex flex-col justify-center">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Key Benefit</p>
                      <p className="text-sm leading-tight">{stream.benefit}</p>
                    </div>

                    <div className="flex items-center justify-center p-3 bg-primary/5 rounded-lg border border-primary/20 h-14">
                      <p className="text-sm font-bold text-primary text-center">{stream.highlight}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Revenue Model Advantages */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Diversified Income</h3>
            <p className="text-sm text-muted-foreground">Multiple streams reduce dependency risk</p>
          </div>
          <div className="text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Immediate Cash Flow</h3>
            <p className="text-sm text-muted-foreground">Vetting fees provide working capital</p>
          </div>
          <div className="text-center">
            <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Performance Aligned</h3>
            <p className="text-sm text-muted-foreground">Success fees align with client outcomes</p>
          </div>
          <div className="text-center">
            <Search className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Scalable Structure</h3>
            <p className="text-sm text-muted-foreground">Revenue grows with platform expansion</p>
          </div>
        </div>
      </div>
    </section>
  )
}
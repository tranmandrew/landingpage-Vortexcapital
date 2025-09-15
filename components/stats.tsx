import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "75+", label: "Companies Vetted", suffix: "" },
  { value: "$50M+", label: "Assets Under Management", suffix: "" },
  { value: "25%", label: "Success Rate", suffix: "" },
  { value: "$2.5M", label: "Average Deal Size", suffix: "" },
]

export function Stats() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Proven Track Record</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our results speak for themselves across multiple successful partnerships
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-white border border-border shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <dd className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-2">{stat.value}</dd>
                  <dt className="text-base leading-7 text-muted-foreground font-medium">{stat.label}</dt>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

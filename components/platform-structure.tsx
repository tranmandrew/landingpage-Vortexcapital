import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Building2, Users, Briefcase, Shield, TrendingUp, FileCheck } from "lucide-react"

export function PlatformStructure() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Platform Structure</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our Singapore holding company structure provides optimal risk isolation and strategic advantages
          </p>
        </div>

        <div className="relative mt-16 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/professional-singapore-business-district-skyline-w.jpg"
              alt="Singapore business district representing our professional operations"
              className="h-full w-full object-cover opacity-10"
            />
          </div>
          <div className="relative bg-white/90 backdrop-blur-sm p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* Investors */}
              <Card className="w-full max-w-sm">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>Investors</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Strategic capital providers seeking exposure to Vietnamese market opportunities
                  </p>
                </CardContent>
              </Card>

              <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90 lg:rotate-0" />

              {/* Vortex Capital */}
              <Card className="w-full max-w-sm border-primary shadow-lg">
                <CardHeader className="text-center">
                  <Building2 className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-primary">Vortex Capital</CardTitle>
                  <p className="text-sm text-muted-foreground">Singapore Holding Company</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Central facilitator managing multiple joint ventures with comprehensive risk management
                  </p>
                </CardContent>
              </Card>

              <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90 lg:rotate-0" />

              {/* Multiple JVs */}
              <Card className="w-full max-w-sm">
                <CardHeader className="text-center">
                  <Briefcase className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>Multiple Joint Ventures</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Diversified portfolio of strategic partnerships across various Vietnamese market sectors
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-3">Project-Specific Subsidiaries</h3>
            <p className="text-muted-foreground text-sm">
              Each investment gets its own dedicated subsidiary structure for maximum risk isolation
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-3">Asset-Backed Security</h3>
            <p className="text-muted-foreground text-sm">
              Vietnamese companies create asset-backed subsidiaries with land, equipment, and inventory collateral
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-3">Tax Efficiency</h3>
            <p className="text-muted-foreground text-sm">
              Singapore's favorable tax treaties and business-friendly environment optimize returns for all stakeholders
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-3">Regulatory Compliance</h3>
            <p className="text-muted-foreground text-sm">
              Robust legal framework ensures full compliance with both Singapore and Vietnamese regulations
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

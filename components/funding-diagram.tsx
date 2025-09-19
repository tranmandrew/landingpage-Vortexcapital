"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function FundingDiagram() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-muted/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Vortex Capital Funding Structure</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Understanding our sophisticated tri-party funding model that facilitates secure international joint ventures
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          {/* Lender Side */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center tracking-tight">Lender Side Structure</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Card className="w-full md:w-64 h-32 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <h4 className="font-semibold text-foreground">P1 - Lender</h4>
                  <p className="text-sm text-muted-foreground text-center">Primary Capital Provider</p>
                </CardContent>
              </Card>

              <ArrowRight className="w-6 h-6 text-accent rotate-90 md:rotate-0" />

              <Card className="w-full md:w-64 h-32 border-2 border-accent/30 hover:border-accent transition-all duration-300 bg-gradient-to-br from-accent/10 to-accent/20 hover:shadow-lg">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <h4 className="font-semibold text-foreground">P2 - Vortex Capital</h4>
                  <p className="text-sm text-muted-foreground text-center">Investment Facilitator</p>
                </CardContent>
              </Card>

              <ArrowRight className="w-6 h-6 text-accent rotate-90 md:rotate-0" />

              <Card className="w-full md:w-64 h-32 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <h4 className="font-semibold text-foreground">P3 - Project Subsidiary</h4>
                  <p className="text-sm text-muted-foreground text-center">Dedicated Project Entity</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Borrower Side */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center tracking-tight">Borrower Side Structure</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Card className="w-full md:w-64 h-32 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <h4 className="font-semibold text-foreground">P1 - Borrower</h4>
                  <p className="text-sm text-muted-foreground text-center">Project Initiator</p>
                </CardContent>
              </Card>

              <ArrowRight className="w-6 h-6 text-accent rotate-90 md:rotate-0" />

              <Card className="w-full md:w-64 h-32 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <h4 className="font-semibold text-foreground">P2 - JV Subsidiary</h4>
                  <p className="text-sm text-muted-foreground text-center">Collateral Provider</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Joint Venture */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl opacity-50"></div>
            <div className="relative p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-6 tracking-tight">Joint Venture Formation</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <Card className="w-full md:w-80 h-40 border-2 border-primary/30 bg-primary/5 hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <h4 className="font-semibold text-foreground mb-2">P3 Lender Side</h4>
                    <p className="text-sm text-muted-foreground text-center">Project Subsidiary Entity</p>
                  </CardContent>
                </Card>

                <div className="flex flex-col items-center">
                  <span className="text-lg font-semibold text-primary">Joint Venture</span>
                </div>

                <Card className="w-full md:w-80 h-40 border-2 border-primary/30 bg-primary/5 hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <h4 className="font-semibold text-foreground mb-2">P2 Borrower Side</h4>
                    <p className="text-sm text-muted-foreground text-center">JV Subsidiary with Assets</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Risk Mitigation</h4>
              <p className="text-muted-foreground">Structured subsidiary approach minimizes exposure for all parties</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Asset Security</h4>
              <p className="text-muted-foreground">Collateral assets provide additional security for lenders</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Regulatory Compliance</h4>
              <p className="text-muted-foreground">Structure ensures compliance across Singapore and Vietnam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

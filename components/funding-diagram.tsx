"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, Users, Handshake } from "lucide-react"

export function FundingDiagram() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">ProjectX Funding Structure</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Understanding our sophisticated tri-party funding model that facilitates secure international joint ventures
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Lender Side */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Lender Side Structure</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Card className="w-full md:w-64 h-32 border-2 border-blue-200 hover:border-primary transition-colors">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <Users className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-semibold text-slate-900">P1 - Lender</h4>
                  <p className="text-sm text-slate-600 text-center">Primary Capital Provider</p>
                </CardContent>
              </Card>

              <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />

              <Card className="w-full md:w-64 h-32 border-2 border-secondary/30 hover:border-secondary transition-colors bg-gradient-to-br from-secondary/10 to-secondary/20">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <Building2 className="w-8 h-8 text-secondary-foreground mb-2" />
                  <h4 className="font-semibold text-slate-900">P2 - Vortex Capital</h4>
                  <p className="text-sm text-slate-600 text-center">Investment Facilitator</p>
                </CardContent>
              </Card>

              <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />

              <Card className="w-full md:w-64 h-32 border-2 border-blue-200 hover:border-primary transition-colors">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <Building2 className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-semibold text-slate-900">P3 - Project Subsidiary</h4>
                  <p className="text-sm text-slate-600 text-center">Dedicated Project Entity</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Borrower Side */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-emerald-900 mb-8 text-center">Borrower Side Structure</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Card className="w-full md:w-64 h-32 border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <Users className="w-8 h-8 text-emerald-600 mb-2" />
                  <h4 className="font-semibold text-slate-900">P1 - Borrower</h4>
                  <p className="text-sm text-slate-600 text-center">Project Initiator</p>
                </CardContent>
              </Card>

              <ArrowRight className="w-6 h-6 text-emerald-600 rotate-90 md:rotate-0" />

              <Card className="w-full md:w-64 h-32 border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <Building2 className="w-8 h-8 text-emerald-600 mb-2" />
                  <h4 className="font-semibold text-slate-900">P2 - JV Subsidiary</h4>
                  <p className="text-sm text-slate-600 text-center">Collateral Provider</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Joint Venture */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-emerald-100 rounded-2xl opacity-50"></div>
            <div className="relative p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary mb-6">Joint Venture Formation</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <Card className="w-full md:w-80 h-40 border-2 border-primary/30 bg-primary/5">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <Building2 className="w-10 h-10 text-primary mb-3" />
                    <h4 className="font-semibold text-slate-900 mb-2">P3 Lender Side</h4>
                    <p className="text-sm text-slate-600 text-center">Project Subsidiary Entity</p>
                  </CardContent>
                </Card>

                <div className="flex flex-col items-center">
                  <Handshake className="w-12 h-12 text-secondary-foreground mb-2" />
                  <span className="text-lg font-semibold text-primary">Joint Venture</span>
                </div>

                <Card className="w-full md:w-80 h-40 border-2 border-emerald-300 bg-emerald-50">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <Building2 className="w-10 h-10 text-emerald-600 mb-3" />
                    <h4 className="font-semibold text-slate-900 mb-2">P2 Borrower Side</h4>
                    <p className="text-sm text-slate-600 text-center">JV Subsidiary with Assets</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Risk Mitigation</h4>
              <p className="text-slate-600">Structured subsidiary approach minimizes exposure for all parties</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Asset Security</h4>
              <p className="text-slate-600">Collateral assets provide additional security for lenders</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Regulatory Compliance</h4>
              <p className="text-slate-600">Structure ensures compliance across Singapore and Vietnam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

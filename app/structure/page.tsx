"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Building2, Users, Briefcase, Shield, TrendingUp, FileCheck } from "lucide-react"
import StaggeredMenu from "@/components/StaggeredMenu"
import { Footer } from "@/components/footer"

export default function StructurePage() {
  return (
    <>
      <StaggeredMenu
        position="right"
        items={[
          { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
          { label: 'About', ariaLabel: 'Learn about us', link: '/#about' },
          { label: 'Team', ariaLabel: 'Meet our team', link: '/team' },
          { label: 'Portfolio', ariaLabel: 'View our portfolio', link: '/portfolio' },
          { label: 'Structure', ariaLabel: 'View our structure', link: '/structure' },
          { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
        ]}
        socialItems={[
          { label: 'LinkedIn', link: 'https://linkedin.com' }
        ]}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={['#1e40af', '#3b82f6']}
        logoUrl="/VortexLongLogo1.png"
        accentColor="#3b82f6"
      />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Header Section */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                Vortex Capital Structure
              </h1>
              <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                Understanding our sophisticated structure and funding model that facilitates secure international joint ventures
              </p>
            </div>
          </div>
        </section>

        {/* Funding Structure Section */}
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

        {/* Platform Structure Section */}
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
                        Central platform managing multiple joint ventures with comprehensive risk management
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
      </main>
      <Footer />
    </>
  )
}
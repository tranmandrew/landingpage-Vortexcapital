"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Handshake, Shield, Building2, Target } from "lucide-react"
import GlassIcons from "./GlassIcons"

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
  const [activeTab, setActiveTab] = useState(0)

  const glassIconsItems = [
    { icon: <Handshake size={24} />, color: 'blue', label: 'Joint Ventures' },
    { icon: <Shield size={24} />, color: 'green', label: 'Risk Management' },
    { icon: <Building2 size={24} />, color: 'indigo', label: 'Singapore Hub' },
    { icon: <Target size={24} />, color: 'orange', label: 'Exit Strategy' },
  ]

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

        <div className="mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Navigation Buttons */}
            <div className="lg:w-1/3">
              <div className="space-y-3">
                {partnershipApproach.map((approach, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 backdrop-blur-md border ${
                      activeTab === index
                        ? 'bg-white/20 text-black shadow-lg border-white/40'
                        : 'bg-white/10 text-black hover:bg-white/15 border-white/20'
                    }`}
                    style={{
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                    }}
                  >
                    <span className="font-medium text-sm">{approach.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Display */}
            <div className="lg:w-2/3">
              <Card className="overflow-hidden shadow-xl h-[550px] flex flex-col border-0">
                <CardContent className="p-0 flex-1 flex flex-col m-0">
                  <div className="aspect-[21/9] overflow-hidden relative flex-shrink-0">
                    <img
                      src={partnershipApproach[activeTab].image || "/placeholder.svg"}
                      alt={`${partnershipApproach[activeTab].title} - Professional business imagery`}
                      className="h-full w-full object-cover transition-all duration-500 ease-out"
                      key={activeTab}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {partnershipApproach[activeTab].title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 flex-1 overflow-hidden">
                    <div className="space-y-4 h-full overflow-y-auto">
                      <div className="opacity-0 animate-[fadeInUp_0.5s_ease-out_0.1s_forwards]" key={`why-${activeTab}`}>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          Why This Matters
                        </h4>
                        <p className="text-muted-foreground leading-6 text-sm">{partnershipApproach[activeTab].why}</p>
                      </div>

                      <div className="opacity-0 animate-[fadeInUp_0.5s_ease-out_0.2s_forwards]" key={`how-${activeTab}`}>
                        <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                          How We Deliver
                        </h4>
                        <p className="text-muted-foreground leading-6 text-sm">{partnershipApproach[activeTab].how}</p>
                      </div>

                      <div className="pt-4 border-t border-border/50 opacity-0 animate-[fadeInUp_0.5s_ease-out_0.3s_forwards]" key={`details-${activeTab}`}>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Key Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {partnershipApproach[activeTab].details.map((detail, idx) => (
                            <div key={idx} className="flex items-center text-xs text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
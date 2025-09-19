import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PartnershipApproach } from "@/components/partnership-approach"
import { FundingDiagram } from "@/components/funding-diagram"
import { PlatformStructure } from "@/components/platform-structure"
import { RevenueModel } from "@/components/revenue-model"
import { Team } from "@/components/team"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PartnershipApproach />
      <FundingDiagram />
      <PlatformStructure />
      <RevenueModel />
      <Team />
      <Stats />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { Process } from "@/components/process"
import { FundingDiagram } from "@/components/funding-diagram"
import { PlatformStructure } from "@/components/platform-structure"
import { RevenueModel } from "@/components/revenue-model"
import { Team } from "@/components/team"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <Process />
      <FundingDiagram />
      <PlatformStructure />
      <RevenueModel />
      <Team />
      <Stats />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}

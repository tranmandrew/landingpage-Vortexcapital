import StaggeredMenu from "@/components/StaggeredMenu"
import { Hero } from "@/components/hero"
import { PartnershipApproach } from "@/components/partnership-approach"
import { RevenueModel } from "@/components/revenue-model"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <StaggeredMenu
        position="right"
        items={[
          { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
          { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
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
      <Hero />
      <PartnershipApproach />
      <RevenueModel />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}

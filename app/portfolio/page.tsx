"use client"

import StaggeredMenu from "@/components/StaggeredMenu"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
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
                Proven Track Record
              </h1>
              <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                Our disciplined approach delivers consistent results across multiple successful partnerships
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Companies Assessed */}
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
                  200+
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Companies Assessed
                </h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive due diligence completed across Southeast Asia
                </p>
              </div>

              {/* Assets Under Management */}
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
                  $75M+
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Assets Under Management
                </h3>
                <p className="text-sm text-muted-foreground">
                  Total capital deployed across active partnerships
                </p>
              </div>

              {/* Selection Rate */}
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
                  28%
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Selection Rate
                </h3>
                <p className="text-sm text-muted-foreground">
                  Companies meeting our institutional-grade standards
                </p>
              </div>

              {/* Average Investment */}
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
                  $3.2M
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Average Investment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Optimal size for sustainable growth and returns
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-16 bg-gradient-to-r from-muted/30 to-muted/40 rounded-2xl p-8 border border-border/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">Disclaimer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Past performance is not indicative of future results. All investments involve risk of loss.
                The metrics shown represent historical performance of completed partnerships and do not guarantee
                future returns. Vortex Capital facilitates investment opportunities and does not provide investment advice.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
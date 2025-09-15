"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ChevronRight } from "lucide-react"

const sections = [
  { id: "important-notice", title: "Important Notice", level: 1 },
  { id: "general-warning", title: "1. General Investment Warning", level: 1 },
  { id: "risk-of-loss", title: "1.1 Risk of Loss", level: 2 },
  { id: "no-investment-advice", title: "1.2 No Investment Advice", level: 2 },
  { id: "professional-consultation", title: "1.3 Professional Consultation Required", level: 2 },
  { id: "specific-risks", title: "2. Specific Risk Factors", level: 1 },
  { id: "emerging-market-risks", title: "2.1 Emerging Market Risks", level: 2 },
  { id: "joint-venture-risks", title: "2.2 Joint Venture Structure Risks", level: 2 },
  { id: "currency-fx-risks", title: "2.3 Currency and Foreign Exchange Risks", level: 2 },
  { id: "regulatory-compliance-risks", title: "2.4 Regulatory and Compliance Risks", level: 2 },
  { id: "due-diligence", title: "3. Due Diligence and Information Limitations", level: 1 },
  { id: "due-diligence-scope", title: "3.1 Due Diligence Scope", level: 2 },
  { id: "information-accuracy", title: "3.2 Information Accuracy", level: 2 },
  { id: "no-guarantees", title: "4. No Guarantees or Warranties", level: 1 },
  { id: "performance-disclaimers", title: "4.1 Performance Disclaimers", level: 2 },
  { id: "service-disclaimers", title: "4.2 Service Disclaimers", level: 2 },
  { id: "regulatory-tax", title: "5. Regulatory and Tax Considerations", level: 1 },
  { id: "regulatory-compliance", title: "5.1 Regulatory Compliance", level: 2 },
  { id: "tax-implications", title: "5.2 Tax Implications", level: 2 },
  { id: "eligibility-suitability", title: "6. Eligibility and Suitability", level: 1 },
  { id: "accredited-investor", title: "6.1 Accredited Investor Requirements", level: 2 },
  { id: "suitability-assessment", title: "6.2 Suitability Assessment", level: 2 },
  { id: "conflicts-interest", title: "7. Conflicts of Interest", level: 1 },
  { id: "potential-conflicts", title: "7.1 Potential Conflicts", level: 2 },
  { id: "conflict-management", title: "7.2 Conflict Management", level: 2 },
  { id: "forward-looking", title: "8. Forward-Looking Statements", level: 1 },
  { id: "projections-estimates", title: "8.1 Projections and Estimates", level: 2 },
  { id: "disclaimer-accuracy", title: "8.2 Disclaimer of Accuracy", level: 2 },
  { id: "data-technology", title: "9. Data and Technology Risks", level: 1 },
  { id: "cybersecurity-risks", title: "9.1 Cybersecurity Risks", level: 2 },
  { id: "technology-limitations", title: "9.2 Technology Limitations", level: 2 },
  { id: "legal-limitation", title: "10. Legal and Limitation Provisions", level: 1 },
  { id: "limitation-liability", title: "10.1 Limitation of Liability", level: 2 },
  { id: "indemnification", title: "10.2 Indemnification", level: 2 },
  { id: "governing-law", title: "11. Governing Law and Jurisdiction", level: 1 },
  { id: "updates-modifications", title: "12. Updates and Modifications", level: 1 },
  { id: "contact-information", title: "13. Contact Information", level: 1 },
  { id: "acknowledgment", title: "14. Acknowledgment", level: 1 },
]

export default function InvestmentDisclaimerPage() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0.1 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100 // Account for sticky header
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-semibold">Investment Disclaimer</h1>
            </div>
            <Link href="/" className="text-xl font-bold text-primary">
              Vortex Capital
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Table of Contents</h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                        section.level === 2 ? "ml-4" : ""
                      } ${
                        activeSection === section.id
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-gray max-w-none">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-4">Investment Disclaimer</h1>
                <p className="text-muted-foreground">
                  <strong>Effective Date:</strong> September 15, 2025<br />
                  <strong>Last Updated:</strong> September 15, 2025
                </p>
              </div>

              <section id="important-notice" className="mb-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-bold text-red-800 mb-4">IMPORTANT NOTICE</h2>
                  <p className="text-red-700 font-semibold leading-relaxed">
                    <strong>PLEASE READ THIS INVESTMENT DISCLAIMER CAREFULLY BEFORE USING OUR SERVICES OR MAKING ANY INVESTMENT DECISIONS. BY ACCESSING OUR WEBSITE OR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THE TERMS OF THIS DISCLAIMER.</strong>
                  </p>
                </div>
              </section>

              <section id="general-warning" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. General Investment Warning</h2>

                <div id="risk-of-loss" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">1.1 Risk of Loss</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-red-600">ALL INVESTMENTS CARRY SUBSTANTIAL RISK OF LOSS.</strong> The value of investments and any income derived from them may go down as well as up, and you may not recover the full amount of your original investment. Past performance is not indicative of future results, and no guarantee of future performance or returns is provided.
                  </p>
                </div>

                <div id="no-investment-advice" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">1.2 No Investment Advice</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-red-600">VORTEX CAPITAL DOES NOT PROVIDE INVESTMENT ADVICE.</strong> We are an investment platform and structuring service provider, not an investment advisor. All information provided is for informational purposes only and should not be construed as:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Investment recommendations or advice</li>
                    <li>Financial planning or advisory services</li>
                    <li>Tax, legal, or accounting advice</li>
                    <li>Guarantees of investment performance or returns</li>
                  </ul>
                </div>

                <div id="professional-consultation" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">1.3 Professional Consultation Required</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-red-600">YOU SHOULD CONSULT WITH QUALIFIED PROFESSIONALS</strong> before making any investment decisions. This includes consulting with:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Licensed financial advisors</li>
                    <li>Tax professionals and accountants</li>
                    <li>Legal counsel familiar with international investments</li>
                    <li>Other relevant professional advisors</li>
                  </ul>
                </div>
              </section>

              <section id="specific-risks" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Specific Risk Factors</h2>

                <div id="emerging-market-risks" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Emerging Market Risks</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Investments in Vietnamese companies and markets involve heightened risks, including:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Political and Economic Risks:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Political instability and government policy changes</li>
                        <li>Currency devaluation and exchange rate fluctuations</li>
                        <li>Economic volatility and market disruptions</li>
                        <li>Regulatory changes affecting foreign investment</li>
                        <li>Potential restrictions on capital repatriation</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Market and Liquidity Risks:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Limited market liquidity and trading volumes</li>
                        <li>Difficulty in exiting investments</li>
                        <li>Valuation challenges due to limited comparable data</li>
                        <li>Less developed capital markets and infrastructure</li>
                        <li>Limited investor protection frameworks</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Operational Risks:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Corporate governance standards may differ from developed markets</li>
                        <li>Limited financial reporting transparency</li>
                        <li>Potential for fraud or misrepresentation</li>
                        <li>Infrastructure and technology limitations</li>
                        <li>Language and cultural barriers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="joint-venture-risks" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Joint Venture Structure Risks</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our investment model involves specific structural risks:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Counterparty Risks:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Dependence on Vietnamese partner performance</li>
                        <li>Potential conflicts between joint venture partners</li>
                        <li>Partner default or breach of obligations</li>
                        <li>Cultural and business practice differences</li>
                        <li>Management and control disputes</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Legal and Regulatory Risks:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Complex multi-jurisdictional legal frameworks</li>
                        <li>Changes in Vietnamese foreign investment laws</li>
                        <li>Subsidiary structure complications</li>
                        <li>Regulatory compliance challenges</li>
                        <li>Potential tax law changes affecting structure efficiency</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Operational Risks:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Joint venture management challenges</li>
                        <li>Asset pledging and collateral risks</li>
                        <li>Business plan execution difficulties</li>
                        <li>Market competition and industry risks</li>
                        <li>Technology and operational disruptions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="currency-fx-risks" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.3 Currency and Foreign Exchange Risks</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    International investments involve currency risks, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Vietnamese Dong (VND) exchange rate volatility</li>
                    <li>Singapore Dollar (SGD) exchange rate fluctuations</li>
                    <li>Currency conversion costs and timing differences</li>
                    <li>Potential capital controls or currency restrictions</li>
                    <li>Hedging limitations and costs</li>
                  </ul>
                </div>

                <div id="regulatory-compliance-risks" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.4 Regulatory and Compliance Risks</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cross-border investment activities involve regulatory risks:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Changes in Singapore financial services regulations</li>
                    <li>Vietnamese investment law modifications</li>
                    <li>International sanctions and compliance requirements</li>
                    <li>Anti-money laundering regulation changes</li>
                    <li>Tax treaty modifications or terminations</li>
                  </ul>
                </div>
              </section>

              <section id="due-diligence" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Due Diligence and Information Limitations</h2>

                <div id="due-diligence-scope" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Due Diligence Scope</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    While we conduct comprehensive due diligence on Vietnamese companies, our review has limitations:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Information Constraints:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Reliance on information provided by target companies</li>
                        <li>Limited availability of third-party verification sources</li>
                        <li>Potential language and translation barriers</li>
                        <li>Cultural differences in business documentation</li>
                        <li>Time constraints on comprehensive verification</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Scope Limitations:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Due diligence cannot eliminate all investment risks</li>
                        <li>Future performance cannot be predicted from historical data</li>
                        <li>Market conditions may change after initial assessment</li>
                        <li>Unforeseen risks may emerge after investment completion</li>
                        <li>Third-party verification may have limitations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="information-accuracy" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Information Accuracy</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We make reasonable efforts to verify information, but:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Complete accuracy cannot be guaranteed</li>
                    <li>Information may become outdated</li>
                    <li>Source documents may contain errors or omissions</li>
                    <li>Translation issues may affect accuracy</li>
                    <li>Cultural and business practice differences may impact interpretation</li>
                  </ul>
                </div>
              </section>

              <section id="no-guarantees" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. No Guarantees or Warranties</h2>

                <div id="performance-disclaimers" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Performance Disclaimers</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vortex Capital makes no representations, warranties, or guarantees regarding:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Investment performance or returns</li>
                    <li>Capital preservation or protection</li>
                    <li>Successful exit opportunities or timing</li>
                    <li>Market conditions or economic factors</li>
                    <li>Vietnamese company performance or success</li>
                  </ul>
                </div>

                <div id="service-disclaimers" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Service Disclaimers</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We provide our services on an "as is" basis without warranties of:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Uninterrupted service availability</li>
                    <li>Error-free information or processes</li>
                    <li>Successful completion of all proposed structures</li>
                    <li>Regulatory approval of proposed investments</li>
                    <li>Market acceptance of investment opportunities</li>
                  </ul>
                </div>
              </section>

              <section id="regulatory-tax" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Regulatory and Tax Considerations</h2>

                <div id="regulatory-compliance" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Regulatory Compliance</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Investors are responsible for ensuring compliance with:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Home country investment regulations</li>
                    <li>Applicable securities laws and regulations</li>
                    <li>Foreign investment reporting requirements</li>
                    <li>Anti-money laundering obligations</li>
                    <li>Sanctions and embargo compliance</li>
                  </ul>
                </div>

                <div id="tax-implications" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Tax Implications</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Investment through our platform may have significant tax consequences:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Income tax on investment returns</li>
                    <li>Capital gains tax on asset disposals</li>
                    <li>Withholding taxes in Vietnam and Singapore</li>
                    <li>Double taxation treaty considerations</li>
                    <li>Ongoing tax reporting obligations</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong className="text-red-600">YOU MUST CONSULT WITH TAX PROFESSIONALS</strong> regarding the tax implications of any investment before proceeding.
                  </p>
                </div>
              </section>

              <section id="eligibility-suitability" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Eligibility and Suitability</h2>

                <div id="accredited-investor" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">6.1 Accredited Investor Requirements</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our services are generally limited to accredited, qualified, or sophisticated investors who:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Meet applicable financial and investment experience thresholds</li>
                    <li>Can bear the economic risk of investment loss</li>
                    <li>Understand complex investment structures</li>
                    <li>Have access to professional advisory services</li>
                  </ul>
                </div>

                <div id="suitability-assessment" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">6.2 Suitability Assessment</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Before investing, you should consider:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Your financial situation and investment objectives</li>
                    <li>Risk tolerance and investment timeline</li>
                    <li>Portfolio diversification and concentration limits</li>
                    <li>Liquidity needs and investment holding periods</li>
                    <li>Overall investment strategy and goals</li>
                  </ul>
                </div>
              </section>

              <section id="conflicts-interest" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Conflicts of Interest</h2>

                <div id="potential-conflicts" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">7.1 Potential Conflicts</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vortex Capital may have conflicts of interest, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Fee arrangements with multiple parties</li>
                    <li>Equity participation in investment opportunities</li>
                    <li>Relationships with Vietnamese companies and partners</li>
                    <li>Business development activities and partnerships</li>
                    <li>Multiple roles in transaction structuring</li>
                  </ul>
                </div>

                <div id="conflict-management" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">7.2 Conflict Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain policies and procedures to identify and manage conflicts of interest, but complete elimination of all conflicts is not possible.
                  </p>
                </div>
              </section>

              <section id="forward-looking" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Forward-Looking Statements</h2>

                <div id="projections-estimates" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">8.1 Projections and Estimates</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Any forward-looking statements, projections, or estimates are based on current expectations and assumptions that:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>May prove to be incorrect</li>
                    <li>Are subject to significant uncertainties</li>
                    <li>May change without notice</li>
                    <li>Should not be relied upon as guarantees of future performance</li>
                  </ul>
                </div>

                <div id="disclaimer-accuracy" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">8.2 Disclaimer of Accuracy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We disclaim any obligation to update forward-looking statements and make no representation that projected results will be achieved.
                  </p>
                </div>
              </section>

              <section id="data-technology" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Data and Technology Risks</h2>

                <div id="cybersecurity-risks" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">9.1 Cybersecurity Risks</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our technology platforms and data systems face cybersecurity risks that could result in:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Data breaches or unauthorized access</li>
                    <li>System disruptions or service interruptions</li>
                    <li>Financial losses or identity theft</li>
                    <li>Regulatory penalties or legal liability</li>
                  </ul>
                </div>

                <div id="technology-limitations" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">9.2 Technology Limitations</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Technology systems may experience:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Technical failures or malfunctions</li>
                    <li>Data loss or corruption</li>
                    <li>Communication disruptions</li>
                    <li>Platform unavailability</li>
                    <li>Integration challenges with third-party systems</li>
                  </ul>
                </div>
              </section>

              <section id="legal-limitation" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Legal and Limitation Provisions</h2>

                <div id="limitation-liability" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">10.1 Limitation of Liability</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, VORTEX CAPITAL'S LIABILITY FOR ANY CLAIMS RELATED TO INVESTMENTS OR SERVICES IS LIMITED TO THE FEES PAID TO US AND EXCLUDES:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Indirect, consequential, or punitive damages</li>
                    <li>Lost profits or investment opportunities</li>
                    <li>Business interruption or reputational damages</li>
                    <li>Third-party claims or losses</li>
                  </ul>
                </div>

                <div id="indemnification" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">10.2 Indemnification</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By using our services, you agree to indemnify Vortex Capital against claims arising from your investment decisions or use of our services.
                  </p>
                </div>
              </section>

              <section id="governing-law" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law and Jurisdiction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Investment Disclaimer is governed by Singapore law. Any disputes shall be resolved through arbitration in Singapore under the Singapore International Arbitration Centre (SIAC) rules.
                </p>
              </section>

              <section id="updates-modifications" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Updates and Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Investment Disclaimer may be updated periodically. Material changes will be communicated to users, and continued use of our services constitutes acceptance of updated terms.
                </p>
              </section>

              <section id="contact-information" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions about this Investment Disclaimer:
                </p>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="font-semibold text-foreground mb-2">Vortex Capital Pte. Ltd.</p>
                  <p className="text-muted-foreground mb-1"><strong>Address:</strong> 1 Raffles Place, #40-01 One Raffles Place, Singapore 048616</p>
                  <p className="text-muted-foreground mb-1"><strong>Email:</strong> contact@vortexcapital.sg</p>
                  <p className="text-muted-foreground mb-1"><strong>Phone:</strong> +1 (978) 246-3591</p>
                </div>
              </section>

              <section id="acknowledgment" className="mb-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-red-800 mb-4">14. Acknowledgment</h2>
                  <p className="text-red-700 font-semibold leading-relaxed mb-4">
                    <strong>BY PROCEEDING WITH ANY INVESTMENT OR USE OF OUR SERVICES, YOU ACKNOWLEDGE THAT:</strong>
                  </p>
                  <ul className="list-disc list-inside text-red-700 space-y-2 ml-4 mb-4">
                    <li>You have read and understood this Investment Disclaimer</li>
                    <li>You understand the risks involved in international investments</li>
                    <li>You will seek professional advice before making investment decisions</li>
                    <li>You accept full responsibility for your investment decisions</li>
                    <li>You understand that past performance does not guarantee future results</li>
                    <li>You are financially capable of bearing potential investment losses</li>
                  </ul>
                  <p className="text-red-700 font-semibold leading-relaxed">
                    <strong>IF YOU DO NOT AGREE WITH THESE TERMS OR DO NOT UNDERSTAND THE RISKS INVOLVED, DO NOT USE OUR SERVICES OR MAKE ANY INVESTMENTS.</strong>
                  </p>
                </div>
              </section>

              <div className="border-t border-border pt-8 mt-12">
                <p className="text-sm text-muted-foreground">
                  <strong>Last Updated:</strong> September 15, 2025<br />
                  <strong>Version:</strong> 1.0<br />
                  <strong>Note:</strong> This disclaimer is an integral part of our Terms of Service and should be read in conjunction with our Privacy Policy and other legal documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
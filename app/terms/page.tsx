"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ChevronRight } from "lucide-react"

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms", level: 1 },
  { id: "description", title: "2. Description of Services", level: 1 },
  { id: "platform-services", title: "2.1 Platform Services", level: 2 },
  { id: "service-limitations", title: "2.2 Service Limitations", level: 2 },
  { id: "eligibility", title: "3. Eligibility and User Categories", level: 1 },
  { id: "general-eligibility", title: "3.1 General Eligibility", level: 2 },
  { id: "investor-eligibility", title: "3.2 Investor Eligibility", level: 2 },
  { id: "corporate-clients", title: "3.3 Corporate Clients", level: 2 },
  { id: "user-obligations", title: "4. User Obligations and Conduct", level: 1 },
  { id: "account-security", title: "4.1 Account Security", level: 2 },
  { id: "prohibited-conduct", title: "4.2 Prohibited Conduct", level: 2 },
  { id: "information-accuracy", title: "4.3 Information Accuracy", level: 2 },
  { id: "investment-terms", title: "5. Investment Terms and Conditions", level: 1 },
  { id: "investment-process", title: "5.1 Investment Process", level: 2 },
  { id: "investment-risks", title: "5.2 Investment Risks", level: 2 },
  { id: "investment-decisions", title: "5.3 Investment Decisions", level: 2 },
  { id: "fees", title: "6. Fees and Payment Terms", level: 1 },
  { id: "fee-structure", title: "6.1 Fee Structure", level: 2 },
  { id: "payment-terms", title: "6.2 Payment Terms", level: 2 },
  { id: "third-party-costs", title: "6.3 Third-Party Costs", level: 2 },
  { id: "confidentiality", title: "7. Confidentiality and Non-Disclosure", level: 1 },
  { id: "confidential-information", title: "7.1 Confidential Information", level: 2 },
  { id: "confidentiality-obligations", title: "7.2 Confidentiality Obligations", level: 2 },
  { id: "intellectual-property", title: "8. Intellectual Property Rights", level: 1 },
  { id: "our-ip", title: "8.1 Our Intellectual Property", level: 2 },
  { id: "user-content", title: "8.2 User Content", level: 2 },
  { id: "data-protection", title: "9. Data Protection and Privacy", level: 1 },
  { id: "regulatory-compliance", title: "10. Regulatory Compliance", level: 1 },
  { id: "regulatory-framework", title: "10.1 Regulatory Framework", level: 2 },
  { id: "compliance-obligations", title: "10.2 Compliance Obligations", level: 2 },
  { id: "disclaimers", title: "11. Disclaimers and Limitations", level: 1 },
  { id: "service-disclaimers", title: "11.1 Service Disclaimers", level: 2 },
  { id: "investment-disclaimers", title: "11.2 Investment Disclaimers", level: 2 },
  { id: "limitation-liability", title: "12. Limitation of Liability", level: 1 },
  { id: "liability-limitations", title: "12.1 Liability Limitations", level: 2 },
  { id: "excluded-damages", title: "12.2 Excluded Damages", level: 2 },
  { id: "indemnification", title: "13. Indemnification", level: 1 },
  { id: "termination", title: "14. Termination", level: 1 },
  { id: "termination-rights", title: "14.1 Termination Rights", level: 2 },
  { id: "effect-termination", title: "14.2 Effect of Termination", level: 2 },
  { id: "dispute-resolution", title: "15. Dispute Resolution", level: 1 },
  { id: "governing-law", title: "15.1 Governing Law", level: 2 },
  { id: "dispute-process", title: "15.2 Dispute Resolution Process", level: 2 },
  { id: "jurisdiction", title: "15.3 Jurisdiction", level: 2 },
  { id: "general-provisions", title: "16. General Provisions", level: 1 },
  { id: "contact-info", title: "17. Contact Information", level: 1 },
]

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're at the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        // Set the last section as active when at bottom
        const lastSection = sections[sections.length - 1]
        if (lastSection) {
          setActiveSection(lastSection.id)
        }
        return
      }

      // Normal intersection logic
      let currentSection = ''
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if section is in viewport (with some offset for header)
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section.id
          }
        }
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
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
              <h1 className="text-xl font-semibold">Terms of Service</h1>
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
                <h1 className="text-3xl font-bold text-foreground mb-4">Terms of Service</h1>
                <p className="text-muted-foreground">
                  <strong>Effective Date:</strong> September 15, 2025<br />
                  <strong>Last Updated:</strong> September 15, 2025
                </p>
              </div>

              <section id="acceptance" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By accessing or using the website, services, or platforms of Vortex Capital Pte. Ltd. ("Vortex Capital," "we," "our," or "us"), you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms constitute a legally binding agreement between you and Vortex Capital regarding your use of our investment platform services, including but not limited to our website, investment opportunities, due diligence services, and related financial services.
                </p>
              </section>

              <section id="description" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>

                <div id="platform-services" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Platform Services</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vortex Capital operates as a Singapore-based investment platform that facilitates connections between international investors and pre-qualified Vietnamese companies through structured joint ventures. Our services include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Due diligence and vetting of Vietnamese companies</li>
                    <li>Investment opportunity presentation and structuring</li>
                    <li>Formation of project-specific subsidiary companies</li>
                    <li>Joint venture creation and management</li>
                    <li>Ongoing investment monitoring and reporting</li>
                    <li>Exit strategy planning and execution</li>
                  </ul>
                </div>

                <div id="service-limitations" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Service Limitations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are provided on an "as available" basis. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice, subject to applicable contractual obligations.
                  </p>
                </div>
              </section>

              <section id="eligibility" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Eligibility and User Categories</h2>

                <div id="general-eligibility" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.1 General Eligibility</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">To use our services, you must:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
                    <li>Have the legal capacity to enter into binding agreements</li>
                    <li>Not be prohibited from receiving our services under applicable laws</li>
                    <li>Comply with all applicable local, state, national, and international laws</li>
                  </ul>
                </div>

                <div id="investor-eligibility" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Investor Eligibility</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">For investment services, you must additionally:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Meet accredited investor or qualified investor standards in your jurisdiction</li>
                    <li>Have sufficient financial resources to bear investment risks</li>
                    <li>Understand the nature and risks of international investments</li>
                    <li>Complete our Know Your Customer (KYC) and due diligence requirements</li>
                  </ul>
                </div>

                <div id="corporate-clients" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Corporate Clients</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">Vietnamese companies seeking our services must:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Be legally incorporated and in good standing</li>
                    <li>Have proper business licenses and regulatory approvals</li>
                    <li>Meet our financial and operational qualification criteria</li>
                    <li>Provide complete and accurate business documentation</li>
                  </ul>
                </div>
              </section>

              <section id="investment-terms" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Investment Terms and Conditions</h2>

                <div id="investment-process" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Investment Process</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">Our investment process typically involves:</p>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Initial consultation and eligibility assessment</li>
                    <li>Due diligence and opportunity evaluation</li>
                    <li>Investment structure design and documentation</li>
                    <li>Subsidiary formation and joint venture creation</li>
                    <li>Capital deployment and ongoing management</li>
                    <li>Performance monitoring and reporting</li>
                    <li>Exit strategy implementation</li>
                  </ol>
                </div>

                <div id="investment-risks" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Investment Risks</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">You acknowledge and understand that:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>All investments carry inherent risks, including potential loss of principal</li>
                    <li>Past performance does not guarantee future results</li>
                    <li>International investments involve additional currency, political, and regulatory risks</li>
                    <li>Vietnamese market investments may have heightened emerging market risks</li>
                    <li>Joint venture structures involve counterparty and operational risks</li>
                  </ul>
                </div>
              </section>

              <section id="fees" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Fees and Payment Terms</h2>

                <div id="fee-structure" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">6.1 Fee Structure</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">Our fees may include:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li><strong>Vetting Fees:</strong> Charged to Vietnamese companies for due diligence services</li>
                    <li><strong>Success Fees:</strong> Percentage-based fees upon successful capital deployment (typically 2%-5%)</li>
                    <li><strong>Equity Participation:</strong> Ownership stakes in select joint ventures</li>
                    <li><strong>Management Fees:</strong> Ongoing fees for investment management services</li>
                  </ul>
                </div>

                <div id="payment-terms" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">6.2 Payment Terms</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Fees are payable according to the terms specified in individual service agreements</li>
                    <li>All fees are non-refundable unless specifically stated otherwise</li>
                    <li>Late payments may incur additional charges and interest</li>
                    <li>We reserve the right to suspend services for overdue payments</li>
                  </ul>
                </div>
              </section>

              <section id="confidentiality" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Confidentiality and Non-Disclosure</h2>

                <div id="confidential-information" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">7.1 Confidential Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "Confidential Information" includes all non-public, proprietary information disclosed by either party, including but not limited to business plans, financial information, client data, investment opportunities, due diligence materials, and proprietary methodologies.
                  </p>
                </div>

                <div id="confidentiality-obligations" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">7.2 Confidentiality Obligations</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">Both parties agree to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Maintain strict confidentiality of all Confidential Information</li>
                    <li>Use Confidential Information solely for the purposes of the business relationship</li>
                    <li>Not disclose Confidential Information to third parties without written consent</li>
                    <li>Return or destroy Confidential Information upon termination</li>
                  </ul>
                </div>
              </section>

              <section id="intellectual-property" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Intellectual Property Rights</h2>

                <div id="our-ip" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">8.1 Our Intellectual Property</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All intellectual property rights in our platform, services, content, trademarks, and methodologies remain our exclusive property. You are granted a limited, non-exclusive license to use our services solely as permitted under these Terms.
                  </p>
                </div>

                <div id="user-content" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">8.2 User Content</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You retain ownership of any content you provide to us, but grant us a license to use such content in connection with providing our services. You represent that you have all necessary rights to provide such content.
                  </p>
                </div>
              </section>

              <section id="data-protection" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Data Protection and Privacy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We are committed to protecting your personal data and privacy. Our collection, use, and disclosure of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to ensure the security of your personal data and comply with applicable data protection laws, including Singapore's Personal Data Protection Act (PDPA).
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> For detailed information about our data practices, please review our Privacy Policy available on our website.
                  </p>
                </div>
              </section>

              <section id="regulatory-compliance" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Regulatory Compliance</h2>

                <div id="regulatory-framework" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">10.1 Regulatory Framework</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vortex Capital operates under Singapore's regulatory framework and complies with applicable financial services regulations. We maintain appropriate licenses and registrations as required by the Monetary Authority of Singapore (MAS).
                  </p>
                </div>

                <div id="compliance-obligations" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">10.2 Compliance Obligations</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">You agree to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                    <li>Provide accurate information for compliance purposes</li>
                    <li>Submit to necessary due diligence and verification procedures</li>
                    <li>Report any material changes in your circumstances</li>
                    <li>Cooperate with regulatory inquiries as required</li>
                  </ul>
                </div>
              </section>

              <section id="disclaimers" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Disclaimers and Limitations</h2>

                <div id="service-disclaimers" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">11.1 Service Disclaimers</h3>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                    <p className="text-amber-800 font-semibold mb-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                    <ul className="list-disc list-inside text-amber-700 space-y-1 ml-4 text-sm">
                      <li>OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND</li>
                      <li>WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR PURPOSE</li>
                      <li>WE DO NOT GUARANTEE CONTINUOUS, UNINTERRUPTED, OR ERROR-FREE SERVICE</li>
                      <li>WE ARE NOT RESPONSIBLE FOR THIRD-PARTY SERVICES OR CONTENT</li>
                    </ul>
                  </div>
                </div>

                <div id="investment-disclaimers" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">11.2 Investment Disclaimers</h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <ul className="list-disc list-inside text-red-700 space-y-1 ml-4 text-sm">
                      <li>WE DO NOT PROVIDE INVESTMENT ADVICE OR RECOMMENDATIONS</li>
                      <li>ALL INVESTMENT DECISIONS ARE MADE AT YOUR OWN RISK</li>
                      <li>PAST PERFORMANCE DOES NOT INDICATE FUTURE RESULTS</li>
                      <li>NO GUARANTEE OF INVESTMENT RETURNS IS PROVIDED</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="limitation-liability" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Limitation of Liability</h2>

                <div id="liability-limitations" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">12.1 Liability Limitations</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To the maximum extent permitted by applicable law, Vortex Capital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our total liability in connection with any claim arising out of or relating to these Terms or our services shall not exceed the amount of fees paid by you to us in the twelve (12) months preceding the event giving rise to the claim.
                  </p>
                </div>

                <div id="excluded-damages" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">12.2 Excluded Damages</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">We are not liable for damages resulting from:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Investment losses or underperformance</li>
                    <li>Market volatility or economic conditions</li>
                    <li>Third-party actions or failures</li>
                    <li>Force majeure events</li>
                    <li>Your failure to follow our recommendations or procedures</li>
                  </ul>
                </div>
              </section>

              <section id="indemnification" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to indemnify, defend, and hold harmless Vortex Capital, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, damages, losses, costs, and expenses (including reasonable attorney fees) arising from or relating to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Your use of our services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any applicable laws or regulations</li>
                  <li>Any information or content you provide</li>
                  <li>Your investment decisions and their consequences</li>
                </ul>
              </section>

              <section id="termination" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">14. Termination</h2>

                <div id="termination-rights" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">14.1 Termination Rights</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Either party may terminate these Terms and your access to our services at any time, with or without cause, upon written notice. We may also suspend or terminate your access immediately if you violate these Terms.
                  </p>
                </div>

                <div id="effect-termination" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">14.2 Effect of Termination</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">Upon termination:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Your right to access our services will cease immediately</li>
                    <li>Existing investment commitments may continue subject to separate agreements</li>
                    <li>Confidentiality obligations will survive termination</li>
                    <li>Outstanding fees and obligations remain payable</li>
                  </ul>
                </div>
              </section>

              <section id="dispute-resolution" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">15. Dispute Resolution</h2>

                <div id="governing-law" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">15.1 Governing Law</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law principles.
                  </p>
                </div>

                <div id="dispute-process" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">15.2 Dispute Resolution Process</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Any disputes arising from these Terms shall first be addressed through good faith negotiations. If unsuccessful, disputes shall be resolved through binding arbitration under the Singapore International Arbitration Centre (SIAC) rules.
                  </p>
                </div>

                <div id="jurisdiction" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">15.3 Jurisdiction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to submit to the exclusive jurisdiction of the courts of Singapore for any matters not subject to arbitration.
                  </p>
                </div>
              </section>

              <section id="general-provisions" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">16. General Provisions</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Vortex Capital regarding the subject matter herein.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Amendment:</strong> We may modify these Terms at any time by posting the updated Terms on our website. Your continued use constitutes acceptance of such modifications.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Assignment:</strong> You may not assign your rights under these Terms without our prior written consent. We may assign our rights and obligations without restriction.
                  </p>
                </div>
              </section>

              <section id="contact-info" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">17. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions regarding these Terms or our services:
                </p>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="font-semibold text-foreground mb-2">Vortex Capital Pte. Ltd.</p>
                  <p className="text-muted-foreground mb-1"><strong>Address:</strong> 1 Raffles Place, #40-01 One Raffles Place, Singapore 048616</p>
                  <p className="text-muted-foreground mb-1"><strong>Email:</strong> contact@vortexcapital.sg</p>
                  <p className="text-muted-foreground mb-1"><strong>Phone:</strong> +1 (978) 246-3591</p>
                  <p className="text-muted-foreground"><strong>Business Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM SGT</p>
                </div>
              </section>

              <div className="border-t border-border pt-8 mt-12">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Last Updated:</strong> September 15, 2025<br />
                  <strong>Version:</strong> 1.0
                </p>
                <p className="text-sm text-muted-foreground">
                  By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
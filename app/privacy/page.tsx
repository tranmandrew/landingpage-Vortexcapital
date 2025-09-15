"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ChevronRight } from "lucide-react"

const sections = [
  { id: "introduction", title: "1. Introduction", level: 1 },
  { id: "information-we-collect", title: "2. Information We Collect", level: 1 },
  { id: "personal-information", title: "2.1 Personal Information", level: 2 },
  { id: "technical-information", title: "2.2 Technical Information", level: 2 },
  { id: "transaction-information", title: "2.3 Transaction Information", level: 2 },
  { id: "how-we-use", title: "3. How We Use Your Information", level: 1 },
  { id: "service-provision", title: "3.1 Service Provision", level: 2 },
  { id: "legal-compliance", title: "3.2 Legal and Regulatory Compliance", level: 2 },
  { id: "communication", title: "3.3 Communication and Marketing", level: 2 },
  { id: "business-operations", title: "3.4 Business Operations", level: 2 },
  { id: "information-sharing", title: "4. Information Sharing and Disclosure", level: 1 },
  { id: "service-providers", title: "4.1 Service Providers", level: 2 },
  { id: "business-partners", title: "4.2 Business Partners", level: 2 },
  { id: "legal-requirements", title: "4.3 Legal Requirements", level: 2 },
  { id: "business-transfers", title: "4.4 Business Transfers", level: 2 },
  { id: "data-security", title: "5. Data Security", level: 1 },
  { id: "technical-safeguards", title: "5.1 Technical Safeguards", level: 2 },
  { id: "administrative-safeguards", title: "5.2 Administrative Safeguards", level: 2 },
  { id: "physical-safeguards", title: "5.3 Physical Safeguards", level: 2 },
  { id: "international-transfers", title: "6. International Data Transfers", level: 1 },
  { id: "data-retention", title: "7. Data Retention", level: 1 },
  { id: "your-rights", title: "8. Your Rights and Choices", level: 1 },
  { id: "access-portability", title: "8.1 Access and Portability", level: 2 },
  { id: "correction-updates", title: "8.2 Correction and Updates", level: 2 },
  { id: "deletion-restriction", title: "8.3 Deletion and Restriction", level: 2 },
  { id: "marketing-communications", title: "8.4 Marketing Communications", level: 2 },
  { id: "cookies", title: "9. Cookies and Tracking Technologies", level: 1 },
  { id: "cookie-types", title: "9.1 Types of Cookies", level: 2 },
  { id: "cookie-management", title: "9.2 Cookie Management", level: 2 },
  { id: "third-party", title: "10. Third-Party Links and Services", level: 1 },
  { id: "childrens-privacy", title: "11. Children's Privacy", level: 1 },
  { id: "changes", title: "12. Changes to This Privacy Policy", level: 1 },
  { id: "contact", title: "13. Contact Information", level: 1 },
  { id: "governing-law", title: "14. Governing Law", level: 1 },
]

export default function PrivacyPolicyPage() {
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
              <h1 className="text-xl font-semibold">Privacy Policy</h1>
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
                <h1 className="text-3xl font-bold text-foreground mb-4">Privacy Policy</h1>
                <p className="text-muted-foreground">
                  <strong>Effective Date:</strong> September 15, 2025<br />
                  <strong>Last Updated:</strong> September 15, 2025
                </p>
              </div>

              <section id="introduction" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vortex Capital Pte. Ltd. ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in connection with investment opportunities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy applies to all users of our services, including potential investors, Vietnamese companies seeking capital, and other stakeholders.
                </p>
              </section>

              <section id="information-we-collect" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>

                <div id="personal-information" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect the following types of personal information:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">For Individual Investors:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Full name, date of birth, nationality</li>
                        <li>Contact information (address, phone, email)</li>
                        <li>Government-issued identification numbers</li>
                        <li>Financial information (income, net worth, investment experience)</li>
                        <li>Bank account and payment information</li>
                        <li>Investment preferences and risk profile</li>
                        <li>Source of funds documentation</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">For Corporate Clients:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Company name, registration details, and business license information</li>
                        <li>Authorized representative information</li>
                        <li>Financial statements and business records</li>
                        <li>Ownership structure and beneficial ownership information</li>
                        <li>Business activities and operational details</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">For Vietnamese Companies:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Company registration and licensing information</li>
                        <li>Financial records, audited statements, and tax filings</li>
                        <li>Asset documentation and valuations</li>
                        <li>Management team information and credentials</li>
                        <li>Business operations and market analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="technical-information" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Technical Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    When you visit our website, we automatically collect:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website and search terms used</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div id="transaction-information" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.3 Transaction Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Investment amounts and transaction details</li>
                    <li>Payment processing information</li>
                    <li>Communication records and correspondence</li>
                    <li>Due diligence documentation</li>
                    <li>Legal and compliance records</li>
                  </ul>
                </div>
              </section>

              {/* Continue with remaining sections... */}
              <section id="how-we-use" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your personal information for the following purposes:
                </p>

                <div id="service-provision" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Service Provision</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Processing and managing investment applications</li>
                    <li>Conducting due diligence and Know Your Customer (KYC) procedures</li>
                    <li>Facilitating investment transactions and joint venture formations</li>
                    <li>Providing ongoing investment management and reporting</li>
                    <li>Managing subsidiary structures and legal compliance</li>
                  </ul>
                </div>

                <div id="legal-compliance" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Legal and Regulatory Compliance</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Complying with anti-money laundering (AML) regulations</li>
                    <li>Meeting regulatory reporting requirements in Singapore and Vietnam</li>
                    <li>Conducting sanctions screening and compliance checks</li>
                    <li>Maintaining records as required by law</li>
                    <li>Cooperating with regulatory investigations</li>
                  </ul>
                </div>

                <div id="communication" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Communication and Marketing</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Sending investment updates and performance reports</li>
                    <li>Providing market insights and investment opportunities</li>
                    <li>Responding to inquiries and providing customer support</li>
                    <li>Sending newsletters and promotional materials (with consent)</li>
                    <li>Conducting investor relations activities</li>
                  </ul>
                </div>

                <div id="business-operations" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.4 Business Operations</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Analyzing website usage and improving our services</li>
                    <li>Conducting risk management and fraud prevention</li>
                    <li>Maintaining business records and archives</li>
                    <li>Facilitating business development and partnerships</li>
                  </ul>
                </div>
              </section>

              {/* Add placeholder sections for remaining content */}
              <section id="information-sharing" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  [Content continues with service providers, business partners, legal requirements, and business transfers sections...]
                </p>
              </section>

              <section id="contact" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions, concerns, or requests related to this Privacy Policy, please contact us:
                </p>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="font-semibold text-foreground mb-2">Vortex Capital Pte. Ltd.</p>
                  <p className="text-muted-foreground mb-1"><strong>Address:</strong> 1 Raffles Place, #40-01 One Raffles Place, Singapore 048616</p>
                  <p className="text-muted-foreground mb-1"><strong>Email:</strong> contact@vortexcapital.sg</p>
                  <p className="text-muted-foreground mb-1"><strong>Phone:</strong> +1 (978) 246-3591</p>
                </div>
              </section>

              <section id="governing-law" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">14. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy is governed by the laws of Singapore and the Personal Data Protection Act 2012 (PDPA). Where applicable, we also comply with Vietnamese data protection laws and regulations.
                </p>
              </section>

              <div className="border-t border-border pt-8 mt-12">
                <p className="text-sm text-muted-foreground">
                  <strong>Last Updated:</strong> September 15, 2025<br />
                  <strong>Version:</strong> 1.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
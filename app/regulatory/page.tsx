"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ChevronRight } from "lucide-react"

const sections = [
  { id: "company-registration", title: "1. Company Registration and Licensing", level: 1 },
  { id: "entity-information", title: "1.1 Singapore Entity Information", level: 2 },
  { id: "business-license", title: "1.2 Business License and Authorizations", level: 2 },
  { id: "regulatory-supervision", title: "1.3 Regulatory Supervision", level: 2 },
  { id: "regulatory-framework", title: "2. Regulatory Framework and Compliance", level: 1 },
  { id: "singapore-regulatory", title: "2.1 Singapore Regulatory Environment", level: 2 },
  { id: "aml-compliance", title: "2.2 Anti-Money Laundering (AML) Compliance", level: 2 },
  { id: "vietnamese-compliance", title: "2.3 Vietnamese Regulatory Compliance", level: 2 },
  { id: "professional-standards", title: "3. Professional Standards and Memberships", level: 1 },
  { id: "industry-associations", title: "3.1 Industry Associations", level: 2 },
  { id: "professional-qualifications", title: "3.2 Professional Qualifications", level: 2 },
  { id: "continuing-education", title: "3.3 Continuing Education", level: 2 },
  { id: "risk-management", title: "4. Risk Management and Governance", level: 1 },
  { id: "governance-structure", title: "4.1 Corporate Governance Structure", level: 2 },
  { id: "risk-framework", title: "4.2 Risk Management Framework", level: 2 },
  { id: "internal-controls", title: "4.3 Internal Controls", level: 2 },
  { id: "financial-reporting", title: "5. Financial Reporting and Transparency", level: 1 },
  { id: "reporting-standards", title: "5.1 Financial Reporting Standards", level: 2 },
  { id: "external-audit", title: "5.2 External Audit and Review", level: 2 },
  { id: "regulatory-reporting", title: "5.3 Regulatory Reporting", level: 2 },
  { id: "client-protection", title: "6. Client Protection and Compensation", level: 1 },
  { id: "asset-protection", title: "6.1 Client Asset Protection", level: 2 },
  { id: "insurance", title: "6.2 Professional Indemnity Insurance", level: 2 },
  { id: "complaint-handling", title: "6.3 Complaint Handling Procedures", level: 2 },
  { id: "regulatory-updates", title: "7. Regulatory Updates and Changes", level: 1 },
  { id: "monitoring-compliance", title: "7.1 Monitoring and Compliance", level: 2 },
  { id: "implementation-procedures", title: "7.2 Implementation Procedures", level: 2 },
  { id: "stakeholder-communication", title: "7.3 Stakeholder Communication", level: 2 },
  { id: "cross-border", title: "8. Cross-Border Regulatory Coordination", level: 1 },
  { id: "regulatory-cooperation", title: "8.1 Regulatory Cooperation", level: 2 },
  { id: "international-standards", title: "8.2 International Standards Compliance", level: 2 },
  { id: "technology-cybersecurity", title: "9. Technology and Cybersecurity Compliance", level: 1 },
  { id: "technology-risk", title: "9.1 Technology Risk Management", level: 2 },
  { id: "cybersecurity-framework", title: "9.2 Cybersecurity Framework", level: 2 },
  { id: "esg", title: "10. Environmental, Social and Governance (ESG)", level: 1 },
  { id: "esg-framework", title: "10.1 ESG Framework", level: 2 },
  { id: "esg-alignment", title: "10.2 Regulatory Alignment", level: 2 },
  { id: "contact-regulatory", title: "11. Contact Information for Regulatory Matters", level: 1 },
  { id: "regulatory-contacts", title: "11.1 Regulatory Contacts", level: 2 },
  { id: "authority-contacts", title: "11.2 Regulatory Authority Contacts", level: 2 },
  { id: "disclaimers", title: "12. Regulatory Disclaimers", level: 1 },
  { id: "regulatory-status", title: "12.1 Regulatory Status", level: 2 },
  { id: "professional-advice", title: "12.2 Professional Advice", level: 2 },
  { id: "updates-amendments", title: "13. Updates and Amendments", level: 1 },
  { id: "transparency-commitment", title: "14. Regulatory Transparency Commitment", level: 1 },
]

export default function RegulatoryInformationPage() {
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
              <h1 className="text-xl font-semibold">Regulatory Information</h1>
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
                <h1 className="text-3xl font-bold text-foreground mb-4">Regulatory Information</h1>
                <p className="text-muted-foreground">
                  <strong>Effective Date:</strong> September 15, 2025<br />
                  <strong>Last Updated:</strong> September 15, 2025
                </p>
              </div>

              <section id="company-registration" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Company Registration and Licensing</h2>

                <div id="entity-information" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">1.1 Singapore Entity Information</h3>
                  <div className="bg-muted/30 rounded-lg p-6">
                    <p className="font-semibold text-foreground mb-2">Vortex Capital Pte. Ltd.</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li><strong>Company Registration Number:</strong> [To be inserted]</li>
                      <li><strong>Incorporation Date:</strong> [To be inserted]</li>
                      <li><strong>Registered Address:</strong> 1 Raffles Place, #40-01 One Raffles Place, Singapore 048616</li>
                      <li><strong>Company Type:</strong> Private Limited Company</li>
                      <li><strong>Paid-up Capital:</strong> [To be inserted]</li>
                      <li><strong>Status:</strong> Active and in good standing</li>
                    </ul>
                  </div>
                </div>

                <div id="business-license" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">1.2 Business License and Authorizations</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Primary Business Activities:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Investment holding and management services</li>
                        <li>Financial advisory and structuring services</li>
                        <li>Cross-border investment facilitation</li>
                        <li>Corporate finance and capital markets activities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Regulatory Licenses:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>[Insert applicable MAS licenses if required]</li>
                        <li>[Insert other relevant Singapore authorizations]</li>
                        <li>[Insert Vietnam business registration details if applicable]</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="regulatory-supervision" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">1.3 Regulatory Supervision</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vortex Capital operates under the supervision of:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li><strong>Monetary Authority of Singapore (MAS)</strong> - Primary regulator</li>
                    <li><strong>Accounting and Corporate Regulatory Authority (ACRA)</strong> - Corporate compliance</li>
                    <li><strong>Vietnam Ministry of Planning and Investment</strong> - Foreign investment activities (where applicable)</li>
                  </ul>
                </div>
              </section>

              <section id="regulatory-framework" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Regulatory Framework and Compliance</h2>

                <div id="singapore-regulatory" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Singapore Regulatory Environment</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Securities and Futures Act (SFA)</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        Our activities are subject to the Securities and Futures Act, including:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Licensing requirements for regulated activities</li>
                        <li>Conduct of business rules and standards</li>
                        <li>Client money and asset protection requirements</li>
                        <li>Disclosure and reporting obligations</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Companies Act</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        As a Singapore company, we comply with:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Corporate governance requirements</li>
                        <li>Financial reporting and audit obligations</li>
                        <li>Directors' duties and responsibilities</li>
                        <li>Shareholder protection provisions</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Personal Data Protection Act (PDPA)</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        We maintain compliance with data protection requirements including:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Consent management for personal data collection</li>
                        <li>Data protection and security measures</li>
                        <li>Individual rights and access procedures</li>
                        <li>Breach notification and reporting requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="aml-compliance" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Anti-Money Laundering (AML) Compliance</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Prevention of Money Laundering and Terrorism Financing (AML/CFT) Framework</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        We maintain comprehensive AML/CFT policies including:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Customer Due Diligence (CDD) procedures</li>
                        <li>Enhanced Due Diligence (EDD) for high-risk clients</li>
                        <li>Ongoing monitoring and transaction screening</li>
                        <li>Suspicious transaction reporting (STR) procedures</li>
                        <li>Regular AML training and awareness programs</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Know Your Customer (KYC) Requirements</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        Our KYC procedures include:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Identity verification and documentation</li>
                        <li>Source of funds and wealth verification</li>
                        <li>Beneficial ownership identification</li>
                        <li>Ongoing client monitoring and updates</li>
                        <li>Risk assessment and classification</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Sanctions Compliance</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        We screen all clients and transactions against:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>United Nations Security Council sanctions lists</li>
                        <li>Monetary Authority of Singapore sanctions</li>
                        <li>United States Office of Foreign Assets Control (OFAC) lists</li>
                        <li>European Union sanctions programs</li>
                        <li>Other applicable international sanctions regimes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="vietnamese-compliance" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.3 Vietnamese Regulatory Compliance</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Foreign Investment Law</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        Our Vietnamese operations comply with:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Law on Investment No. 61/2020/QH14</li>
                        <li>Law on Enterprises No. 59/2020/QH14</li>
                        <li>Decree on investment in the form of public-private partnership</li>
                        <li>Circular on foreign investment procedures and documentation</li>
                        <li>Provincial investment promotion regulations</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Business Registration Requirements</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        For Vietnamese market activities:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Investment Registration Certificates (IRC) where required</li>
                        <li>Enterprise Registration Certificates (ERC) for local entities</li>
                        <li>Business licenses for specific regulated activities</li>
                        <li>Work permits for foreign personnel</li>
                        <li>Tax registration and compliance obligations</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Capital and Currency Regulations</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        Compliance with State Bank of Vietnam regulations on:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Foreign exchange transactions and transfers</li>
                        <li>Capital contribution and ownership limitations</li>
                        <li>Dividend repatriation procedures</li>
                        <li>Reporting requirements for foreign investment</li>
                        <li>Banking and payment system compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="professional-standards" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Professional Standards and Memberships</h2>

                <div id="industry-associations" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Industry Associations</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Singapore:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Singapore Investment Management Association (SIMA) - [Member/Non-member]</li>
                        <li>Association of Banks in Singapore (ABS) - [Member/Non-member]</li>
                        <li>Singapore FinTech Association - [Member/Non-member]</li>
                        <li>CFA Institute Singapore - [Member/Non-member]</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">International:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Asian Venture Capital Journal (AVCJ) - [Member/Non-member]</li>
                        <li>International Association of Financial Crimes Investigators - [Member/Non-member]</li>
                        <li>Asian Development Bank Private Sector Operations - [Participant/Non-participant]</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="professional-qualifications" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Professional Qualifications</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our key personnel maintain relevant qualifications including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Chartered Financial Analyst (CFA) designations</li>
                    <li>Financial Risk Manager (FRM) certifications</li>
                    <li>Certified Anti-Money Laundering Specialist (CAMS)</li>
                    <li>Singapore financial services qualifications</li>
                    <li>Vietnamese market expertise and certifications</li>
                  </ul>
                </div>

                <div id="continuing-education" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Continuing Education</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We maintain ongoing professional development through:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Regular regulatory update training</li>
                    <li>Industry conference participation</li>
                    <li>Professional certification maintenance</li>
                    <li>Best practice sharing and benchmarking</li>
                    <li>Expert advisory panel engagement</li>
                  </ul>
                </div>
              </section>

              <section id="risk-management" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Risk Management and Governance</h2>

                <div id="governance-structure" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Corporate Governance Structure</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Board of Directors:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Independent non-executive directors</li>
                        <li>Risk and audit committee oversight</li>
                        <li>Regular board meetings and reporting</li>
                        <li>Strategic oversight and guidance</li>
                        <li>Regulatory compliance monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Management Structure:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Chief Executive Officer</li>
                        <li>Chief Financial Officer</li>
                        <li>Chief Compliance Officer</li>
                        <li>Chief Risk Officer</li>
                        <li>Head of Operations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="risk-framework" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Risk Management Framework</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Risk Categories Managed:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Credit and counterparty risk</li>
                        <li>Market and investment risk</li>
                        <li>Operational and technology risk</li>
                        <li>Legal and regulatory risk</li>
                        <li>Reputation and business risk</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Risk Management Processes:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Regular risk assessment and monitoring</li>
                        <li>Risk appetite setting and limits</li>
                        <li>Stress testing and scenario analysis</li>
                        <li>Incident reporting and management</li>
                        <li>Continuous improvement and updates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="internal-controls" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">4.3 Internal Controls</h3>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Control Environment:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Segregation of duties and responsibilities</li>
                      <li>Authorization and approval procedures</li>
                      <li>Independent verification and reconciliation</li>
                      <li>Regular internal audit and review</li>
                      <li>Corrective action and follow-up procedures</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="financial-reporting" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Financial Reporting and Transparency</h2>

                <div id="reporting-standards" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Financial Reporting Standards</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We maintain financial records in accordance with:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Singapore Financial Reporting Standards (SFRS)</li>
                    <li>International Financial Reporting Standards (IFRS)</li>
                    <li>Companies Act reporting requirements</li>
                    <li>MAS regulatory reporting standards</li>
                    <li>Vietnamese accounting standards (where applicable)</li>
                  </ul>
                </div>

                <div id="external-audit" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">5.2 External Audit and Review</h3>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Independent Auditors:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Annual financial statement audits</li>
                      <li>Regulatory compliance reviews</li>
                      <li>Internal control assessments</li>
                      <li>Management letter recommendations</li>
                      <li>Continuous monitoring and improvement</li>
                    </ul>
                  </div>
                </div>

                <div id="regulatory-reporting" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">5.3 Regulatory Reporting</h3>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Regular Reports Filed:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>MAS regulatory returns and statistics</li>
                      <li>ACRA annual returns and financial statements</li>
                      <li>AML/CFT compliance reports</li>
                      <li>Vietnamese investment authority reports</li>
                      <li>Tax returns and compliance filings</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="client-protection" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Client Protection and Compensation</h2>

                <div id="asset-protection" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">6.1 Client Asset Protection</h3>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Segregation Requirements:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Client funds held in segregated accounts</li>
                      <li>Regular reconciliation and monitoring</li>
                      <li>Independent custodian arrangements</li>
                      <li>Clear identification and recording</li>
                      <li>Protection in event of insolvency</li>
                    </ul>
                  </div>
                </div>

                <div id="insurance" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">6.2 Professional Indemnity Insurance</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We maintain comprehensive insurance coverage including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Professional indemnity insurance</li>
                    <li>Directors and officers liability coverage</li>
                    <li>Cyber liability and data breach protection</li>
                    <li>General business and operational coverage</li>
                    <li>Fidelity and crime insurance</li>
                  </ul>
                </div>

                <div id="complaint-handling" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">6.3 Complaint Handling Procedures</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Internal Complaint Process:</h4>
                      <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Initial complaint receipt and acknowledgment</li>
                        <li>Investigation and fact-finding</li>
                        <li>Response and resolution attempt</li>
                        <li>Escalation to senior management if required</li>
                        <li>Final response and closure</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">External Dispute Resolution:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Financial Industry Disputes Resolution Centre (FIDReC)</li>
                        <li>Singapore International Arbitration Centre (SIAC)</li>
                        <li>Singapore Mediation Centre</li>
                        <li>Legal proceedings as last resort</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="regulatory-updates" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Regulatory Updates and Changes</h2>

                <div id="monitoring-compliance" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">7.1 Monitoring and Compliance</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We maintain active monitoring of:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>MAS regulatory consultations and updates</li>
                    <li>Vietnamese investment law changes</li>
                    <li>International regulatory developments</li>
                    <li>Industry best practice evolution</li>
                    <li>Technology and innovation requirements</li>
                  </ul>
                </div>

                <div id="implementation-procedures" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">7.2 Implementation Procedures</h3>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Change Management Process:</h4>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Regulatory change identification and assessment</li>
                      <li>Impact analysis and gap assessment</li>
                      <li>Implementation planning and resource allocation</li>
                      <li>Staff training and system updates</li>
                      <li>Testing and validation procedures</li>
                      <li>Go-live and monitoring</li>
                    </ol>
                  </div>
                </div>

                <div id="stakeholder-communication" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">7.3 Stakeholder Communication</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We communicate regulatory changes to stakeholders through:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Client notifications and updates</li>
                    <li>Website regulatory information updates</li>
                    <li>Newsletter and market commentary</li>
                    <li>Direct consultation and advice</li>
                    <li>Industry forum participation</li>
                  </ul>
                </div>
              </section>

              <section id="cross-border" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cross-Border Regulatory Coordination</h2>

                <div id="regulatory-cooperation" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">8.1 Regulatory Cooperation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We work with regulators across jurisdictions including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Information sharing agreements and protocols</li>
                    <li>Cross-border supervision and oversight</li>
                    <li>Joint examination and review procedures</li>
                    <li>Regulatory best practice sharing</li>
                    <li>Crisis management and coordination</li>
                  </ul>
                </div>

                <div id="international-standards" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">8.2 International Standards Compliance</h3>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Global Standards Adherence:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Financial Action Task Force (FATF) recommendations</li>
                      <li>Basel Committee banking standards</li>
                      <li>International Organization of Securities Commissions (IOSCO) principles</li>
                      <li>Organisation for Economic Cooperation and Development (OECD) guidelines</li>
                      <li>G20 financial stability recommendations</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="technology-cybersecurity" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Technology and Cybersecurity Compliance</h2>

                <div id="technology-risk" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">9.1 Technology Risk Management</h3>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Regulatory Requirements:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>MAS Technology Risk Management Guidelines</li>
                      <li>Cybersecurity controls and monitoring</li>
                      <li>Business continuity and disaster recovery</li>
                      <li>Third-party risk management</li>
                      <li>Data governance and protection</li>
                    </ul>
                  </div>
                </div>

                <div id="cybersecurity-framework" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">9.2 Cybersecurity Framework</h3>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Protection Measures:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Multi-factor authentication systems</li>
                      <li>Encryption and data protection</li>
                      <li>Network security and monitoring</li>
                      <li>Incident response procedures</li>
                      <li>Regular security assessments and testing</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="esg" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Environmental, Social and Governance (ESG)</h2>

                <div id="esg-framework" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">10.1 ESG Framework</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We integrate ESG considerations including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Environmental impact assessment</li>
                    <li>Social responsibility and community impact</li>
                    <li>Corporate governance standards</li>
                    <li>Sustainable investment practices</li>
                    <li>Stakeholder engagement and transparency</li>
                  </ul>
                </div>

                <div id="esg-alignment" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">10.2 Regulatory Alignment</h3>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">ESG Regulatory Compliance:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>MAS sustainable finance guidelines</li>
                      <li>Vietnamese environmental protection requirements</li>
                      <li>International ESG reporting standards</li>
                      <li>Climate risk disclosure requirements</li>
                      <li>Sustainable development goal alignment</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="contact-regulatory" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information for Regulatory Matters</h2>

                <div id="regulatory-contacts" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">11.1 Regulatory Contacts</h3>
                  <div className="space-y-4">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-2">Chief Compliance Officer:</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li><strong>Name:</strong> [To be inserted]</li>
                        <li><strong>Email:</strong> contact@vortexcapital.sg</li>
                        <li><strong>Phone:</strong> +1 (978) 246-3591</li>
                      </ul>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-2">Legal and Regulatory Affairs:</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li><strong>Email:</strong> contact@vortexcapital.sg</li>
                        <li><strong>Phone:</strong> +1 (978) 246-3591</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="authority-contacts" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">11.2 Regulatory Authority Contacts</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Singapore:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Monetary Authority of Singapore: www.mas.gov.sg</li>
                        <li>ACRA: www.acra.gov.sg</li>
                        <li>FIDReC: www.fidrec.com.sg</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Vietnam:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Ministry of Planning and Investment: www.mpi.gov.vn</li>
                        <li>State Bank of Vietnam: www.sbv.gov.vn</li>
                        <li>Ministry of Finance: www.mof.gov.vn</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="disclaimers" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Regulatory Disclaimers</h2>

                <div id="regulatory-status" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">12.1 Regulatory Status</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This regulatory information is provided for general guidance only and does not constitute:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Legal or regulatory advice</li>
                    <li>Guarantee of regulatory compliance</li>
                    <li>Representation of current regulatory status</li>
                    <li>Assurance of future regulatory approval</li>
                  </ul>
                </div>

                <div id="professional-advice" className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">12.2 Professional Advice</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You should consult with qualified legal and regulatory professionals for specific compliance requirements and advice relevant to your situation.
                  </p>
                </div>
              </section>

              <section id="updates-amendments" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Updates and Amendments</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This Regulatory Information document is updated regularly to reflect:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Changes in regulatory requirements</li>
                  <li>Updates to company licenses and authorizations</li>
                  <li>Modifications to compliance procedures</li>
                  <li>New regulatory guidance and interpretations</li>
                </ul>
                <div className="bg-muted/30 rounded-lg p-6 mt-4">
                  <p className="text-muted-foreground"><strong>Last Comprehensive Review:</strong> September 15, 2025</p>
                  <p className="text-muted-foreground"><strong>Next Scheduled Review:</strong> September 15, 2026</p>
                </div>
              </section>

              <section id="transparency-commitment" className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">14. Regulatory Transparency Commitment</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vortex Capital is committed to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Full transparency in regulatory compliance</li>
                  <li>Proactive communication of material changes</li>
                  <li>Cooperation with regulatory authorities</li>
                  <li>Continuous improvement in compliance standards</li>
                  <li>Best practice implementation and sharing</li>
                </ul>
              </section>

              <div className="border-t border-border pt-8 mt-12">
                <p className="text-sm text-muted-foreground">
                  <strong>Document Version:</strong> 1.0<br />
                  <strong>Last Updated:</strong> September 15, 2025<br />
                  <strong>Next Review Date:</strong> January 1, 2025<br />
                  <strong>Note:</strong> For the most current regulatory information and updates, please visit our website or contact our compliance team directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
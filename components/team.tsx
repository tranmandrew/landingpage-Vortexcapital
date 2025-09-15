import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Linkedin, Mail, Award } from "lucide-react"
import Image from "next/image"
const teamMembers = [
  {
    name: "Andy Lang",
    position: "Vietnam Country Manager",
    department: "Investment Strategy",
    bio: "Over 20+ years of experience in Southeast Asian markets and strategic partnerships.",
    image: "/AndyLangWhite.png",
    linkedin: "https://www.linkedin.com/in/andyhlang/",
    email: "contact@vortexcapital.sg",
    specialties: ["Vietnam Market", "Investment Strategy", "Cross-border M&A"],
    achievements: "Led $200M+ in successful joint ventures"
  },
  {
    name: "Evan Chin",
    position: "Founder",
    department: "General Partner",
    bio: "Singaporean market expert with 15+ years of experience in Southeast Asian markets and strategic partnerships.",
    image: "/EvanChin.png",
    linkedin: "#",
    email: "contact@vortexcapital.sg",
    specialties: ["Legal Due Diligence", "Regulatory Compliance", "Asset Verification"],
    achievements: "Vetted 100+ Vietnamese companies"
  },
  {
    name: "Michael Nguyen",
    position: "Vietnam Operations Director",
    department: "Local Operations",
    bio: "Native Vietnamese speaker with deep local market knowledge and extensive network of business contacts across key industries.",
    image: "/placeholder-team-member.jpg",
    linkedin: "#",
    email: "contact@vortexcapital.sg",
    specialties: ["Local Market Intelligence", "Business Development", "Cultural Bridge"],
    achievements: "Built network of 500+ Vietnamese companies"
  },
  {
    name: "David Lee",
    position: "Chief Financial Officer",
    department: "Financial Operations",
    bio: "CPA with expertise in international finance and structured investments. Former senior manager at Big Four accounting firm with ASEAN focus.",
    image: "/placeholder-team-member.jpg",
    linkedin: "#",
    email: "contact@vortexcapital.sg",
    specialties: ["Financial Analysis", "Structured Finance", "Tax Optimization"],
    achievements: "Optimized $50M+ in tax-efficient structures"
  }
]

export function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Expert Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Meet the experienced professionals who bridge Singapore's financial expertise with Vietnam's growth opportunities
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="hover:shadow-lg transition-shadow border-primary/20 overflow-hidden">
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="text-xs">
                      {member.department}
                      </Badge>
                    </div>
                    </div>
                  {/* Profile Content */}
                  <div className="p-6 space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm font-medium text-primary">{member.position}</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>

                    {/* Specialties */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Specialties</p>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievement */}
                    <div className="bg-accent/10 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-accent-foreground mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-accent-foreground leading-relaxed">{member.achievements}</p>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center justify-center gap-4 pt-2 border-t border-border">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                        title="Email"
                      >
                        <Mail className="h-4 w-4 text-primary" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4 text-blue-600" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <p className="text-sm text-muted-foreground">Years Combined Experience</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p className="text-sm text-muted-foreground">Countries of Expertise</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-sm text-muted-foreground">Vietnamese Business Contacts</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Work with Our Team?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our experienced professionals are ready to guide you through every step of your Vietnamese market entry strategy.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
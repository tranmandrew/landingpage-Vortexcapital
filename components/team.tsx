import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User } from "lucide-react"
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
    <section id="team" className="py-12 sm:py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Expert Team
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Meet the experienced professionals who bridge Singapore's financial expertise with Vietnam's growth opportunities
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="group hover:shadow-xl transition-all duration-300 border-primary/20 overflow-hidden hover:border-primary/40 bg-white"
              >
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Profile Image */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden flex items-center justify-center">
                    {member.image === "/placeholder-team-member.jpg" ? (
                      <User className="h-16 w-16 text-primary/50" />
                    ) : (
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.position}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>

                  {/* Profile Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    {/* Header */}
                    <div className="text-center space-y-1">
                      <h3 className="text-base font-semibold text-foreground leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {member.position}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-xs text-muted-foreground leading-relaxed text-center flex-1">
                      {member.bio}
                    </p>

                    {/* Department Badge */}
                    <div className="pt-2 border-t border-border/30">
                      <Badge
                        variant="secondary"
                        className="text-xs w-full justify-center py-1.5 bg-primary/5 text-primary border-primary/20 font-medium"
                      >
                        {member.department}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 via-white to-accent/5 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                50+
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Years Combined Experience
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                3
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Countries of Expertise
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Vietnamese Business Contacts
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Ready to Work with Our Team?
            </h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto text-sm">
              Our experienced professionals are ready to guide you through every step of your Vietnamese market entry strategy.
            </p>
            <a
              href="/contact"
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
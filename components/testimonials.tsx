import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    content:
      "Vortex Capital's deep understanding of both Singapore's regulatory environment and Vietnam's market dynamics made our joint venture incredibly successful. Their structured approach to risk management gave us confidence throughout the process.",
    author: "David Chen",
    role: "CEO, TechVenture Singapore",
    image: "/professional-asian-businessman-headshot.jpg",
  },
  {
    content:
      "The team's expertise in navigating cross-border partnerships is unmatched. They helped us establish a strong foothold in the Vietnamese market while maintaining our Singapore base operations seamlessly.",
    author: "Sarah Nguyen",
    role: "Managing Director, Global Innovations",
    image: "/professional-asian-businesswoman-headshot.jpg",
  },
  {
    content:
      "Working with Vortex Capital transformed our expansion strategy. Their Singapore holding company structure provided the perfect platform for our multiple Vietnamese market entries.",
    author: "Michael Tan",
    role: "Founder, Southeast Capital",
    image: "/professional-businessman-headshot.png",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Trusted by Industry Leaders</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See what our partners say about their experience with Vortex Capital
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6">"{testimonial.content}"</blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.author} headshot`}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

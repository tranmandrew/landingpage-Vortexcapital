import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Accelerate Your Growth?</h2>
            <p className="text-lg leading-8 opacity-90 max-w-2xl mx-auto mb-10">
              Join our network of successful partners and unlock the potential of strategic joint ventures in the
              Vietnamese market. Let's discuss how we can create value together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Start Partnership Discussion
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Meeting
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

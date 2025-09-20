import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 relative overflow-hidden"
    >
      <Image
        src="/HD-wallpaper-saigon-city-sunset-skyscrapers-skyline-vietnam.jpg"
        alt="Saigon city sunset skyline Vietnam"
        fill
        className="object-cover"
        quality={80}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_3px_3px,_white_2px,_transparent_2px)] bg-[length:40px_40px]"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Accelerate Your Growth?</h2>
            <p className="text-lg leading-8 opacity-90 max-w-2xl mx-auto mb-10">
              Join our network of successful partners and unlock the potential of strategic joint ventures in the
              Vietnamese market. Let's discuss how we can create value together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact" prefetch={true}>
                  Start Partnership Discussion
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact" prefetch={true}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Meeting
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(/MarinaBaySands4k.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 opacity-25"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance">
              Accelerating Growth Through <span className="text-accent">Asset-Backed Joint Ventures</span>
            </h1>
            <p className="mt-6 text-2xl leading-9 text-white font-semibold mx-auto">Singapore's Premier Investment Platform</p>
            <p className="mt-4 text-lg leading-8 text-white font-medium max-w-3xl mx-auto">
              We bridge international investors with pre-qualified Vietnamese companies through structured joint ventures with built-in exit strategies and real asset backing.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  Start Partnership
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#about">
                  <Play className="mr-2 h-4 w-4" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

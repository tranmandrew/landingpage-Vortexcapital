import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl text-center lg:text-left lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Accelerating Growth Through <span className="text-primary">Asset-Backed Joint Ventures</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Singapore's Premier Investment Platform</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground max-w-xl lg:mx-0 mx-auto">
              We bridge international investors with pre-qualified Vietnamese companies through structured joint ventures with built-in exit strategies and real asset backing.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#contact-form">
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

          <div className="relative lg:order-last">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
              <img
                src="/professional-singapore-business-district-skyline-w.jpg"
                alt="Singapore business district representing financial stability and trust"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Singapore Regulated</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$75M+</div>
                <div className="text-xs text-muted-foreground">Assets Under Management</div>
                <div className="text-[10px] text-muted-foreground/70 mt-1">*Historical figure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  )
}

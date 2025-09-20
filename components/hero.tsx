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
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl text-balance drop-shadow-2xl" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}>
              Accelerating Growth Through <span className="text-blue-400 font-black">Asset-Backed Joint Ventures</span>
            </h1>
            <p className="mt-6 text-2xl leading-9 text-gray-100 font-bold mx-auto drop-shadow-xl" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>Singapore's Premier Investment Platform</p>
            <p className="mt-4 text-lg leading-8 text-gray-200 font-semibold max-w-3xl mx-auto drop-shadow-lg" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
              We bridge international investors with pre-qualified Vietnamese companies through structured joint ventures with built-in exit strategies and real asset backing.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-2xl font-bold text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all duration-200">
                <Link href="/contact">
                  Start Partnership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black shadow-xl font-semibold text-lg px-8 py-4 h-auto backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-200">
                <Link href="#about">
                  <Play className="mr-2 h-5 w-5" />
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

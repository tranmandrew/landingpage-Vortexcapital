import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      <Image
        src="/MarinaBaySands4k.jpg"
        alt="Marina Bay Sands Singapore skyline"
        fill
        className="object-cover"
        priority
        quality={85}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl text-balance drop-shadow-2xl px-2" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}>
              Accelerating Growth Through <span className="text-blue-400 font-black">Asset-Backed Joint Ventures</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl leading-7 sm:leading-8 md:leading-9 text-gray-100 font-bold mx-auto drop-shadow-xl px-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>Singapore's Premier Investment Platform</p>
            <p className="mt-4 text-base sm:text-lg leading-6 sm:leading-7 md:leading-8 text-gray-200 font-semibold max-w-3xl mx-auto drop-shadow-lg px-2" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
              We bridge international investors with pre-qualified Vietnamese companies through structured joint ventures with built-in exit strategies and real asset backing.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-2xl font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto transform hover:scale-105 transition-all duration-200 w-full sm:w-auto">
                <Link href="/contact" prefetch={true}>
                  Start Partnership
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black shadow-xl font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-200 w-full sm:w-auto">
                <Link href="#about" prefetch={false}>
                  <Play className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
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

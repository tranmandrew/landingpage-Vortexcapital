"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact-form" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      // Determine active section based on scroll position
      const sections = navigation.map(item => ({
        id: item.href.slice(1),
        element: document.querySelector(item.href)
      }))

      const current = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50 py-3'
        : 'bg-background/60 backdrop-blur-sm border-b border-transparent py-4'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Vortex Capital
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-muted transition-colors min-h-[44px] min-w-[44px]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm font-semibold leading-6 px-3 py-2 rounded-lg transition-all duration-300 group ${
                  isActive
                    ? 'text-primary bg-primary/5 border-b-2 border-accent'
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5 border-b-2 border-transparent hover:border-accent/20'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 transform -translate-x-1/2 ${
                  isActive ? 'w-full' : 'group-hover:w-full'
                }`} />
              </Link>
            )
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="btn-premium bg-gradient-to-r from-accent to-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105 transform transition-all duration-200 ring-2 ring-transparent hover:ring-accent/20">
            <Link href="#contact-form">Partner With Us</Link>
          </Button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-background to-background/95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border/50 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Vortex Capital
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground hover:bg-muted/50 transition-all duration-200 min-h-[44px] min-w-[44px] inline-flex items-center justify-center hover:scale-105"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-border/50">
                <div className="space-y-3 py-6">
                  {navigation.map((item, index) => {
                    const isActive = activeSection === item.href.slice(1)
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-4 py-4 text-base font-semibold leading-7 transition-all duration-200 min-h-[44px] flex items-center animate-in slide-in-from-right ${
                          isActive
                            ? 'text-primary bg-primary/10 border-l-4 border-accent'
                            : 'text-foreground hover:text-primary hover:bg-muted/50 border-l-4 border-transparent hover:border-accent/30'
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
                <div className="py-6 animate-in slide-in-from-bottom duration-400" style={{ animationDelay: '200ms' }}>
                  <Button asChild className="w-full btn-premium bg-gradient-to-r from-accent to-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105 transform transition-all duration-200">
                    <Link href="#contact-form" onClick={() => setMobileMenuOpen(false)}>Partner With Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

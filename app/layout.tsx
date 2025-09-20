import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/sonner"
import { LoadingTransition } from "@/components/loading-transition"
import "./globals.css"

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Vortex Capital - Strategic Joint Ventures in Vietnam",
  description:
    "Singapore's premier investment facilitator specializing in strategic joint ventures with Vietnamese companies. Accelerating growth through strategic partnerships.",
  keywords: "investment, joint ventures, Singapore, Vietnam, strategic partnerships, capital deployment",
  authors: [{ name: "Vortex Capital" }],
  metadataBase: new URL('https://landingpage-vortexcapital.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Vortex Capital - Strategic Joint Ventures in Vietnam",
    description:
      "Singapore's premier investment facilitator specializing in strategic joint ventures with Vietnamese companies.",
    type: "website",
    locale: "en_US",
    url: "https://landingpage-vortexcapital.vercel.app/",
    siteName: "Vortex Capital",
    images: [
      {
        url: "https://landingpage-vortexcapital.vercel.app/VortexLongLogo1.png",
        width: 1200,
        height: 630,
        alt: "Vortex Capital - Strategic Joint Ventures in Vietnam",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortex Capital - Strategic Joint Ventures in Vietnam",
    description:
      "Singapore's premier investment facilitator specializing in strategic joint ventures with Vietnamese companies.",
    images: ["https://landingpage-vortexcapital.vercel.app/VortexLongLogo1.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for WhatsApp and other social platforms */}
        <meta property="og:image" content="https://landingpage-vortexcapital.vercel.app/VortexLongLogo1.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Vortex Capital - Strategic Joint Ventures in Vietnam" />
        <meta name="twitter:image" content="https://landingpage-vortexcapital.vercel.app/VortexLongLogo1.png" />
        <meta name="twitter:image:alt" content="Vortex Capital - Strategic Joint Ventures in Vietnam" />
        {/* Preload critical resources */}
        <link rel="preload" href="/MarinaBaySands4k.jpg" as="image" />
        <link rel="preload" href="/VortexLongLogo1.png" as="image" />
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//linkedin.com" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LoadingTransition />
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}

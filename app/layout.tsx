import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Vortex Capital - Strategic Joint Ventures in Vietnam",
  description:
    "Singapore's premier investment platform specializing in strategic joint ventures with Vietnamese companies. Accelerating growth through strategic partnerships.",
  keywords: "investment, joint ventures, Singapore, Vietnam, strategic partnerships, capital deployment",
  authors: [{ name: "Vortex Capital" }],
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
      "Singapore's premier investment platform specializing in strategic joint ventures with Vietnamese companies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortex Capital - Strategic Joint Ventures in Vietnam",
    description:
      "Singapore's premier investment platform specializing in strategic joint ventures with Vietnamese companies.",
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}

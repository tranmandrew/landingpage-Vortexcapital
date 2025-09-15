export interface NavItem {
  label: string
  href: string
}

export interface ButtonConfig {
  text: string
  href: string
  variant?: "default" | "secondary" | "outline"
}

export interface HeroSection {
  headline: string
  subheadline: string
  description: string
  primaryCTA: ButtonConfig
  secondaryCTA: ButtonConfig
}

export interface Benefit {
  icon: string
  title: string
  description: string
}

export interface ValueProp {
  title: string
  description: string
  benefits: Benefit[]
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}

export interface StatsSection {
  stats: Stat[]
}

export interface CTASection {
  title: string
  description: string
  primaryButton: ButtonConfig
  secondaryButton?: ButtonConfig
}

export interface CompanyInfo {
  name: string
  address: string
  phone: string
  email: string
}

export interface FooterLinks {
  company: NavItem[]
  services: NavItem[]
  legal: NavItem[]
}

export interface SocialLink {
  platform: string
  href: string
  icon: string
}

export interface Footer {
  companyInfo: CompanyInfo
  links: FooterLinks
  socialMedia: SocialLink[]
  legal: string[]
}

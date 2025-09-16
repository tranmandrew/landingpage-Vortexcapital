"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { Send, Building2, Users, DollarSign, Globe, FileText, Phone, Mail, MapPin } from "lucide-react"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  position: z.string().min(2, "Position must be at least 2 characters"),
  country: z.string().min(1, "Please select your country"),
  investmentRange: z.string().min(1, "Please select an investment range"),
  partnershipType: z.string().min(1, "Please select a partnership type"),
  industry: z.string().min(1, "Please select an industry"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  newsletter: z.boolean().default(false),
  terms: z.boolean().refine((val) => val === true, "You must agree to the terms and conditions")
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      country: "",
      investmentRange: "",
      partnershipType: "",
      industry: "",
      message: "",
      newsletter: false,
      terms: false
    }
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log("Form data:", data)
      toast.success("Thank you for your interest! We'll be in touch within 24 hours.")
      form.reset()
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="py-24 sm:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our network of successful partners and unlock the potential of strategic joint ventures in the Vietnamese market. Let's discuss how we can create value together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Connect with our Singapore investment team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">contact@vortexcapital.sg</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (978) 246-3591</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Singapore Office</p>
                    <p className="text-sm text-muted-foreground">
                      1 Raffles Place<br />
                      #40-01 One Raffles Place<br />
                      Singapore 048616
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Singapore Regulated Platform</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardTitle>Partnership Inquiry</CardTitle>
                <CardDescription>
                  Tell us about your company and investment goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (978) 246-3591" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Company Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
                        <Building2 className="h-5 w-5" />
                        Company Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Company Ltd." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="position"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Position *</FormLabel>
                              <FormControl>
                                <Input placeholder="CEO, CTO, etc." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select country" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="singapore">Singapore</SelectItem>
                                  <SelectItem value="vietnam">Vietnam</SelectItem>
                                  <SelectItem value="malaysia">Malaysia</SelectItem>
                                  <SelectItem value="thailand">Thailand</SelectItem>
                                  <SelectItem value="indonesia">Indonesia</SelectItem>
                                  <SelectItem value="philippines">Philippines</SelectItem>
                                  <SelectItem value="united-states">United States</SelectItem>
                                  <SelectItem value="australia">Australia</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Industry *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select industry" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="technology">Technology</SelectItem>
                                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                  <SelectItem value="retail">Retail & E-commerce</SelectItem>
                                  <SelectItem value="healthcare">Healthcare</SelectItem>
                                  <SelectItem value="finance">Financial Services</SelectItem>
                                  <SelectItem value="real-estate">Real Estate</SelectItem>
                                  <SelectItem value="agriculture">Agriculture</SelectItem>
                                  <SelectItem value="logistics">Logistics & Supply Chain</SelectItem>
                                  <SelectItem value="energy">Energy</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Investment Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        Investment Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="investmentRange"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Investment Range *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="under-500k">Under $500K</SelectItem>
                                  <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                                  <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                                  <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                                  <SelectItem value="10m-25m">$10M - $25M</SelectItem>
                                  <SelectItem value="25m-50m">$25M - $50M</SelectItem>
                                  <SelectItem value="50m-75m">$50M - $75M</SelectItem>
                                  <SelectItem value="over-75m">Over $75M</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="partnershipType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Partnership Type *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="joint-venture">Joint Venture</SelectItem>
                                  <SelectItem value="strategic-investment">Strategic Investment</SelectItem>
                                  <SelectItem value="merger-acquisition">Merger & Acquisition</SelectItem>
                                  <SelectItem value="licensing">Technology Licensing</SelectItem>
                                  <SelectItem value="distribution">Distribution Partnership</SelectItem>
                                  <SelectItem value="market-entry">Market Entry Support</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Project Details
                      </h3>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tell us about your project *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your company, current operations, expansion plans, and how you envision a partnership with Vietnamese companies..."
                                rows={6}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Agreement and Submit */}
                    <div className="space-y-6 bg-muted/30 rounded-lg p-6">
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="newsletter"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-normal">
                                  Subscribe to our newsletter for market insights and investment opportunities
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="terms"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-normal">
                                  I agree to the terms and conditions and privacy policy *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-4 h-4 mr-2 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                            Submitting...
                          </div>
                        ) : (
                          <>
                            Send Partnership Inquiry
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
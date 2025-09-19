"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner"
import { Send, ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  position: z.string().min(2, "Position is required"),
  country: z.string().min(1, "Please select your country"),
  industry: z.string().min(1, "Please select your industry"),
  investmentRange: z.string().min(1, "Please select investment range"),
  investmentType: z.string().min(1, "Please select investment type"),
  message: z.string().min(10, "Please provide more details about your inquiry"),
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
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
      industry: "",
      investmentRange: "",
      investmentType: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success("Partnership inquiry submitted successfully!", {
        description: "We'll review your submission and get back to you within 24 hours.",
        duration: 5000,
      })

      form.reset()
    } catch (error) {
      toast.error("Failed to submit inquiry. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Header Section */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Link
                href="/"
                className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                Ready to Accelerate Your Growth?
              </h1>
              <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                Join our network of successful partners and unlock the potential of strategic joint ventures
                in the Vietnamese market. Let's discuss how we can create value together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Contact Information */}
              <div className="lg:col-span-1">
                <Card className="h-fit">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Contact Information</CardTitle>
                    <p className="text-muted-foreground">Connect with our Singapore investment team</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:contact@vortexcapital.sg" className="text-primary hover:text-primary/80">
                          contact@vortexcapital.sg
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+19782463591" className="text-primary hover:text-primary/80">
                          +1 (978) 246-3591
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Singapore Office</p>
                        <address className="text-muted-foreground not-italic">
                          1 Raffles Place<br />
                          #40-01 One Raffles Place<br />
                          Singapore 048616
                        </address>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">Singapore Regulated Platform</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Partnership Inquiry Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Partnership Inquiry</CardTitle>
                    <p className="text-muted-foreground">Tell us about your company and investment goals</p>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        {/* Personal Information */}
                        <div>
                          <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First Name</FormLabel>
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
                                  <FormLabel>Last Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
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
                                  <FormLabel>Phone</FormLabel>
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
                        <div>
                          <h3 className="text-lg font-medium mb-4">Company Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="company"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Company Name</FormLabel>
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
                                  <FormLabel>Position</FormLabel>
                                  <FormControl>
                                    <Input placeholder="CEO, CTO, etc." {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <FormField
                              control={form.control}
                              name="country"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Country</FormLabel>
                                  <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select country" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="singapore">Singapore</SelectItem>
                                      <SelectItem value="usa">United States</SelectItem>
                                      <SelectItem value="uk">United Kingdom</SelectItem>
                                      <SelectItem value="australia">Australia</SelectItem>
                                      <SelectItem value="canada">Canada</SelectItem>
                                      <SelectItem value="hong-kong">Hong Kong</SelectItem>
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
                                  <FormLabel>Industry</FormLabel>
                                  <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select industry" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="technology">Technology</SelectItem>
                                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                      <SelectItem value="finance">Financial Services</SelectItem>
                                      <SelectItem value="real-estate">Real Estate</SelectItem>
                                      <SelectItem value="retail">Retail</SelectItem>
                                      <SelectItem value="healthcare">Healthcare</SelectItem>
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
                        <div>
                          <h3 className="text-lg font-medium mb-4">Investment Details</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="investmentRange"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Investment Range</FormLabel>
                                  <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select range" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                                      <SelectItem value="1m-3m">$1M - $3M</SelectItem>
                                      <SelectItem value="3m-5m">$3M - $5M</SelectItem>
                                      <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                                      <SelectItem value="10m+">$10M+</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="investmentType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Investment Type</FormLabel>
                                  <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="joint-venture">Joint Venture</SelectItem>
                                      <SelectItem value="direct-investment">Direct Investment</SelectItem>
                                      <SelectItem value="partnership">Strategic Partnership</SelectItem>
                                      <SelectItem value="acquisition">Acquisition</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        {/* Project Details */}
                        <div>
                          <h3 className="text-lg font-medium mb-4">Project Details</h3>
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Description</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Describe your company, current operations, expansion plans, and how you envision a partnership with Vietnamese companies..."
                                    className="min-h-[120px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                          size="lg"
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Partnership Inquiry
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
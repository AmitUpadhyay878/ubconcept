"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"

// Define form validation schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }).max(100),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }).max(1000),
})

type FormValues = z.infer<typeof formSchema>

// Email recipient
const RECIPIENT_EMAIL = "amitupadhyay878@gmail.com"

export default function ContactUsClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  // Properly use the toast hook at the component level
  const { toast } = useToast()

  // Initialize react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      // In a real application, you would send this data to your backend
      // and then forward it to the recipient email: amitupadhyay878@gmail.com
      console.log("Form submitted to:", RECIPIENT_EMAIL, data)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message Sent",
        description: `Thank you for your message! We will get back to you soon. Your message has been sent to ${RECIPIENT_EMAIL}`,
      })

      // Reset form
      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Touch</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="text-gray-300">{RECIPIENT_EMAIL}</p>
                    <p className="text-gray-300">support@ubconcept.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="text-gray-300">+91 8511546616</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Address</h3>
                    <p className="text-gray-300">
                      403, Sumeet Apartment,
                      <br />
                      Near Mansi Circle, Vastrapur,
                      <br />
                      Ahmedabad - 380015
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday:</span>
                  <span className="text-white">10:00 AM - 6:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday:</span>
                  <span className="text-white">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Your Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          className="bg-white/5 border-white/10 text-white"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 flex items-center text-sm">
                        {form.formState.errors.name && <AlertCircle className="h-4 w-4 mr-1" />}
                        {form.formState.errors.name?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="john@example.com"
                          className="bg-white/5 border-white/10 text-white"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 flex items-center text-sm">
                        {form.formState.errors.email && <AlertCircle className="h-4 w-4 mr-1" />}
                        {form.formState.errors.email?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="How can we help you?"
                          className="bg-white/5 border-white/10 text-white"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 flex items-center text-sm">
                        {form.formState.errors.subject && <AlertCircle className="h-4 w-4 mr-1" />}
                        {form.formState.errors.subject?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Tell us about your project..."
                          rows={6}
                          className="bg-white/5 border-white/10 text-white"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 flex items-center text-sm">
                        {form.formState.errors.message && <AlertCircle className="h-4 w-4 mr-1" />}
                        {form.formState.errors.message?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

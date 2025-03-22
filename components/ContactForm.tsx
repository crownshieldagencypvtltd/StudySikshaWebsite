"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid WhatsApp number." }),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal("")),
  educationLevel: z.string().min(1, { message: "Please select your current education level." }),
  educationLevelOther: z.string().optional(),
  stream: z.string().min(1, { message: "Please select your stream/subject." }),
  streamOther: z.string().optional(),
  careerPath: z.string().min(1, { message: "Please select your interested course or career path." }),
  careerPathOther: z.string().optional(),
  preferredCollege: z.string().optional(),
  locationPreference: z.string().min(1, { message: "Please select your location preference." }),
  additionalQueries: z.string().optional(),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      educationLevel: "",
      educationLevelOther: "",
      stream: "",
      streamOther: "",
      careerPath: "",
      careerPathOther: "",
      preferredCollege: "",
      locationPreference: "",
      additionalQueries: "",
    },
  })

  const watchEducationLevel = form.watch("educationLevel")
  const watchStream = form.watch("stream")
  const watchCareerPath = form.watch("careerPath")

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div
        className="bg-white p-8 rounded-lg border border-gray-200 text-center"
      >
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-brand-800">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your message has been received. One of our education counselors will contact you shortly.
        </p>
        <Button onClick={() => setIsSubmitted(false)} className="bg-brand-600 hover:bg-brand-700 text-white">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div
      className="bg-white p-8 rounded-lg border border-gray-200"
    >
      <h2 className="text-2xl font-bold mb-2 text-brand-800">Academic & Career Counselling Request</h2>
      <p className="text-gray-600 mb-6">To help students receive personalized academic guidance.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>👤 Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} className="border-gray-300" />
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
                <FormLabel>📞 Contact Number</FormLabel>
                <FormControl>
                  <Input placeholder="WhatsApp number for communication" {...field} className="border-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>📧 Email (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="For detailed reports or follow-up" {...field} className="border-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="educationLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>🎓 Current Education Level</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select your education level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="10th">10th Appearing/Passed</SelectItem>
                    <SelectItem value="12th">12th Appearing/Passed</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                    <SelectItem value="postgraduate">Postgraduate</SelectItem>
                    <SelectItem value="other">Other (Specify)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {watchEducationLevel === "other" && (
            <FormField
              control={form.control}
              name="educationLevelOther"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specify Education Level</FormLabel>
                  <FormControl>
                    <Input placeholder="Please specify your education level" {...field} className="border-gray-300" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="stream"
            render={({ field }) => (
              <FormItem>
                <FormLabel>📚 Stream/Subject</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select your stream/subject" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="commerce">Commerce</SelectItem>
                    <SelectItem value="arts">Arts</SelectItem>
                    <SelectItem value="other">Other (Specify)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {watchStream === "other" && (
            <FormField
              control={form.control}
              name="streamOther"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specify Stream/Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Please specify your stream/subject" {...field} className="border-gray-300" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="careerPath"
            render={({ field }) => (
              <FormItem>
                <FormLabel>🎯 Interested Course or Career Path</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select your interested course or career path" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="btech">B.Tech</SelectItem>
                    <SelectItem value="mbbs">MBBS</SelectItem>
                    <SelectItem value="bba">BBA</SelectItem>
                    <SelectItem value="hotel">Hotel Management</SelectItem>
                    <SelectItem value="other">Other (Specify)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {watchCareerPath === "other" && (
            <FormField
              control={form.control}
              name="careerPathOther"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specify Course or Career Path</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please specify your course or career path"
                      {...field}
                      className="border-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="preferredCollege"
            render={({ field }) => (
              <FormItem>
                <FormLabel>🏫 Preferred College/University (if any)</FormLabel>
                <FormControl>
                  <Input placeholder="Optional" {...field} className="border-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="locationPreference"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>📍 Location Preference</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="kolkata" />
                      </FormControl>
                      <FormLabel className="font-normal">Kolkata</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="westbengal" />
                      </FormControl>
                      <FormLabel className="font-normal">West Bengal</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="india" />
                      </FormControl>
                      <FormLabel className="font-normal">India</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="abroad" />
                      </FormControl>
                      <FormLabel className="font-normal">Abroad</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="nopreference" />
                      </FormControl>
                      <FormLabel className="font-normal">No Preference</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="additionalQueries"
            render={({ field }) => (
              <FormItem>
                <FormLabel>❓ Additional Queries or Comments</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Mention any specific concerns or queries"
                    className="min-h-[120px] border-gray-300"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-sm text-gray-600 mb-4">
            <p>✅ Submission Instructions:</p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li>Fill in the form details by ticking the appropriate options.</li>
              <li>Send it via WhatsApp to: +91 73193 67046 (Shiksha Yogya Pvt Ltd).</li>
              <li>Our counselor will get in touch with you shortly.</li>
            </ol>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium"
          >
            {isSubmitting ? "Sending..." : "Submit Request"}
          </Button>
        </form>
      </Form>
    </div>
  )
}


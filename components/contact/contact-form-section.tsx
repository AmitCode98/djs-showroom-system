import React from "react"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Button from "@/components/ui/button"

export default function ContactFormSection() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="max-w-xl mx-auto flex flex-col gap-12">
          <SectionTitle
            subtitle="Get In Touch"
            title="We'd Love to Hear From You"
            description="Whether you have a question about a piece or wish to book a private consultation, our concierge team is here to help."
          />

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="first-name" className="text-sm font-medium text-foreground">
                  First Name
                </label>
                <Input id="first-name" placeholder="Jane" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="last-name" className="text-sm font-medium text-foreground">
                  Last Name
                </label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address
              </label>
              <Input id="email" type="email" placeholder="jane@example.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us how we can assist you..."
                className="min-h-[160px]"
              />
            </div>

            <Button type="submit" variant="gold" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}

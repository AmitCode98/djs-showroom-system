import React from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Luxury Avenue, Diamond District, NY 10036",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 70744 62770",
  },
  {
    icon: Mail,
    label: "Email",
    value: "duttajewellers@gmail.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat: 10am – 7pm\nSunday: By Appointment",
  },
]

export default function ShowroomInfo() {
  return (
    <section className="py-20 bg-secondary/40">
      <Container>
        <SectionTitle
          subtitle="Find Us"
          title="Visit Our Showroom"
          description="Step into a world of timeless beauty. Our doors are open for private appointments and walk-in consultations."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border/60">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  {label}
                </p>
                <p className="font-body text-sm text-foreground whitespace-pre-line">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

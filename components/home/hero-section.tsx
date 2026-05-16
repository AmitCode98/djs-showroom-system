import * as React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/ui/container"
import  Button  from "@/components/ui/button"
import { Heading, Paragraph, Caption } from "@/components/ui/typography"

export function HeroSection() {
  
  return (
    <section className="relative w-full overflow-hidden bg-background pt-16 pb-24 md:pt-24 md:pb-32 lg:min-h-[85vh] flex items-center">
      {/* Background Decorative Blur for Luxury Atmosphere */}
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-8 lg:col-span-5 lg:col-start-1 z-10">
            <div className="flex flex-col gap-6">
              <Caption className="text-gold font-medium tracking-widest">
                The 2026 Heritage Collection
              </Caption>
              
              <Heading level={1} className="leading-[1.1] md:leading-[1.1]">
                Elegance <br className="hidden lg:block" />
                Forged in <br className="hidden lg:block" />
                Pure Gold.
              </Heading>
              
              <Paragraph className="max-w-md text-foreground/80 md:text-lg">
                Discover the artistry of master craftsmen. Every piece in our showroom is meticulously curated to bring you the finest diamonds, purest gold, and rarest gemstones.
              </Paragraph>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button 
                variant="gold" 
                size="lg" 
                icon={<ArrowRight size={18} />} 
                iconPlacement="right"
                className="w-full sm:w-auto"
              >
                Explore Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto"
              >
                Book Appointment
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-border/50 flex items-center gap-8">
              <div>
                <p className="font-heading text-2xl font-semibold text-foreground">100+</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mt-1">Years Heritage</p>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div>
                <p className="font-heading text-2xl font-semibold text-foreground">24k</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mt-1">Purest Gold</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative lg:col-span-6 lg:col-start-7 w-full aspect-4/5 sm:aspect-3/4 lg:aspect-4/5 rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1599643478514-4a4e09b52342?q=80&w=2000&auto=format&fit=crop"
              alt="Exquisite Gold Necklace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover relative z-10 transition-transform duration-[1.5s] group-hover:scale-105"
              priority
            />

            {/* Image Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent z-20 pointer-events-none" />
          </div>

        </div>
      </Container>
    </section>
  )
}

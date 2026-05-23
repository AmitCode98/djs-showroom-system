import * as React from "react"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { BudgetCard } from "./budget-card"
import { BUDGETS } from "@/constants/collections"

export function ShopByBudgetSection() {
  return (
    <section className="pt-16 pb-10 md:pt-24 md:pb-16 bg-[#FDFBF7] overflow-hidden">
      <Container>
        <SectionTitle
          title="Shop By Budget"
          subtitle="CURATED FOR EVERY OCCASION"
          description="Explore elegant jewellery collections tailored to your preferred budget range."
          align="center"
          className="mb-12 md:mb-16"
        />
        
        {/* Mobile: Snap Scroll Slider | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pt-4 pb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
          {BUDGETS.map((budget) => (
            <div 
              key={budget.id} 
              className="w-[85vw] sm:w-[48vw] shrink-0 snap-center md:w-auto md:shrink"
            >
              <BudgetCard
                title={budget.title}
                subtitle={budget.subtitle}
                image={budget.image}
                href={budget.href}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

import React from "react"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import ProductCard from "@/components/products/product-card"
import { FEATURED_PRODUCTS } from "@/constants/products"

export default function FeaturedProducts() {
  const featured = FEATURED_PRODUCTS.slice(0, 3)

  return (
    <section className="pt-16 pb-14 bg-background">
      <Container>
        <SectionTitle
          title="Featured Pieces"
          description="Handcrafted heirloom designs and showroom favourites, inspected for pure 22k hallmark excellence."
          align="center"
        />

        {/* Product grid of real featured products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              category={product.category}
              price={product.price}
              image={product.images.main.url}
              href={`/products/${product.slug}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

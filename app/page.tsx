import { TopStrip } from "@/components/layout/top-strip";
import { ContactStrip } from "@/components/layout/contact-strip";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { HeroSection } from "@/components/home/hero-section";
import FeaturedProducts from "@/components/home/featured-products";
import { CollectionsSection } from "@/components/collections/collections-section";

export default function HomePage() {
  return (
    <>
      <TopStrip />
      <ContactStrip />
      <Navbar />

      <main>
        <HeroSection />
        <FeaturedProducts />
        <CollectionsSection />
      </main>

      <Footer />
    </>
  );
}
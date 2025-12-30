import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import WhoWeAre from "@/components/layout/WhoWeAre";
import LightDivider from "@/components/layout/LightDivider";
import ProductLegacyLoan from "@/components/layout/ProductLegacyLoan";



export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero / Above-the-fold */}
        <Hero />

        {/* Who We Are section */}
        <WhoWeAre />

        {/* Light divider */}
        <LightDivider />

        {/* Product: Legacy Loan */}
        <ProductLegacyLoan />

        {/* Sections below — mapped 1:1 to Figma frames */}
        <section id="product" />
        <section id="features" />
        <section id="security" />
        <section id="pricing" />
        <section id="contact" />
      </main>
    </>
  );
}

import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import WhoWeAre from "@/components/layout/WhoWeAre";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero / Above-the-fold */}
        <Hero />

        {/* Who We Are section */}
        <WhoWeAre />

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

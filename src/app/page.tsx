import Header from "@/components/layout/Header";
import Billboard from "@/components/layout/Billboard";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Billboard />

        {/* 
          Placeholder sections — these map 1:1 to Figma frames.
          We will replace these one by one.
        */}
        <section id="product" />
        <section id="features" />
        <section id="security" />
        <section id="pricing" />
        <section id="contact" />
      </main>
    </>
  );
}

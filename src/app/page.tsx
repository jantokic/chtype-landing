import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import CodeDemo from "@/components/CodeDemo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <div className="liquid-glass-mini" aria-hidden="true" />

      <PainPoints />

      <div className="mx-auto max-w-[800px] divider-glow" />

      <div className="glow-section glow-section-left">
        <Features />
      </div>

      <div className="liquid-glass-mini" aria-hidden="true" />

      <div className="glow-section glow-section-right">
        <CodeDemo />
      </div>

      <div className="liquid-glass-mini" aria-hidden="true" />

      <CTA />
      <Footer />
    </>
  );
}

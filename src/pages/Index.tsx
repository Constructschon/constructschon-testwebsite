import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import EmotionalPillars from "@/components/EmotionalPillars";
import ApproachSection from "@/components/ApproachSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Vision />
      <EmotionalPillars />
      <ApproachSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

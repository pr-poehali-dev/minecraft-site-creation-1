import GameHeader from "@/components/GameHeader";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GameHeader />
      <HeroSection />
      <FeaturesSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;

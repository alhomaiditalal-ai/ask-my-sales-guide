import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      {/* Footer */}
      <footer className="bg-foreground py-8 text-center" dir="rtl">
        <p className="text-background/50 font-body text-sm">
          © {new Date().getFullYear()} مستشار المبيعات. جميع الحقوق محفوظة.
        </p>
      </footer>
    </div>
  );
};

export default Index;

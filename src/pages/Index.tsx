import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { BarriersSection } from "@/components/sections/BarriersSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { CompetitorsSection } from "@/components/sections/CompetitorsSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingContact } from "@/components/FloatingContact";
import { CookieConsent } from "@/components/CookieConsent";
import { ContactForm } from "@/components/ContactForm";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [formType, setFormType] = useState<'audit' | 'calculate'>('audit');

  const handleOpenForm = (type: 'audit' | 'calculate') => {
    setFormType(type);
    setFormOpen(true);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection onOpenForm={handleOpenForm} />
          <ProblemsSection />
          <BarriersSection />
          <SolutionSection />
          <ComparisonTableSection />
          <PricingSection onOpenForm={handleOpenForm} />
          <WhyUsSection />
          <CompetitorsSection />
          <CasesSection />
          <CTASection onOpenForm={handleOpenForm} />
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingContact />
        <CookieConsent />
        <ContactForm open={formOpen} onOpenChange={setFormOpen} type={formType} />
      </div>
    </LanguageProvider>
  );
};

export default Index;
import { useState } from "react";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
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

const IndexContent = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [formType, setFormType] = useState<'audit' | 'calculate'>('audit');
  const { t } = useLanguage();

  const handleOpenForm = (type: 'audit' | 'calculate') => {
    setFormType(type);
    setFormOpen(true);
  };

  return (
    <>
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
          <div className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-muted-foreground"
                >
                  {t('cta.separator1')}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-base md:text-lg text-muted-foreground/80"
                >
                  {t('cta.separator2')}
                </motion.div>
              </div>
            </div>
          </div>
          <CTASection onOpenForm={handleOpenForm} />
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingContact />
        <CookieConsent />
        <ContactForm open={formOpen} onOpenChange={setFormOpen} type={formType} />
      </div>
    </>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
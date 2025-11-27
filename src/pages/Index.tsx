import { useState } from "react";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import solutionImage from "@/assets/solution-tech.jpg";
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
          <div className="py-16 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-3 flex flex-col h-full"
                  >
                    <p className="text-base md:text-lg text-muted-foreground flex-1">{t('cta.separator1')}</p>
                    <p className="text-base md:text-lg text-muted-foreground flex-1">{t('cta.separator2')}</p>
                    <p className="text-base md:text-lg text-muted-foreground flex-1">{t('cta.separator3')}</p>
                    <p className="text-base md:text-lg text-muted-foreground flex-1">{t('cta.separator4')}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-3 flex flex-col h-full"
                  >
                    <p className="text-base md:text-lg text-muted-foreground flex-1">{t('cta.separator5')}</p>
                    <p className="text-base md:text-lg text-muted-foreground flex-1">{t('cta.separator6')}</p>
                    <p className="text-base md:text-lg text-muted-foreground flex-1">{t('cta.separator7')}</p>
                    <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={solutionImage} 
                        alt="Warehouse automation" 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
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
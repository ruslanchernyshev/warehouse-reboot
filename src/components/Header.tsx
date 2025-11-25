import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Globe, Warehouse } from "lucide-react";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Warehouse className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">WMS Pro</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('demo')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.demo')}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.pricing')}
            </button>
            <button onClick={() => scrollToSection('cases')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.cases')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </button>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'uk' ? 'en' : 'uk')}
            className="flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'uk' ? 'EN' : 'UA'}</span>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Globe, Warehouse } from "lucide-react";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'demo', label: t('nav.demo') },
    { id: 'pricing', label: t('nav.pricing') },
    { id: 'cases', label: t('nav.cases') },
    { id: 'contact', label: t('nav.contact') },
  ];

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
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex"
            >
              {t('nav.consultation')}
            </Button>
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
      </div>
    </motion.header>
  );
};

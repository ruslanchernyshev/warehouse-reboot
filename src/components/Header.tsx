import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Globe, Warehouse } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['demo', 'pricing', 'cases', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
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
                className="relative text-foreground hover:text-primary transition-colors px-2 py-1"
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
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

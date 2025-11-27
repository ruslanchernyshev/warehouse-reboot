import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Globe, Warehouse, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

interface HeaderProps {
  onOpenForm?: (type: 'audit' | 'calculate') => void;
}

export const Header = ({ onOpenForm }: HeaderProps) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConsultationClick = () => {
    setMobileMenuOpen(false);
    if (onOpenForm) {
      onOpenForm('audit');
    } else {
      scrollToSection('contact');
    }
  };

  const navItems = [
    { id: 'demo', label: t('nav.demo'), isLink: false },
    { id: 'pricing', label: t('nav.pricing'), isLink: false },
    { id: 'cases', label: t('nav.cases'), isLink: false },
    { id: 'contact', label: t('nav.contact'), isLink: true, path: '/contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Warehouse className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">WMS Pro</span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.id}
                  to={item.path || '#'}
                  className="text-foreground hover:text-primary transition-colors px-2 py-1"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors px-2 py-1"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="default"
              size="sm"
              onClick={handleConsultationClick}
              className="hidden md:flex"
            >
              {t('nav.consultation')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'uk' ? 'en' : 'uk')}
              className="hidden md:flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'uk' ? 'EN' : 'UA'}</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card border-border">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <Warehouse className="w-8 h-8 text-primary" />
                      <span className="text-xl font-bold text-foreground">WMS Pro</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </div>

                  <nav className="flex flex-col gap-4 flex-1">
                    {navItems.map((item) => (
                      item.isLink ? (
                        <Link
                          key={item.id}
                          to={item.path || '#'}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-lg text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="text-lg text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                        >
                          {item.label}
                        </button>
                      )
                    ))}
                  </nav>

                  <div className="flex flex-col gap-3 pt-6 border-t border-border">
                    <Button
                      onClick={handleConsultationClick}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {t('nav.consultation')}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setLanguage(language === 'uk' ? 'en' : 'uk')}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      <span>{language === 'uk' ? 'EN' : 'UA'}</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

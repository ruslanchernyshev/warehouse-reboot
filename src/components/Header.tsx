import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Globe, Warehouse } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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

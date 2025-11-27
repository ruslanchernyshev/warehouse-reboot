import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";

interface CTASectionProps {
  onOpenForm: (type: 'audit' | 'calculate') => void;
}

export const CTASection = ({ onOpenForm }: CTASectionProps) => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            {t('cta.title.part1')}
            <br />
            <span className="text-primary-foreground/90">{t('cta.title.part2')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onOpenForm('audit')}
              className="bg-background text-foreground hover:bg-background/90 shadow-2xl group text-lg px-8 py-6"
            >
              {t('cta.button1')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onOpenForm('calculate')}
              className="bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-background/20 group text-lg px-8 py-6 animate-pulse"
            >
              <Calculator className="mr-2 w-5 h-5" />
              {t('cta.button2')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

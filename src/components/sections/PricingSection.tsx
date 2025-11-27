import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onOpenForm: (type: 'audit' | 'calculate') => void;
}

export const PricingSection = ({ onOpenForm }: PricingSectionProps) => {
  const { t } = useLanguage();

  const features = [
    t('pricing.feature1'),
    t('pricing.feature2'),
    t('pricing.feature3'),
  ];

  const extras = [
    t('pricing.extra1'),
    t('pricing.extra2'),
    t('pricing.extra3'),
    t('pricing.extra4'),
  ];

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
        >
          {t('pricing.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border shadow-xl h-full">
              <CardHeader className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 text-foreground rounded-t-lg border-b border-border">
                <CardTitle className="text-3xl">{t('pricing.base')}</CardTitle>
                <div className="text-5xl font-bold mt-4">
                  $1000
                  <span className="text-2xl font-normal">{t('pricing.perMonth')}</span>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">{t('pricing.additional')}</h3>
                  <ul className="space-y-3">
                    {extras.map((extra, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{extra}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  size="lg"
                  onClick={() => onOpenForm('calculate')}
                  className="w-full mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t('pricing.cta')}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border shadow-xl h-full">
              <CardHeader className="text-center bg-gradient-to-br from-muted/80 to-muted text-foreground rounded-t-lg border-b border-border">
                <CardTitle className="text-3xl">{t('pricing.custom')}</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t('pricing.custom.feature1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t('pricing.custom.feature2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t('pricing.custom.feature3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t('pricing.custom.feature4')}</span>
                  </li>
                </ul>

                <div className="border-t border-border pt-8">
                  <p className="text-center text-muted-foreground mb-4">
                    Ідеальне рішення для великих складів та складних інтеграцій
                  </p>
                </div>

                <Button
                  size="lg"
                  onClick={() => onOpenForm('calculate')}
                  className="w-full mt-8 bg-accent text-primary-foreground hover:bg-accent/90"
                >
                  {t('pricing.cta.custom')}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

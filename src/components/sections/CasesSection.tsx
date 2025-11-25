import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import successImage from "@/assets/success-team.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, TrendingUp, Users } from "lucide-react";

export const CasesSection = () => {
  const { t } = useLanguage();

  const cases = [
    { title: t('cases.case1.title'), desc: t('cases.case1.desc') },
    { title: t('cases.case2.title'), desc: t('cases.case2.desc') },
  ];

  return (
    <section id="cases" className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
        >
          {t('cases.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-card border-border hover:shadow-xl transition-all hover:-translate-y-2">
                <CardContent className="p-8">
                  <Quote className="w-12 h-12 text-primary/30 mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">{caseItem.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{caseItem.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${successImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
          </div>
          
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-2">
                    <TrendingUp className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-5xl font-bold text-primary-foreground">{t('cases.stats.years')}</h3>
                  <p className="text-xl text-primary-foreground/90">{t('cases.stats.yearsDesc')}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-2">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-5xl font-bold text-primary-foreground">{t('cases.stats.clients')}</h3>
                  <p className="text-xl text-primary-foreground/90">{t('cases.stats.clientsDesc')}</p>
                </div>
              </div>
              
              <p className="text-2xl font-bold text-primary-foreground mt-8">
                {t('cases.stats.cta')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
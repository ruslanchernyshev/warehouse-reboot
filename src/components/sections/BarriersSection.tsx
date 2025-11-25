import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { DollarSign, Clock, Users, Settings, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const BarriersSection = () => {
  const { t } = useLanguage();

  const barriers = [
    { icon: DollarSign, title: t('barriers.1.title'), desc: t('barriers.1.desc') },
    { icon: Clock, title: t('barriers.2.title'), desc: t('barriers.2.desc') },
    { icon: Users, title: t('barriers.3.title'), desc: t('barriers.3.desc') },
    { icon: Settings, title: t('barriers.4.title'), desc: t('barriers.4.desc') },
    { icon: AlertTriangle, title: t('barriers.5.title'), desc: t('barriers.5.desc') },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
        >
          {t('barriers.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {barriers.map((barrier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <barrier.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{barrier.title}</h3>
                  <p className="text-muted-foreground">{barrier.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

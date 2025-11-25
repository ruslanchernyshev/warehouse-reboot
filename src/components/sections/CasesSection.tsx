import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import successImage from "@/assets/success-team.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <img src={successImage} alt="Success team" className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

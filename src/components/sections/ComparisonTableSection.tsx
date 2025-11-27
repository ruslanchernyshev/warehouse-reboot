import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const ComparisonTableSection = () => {
  const { t } = useLanguage();

  const rows = Array.from({ length: 8 }, (_, i) => ({
    problem: t(`comparison.row${i + 1}.problem`),
    solution: t(`comparison.row${i + 1}.solution`),
  }));

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-destructive">{t('comparison.problem')}</span>
            <span className="mx-4 text-muted-foreground">→</span>
            <span className="text-primary">{t('comparison.solution')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t('comparison.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {rows.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-2xl flex-shrink-0">😞</span>
                    <p className="text-muted-foreground flex-1">{row.problem}</p>
                  </div>
                  <div className="flex items-start gap-4 pt-4 border-t border-border">
                    <span className="text-2xl flex-shrink-0">✅</span>
                    <p className="text-foreground font-medium flex-1">{row.solution}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

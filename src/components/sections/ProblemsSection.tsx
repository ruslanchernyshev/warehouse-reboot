import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import problemsImage from "@/assets/problems-warehouse.jpg";
import { XCircle } from "lucide-react";

export const ProblemsSection = () => {
  const { t } = useLanguage();

  const problems = [
    t('problems.1'),
    t('problems.2'),
    t('problems.3'),
    t('problems.4'),
    t('problems.5'),
    t('problems.6'),
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
        >
          {t('problems.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img src={problemsImage} alt="Warehouse problems" className="w-full h-full object-cover" />
          </motion.div>

          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

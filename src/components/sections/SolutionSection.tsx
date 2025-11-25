import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import solutionImage from "@/assets/solution-tech.jpg";
import { Cloud, Rocket, Briefcase, TrendingUp, Wrench, Link2, DollarSign, Eye } from "lucide-react";

export const SolutionSection = () => {
  const { t } = useLanguage();

  const solutions = [
    { icon: Cloud, title: t('solution.1.title'), desc: t('solution.1.desc') },
    { icon: Rocket, title: t('solution.2.title'), desc: t('solution.2.desc') },
    { icon: Briefcase, title: t('solution.3.title'), desc: t('solution.3.desc') },
    { icon: TrendingUp, title: t('solution.4.title'), desc: t('solution.4.desc') },
    { icon: Wrench, title: t('solution.5.title'), desc: t('solution.5.desc') },
    { icon: Link2, title: t('solution.6.title'), desc: t('solution.6.desc') },
    { icon: DollarSign, title: t('solution.7.title'), desc: t('solution.7.desc') },
    { icon: Eye, title: t('solution.8.title'), desc: t('solution.8.desc') },
  ];

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4"
        >
          {t('solution.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-center text-muted-foreground mb-16"
        >
          {t('solution.subtitle')}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {solutions.slice(0, 4).map((solution, index) => (
              <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
                <solution.icon className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {solutions.slice(4).map((solution, index) => (
              <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
                <solution.icon className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img src={solutionImage} alt="Technology solution" className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

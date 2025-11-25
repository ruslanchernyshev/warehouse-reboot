import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Zap, DollarSign, Layers, GitMerge, Package } from "lucide-react";

export const WhyUsSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Zap, title: t('whyus.1.title'), desc: t('whyus.1.desc') },
    { icon: DollarSign, title: t('whyus.2.title'), desc: t('whyus.2.desc') },
    { icon: Layers, title: t('whyus.3.title'), desc: t('whyus.3.desc') },
    { icon: GitMerge, title: t('whyus.4.title'), desc: t('whyus.4.desc') },
    { icon: Package, title: t('whyus.5.title'), desc: t('whyus.5.desc') },
  ];

  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(120,119,198,0.4), transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: ['-200px', 'calc(100% + 200px)', '-200px'],
          y: ['-200px', 'calc(100% + 200px)', '-200px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(120,119,198,0.4), transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: ['calc(100% + 200px)', '-200px', 'calc(100% + 200px)'],
          y: ['calc(100% + 200px)', '-200px', 'calc(100% + 200px)'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {t('whyus.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors border-2 border-primary/40">
                <feature.icon className="w-8 h-8 text-primary drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-secondary-foreground/90">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

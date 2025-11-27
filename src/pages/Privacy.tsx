import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { LanguageProvider } from "@/contexts/LanguageContext";

const PrivacyContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t('privacy.title')}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t('privacy.lastUpdated')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none space-y-8"
            >
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t('privacy.section1.title')}</h2>
                <p className="text-muted-foreground leading-relaxed">{t('privacy.section1.content')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t('privacy.section2.title')}</h2>
                <p className="text-muted-foreground leading-relaxed">{t('privacy.section2.content')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t('privacy.section3.title')}</h2>
                <p className="text-muted-foreground leading-relaxed">{t('privacy.section3.content')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t('privacy.section4.title')}</h2>
                <p className="text-muted-foreground leading-relaxed">{t('privacy.section4.content')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t('privacy.section5.title')}</h2>
                <p className="text-muted-foreground leading-relaxed">{t('privacy.section5.content')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t('privacy.section6.title')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.section6.content')} <a href={`mailto:${t('footer.email')}`} className="text-primary hover:underline">{t('footer.email')}</a>
                </p>
              </section>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const Privacy = () => {
  return (
    <LanguageProvider>
      <PrivacyContent />
    </LanguageProvider>
  );
};

export default Privacy;


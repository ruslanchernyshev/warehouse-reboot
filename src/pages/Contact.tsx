import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { LanguageProvider } from "@/contexts/LanguageContext";

const ContactContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t('contactPage.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('contactPage.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{t('contactPage.email.title')}</h3>
                    <a href={`mailto:${t('footer.email')}`} className="text-primary hover:underline">
                      {t('footer.email')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{t('contactPage.phone.title')}</h3>
                    <a href={`tel:${t('footer.phone')}`} className="text-primary hover:underline">
                      {t('footer.phone')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{t('contactPage.address.title')}</h3>
                    <p className="text-muted-foreground">{t('contactPage.address.value')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{t('contactPage.hours.title')}</h3>
                    <p className="text-muted-foreground">{t('contactPage.hours.value')}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-card rounded-lg border border-border"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">{t('contactPage.form.title')}</h2>
                <p className="text-muted-foreground mb-6">{t('contactPage.form.subtitle')}</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('form.name')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-background border border-input rounded-md text-foreground"
                      placeholder={t('form.name')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('form.phone')}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 bg-background border border-input rounded-md text-foreground"
                      placeholder={t('form.phone')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contactPage.form.message')}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 bg-background border border-input rounded-md text-foreground"
                      placeholder={t('contactPage.form.messagePlaceholder')}
                    />
                  </div>
                  <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                    {t('form.submit')}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const Contact = () => {
  return (
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  );
};

export default Contact;


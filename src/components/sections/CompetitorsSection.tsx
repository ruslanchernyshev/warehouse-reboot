import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const CompetitorsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(0,0,0,0.02)_60deg,transparent_120deg)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
        >
          {t('competitors.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl shadow-xl overflow-x-auto border border-border"
        >
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/10 hover:bg-primary/10">
                <TableHead className="text-foreground font-bold">{t('competitors.param')}</TableHead>
                <TableHead className="text-foreground font-bold bg-primary/20">{t('competitors.us')}</TableHead>
                <TableHead className="text-foreground font-bold bg-accent/20">{t('competitors.enterprise')}</TableHead>
                <TableHead className="text-foreground font-bold bg-primary/20">{t('competitors.local')}</TableHead>
                <TableHead className="text-foreground font-bold bg-accent/20">{t('competitors.odoo')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-muted/50">
                <TableCell className="font-semibold text-foreground">{t('competitors.price')}</TableCell>
                <TableCell className="bg-primary/5 font-bold text-primary">{t('competitors.us.price')}</TableCell>
                <TableCell className="bg-accent/5 text-muted-foreground">{t('competitors.enterprise.price')}</TableCell>
                <TableCell className="bg-primary/5 text-muted-foreground">{t('competitors.local.price')}</TableCell>
                <TableCell className="bg-accent/5 text-muted-foreground">{t('competitors.odoo.price')}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-muted/50">
                <TableCell className="font-semibold text-foreground">{t('competitors.time')}</TableCell>
                <TableCell className="bg-primary/5 font-bold text-primary">{t('competitors.us.time')}</TableCell>
                <TableCell className="bg-accent/5 text-muted-foreground">{t('competitors.enterprise.time')}</TableCell>
                <TableCell className="bg-primary/5 text-muted-foreground">{t('competitors.local.time')}</TableCell>
                <TableCell className="bg-accent/5 text-muted-foreground">{t('competitors.odoo.time')}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-muted/50">
                <TableCell className="font-semibold text-foreground">{t('competitors.functionality')}</TableCell>
                <TableCell className="bg-primary/5 font-bold text-primary">{t('competitors.us.functionality')}</TableCell>
                <TableCell className="bg-accent/5 text-muted-foreground">{t('competitors.enterprise.functionality')}</TableCell>
                <TableCell className="bg-primary/5 text-muted-foreground">{t('competitors.local.functionality')}</TableCell>
                <TableCell className="bg-accent/5 text-muted-foreground">{t('competitors.odoo.functionality')}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
};

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight } from "lucide-react";

export const ComparisonTableSection = () => {
  const { t } = useLanguage();

  const rows = Array.from({ length: 8 }, (_, i) => ({
    problem: t(`comparison.row${i + 1}.problem`),
    solution: t(`comparison.row${i + 1}.solution`),
  }));

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8"
        >
          {t('comparison.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border"
        >
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/10 hover:bg-primary/10">
                <TableHead className="text-foreground font-bold text-lg py-3">{t('comparison.problem')}</TableHead>
                <TableHead className="text-center w-16 py-3"></TableHead>
                <TableHead className="text-foreground font-bold text-lg py-3">{t('comparison.solution')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="text-muted-foreground font-medium py-2">{row.problem}</TableCell>
                  <TableCell className="text-center py-2">
                    <ArrowRight className="w-5 h-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-foreground font-semibold py-2">{row.solution}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
};

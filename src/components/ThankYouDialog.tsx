import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import successImage from "@/assets/success-team.jpg";

interface ThankYouDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type?: 'audit' | 'calculate';
}

export const ThankYouDialog = ({ open, onOpenChange, type = 'audit' }: ThankYouDialogProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border p-0 overflow-hidden">
        <div className="relative">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 z-10 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors"
          >
            <X className="w-4 h-4 text-foreground" />
          </button>
          
          <div className="relative h-48 overflow-hidden">
            <img 
              src={successImage} 
              alt="Success" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
              </div>
            </motion.div>
          </div>

          <div className="p-6 pt-8 text-center space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-foreground"
            >
              {t('thankYou.title')}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground"
            >
              {type === 'audit' ? t('thankYou.message.audit') : t('thankYou.message.calculate')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-muted-foreground/80"
            >
              {t('thankYou.submessage')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={() => onOpenChange(false)}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {t('thankYou.close')}
              </Button>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};


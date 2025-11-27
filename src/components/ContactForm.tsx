import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { toast } from "sonner";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type?: 'audit' | 'calculate';
}

export const ContactForm = ({ open, onOpenChange, type = 'audit' }: ContactFormProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    package: '',
    integration: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast.success(type === 'audit' ? 'Дякуємо! Ми зв\'яжемось з вами найближчим часом.' : 'Дякуємо! Ми надішлемо розрахунок протягом дня.');
      onOpenChange(false);
      setFormData({ name: '', phone: '', city: '', package: '', integration: '' });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Помилка відправки. Спробуйте ще раз або зв\'яжіться з нами безпосередньо.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">{t('form.title')}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">{t('form.name')}</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background border-input text-foreground"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">{t('form.phone')}</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-background border-input text-foreground"
            />
          </div>

          {type === 'calculate' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="city" className="text-foreground">{t('form.city')}</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="bg-background border-input text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="package" className="text-foreground">{t('form.package')}</Label>
                <Select value={formData.package} onValueChange={(value) => setFormData({ ...formData, package: value })}>
                  <SelectTrigger className="bg-background border-input text-foreground">
                    <SelectValue placeholder={t('form.package')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="base">{t('form.package.base')}</SelectItem>
                    <SelectItem value="custom">{t('form.package.custom')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="integration" className="text-foreground">{t('form.integration')}</Label>
                <Select value={formData.integration} onValueChange={(value) => setFormData({ ...formData, integration: value })}>
                  <SelectTrigger className="bg-background border-input text-foreground">
                    <SelectValue placeholder={t('form.integration')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2weeks">{t('form.integration.2weeks')}</SelectItem>
                    <SelectItem value="1month">{t('form.integration.1month')}</SelectItem>
                    <SelectItem value="2months">{t('form.integration.2months')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              {t('form.submit')}
            </Button>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="border-border text-foreground hover:bg-muted">
              {t('form.close')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

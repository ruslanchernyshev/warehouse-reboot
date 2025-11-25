import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";

export const FloatingContact = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 left-8 z-40"
      >
        <Button
          onClick={() => setFormOpen(true)}
          size="icon"
          className="rounded-full w-14 h-14 shadow-lg bg-accent hover:bg-accent/90"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>
      </motion.div>

      <ContactForm open={formOpen} onOpenChange={setFormOpen} type="audit" />
    </>
  );
};
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "./whatsapp";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-black text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.45)] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-black/20 motion-safe:animate-ping" aria-hidden />
      <MessageCircle className="relative h-6 w-6 sm:h-7 sm:w-7" />
    </motion.a>
  );
}
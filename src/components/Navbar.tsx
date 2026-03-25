import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "من أنا" },
  { href: "#services", label: "خدماتي" },
  { href: "#contact", label: "تواصل معي" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-primary-foreground/10" dir="rtl">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-bold text-primary-foreground">
          مستشار<span className="text-accent">المبيعات</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-primary-foreground/70 hover:text-accent transition-colors font-body font-medium">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="gradient-gold text-secondary-foreground font-body font-bold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm">
            احجز استشارة
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-primary-foreground/10 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-primary-foreground/70 hover:text-accent transition-colors font-body py-2">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

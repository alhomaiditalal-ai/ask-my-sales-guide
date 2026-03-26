import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-24 gradient-hero" dir="rtl">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-accent font-body font-bold text-sm tracking-widest uppercase">تواصل معي</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
            جاهز لتطوير مبيعاتك؟
          </h2>
          <p className="text-primary-foreground/60 font-body text-lg max-w-2xl mx-auto">
            احصل على استشارة مجانية لمدة 30 دقيقة لمناقشة تحديات مبيعاتك وكيف يمكنني مساعدتك
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              { icon: Mail, label: "البريد الإلكتروني", value: "info@salesconsultant.com" },
              { icon: Phone, label: "الهاتف", value: "+966 50 000 0000" },
              { icon: MapPin, label: "الموقع", value: "الرياض، المملكة العربية السعودية" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/50 font-body text-sm">{item.label}</p>
                  <p className="text-primary-foreground font-body font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const msg = `الاسم: ${formData.name}%0Aالبريد: ${formData.email}%0Aالرسالة: ${formData.message}`;
              window.open(`https://wa.me/966558046271?text=${msg}`, '_blank');
            }}
          >
            <input
              type="text"
              placeholder="الاسم الكامل"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 font-body focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 font-body focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              placeholder="رسالتك..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 font-body focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full gradient-gold text-secondary-foreground font-body font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-lg"
            >
              <Send className="w-5 h-5" />
              أرسل عبر واتساب
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

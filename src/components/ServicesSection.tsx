import { motion } from "framer-motion";
import { BarChart3, Lightbulb, GraduationCap, Handshake, Megaphone, Settings } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "استراتيجية المبيعات",
    desc: "تصميم خطط مبيعات شاملة تتناسب مع طبيعة عملك وأهدافك",
  },
  {
    icon: GraduationCap,
    title: "تدريب فرق المبيعات",
    desc: "برامج تدريبية متقدمة لرفع كفاءة فريقك وتحسين معدلات الإغلاق",
  },
  {
    icon: Lightbulb,
    title: "تطوير عمليات البيع",
    desc: "تحسين رحلة العميل وتبسيط عمليات البيع لزيادة الكفاءة",
  },
  {
    icon: Handshake,
    title: "إدارة العلاقات",
    desc: "بناء نظام CRM فعّال وتطوير استراتيجيات الاحتفاظ بالعملاء",
  },
  {
    icon: Megaphone,
    title: "التسويق البيعي",
    desc: "دمج جهود التسويق والمبيعات لتحقيق أقصى عائد على الاستثمار",
  },
  {
    icon: Settings,
    title: "الأتمتة والأدوات",
    desc: "اختيار وتطبيق أفضل الأدوات التقنية لتسريع عمليات البيع",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/50" dir="rtl">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-accent font-body font-bold text-sm tracking-widest uppercase">خدماتي</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            حلول متكاملة لنمو مبيعاتك
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-all group hover:-translate-y-1"
            >
              <div className="w-14 h-14 gradient-gold rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

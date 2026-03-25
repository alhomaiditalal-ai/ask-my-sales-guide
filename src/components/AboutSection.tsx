import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Award } from "lucide-react";

const stats = [
  { icon: Target, value: "+200", label: "مشروع ناجح" },
  { icon: TrendingUp, value: "150%", label: "متوسط نمو المبيعات" },
  { icon: Users, value: "+50", label: "شركة خدمناها" },
  { icon: Award, value: "15+", label: "سنة خبرة" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background" dir="rtl">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow group"
              >
                <stat.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-heading font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground font-body mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-accent font-body font-bold text-sm tracking-widest uppercase mb-2">من أنا</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                شغفي هو تحويل التحديات إلى فرص نمو
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              بخبرة تمتد لأكثر من 15 عامًا في مجال المبيعات والتسويق، عملت مع شركات ناشئة ومؤسسات كبرى في مختلف القطاعات. أؤمن بأن النجاح في المبيعات يبدأ من فهم عميق للعميل وبناء علاقات حقيقية مبنية على الثقة.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              أقدم استشارات مخصصة تجمع بين الاستراتيجية والتنفيذ العملي، مع التركيز على تحقيق نتائج قابلة للقياس وبناء فرق مبيعات عالية الأداء.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

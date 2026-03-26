import { motion } from "framer-motion";
import consultantImg from "@/assets/consultant-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden" dir="rtl">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-accent font-body text-lg tracking-wide"
              >
                مستشار مبيعات محترف
              </motion.p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
                نُحوّل أعمالك إلى
                <span className="block text-accent mt-2">قصص نجاح</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/70 font-body leading-relaxed max-w-xl">
              أكثر من 15 عامًا من الخبرة في بناء استراتيجيات المبيعات وتطوير فرق العمل لتحقيق نتائج استثنائية
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/966558046271?text=%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%AD%D8%AC%D8%B2%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block gradient-gold text-secondary-foreground font-body font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
              >
                احجز استشارتك المجانية
              </a>
              <a
                href="#about"
                className="inline-block border-2 border-accent/40 text-primary-foreground font-body font-medium px-8 py-4 rounded-lg hover:border-accent hover:bg-accent/10 transition-all text-lg"
              >
                تعرّف عليّ
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 gradient-gold rounded-2xl opacity-20 blur-xl" />
              <img
                src={consultantImg}
                alt="مستشار المبيعات"
                width={480}
                height={480}
                className="relative rounded-2xl object-cover w-[480px] h-[480px] shadow-elevated"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

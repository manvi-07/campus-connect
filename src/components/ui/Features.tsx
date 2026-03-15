import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Shield, Zap, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'University Only',
    description: 'Verified .edu emails keep it real',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Brain,
    title: 'AI Matching',
    description: 'Smart matches based on your intent',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Zap,
    title: 'No Fluff',
    description: 'No feeds, no followers, no noise',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: MessageCircle,
    title: 'Direct Connect',
    description: 'Purpose-driven conversations only',
    color: 'text-electric-blue',
    bg: 'bg-[hsl(200,100%,50%)]/10',
  },
];

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />
      
      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Why <span className="gradient-text">CampusConnect</span>?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card-hover p-6 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
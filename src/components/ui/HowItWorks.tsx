import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { number: '01', title: 'Sign up', description: 'with your university email' },
  { number: '02', title: 'Set intent', description: 'project, study, or career goal' },
  { number: '03', title: 'Get matched', description: 'AI finds your perfect peers' },
  { number: '04', title: 'Connect', description: 'start collaborating IRL' },
];

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            How it <span className="gradient-text-alt">works</span>
          </h2>
        </motion.div>

        {/* Progress line */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-border hidden lg:block">
            <motion.div 
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative text-center lg:text-left"
              >
                {/* Step indicator */}
                <div className="w-16 h-16 mx-auto lg:mx-0 mb-4 rounded-full bg-card border border-border flex items-center justify-center relative z-10">
                  <span className="text-2xl font-bold font-mono gradient-text">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
          <div className="absolute inset-0 bg-card/90 backdrop-blur-xl" />
          
          {/* Glow effects */}
          <motion.div 
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl" 
          />
          
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Ready to meet your{' '}
              <span className="gradient-text">match</span>?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground text-lg max-w-md mx-auto mb-8"
            >
              Join your campus community today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link to="/login">
                <Button size="lg" className="h-14 px-8 text-base font-semibold glow-primary btn-glow group">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/ui/Hero';
import Features from '@/components/ui/Features';
import HowItWorks from '@/components/ui/HowItWorks';
import CTA from '@/components/ui/CTA';
import Footer from '@/components/ui/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-quantum-700 to-quantum-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20"></div>
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-quantum-accent/30 via-quantum-highlight/30 to-quantum-accent/30 animate-pulse-slow"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient-gold">Secure</span> Your Future?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Quantum computing threats are approaching rapidly. Get ahead of the curve with our AI-powered post-quantum cryptography solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-quantum-accent hover:bg-quantum-accent/90 text-black text-base px-6 py-6">
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 py-6">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

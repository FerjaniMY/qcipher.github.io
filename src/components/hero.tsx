
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Lock, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-grid"></div>
      <div className="absolute inset-0 noise-bg"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient-gold">Quantum-Safe</span> Future <br />Powered by AI
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Revolutionizing Post-Quantum Cryptography (PQC) migration with autonomous AI agents 
            that replicate the expertise of cybersecurity engineers.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-quantum-accent hover:bg-quantum-accent/90 text-black text-base px-6 py-6">
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white/10 hover:bg-white/5 py-6">
              Learn More
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass-panel p-6 rounded-lg">
              <Shield className="h-10 w-10 mb-4 mx-auto text-quantum-accent" />
              <h3 className="font-medium text-lg mb-2">Quantum-Safe Security</h3>
              <p className="text-white/70 text-sm">Future-proof your systems against quantum computing threats</p>
            </div>
            
            <div className="glass-panel p-6 rounded-lg">
              <Lock className="h-10 w-10 mb-4 mx-auto text-quantum-accent" />
              <h3 className="font-medium text-lg mb-2">AI-Driven Migration</h3>
              <p className="text-white/70 text-sm">Automate and accelerate your transition to quantum-safe systems</p>
            </div>
            
            <div className="glass-panel p-6 rounded-lg">
              <Database className="h-10 w-10 mb-4 mx-auto text-quantum-accent" />
              <h3 className="font-medium text-lg mb-2">Reduced Complexity</h3>
              <p className="text-white/70 text-sm">Minimize cost and human effort in securing digital communications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

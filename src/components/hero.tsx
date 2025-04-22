
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Lock, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-quantum-highlight/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%221%22%20cy%3D%221%22%20r%3D%221%22%20fill%3D%22rgba(255%2C255%2C255%2C0.1)%22%2F%3E%3C%2Fsvg%3E')] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient-gold">Quantum-Safe</span> Future <br />Powered by AI
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Revolutionizing Post-Quantum Cryptography (PQC) migration with autonomous AI agents 
              that replicate the expertise of cybersecurity engineers.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button className="bg-quantum-accent hover:bg-quantum-accent/90 text-black text-base px-6 py-6 transform transition-all hover:scale-105">
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 py-6 backdrop-blur-sm">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Feature highlights with hover animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Shield className="h-10 w-10 text-quantum-accent" />,
                title: "Quantum-Safe Security",
                description: "Future-proof your systems against quantum computing threats"
              },
              {
                icon: <Lock className="h-10 w-10 text-quantum-accent" />,
                title: "AI-Driven Migration",
                description: "Automate and accelerate your transition to quantum-safe systems"
              },
              {
                icon: <Database className="h-10 w-10 text-quantum-accent" />,
                title: "Reduced Complexity",
                description: "Minimize cost and human effort in securing digital communications"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass-panel p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                <div className="mb-4 mx-auto relative w-16 h-16">
                  <div className="absolute inset-0 bg-quantum-accent/20 rounded-full animate-pulse"></div>
                  <div className="relative flex items-center justify-center w-full h-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

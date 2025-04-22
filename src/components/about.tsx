
import { Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-quantum-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-quantum-accent/10 text-quantum-accent text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" /> About QCipher
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Securing the <span className="text-gradient-gold">Future</span> of Digital Communications
            </h2>
            <p className="text-white/80 mb-6">
              At QCipher, we're pioneering the next generation of cybersecurity solutions to address the looming quantum threat. Our mission is to make quantum-safe security accessible and implementable for organizations of all sizes.
            </p>
            <p className="text-white/80 mb-6">
              We understand that transitioning to Post-Quantum Cryptography can be complex and resource-intensive. That's why we've developed AI agents that automate and streamline the process, ensuring your systems are protected against both current and future threats.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-quantum-700 p-5 rounded-lg">
                <h3 className="text-2xl font-bold text-gradient-gold mb-2">200+</h3>
                <p className="text-sm text-white/70">Quantum vulnerabilities identified</p>
              </div>
              <div className="bg-quantum-700 p-5 rounded-lg">
                <h3 className="text-2xl font-bold text-gradient-gold mb-2">87%</h3>
                <p className="text-sm text-white/70">Faster implementation time</p>
              </div>
              <div className="bg-quantum-700 p-5 rounded-lg">
                <h3 className="text-2xl font-bold text-gradient-gold mb-2">24/7</h3>
                <p className="text-sm text-white/70">Autonomous monitoring</p>
              </div>
              <div className="bg-quantum-700 p-5 rounded-lg">
                <h3 className="text-2xl font-bold text-gradient-gold mb-2">63%</h3>
                <p className="text-sm text-white/70">Cost reduction</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-quantum-700 to-quantum-900 p-10 flex items-center justify-center relative">
              <div className="w-full h-full relative z-10 flex items-center justify-center animate-float">
                <Shield className="w-40 h-40 text-quantum-accent" strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 bg-grid opacity-30"></div>
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-quantum-accent/30 via-quantum-highlight/30 to-quantum-accent/30 animate-gradient-shift"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg bg-quantum-accent flex items-center justify-center glass-panel rotate-6">
              <div className="text-black font-bold text-xl">PQC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

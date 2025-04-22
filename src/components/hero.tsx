
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Brain, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      {/* Neural network background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-quantum-highlight/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="noise-bg"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-32 h-32 bg-quantum-accent/5 backdrop-blur-3xl rounded-full 
              ${i === 0 ? 'top-1/4 left-1/4 animate-[float_8s_ease-in-out_infinite]' : 
                i === 1 ? 'top-1/2 right-1/4 animate-[float_12s_ease-in-out_infinite_0.5s]' : 
                'bottom-1/4 left-1/2 animate-[float_10s_ease-in-out_infinite_1s]'}`
            }
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient-gold">AI-Powered</span> Defense <br />
              Against <span className="text-gradient-purple">Quantum Threats</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Our autonomous AI agents replicate cybersecurity expertise to protect 
              your systems against quantum computing threats.
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
          
          {/* Feature highlights with animated icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Brain className="h-10 w-10 text-quantum-accent" />,
                title: "AI Agents",
                description: "Autonomous systems that replicate cybersecurity expertise"
              },
              {
                icon: <Shield className="h-10 w-10 text-quantum-accent" />,
                title: "Quantum-Safe Security",
                description: "Protection against emerging quantum computing threats"
              },
              {
                icon: <Database className="h-10 w-10 text-quantum-accent" />,
                title: "Automated Migration",
                description: "Seamless transition to post-quantum cryptography"
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

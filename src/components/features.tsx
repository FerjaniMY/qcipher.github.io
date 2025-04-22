
import { Shield, Lock, Key, Server, Database, Rocket } from 'lucide-react';

const Features = () => {
  const featuresList = [
    {
      icon: <Shield className="h-10 w-10 text-quantum-accent" />,
      title: "Quantum Threat Assessment",
      description: "Identify vulnerabilities in your current cryptographic systems that could be exploited by quantum computers."
    },
    {
      icon: <Lock className="h-10 w-10 text-quantum-accent" />,
      title: "AI-Driven Migration",
      description: "Our autonomous AI agents handle the complex transition to quantum-safe cryptography with minimal human intervention."
    },
    {
      icon: <Key className="h-10 w-10 text-quantum-accent" />,
      title: "Post-Quantum Algorithms",
      description: "Implement NIST-approved post-quantum cryptographic algorithms to secure your systems against quantum attacks."
    },
    {
      icon: <Server className="h-10 w-10 text-quantum-accent" />,
      title: "Seamless Integration",
      description: "Integrate quantum-safe protocols with your existing infrastructure without disrupting your operations."
    },
    {
      icon: <Database className="h-10 w-10 text-quantum-accent" />,
      title: "Continuous Monitoring",
      description: "Our systems continuously monitor your cryptographic health and adapt to emerging quantum threats."
    },
    {
      icon: <Rocket className="h-10 w-10 text-quantum-accent" />,
      title: "Future-Proof Security",
      description: "Stay ahead of the quantum revolution with regular updates and advancements in post-quantum cryptography."
    }
  ];

  return (
    <section id="features" className="py-20 bg-quantum-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid"></div>
      <div className="absolute inset-0 noise-bg"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advanced <span className="text-gradient-purple">Features</span> for Quantum Security
          </h2>
          <p className="text-white/80">
            Our comprehensive suite of tools and technologies ensures your systems are protected against the quantum threat landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-xl p-6 hover:border-quantum-accent/30 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="bg-quantum-700 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import { Shield, FileSearch, Lock, Server, Database, Brain } from 'lucide-react';

const Features = () => {
  const featuresList = [
    {
      icon: <FileSearch className="h-10 w-10 text-quantum-accent" />,
      title: "Comprehensive Vulnerability Assessment",
      description: "In-depth evaluation of legacy systems to detect cryptographic weaknesses susceptible to quantum attacks."
    },
    {
      icon: <Shield className="h-10 w-10 text-quantum-accent" />,
      title: "Quantum Penetration Testing",
      description: "Advanced simulation techniques to identify vulnerabilities using quantum-enabled attack scenarios."
    },
    {
      icon: <Lock className="h-10 w-10 text-quantum-accent" />,
      title: "Cryptographic Inventory (CBOM)",
      description: "Complete discovery and mapping of all cryptographic assets within your organization's infrastructure."
    },
    {
      icon: <Database className="h-10 w-10 text-quantum-accent" />,
      title: "Quantum Risk Scoring",
      description: "Sophisticated risk modeling to quantify and prioritize potential quantum threats for each asset."
    }
  ];

  return (
    <section id="features" className="py-20 bg-quantum-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid"></div>
      <div className="absolute inset-0 noise-bg"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            PQC Migration <span className="text-gradient-gold">Assessment</span>
          </h2>
          <p className="text-white/80">
            Our first-step assessment tool provides comprehensive analysis and risk evaluation to prepare your systems for post-quantum cryptography migration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

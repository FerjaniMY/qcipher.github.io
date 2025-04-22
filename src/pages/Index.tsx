
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Features from "@/components/features";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-quantum-900 text-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <Hero />
        <About />
        <Features />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

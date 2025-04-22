
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-quantum-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in <span className="text-gradient-gold">Touch</span>
            </h2>
            <p className="text-white/80 mb-8">
              Have questions about our quantum security solutions? Our team is ready to help you secure your systems against quantum threats.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-quantum-700 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-quantum-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-white/70">info@qcipher.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-quantum-700 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-quantum-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Call Us</h3>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-quantum-700 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-quantum-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                  <p className="text-white/70">123 Quantum Lane, Secure City, 98765</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    className="bg-quantum-700 border-quantum-600 focus:border-quantum-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-quantum-700 border-quantum-600 focus:border-quantum-accent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  className="bg-quantum-700 border-quantum-600 focus:border-quantum-accent"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  className="bg-quantum-700 border-quantum-600 focus:border-quantum-accent"
                  placeholder="Your message"
                />
              </div>
              
              <Button className="w-full bg-quantum-accent hover:bg-quantum-accent/90 text-black">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

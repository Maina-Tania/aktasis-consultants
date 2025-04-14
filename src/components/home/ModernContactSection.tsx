import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

const ModernContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-milgen-yellow/20 to-white"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-milgen-yellow/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-milgen-black">Get In</span> Touch
            </h2>
            <p className="text-lg mb-8 text-gray-800 max-w-xl">
              Have questions about our operations or interested in partnership opportunities? 
              Reach out to our team and we'll be happy to assist you.
            </p>
            
            <div className="space-y-8">
              <motion.div 
                className="flex items-start p-4 rounded-xl hover:bg-white/60 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-milgen-yellow p-3 rounded-full mr-5">
                  <MapPin className="text-milgen-black" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-700">Nairobi, Kenya</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start p-4 rounded-xl hover:bg-white/60 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-milgen-yellow p-3 rounded-full mr-5">
                  <Phone className="text-milgen-black" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-700">+254 757 476560</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start p-4 rounded-xl hover:bg-white/60 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-milgen-yellow p-3 rounded-full mr-5">
                  <Mail className="text-milgen-black" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-700">brinac.co@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-milgen-black">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="border-gray-200 focus:border-milgen-yellow"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="border-gray-200 focus:border-milgen-yellow"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="Message subject"
                  className="border-gray-200 focus:border-milgen-yellow"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Your message"
                  className="border-gray-200 focus:border-milgen-yellow"
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-milgen-black hover:bg-black/80 text-white w-full md:w-auto"
              >
                Send Message
                <Send className="ml-2" size={16} />
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ModernContactSection; 
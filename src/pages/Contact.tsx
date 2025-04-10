
import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Contact = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="h-[50vh] relative flex items-center bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-milgen-black bg-opacity-70"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Contact <span className="text-milgen-yellow">Us</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                We're here to answer your questions and explore opportunities together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-milgen-light p-6 rounded-lg text-center">
                <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Phone className="text-milgen-yellow" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-700 mb-2">Main Office</p>
                <p className="text-milgen-black font-medium">+254 757 476560</p>
              </div>
              
              <div className="bg-milgen-light p-6 rounded-lg text-center">
                <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Mail className="text-milgen-yellow" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-700 mb-2">Customer Support</p>
                <p className="text-milgen-black font-medium">brinac.co@gmail.com</p>
              </div>
              
              <div className="bg-milgen-light p-6 rounded-lg text-center">
                <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Clock className="text-milgen-yellow" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <p className="text-gray-700 mb-2">Monday - Friday</p>
                <p className="text-milgen-black font-medium">8:00 AM - 5:00 PM EAT</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div className="bg-milgen-light p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-milgen-yellow"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-milgen-yellow"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-milgen-yellow"
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-milgen-yellow"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-milgen-black text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors duration-300 font-semibold flex items-center"
                  >
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              </div>
              
              {/* Location */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743336!2d36.70730457257411!3d-1.304408427278198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1710051235946!5m2!1sen!2sus" 
                    width="100%" 
                    height="400" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Milgen Mines Location"
                  ></iframe>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-milgen-yellow mr-3 shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-lg">Headquarters</h3>
                      <p className="text-gray-700">
                        Milgen Mines Ltd.<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-milgen-yellow mr-3 shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-lg">Operations Office</h3>
                      <p className="text-gray-700">
                        Milgen Mining Operations<br />
                        Taita Taveta, Kenya
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-milgen-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently <span className="text-milgen-yellow">Asked Questions</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Find quick answers to common questions about our operations and partnerships.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">How can I invest in Milgen Mines?</h3>
                <p className="text-gray-700">
                  We welcome discussions with potential investors who share our vision for responsible mining. Please contact our investor relations team through the form above or directly via email for information on current opportunities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Do you offer site tours of your mining operations?</h3>
                <p className="text-gray-700">
                  Yes, we arrange scheduled tours for investors, partners, and educational institutions. These must be arranged in advance through our communications department due to safety protocols.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">How do you ensure environmental compliance?</h3>
                <p className="text-gray-700">
                  We adhere to and often exceed national and international environmental standards. Our operations undergo regular independent audits, and we maintain transparent reporting of our environmental impact and mitigation measures.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">What career opportunities do you offer?</h3>
                <p className="text-gray-700">
                  We're continuously seeking talented individuals across various disciplines, from geology and engineering to sustainability and community relations. Check our careers page for current openings.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

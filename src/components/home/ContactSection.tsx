
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="section-padding bg-milgen-yellow">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-milgen-black">Get In</span> Touch
            </h2>
            <p className="text-lg mb-8 text-gray-800">
              Have questions about our operations or interested in partnership opportunities? 
              Reach out to our team and we'll be happy to assist you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-4 text-milgen-black shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 text-milgen-black shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p>+254 757 476560</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-4 text-milgen-black shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p>brinac.co@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-milgen-black">Send us a message</h3>
            
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
                className="bg-milgen-black text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors duration-300 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      details: [
        "P.O. Box 20701-00100",
        "Nairobi, Kenya"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+254 721 762 086",
        "+254 737 186 398", 
        "020 269 2066",
        "Mon-Fri: 9:00 AM - 6:00 PM"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
                    "hello@aktasisconsultancy.com",
            "support@aktasisconsultancy.com"
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              <span className="text-white">Get In</span> Touch
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              Ready to start your architectural project? Let's discuss your vision and bring your ideas to life.
            </p>

            {/* Contact Details - Mobile Optimized */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-3 sm:mr-4">
                    <info.icon className="text-white shrink-0 mt-1" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">{info.title}</h3>
                    <div className="text-blue-100 text-sm sm:text-base">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile-specific quick actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 lg:hidden"
            >
              <div className="flex flex-wrap gap-3">
                <Link
                  to="tel:+254721762086"
                  className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-all duration-300 hover:bg-white/30 touch-manipulation"
                >
                  <Phone className="mr-2" size={16} />
                  Call Now
                </Link>
                <Link
                  to="mailto:hello@aktasisconsultancy.com"
                  className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-all duration-300 hover:bg-white/30 touch-manipulation"
                >
                  <Mail className="mr-2" size={16} />
                  Email Us
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <MessageCircle className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Send us a message</h3>
              </div>
              
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 sm:px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center touch-manipulation transform hover:scale-105"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </button>
              </form>

              <div className="mt-4 sm:mt-6 text-center">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Clock className="mr-2" size={16} />
                  <span>We'll get back to you within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

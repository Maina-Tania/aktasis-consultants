import React from 'react';
import { motion } from 'framer-motion';
import { Check, Award, Users, Globe, Star, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const stats = [
    { icon: Award, number: "50+", label: "Projects Completed" },
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: Globe, number: "5+", label: "Years Experience" },
    { icon: Check, number: "100%", label: "Client Satisfaction" }
  ];

  const values = [
    "Innovative Design Solutions",
    "Sustainable Architecture",
    "Client-Centric Approach",
    "Quality Excellence"
  ];

  const highlights = [
    { icon: Star, text: "Licensed & Certified" },
    { icon: Building, text: "Modern Design Approach" },
    { icon: Check, text: "Timely Delivery" }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                About <span className="text-blue-600">AKTASIS</span> Consultancy
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                We are a premier architectural consultancy dedicated to creating innovative, sustainable designs that transform spaces and enhance lives. 
                Our commitment to excellence, creativity, and environmental responsibility sets us apart in the industry.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                AKTASIS leads in <span className="font-semibold">architectural innovation and sustainable design solutions</span>.
              </p>
            </div>

            {/* Highlights - Mobile Optimized */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-wrap gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center px-3 py-2 bg-blue-50 rounded-lg border border-blue-100"
                  >
                    <highlight.icon className="text-blue-600 mr-2" size={16} />
                    <span className="text-sm font-medium text-gray-700">{highlight.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats - Mobile Optimized */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="text-blue-600" size={20} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Values - Mobile Optimized */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Our Values</h3>
              <div className="space-y-2 sm:space-y-3">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <Check className="text-blue-600 mr-3 flex-shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                to="/about"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 touch-manipulation"
              >
                Learn More About Us
                <Check className="ml-2" size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
                alt="AKTASIS - Professional Architectural Consultancy"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating Card - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-xl"
              >
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Excellence in Design</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  Every project reflects our commitment to innovative design, sustainable practices, and exceptional quality.
                </p>
              </motion.div>

              {/* Mobile-specific overlay info */}
              <div className="absolute top-3 left-3 sm:hidden">
                <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                  Professional
                </div>
              </div>
            </div>

            {/* Decorative elements for larger screens */}
            <div className="hidden lg:block absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-xl"></div>
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
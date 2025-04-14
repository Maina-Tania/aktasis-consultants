import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  ChevronDown, 
  Globe, 
  Users, 
  Building, 
  ArrowRight 
} from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Contact = () => {
  // State for form handling
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    status: null, // null, 'sending', 'success', 'error'
    message: ''
  });

  // Animation controls
  const controls = useAnimation();
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Refs for scroll animations
  const contactInfoRef = useRef(null);
  const contactInfoInView = useInView(contactInfoRef, { once: true, margin: "-10%" });
  
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-10%" });
  
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-10%" });

  // Form handling
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      status: 'sending',
      message: 'Sending your message...'
    });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        status: 'success',
        message: 'Your message has been sent! We\'ll get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
        company: '',
        phone: ''
      });
    }, 1500);
  };

  // Expandable FAQ functionality
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  const toggleFaq = (index) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  // FAQ data
  const faqData = [
    {
      question: "How can I invest in Milgen Mines?",
      answer: "We welcome discussions with potential investors who share our vision for responsible mining. Please contact our investor relations team through the form above or directly via email for information on current opportunities. Our minimum investment threshold starts at $50,000 USD, and we offer various partnership structures based on your investment goals.",
      category: "investment"
    },
    {
      question: "Do you offer site tours of your mining operations?",
      answer: "Yes, we arrange scheduled tours for investors, partners, and educational institutions. These must be arranged in advance through our communications department due to safety protocols. Tours typically last 3-4 hours and include safety briefings, protective equipment, and insights from our operational managers.",
      category: "operations"
    },
    {
      question: "How do you ensure environmental compliance?",
      answer: "We adhere to and often exceed national and international environmental standards. Our operations undergo regular independent audits, and we maintain transparent reporting of our environmental impact and mitigation measures. We're ISO 14001 certified and undergo voluntary third-party assessments annually.",
      category: "sustainability"
    },
    {
      question: "What career opportunities do you offer?",
      answer: "We're continuously seeking talented individuals across various disciplines, from geology and engineering to sustainability and community relations. Check our careers page for current openings. We offer competitive compensation, professional development opportunities, and a positive work environment focused on innovation and sustainability.",
      category: "careers"
    },
    {
      question: "How do you engage with local communities?",
      answer: "Community partnership is central to our operations. We maintain open dialogue with local communities through regular town halls, community liaison officers, and participatory development planning. We invest in education, healthcare, infrastructure, and local business development to ensure shared prosperity.",
      category: "community"
    },
    {
      question: "What minerals do you primarily mine?",
      answer: "Our primary focus is on gold, gemstones (particularly rubies and sapphires), and copper. We also engage in smaller-scale extraction of industrial minerals and metals that support Kenya's manufacturing sector. Our diverse portfolio allows us to maintain stability through market fluctuations.",
      category: "operations"
    }
  ];

  // Contact information
  const contactInfo = [
    {
      title: "Call Us",
      content: "Main Office",
      value: "+254 757 476560",
      icon: <Phone className="text-milgen-yellow" size={28} />
    },
    {
      title: "Email Us",
      content: "Customer Support",
      value: "brinac.co@gmail.com",
      icon: <Mail className="text-milgen-yellow" size={28} />
    },
    {
      title: "Business Hours",
      content: "Monday - Friday",
      value: "8:00 AM - 5:00 PM EAT",
      icon: <Clock className="text-milgen-yellow" size={28} />
    }
  ];

  // Office locations
  const officeLocations = [
    {
      title: "Headquarters",
      address: "Milgen Mines Ltd.\nNairobi, Kenya",
      coordinates: {
        lat: -1.286389,
        lng: 36.817223
      }
    },
    {
      title: "Operations Office",
      address: "Milgen Mining Operations\nTaita Taveta, Kenya",
      coordinates: {
        lat: -3.39605,
        lng: 38.56325
      }
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section className="h-[60vh] relative flex items-center overflow-hidden">
          {/* Parallax background */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920')] bg-cover bg-center transform scale-110"
            style={{
              transition: 'transform 0.5s ease-out',
            }}
          ></div>
          
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-milgen-black/90 via-milgen-black/80 to-milgen-black/90"></div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-milgen-yellow/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-milgen-yellow/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/20 text-milgen-yellow rounded-full text-sm font-medium mb-6">
                Get In Touch
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Contact <span className="text-milgen-yellow">Us</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                We're here to answer your questions, explore opportunities, and build valuable partnerships together.
              </p>
              
              {/* Quick contact buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="apple" size="apple-lg" asChild>
                  <a href="#contact-form" className="flex items-center">
                    Send Us a Message
                  </a>
                </Button>
                <Button variant="outline" size="apple-lg" className="text-white border-white hover:bg-white/10" asChild>
                  <a href="tel:+254757476560" className="flex items-center">
                    <Phone className="mr-2" size={18} />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Contact Information */}
        <section className="py-20 bg-white" ref={contactInfoRef}>
          <div className="container-custom">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
              initial="hidden"
              animate={contactInfoInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-milgen-light p-8 rounded-xl shadow-sm group hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:bg-milgen-yellow/10 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-700 mb-2 text-center">{item.content}</p>
                  <p className="text-milgen-black font-medium text-center text-lg">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10" id="contact-form">
              {/* Enhanced Contact Form */}
              <motion.div 
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7 }}
                ref={formRef}
              >
                <div className="bg-milgen-light p-8 rounded-xl shadow-lg">
                  <div className="mb-8">
                    <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                      Reach Out
                    </span>
                    <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                    <p className="text-gray-700">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-milgen-yellow"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-milgen-yellow"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formState.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-milgen-yellow"
                          placeholder="Your company (optional)"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formState.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-milgen-yellow"
                          placeholder="Your phone (optional)"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-milgen-yellow"
                        placeholder="Message subject"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-milgen-yellow"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                    
                    {/* Form status message */}
                    {formStatus.status && (
                      <div className={`p-4 rounded-lg ${
                        formStatus.status === 'success' 
                          ? 'bg-green-50 text-green-800' 
                          : formStatus.status === 'error'
                          ? 'bg-red-50 text-red-800'
                          : 'bg-blue-50 text-blue-800'
                      }`}>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            {formStatus.status === 'success' ? (
                              <CheckCircle className="h-5 w-5 text-green-400" />
                            ) : formStatus.status === 'error' ? (
                              <AlertCircle className="h-5 w-5 text-red-400" />
                            ) : (
                              <div className="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full" />
                            )}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">
                              {formStatus.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <Button
                      type="submit"
                      className="bg-milgen-yellow hover:bg-milgen-yellow/90 text-black"
                      size="lg"
                      disabled={formStatus.status === 'sending'}
                    >
                      {formStatus.status === 'sending' ? (
                        <>
                          <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
              
              {/* Enhanced Location Section */}
              <motion.div 
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                      Find Us
                    </span>
                    <h2 className="text-3xl font-bold mb-6">Our Locations</h2>
                  </div>
                  
                  {/* Map tabs */}
                  <Tabs defaultValue="headquarters" className="w-full">
                    <TabsList className="bg-gray-100/80 w-full mb-4">
                      <TabsTrigger value="headquarters" className="flex-1">Headquarters</TabsTrigger>
                      <TabsTrigger value="operations" className="flex-1">Operations Office</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="headquarters" className="mt-0">
                      <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.301504683573!2d36.809774037048326!3d-1.2864016999999908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d951ea2069%3A0xac94ece3b7efccaf!2sNairobi%20Central%20Business%20District%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1710051235946!5m2!1sen!2ske" 
                          width="100%" 
                          height="300" 
                          style={{ border: 0 }} 
                          allowFullScreen 
                          loading="lazy" 
                          title="Milgen Mines HQ Location"
                        ></iframe>
                      </div>
                      
                      <div className="bg-white p-5 rounded-xl shadow-md">
                        <div className="flex items-start">
                          <MapPin className="text-milgen-yellow mr-3 shrink-0 mt-1" size={24} />
                          <div>
                            <h3 className="font-bold text-lg">Headquarters</h3>
                            <p className="text-gray-700">
                              Milgen Mines Ltd.<br />
                              Kimathi Street, Nairobi CBD<br />
                              Nairobi, Kenya
                            </p>
                            <div className="mt-4 flex gap-3">
                              <Button variant="outline" size="sm" asChild>
                                <a 
                                  href="https://maps.google.com/?q=Nairobi+Central+Business+District" 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center"
                                >
                                  Get Directions
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="operations" className="mt-0">
                      <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127453.92116014312!2d38.49771616796874!3d-3.3960513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183fed9dff7e43b1%3A0x42a0d3c7b1695a47!2sTaita!5e0!3m2!1sen!2ske!4v1710051235946!5m2!1sen!2ske" 
                          width="100%" 
                          height="300" 
                          style={{ border: 0 }} 
                          allowFullScreen 
                          loading="lazy" 
                          title="Milgen Mines Operations Location"
                        ></iframe>
                      </div>
                      
                      <div className="bg-white p-5 rounded-xl shadow-md">
                        <div className="flex items-start">
                          <MapPin className="text-milgen-yellow mr-3 shrink-0 mt-1" size={24} />
                          <div>
                            <h3 className="font-bold text-lg">Operations Office</h3>
                            <p className="text-gray-700">
                              Milgen Mining Operations<br />
                              Voi-Taveta Road<br />
                              Taita Taveta, Kenya
                            </p>
                            <div className="mt-4 flex gap-3">
                              <Button variant="outline" size="sm" asChild>
                                <a 
                                  href="https://maps.google.com/?q=Taita+Kenya" 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center"
                                >
                                  Get Directions
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  {/* Contact channels */}
                  <div className="mt-8 bg-milgen-light p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg mb-4">Other Ways to Connect</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-milgen-yellow/20 flex items-center justify-center mr-4">
                          <Globe className="text-milgen-yellow" size={20} />
                        </div>
                        <div>
                          <p className="font-medium">Social Media</p>
                          <div className="flex space-x-3 mt-1">
                            <a href="#" className="text-gray-600 hover:text-milgen-yellow transition-colors">LinkedIn</a>
                            <a href="#" className="text-gray-600 hover:text-milgen-yellow transition-colors">Twitter</a>
                            <a href="#" className="text-gray-600 hover:text-milgen-yellow transition-colors">Facebook</a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-milgen-yellow/20 flex items-center justify-center mr-4">
                          <Users className="text-milgen-yellow" size={20} />
                        </div>
                        <div>
                          <p className="font-medium">For Partnerships</p>
                          <a href="mailto:partnerships@milgenmines.com" className="text-milgen-yellow hover:underline">
                            partnerships@milgenmines.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-milgen-yellow/20 flex items-center justify-center mr-4">
                          <Building className="text-milgen-yellow" size={20} />
                        </div>
                        <div>
                          <p className="font-medium">For Media Inquiries</p>
                          <a href="mailto:media@milgenmines.com" className="text-milgen-yellow hover:underline">
                            media@milgenmines.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced FAQs Section */}
        <section className="py-20 bg-milgen-light" ref={faqRef}>
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently <span className="text-milgen-yellow">Asked Questions</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Find quick answers to common questions about our operations and partnerships.
              </p>
            </motion.div>

            {/* FAQ Tabs */}
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="bg-white flex flex-wrap justify-center mb-8">
                  <TabsTrigger value="all">All Questions</TabsTrigger>
                  <TabsTrigger value="investment">Investment</TabsTrigger>
                  <TabsTrigger value="operations">Operations</TabsTrigger>
                  <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
                  <TabsTrigger value="careers">Careers</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all">
                  <div className="space-y-4">
                    {faqData.map((faq, index) => (
                      <FaqItem 
                        key={index} 
                        faq={faq} 
                        index={index} 
                        expandedFaq={expandedFaq} 
                        toggleFaq={toggleFaq} 
                      />
                    ))}
                  </div>
                </TabsContent>
                
                {["investment", "operations", "sustainability", "careers", "community"].map((category) => (
                  <TabsContent key={category} value={category}>
                    <div className="space-y-4">
                      {faqData
                        .filter(faq => faq.category === category)
                        .map((faq, index) => (
                          <FaqItem 
                            key={index} 
                            faq={faq} 
                            index={index} 
                            expandedFaq={expandedFaq} 
                            toggleFaq={toggleFaq} 
                          />
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
              
              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.7 }}
              >
                <p className="text-gray-700 mb-4">
                  Still have questions? Our team is ready to help.
                </p>
                <Button asChild>
                  <a href="#contact-form" className="flex items-center">
                    Contact Our Support Team
                    <ArrowRight className="ml-2" size={18} />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// FAQ Item Component
const FaqItem = ({ faq, index, expandedFaq, toggleFaq }) => {
  return (
    <motion.div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
        expandedFaq === index ? 'shadow-lg' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
    >
      <button
        onClick={() => toggleFaq(index)}
        className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
        aria-expanded={expandedFaq === index}
      >
        <h3 className="text-xl font-bold pr-8">{faq.question}</h3>
        <ChevronDown 
          className={`text-milgen-yellow transition-transform duration-300 ${
            expandedFaq === index ? 'transform rotate-180' : ''
          }`} 
          size={24} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-gray-700">
          {faq.answer}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
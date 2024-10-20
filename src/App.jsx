import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Text, FileText, Mail,MapPin, Phone, Check, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import a from './assets/1.jpg';
import b from './assets/2.jpg';
import c from './assets/3.jpg';
import d from './assets/4.jpg';
import e from './assets/5.jpg';
import f from './assets/6.jpg';
import g from './assets/7.jpg';
import h from './assets/8.jpg';
import logo from './assets/icon.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'pricing', 'templates', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <nav className="fixed w-full z-50 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
  <a href="#" className="flex items-center text-white font-bold text-xl">
    <img src={logo} alt="CareerCraft Pro Logo" className="h-8 w-8 mr-2" /> {/* Adjust size as needed */}
    CareerCraft Pro
  </a>
  <div className="hidden md:flex space-x-4">
    {['Home', 'About', 'Services', 'Pricing', 'Templates', 'Contact'].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        onClick={() => scrollTo(item.toLowerCase())}
        className={`text-sm uppercase ${activeSection === item.toLowerCase() ? 'text-blue-500' : 'text-gray-300 hover:text-white'}`}
      >
        {item}
      </a>
    ))}
  </div>
  <button
    className="md:hidden text-gray-300 hover:text-white focus:outline-none"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  </button>
</div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-gray-800 bg-opacity-95"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {['Home', 'About', 'Services', 'Pricing', 'Templates', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-2xl uppercase text-gray-300 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Elevate Your Career
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Professional CV, Resume, and LinkedIn optimization services
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={e}
                alt="Professional"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
  <h2 className="text-4xl font-bold mb-6">About CareerCraft Pro</h2>
  <p className="text-lg mb-6">
    We are a small team of professional career consultants with expertise in CV/Resume creation, Cover Letter writing, and LinkedIn profile optimization. Our mission is to help you stand out in the competitive job market and achieve your career goals.
  </p>
  <ul className="space-y-4">
    <li className="flex items-center">
      <Phone className="mr-4 text-blue-500" />
      <span>+91 9834539885</span>
    </li>
    <li className="flex items-center">
      <Mail className="mr-4 text-blue-500" />
      <span>akibkhone@gmail.com</span>
    </li>
    <li className="flex items-center">
      <MapPin className="mr-4 text-blue-500" /> {/* Add the address icon here */}
      <span>Dubai, United Arab Emirates</span> {/* Updated text */}
    </li>
  </ul>
</div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FileText className="w-12 h-12 text-blue-500" />, title: 'CV/Resume Creator', description: 'Professional CV/Resume tailored to your industry and career goals.' },
              { icon: <Mail className="w-12 h-12 text-blue-500" />, title: 'Cover Letter Writing', description: 'Compelling cover letters that highlight your unique value proposition.' },
              { icon: <Linkedin className="w-12 h-12 text-blue-500" />, title: 'LinkedIn Optimization', description: 'Enhance your LinkedIn profile to attract recruiters and opportunities.' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-400 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </ div>
      </section>

      <section id="pricing" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Basic', price: 'AED 15', features: ['Professional CV/Resume', '1 Revision', '24/7 Support'] },
              { title: 'Pro', price: 'AED 25', features: ['Professional CV/Resume', 'Cover Letter', 'LinkedIn Profile Optimization', '3 Revisions', '24/7 Priority Support'] },
              { title: 'Premium', price: 'AED 35', features: ['Professional CV/Resume', 'Cover Letter', 'LinkedIn Profile Optimization', 'Job Application Assistance', 'Unlimited Revisions', '24/7 VIP Support'] }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-center mb-4">{plan.title}</h3>
                <p className="text-4xl font-bold text-center text-blue-500 mb-6">{plan.price}</p>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="templates" className="py-20 bg-gray-900">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">CV Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: a, title: 'Modern Professional' },
              { image: b, title: 'Creative Design' },
              { image: c, title: 'Executive Style' }
            ].map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                onClick={() => setSelectedImage(template.image)}
              >
                <div className="relative h-full flex-1">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {/* Removed button and added hover effect */}
                  </div>
                </div>
                <div className="p-4 flex-1">
                  <h3 className="text-xl font-semibold text-center">{template.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Component */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <img src={selectedImage} alt="Preview" className="max-w-full max-h-full" />
          <button onClick={() => setSelectedImage(null)} className="absolute top-5 right-5 text-white text-xl">✖</button>
        </div>
      )}

      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto"
          >
            <form className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4 ">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2024 CareerCraft Pro. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <a
        href="https://wa.me/919834539885"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-12 w-12" />
      </a>
    </div>
  );
}

export default App;
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Mail, MapPin, Phone, Check, Eye, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import emailjs from 'emailjs-com';

// Import your images here
import a from './assets/1.jpg';
import b from './assets/2.jpg';
import c from './assets/3.jpg';
import e from './assets/5.jpg';
import logo from './assets/favicon.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const form = useRef();

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };


const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    emailjs.sendForm('service_556i82v', 'template_aou968r', form.current, '9iRrzUl3O7klsFxoC') // Use your Public Key here
      .then((result) => {
        console.log(result.text);
        setShowThankYou(true); // Show thank you message
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form data
      }, (error) => {
        console.log(error.text); // Log any errors
      });
};


  return (
    <div className="bg-pattern text-gray-100 min-h-screen">
      <nav className="fixed w-full z-50 bg-[#1d1d1d] bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center text-white font-bold text-xl">
              <img src={logo} alt="CareerCraft Pro Logo" className="h-8 w-8 mr-2" />
              CareerCraft Pro
            </a>
            <div className="hidden md:flex space-x-4">
              {['Home', 'About', 'Services', 'Pricing', 'Templates', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`text-sm uppercase ${activeSection === item.toLowerCase() ? 'text-[#4e4f51]' : 'text-gray-300 hover:text-white'}`}
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
            className="md:hidden fixed inset-0 z-40 bg-[#1d1d1d] bg-opacity-95"
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
            Professional CV, Resume, and LinkedIn Profile Optimization services
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="bg-[#4e4f51] hover:bg-[#3c3c3c] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20 bg-[#1d1d1d]">
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
                  <Phone className="mr-4 text-[#4e4f51]" />
                  <span>+971 502399335</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-4 text-[#4e4f51]" />
                  <span>imalik.dxb@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-4 text-[#4e4f51]" />
                  <span>Dubai, United Arab Emirates</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20 bg-[#3c3c3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FileText className="w-12 h-12 text-[#4e4f51]" />, title: 'CV/Resume Creator', description: 'Professional CV/Resume tailored to your industry and career goals.' },
              { icon: <Mail className="w-12 h-12 text-[#4e4f51]" />, title: 'Cover Letter Writing', description: 'Compelling cover letters that highlight your unique value proposition.' },
              { icon: <Linkedin className="w-12 h-12 text-[#4e4f51]" />, title: 'LinkedIn Profile Optimization', description: 'Enhance your LinkedIn profile to attract recruiters and opportunities.' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1d1d1d] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-400 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-[#1d1d1d]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-white mb-12">Our Pricing Plans</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {[
        {
          title: 'CV/Resume Writing',
          originalPrice: '190 AED',
          discountedPrice: '49 AED',
          description: 'Start from',
          message: 'Hi, I am interested to go for CV/Resume Writing.',
        },
        {
          title: 'Cover Letter',
          originalPrice: '100 AED',
          discountedPrice: '29 AED',
          description: 'Start from',
          message: 'Hi, I am interested to go for Cover Letter services.',
        },
        {
          title: 'LinkedIn Profile Optimization',
          originalPrice: '250 AED',
          discountedPrice: '99 AED',
          description: 'Start from',
          message: 'Hi, I am interested to go for LinkedIn Profile services.',
        },
        {
          title: 'Personal Website Portfolio',
          originalPrice: '750 AED',
          discountedPrice: '399 AED',
          description: 'Start from',
          message: 'Hi, I am interested to go for Personal Website Portfolio services.',
        },
      {
          title: 'Personal Consultation by Expert',
          originalPrice: '500 AED',
          discountedPrice: '99 AED (50 Minutes)',
          description: 'Start from',
          message: 'Hi, I am interested to go for One to One Consultation services.',
        },
      ].map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
        >
          <h3 className="text-lg font-bold text-gray-800">{plan.title}</h3>
          <p className="text-sm text-gray-400 line-through mt-2">{plan.originalPrice}</p>
          <div className="bg-gray-800 text-white text-sm font-medium px-4 py-1 rounded mt-2">
            {plan.description}
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-4">{plan.discountedPrice}</p>
          <a
            href={`https://wa.me/971502399335?text=${encodeURIComponent(plan.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-600"
          >
            Order now
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      <section id="templates" className="py-20 bg-[#3c3c3c]">
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
                className="bg-[#1d1d1d] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
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
                    {/* Hover effect */}
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

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <img src={selectedImage} alt="Preview" className="max-w-full max-h-full" />
          <button onClick={() => setSelectedImage(null)} className="absolute top-5 right-5 text-white text-xl">✖</button>
        </div>
      )}

      <section id="contact" className="py-20 bg-[#1d1d1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto"
          >
            <form ref={form} onSubmit={sendEmail} className="bg-[#3c3c3c] p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#1d1d1d] border border-[#4e4f51] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4e4f51]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#1d1d1d] border border-[#4e4f51] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4e4f51]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#1d1d1d] border border-[#4e4f51] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4e4f51]"
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
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-[#1d1d1d] border border-[#4e4f51] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4e4f51]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#4e4f51] hover:bg-[#3c3c3c] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#3c3c3c] py-8">
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
        href="https://wa.me/971502399335"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-12 w-12" />
      </a>

      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white text-gray-900 p-8 rounded-lg shadow-xl max-w-md w-full mx-4"
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Thank You!</h3>
              <p className="mb-6 text-center">Your message has been sent successfully. We'll get back to you soon.</p>
              <button
                onClick={() => setShowThankYou(false)}
                className="w-full bg-[#4e4f51] hover:bg-[#3c3c3c] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

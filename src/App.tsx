import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DemoClass from './components/DemoClass';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

function Home() {
  const phoneNumber = "+919360349002";

  // Default WhatsApp message (URL encoded for proper formatting)
  const defaultMessage = encodeURIComponent(
    "வணக்கம், I’m interested to learn market analysis and trade. I heard you provide market analysis and educational content. Please share more details"
  );

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <DemoClass />
      <EnquiryForm />
      <Footer />

      {/* Floating Animated Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* WhatsApp Button */}
        <motion.a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all"
          title="Chat on WhatsApp"
          animate={{
            y: [0, -6, 0],
            boxShadow: [
              '0 0 0px rgba(34,197,94,0.6)',
              '0 0 15px rgba(34,197,94,0.8)',
              '0 0 0px rgba(34,197,94,0.6)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.1 }}
        >
          <MessageCircle size={24} />
        </motion.a>

        {/* Phone Button */}
        <motion.a
          href={`tel:${phoneNumber}`}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-all"
          title="Call Now"
          animate={{
            y: [0, -6, 0],
            boxShadow: [
              '0 0 0px rgba(59,130,246,0.6)',
              '0 0 15px rgba(59,130,246,0.8)',
              '0 0 0px rgba(59,130,246,0.6)',
            ],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Phone size={24} />
        </motion.a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/privacy-policy"
        element={
          <>
            <Navbar />
            <PrivacyPolicy />
            <Footer />
          </>
        }
      />
      <Route
        path="/terms-of-service"
        element={
          <>
            <Navbar />
            <TermsOfService />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;

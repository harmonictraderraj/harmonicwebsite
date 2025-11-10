import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DemoClass from './components/DemoClass';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import Contact from './components/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

function Home() {
  const phoneNumber = "+919360349002";

  // Default WhatsApp message (URL encoded)
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
      <Contact />
      <DemoClass />
      <EnquiryForm />
      <Footer />

      {/* Floating Animated Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

        {/* WhatsApp Button with official logo */}
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          title="Chat on WhatsApp"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a>

        {/* Phone Button */}
        <a href={`tel:${phoneNumber}`} className="phone-float" title="Call Now">
          <Phone size={28} />
        </a>

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

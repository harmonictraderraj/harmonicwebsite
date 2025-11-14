import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import DemoClass from '../components/DemoClass';
import EnquiryForm from '../components/EnquiryForm';

export default function Home() {
  const location = useLocation();

  // Handle hash navigation when component mounts or hash changes
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);
  const phoneNumber = "+919360349002";

  // Default WhatsApp message (URL encoded)
  const defaultMessage = encodeURIComponent(
    "வணக்கம், I'm interested to learn market analysis and trade. I heard you provide market analysis and educational content. Please share more details"
  );

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="min-h-screen relative">
      <Hero />
      <About />
      <Services />
      <Contact />
      <DemoClass />
      <EnquiryForm />

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


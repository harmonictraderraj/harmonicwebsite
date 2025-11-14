import SEO from '../components/SEO';
import ContactSection from '../components/Contact';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us - Tamil Harmonic | Get in Touch for Trading Education"
        description="Contact Tamil Harmonic for trading education, market analysis, and Forex learning support. Reach us via phone, WhatsApp, email, or visit our social channels. We'd love to hear from you."
        keywords="stock market classes in Coimbatore, share market classes in Coimbatore, online trading classes in Coimbatore, trading classes near me, best share market classes Coimbatore, Coimbatore trading institute, intraday strategy course Coimbatore, stock market demo classes Coimbatore, top trading educators Coimbatore, Tamil stock market course, Tamil trading classes, share market basics in Tamil, Contact Tamil Harmonic, Trading mentor contact, Market analyst contact Tamil, Forex education contact, Trading course enquiry, Get in touch trading, Contact trading expert Tamil"
        canonical="https://www.tamilharmonic.com/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Contact Us - Tamil Harmonic",
          "description": "Contact Tamil Harmonic for trading education, market analysis, and Forex learning support.",
          "url": "https://www.tamilharmonic.com/contact",
          "inLanguage": "ta",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Tamil Harmonic",
            "url": "https://www.tamilharmonic.com"
          },
          "mainEntity": {
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Tamil Harmonic",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-93603-49002",
                "contactType": "Customer Service",
                "email": "tamilharmonictraderraj@gmail.com",
                "areaServed": "IN",
                "availableLanguage": ["ta", "en"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              }
            }
          }
        }}
      />
      <div className="pt-16">
        <ContactSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="text-center mt-12">
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transform hover:scale-105 transition-all duration-300"
            >
              Start Your Trading Journey
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


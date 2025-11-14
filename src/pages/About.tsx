import SEO from '../components/SEO';
import AboutSection from '../components/About';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us - Tamil Harmonic | Trading Education & Market Analysis"
        description="Learn about Tamil Harmonic - your trusted trading partner for Indian market analysis, Forex updates, and comprehensive trading education. Years of market experience and expertise."
        keywords="stock market courses, learn stock market, share market courses, stock market courses online, stock market for beginners, learn stock market trading, trading courses, stock trading course, online trading course, certified stock market trainer, stock investment course, stock market diploma course, NSE certification courses, best free stock market course India, learn stock market for free, stock market classes in Coimbatore, share market classes in Coimbatore, online trading classes in Coimbatore, trading classes near me, Tamil stock market course, Tamil trading classes, share market basics in Tamil, best share market classes Coimbatore, Coimbatore trading institute, top trading educators Coimbatore, About Tamil Harmonic, Trading mentor Tamil Nadu, Market analysis expert, Forex education Tamil, Stock market trainer, Trading course Tamil, Indian market analyst, Nifty analysis expert"
        canonical="https://www.tamilharmonic.com/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "About Us - Tamil Harmonic",
          "description": "Learn about Tamil Harmonic - your trusted trading partner for Indian market analysis, Forex updates, and comprehensive trading education.",
          "url": "https://www.tamilharmonic.com/about",
          "inLanguage": "ta",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Tamil Harmonic",
            "url": "https://www.tamilharmonic.com"
          },
          "mainEntity": {
            "@type": "Organization",
            "name": "Tamil Harmonic",
            "description": "Your trusted trading partner for Indian Market Analysis, Nifty Trading, and Forex Education in Tamil",
            "url": "https://www.tamilharmonic.com",
            "foundingDate": "2020",
            "founder": {
              "@type": "Person",
              "name": "Anantharaj"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-93603-49002",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": ["ta", "en"]
            }
          }
        }}
      />
      <div className="pt-16">
        <AboutSection />
      </div>
    </>
  );
}


import SEO from '../components/SEO';
import ServicesSection from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services - Tamil Harmonic | Market Analysis & Trading Education"
        description="Comprehensive trading services from Tamil Harmonic: Indian Market Analysis, Forex Updates, Nifty 50 Analysis, and Educational Content. Everything you need to succeed in trading."
        keywords="intraday trading course, best intraday trading course, intraday trading course online free, Nifty 50 signals today, free Nifty signals, Nifty buy sell signal, intraday trading tips for tomorrow, live Nifty 50 prediction, learn intraday trading, free intraday trading course, NSE market analysis today, stock market live today NSE, Nifty live, Sensex live, technical analysis course, options trading course, candlestick chart training, fundamental analysis course, trading strategies for beginners, daily stock market tips free, intraday strategy course Coimbatore, stock market demo classes Coimbatore, Trading services Tamil, Indian market analysis service, Forex updates Tamil, Nifty analysis service, Trading education Tamil, Market analysis services, Stock market courses Tamil, Trading signals Tamil"
        canonical="https://www.tamilharmonic.com/services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Our Services - Tamil Harmonic",
          "description": "Comprehensive trading services: Indian Market Analysis, Forex Updates, Nifty 50 Analysis, and Educational Content.",
          "url": "https://www.tamilharmonic.com/services",
          "inLanguage": "ta",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Tamil Harmonic",
            "url": "https://www.tamilharmonic.com"
          },
          "mainEntity": {
            "@type": "Service",
            "serviceType": "Trading Education and Market Analysis",
            "provider": {
              "@type": "Organization",
              "name": "Tamil Harmonic"
            },
            "areaServed": "IN",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Trading Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Indian Market Analysis"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Forex Updates"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nifty Updates"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Educational Content"
                  }
                }
              ]
            }
          }
        }}
      />
      <div className="pt-16">
        <ServicesSection />
      </div>
    </>
  );
}


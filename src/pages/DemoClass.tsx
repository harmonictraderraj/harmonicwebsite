import SEO from '../components/SEO';
import DemoClassSection from '../components/DemoClass';

export default function DemoClassPage() {
  return (
    <>
      <SEO
        title="Demo Class - Tamil Harmonic | Free Trading Education Demo"
        description="Watch a free demo class from Tamil Harmonic and discover how we make trading education simple, practical, and effective. Experience our teaching style with real-world examples."
        keywords="free stock market courses, stock market courses online free, best free stock market course India, learn stock market for free, free intraday trading course, stock market demo classes Coimbatore, free trading demo, Demo class Tamil, Trading education demo, Market analysis demo Tamil, Forex demo class, Stock market demo Tamil, Trading course demo, Learn trading demo, stock market for beginners, learn stock market trading, how to invest in stock market for beginners"
        canonical="https://www.tamilharmonic.com/demo-class"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Demo Class - Tamil Harmonic",
          "description": "Watch a free demo class and discover how Tamil Harmonic makes trading education simple, practical, and effective.",
          "url": "https://www.tamilharmonic.com/demo-class",
          "inLanguage": "ta",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Tamil Harmonic",
            "url": "https://www.tamilharmonic.com"
          },
          "mainEntity": {
            "@type": "VideoObject",
            "name": "Tamil Harmonic Trader Raj Demo Class",
            "description": "Free demo class showcasing trading education and market analysis techniques",
            "thumbnailUrl": "https://www.tamilharmonic.com/demo-thumbnail.jpg",
            "uploadDate": "2024-01-01",
            "contentUrl": "https://www.youtube.com/embed/LjZWz2-ZXiQ",
            "embedUrl": "https://www.youtube.com/embed/LjZWz2-ZXiQ"
          }
        }}
      />
      <div className="pt-16">
        <DemoClassSection />
      </div>
    </>
  );
}


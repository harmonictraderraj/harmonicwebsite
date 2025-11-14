import SEO from '../components/SEO';
import EnquiryForm from '../components/EnquiryForm';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function GetStartedPage() {
  return (
    <>
      <SEO
        title="Get Started - Tamil Harmonic | Start Your Trading Journey Today"
        description="Start your trading journey with Tamil Harmonic. Fill out the enquiry form to learn more about our trading education, market analysis, and Forex learning programs. Get started today!"
        keywords="stock market courses, learn stock market, share market courses, stock market courses online, stock market for beginners, learn stock market trading, trading courses, stock trading course, online trading course, how to invest in stock market for beginners, stock market classes in Coimbatore, share market classes in Coimbatore, online trading classes in Coimbatore, trading classes near me, Tamil stock market course, Tamil trading classes, Get started trading, Trading course enrolment, Start trading Tamil, Trading education signup, Market analysis course Tamil, Forex course Tamil, Enrol trading course, Trading mentorship Tamil, stock investment course, certified stock market trainer"
        canonical="https://www.tamilharmonic.com/get-started"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Get Started - Tamil Harmonic",
          "description": "Start your trading journey with Tamil Harmonic. Fill out the enquiry form to get started.",
          "url": "https://www.tamilharmonic.com/get-started",
          "inLanguage": "ta",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Tamil Harmonic",
            "url": "https://www.tamilharmonic.com"
          },
          "mainEntity": {
            "@type": "WebPageElement",
            "name": "Enquiry Form",
            "description": "Fill out the enquiry form to start your trading journey with Tamil Harmonic."
          }
        }}
      />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
        <EnquiryForm />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Want to learn more about our services?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/about"
                className="px-6 py-3 bg-white text-slate-900 rounded-full font-semibold border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                Learn About Us
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-white text-slate-900 rounded-full font-semibold border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                View Services
              </Link>
              <Link
                to="/demo-class"
                className="px-6 py-3 bg-white text-slate-900 rounded-full font-semibold border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                Watch Demo Class
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


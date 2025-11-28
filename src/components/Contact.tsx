import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzIyMjIyMiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
            We’d Love To Hear From You
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Reach us on phone/WhatsApp, email, or visit our social channels. We serve traders across Tamil Nadu, Kerala, and all of India through online classes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 animate-fade-in-up">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">Phone / WhatsApp</h3>
            <a href="tel:+919360349002" className="text-blue-600 hover:underline">+91 93603 49002</a>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">Email</h3>
            <a href="mailto:tamilharmonictraderraj@gmail.com" className="text-blue-600 hover:underline">tamilharmonictraderraj@gmail.com</a>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">Location</h3>
            <p className="text-slate-600 text-sm">No 12, Ohm Ganesh Nagar</p>
            <p className="text-slate-600 text-sm">Coimbatore, TN 641041</p>
            <a 
              href="https://www.google.com/maps?q=11.01684,76.95583" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm mt-1 inline-block"
            >
              View on Maps →
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">Hours</h3>
            <p className="text-slate-600">Mon–Sat: 9:00 AM – 7:00 PM IST</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="https://wa.me/919360349002"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <Send className="w-5 h-5" />
            Chat on WhatsApp
          </a>
          <Link
            to="/get-started"
            className="px-6 py-3 bg-white/60 backdrop-blur text-slate-900 rounded-full font-semibold border border-slate-200 hover:bg-white transition"
          >
            Go to Enquiry Form
          </Link>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16 animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Find Us</h3>
              <p className="text-slate-600">
                Visit us at our location in Coimbatore, Tamil Nadu. We provide online trading education services across India.
              </p>
            </div>
            <div className="relative w-full h-96">
              <iframe
                src={`https://www.google.com/maps?q=11.01684,76.95583&hl=en&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tamil Harmonic Location - Coimbatore, Tamil Nadu"
                className="absolute inset-0"
              ></iframe>
            </div>
            <div className="p-6 bg-slate-50">
              <p className="text-sm text-slate-600 mb-2">
                <strong>Address:</strong> No 12, Ohm Ganesh Nagar, Coimbatore, Tamil Nadu 641041, India
              </p>
              <p className="text-xs text-slate-500">
                <strong>Service Area:</strong> Tamil Nadu, Kerala, and all of India (Online Classes Available)
              </p>
              <p className="text-xs text-slate-500 mt-2 italic">
                Note: This is an educational organization. Not SEBI registered. Educational purposes only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



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
            Reach us on phone/WhatsApp, email, or visit our social channels.
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
            <p className="text-slate-600">Tamil Nadu, India</p>
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
          <a
            href="#enquiry"
            className="px-6 py-3 bg-white/60 backdrop-blur text-slate-900 rounded-full font-semibold border border-slate-200 hover:bg-white transition"
          >
            Go to Enquiry Form
          </a>
        </div>
      </div>
    </section>
  );
}



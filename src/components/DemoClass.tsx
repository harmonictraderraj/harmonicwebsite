import { Link } from 'react-router-dom';
import { Play, CheckCircle } from 'lucide-react';
import StudentFeedback from './StudentFeedback';

export default function DemoClassSection() {
  const benefits = [
    "Learn market fundamentals from scratch",
    "Understand technical analysis techniques",
    "Real-world trading examples",
    "Interactive Q&A sessions",
    "Lifetime access to materials"
  ];

  return (
    <section
      id="demo"
      className="py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Demo Class Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
            Demo Class
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Experience Our Teaching Style
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Watch a free demo class and discover how we make trading education
            simple, practical, and effective
          </p>
        </div>

        {/* Demo Video and Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-gradient"></div>
              <div className="relative bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-slate-900">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/LjZWz2-ZXiQ?si=EhOooYZmDufKwqtV"
                    title="Tamil Harmonic Trader Raj Demo Class"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="animate-fade-in-right">
            <h3 className="text-3xl font-bold text-white mb-6">
              What You'll Learn
            </h3>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-slate-900" />
                  </div>
                  <p className="text-blue-100 text-lg group-hover:text-white transition-colors">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.youtube.com/@tamilharmonictraderraj-ok5fi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/70 transform hover:scale-105 transition-all duration-300 text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch on YouTube
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <Link
                to="/get-started"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300 text-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>

        {/* Student Feedback Component */}
        <StudentFeedback />
      </div>
    </section>
  );
}
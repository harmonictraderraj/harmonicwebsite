import { Instagram } from 'lucide-react';
import { useEffect } from 'react';

export default function StudentFeedback() {
  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const reels = [
    "https://www.instagram.com/reel/DPgADBak0oH/?utm_source=ig_embed",
    "https://www.instagram.com/reel/DPlJxw3k1UW/?utm_source=ig_embed",
    "https://www.instagram.com/reel/DPnznBRk0rb/?utm_source=ig_embed",
    "https://www.instagram.com/reel/DPrBX5CCD6J/?utm_source=ig_embed",
    "https://www.instagram.com/reel/DPxwblgE8T7/?utm_source=ig_embed",
    "https://www.instagram.com/reel/DQGRC4Hkw1U/?utm_source=ig_embed",
    "https://www.instagram.com/reel/DQL1Djzk3IL/?utm_source=ig_embed",
    "https://www.instagram.com/reel/DQRJDWbE7_t/?utm_source=ig_embed",
    "https://www.instagram.com/reel/DQy9anfkzAJ/?utm_source=ig_embed",
    "https://www.instagram.com/reel/DQ3DgI0E_KP/?utm_source=ig_embed",
  ];

  return (
    <section className="py-20 sm:py-24 relative mt-20 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Soft animated background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-56 sm:w-80 h-56 sm:h-80 bg-pink-500 rounded-full mix-blend-multiply blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-56 sm:w-80 h-56 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <Instagram className="w-7 h-7 sm:w-8 sm:h-8 text-pink-500" />
          <span className="leading-tight">Real Voices. Real Results.</span>
        </h2>

        <p className="text-blue-200 text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Watch how our students turned knowledge into confidence and trades into success!
        </p>

        {/* Instagram Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {reels.map((url, index) => (
            <blockquote
              key={index}
              className="instagram-media bg-slate-800 rounded-2xl shadow-lg border border-white/10 w-full"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                width: '100%',
                maxWidth: '380px',
                borderRadius: '1rem',
                overflow: 'hidden',
              }}
            ></blockquote>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16">
          <a
            href="#enquiry"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-base sm:text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Enroll Now
          </a>
        </div>
      </div>

      {/* Blob Animation Keyframes */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

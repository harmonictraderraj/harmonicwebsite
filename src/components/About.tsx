import { Award, Users, TrendingUp, BookOpen } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description: "Deep knowledge of Indian markets, Nifty, and global Forex trends"
    },
    {
      icon: BookOpen,
      title: "Educational Content",
      description: "Comprehensive learning materials for beginners to advanced traders"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of traders learning and growing together"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of accurate market analysis and predictions"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Your Trusted Trading Partner
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tamil Harmonic brings years of market experience and expertise to help you navigate
            the complex world of trading with confidence and knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/50 border border-slate-100 hover:border-blue-200 transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/30">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

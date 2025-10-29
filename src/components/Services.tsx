import { LineChart, DollarSign, BarChart3, GraduationCap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: LineChart,
      title: "Indian Market Analysis",
      description: "In-depth analysis of Indian stock markets with actionable insights and real-time updates",
      gradient: "from-blue-500 to-cyan-500",
      features: ["NSE & BSE Coverage", "Technical Analysis", "Market Trends"]
    },
    {
      icon: DollarSign,
      title: "Forex Updates",
      description: "Comprehensive forex market coverage with currency pair analysis and trading strategies",
      gradient: "from-emerald-500 to-teal-500",
      features: ["Major Pairs", "Live Updates", "Trading Signals"]
    },
    {
      icon: BarChart3,
      title: "Nifty Updates",
      description: "Detailed Nifty 50 analysis with technical indicators and trend predictions",
      gradient: "from-purple-500 to-pink-500",
      features: ["Index Analysis", "Options Insights", "Daily Reports"]
    },
    {
      icon: GraduationCap,
      title: "Educational Content",
      description: "Comprehensive learning resources from basics to advanced trading strategies",
      gradient: "from-orange-500 to-red-500",
      features: ["Video Tutorials", "Live Sessions", "Study Materials"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzIyMjIyMiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive trading services designed to help you make informed decisions and maximize your potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-slate-200 hover:border-transparent transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up overflow-hidden relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500 transform translate-x-32 -translate-y-32`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-sm font-medium group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-cyan-50 group-hover:text-blue-700 transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check initial scroll position
    setIsScrolled(window.scrollY > 50);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // Re-check when route changes

  // Show navbar background on all pages except home, or when scrolled
  const isHomePage = location.pathname === '/';
  const shouldShowBackground = !isHomePage || isScrolled;

  // Helper function to handle navigation
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home', isRoute: true },
    { href: '/about', label: 'About', isRoute: true },
    { href: '/services', label: 'Services', isRoute: true },
    { href: '/demo-class', label: 'Demo Class', isRoute: true },
    { href: '/contact', label: 'Contact', isRoute: true }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowBackground
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-slate-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-white font-bold text-lg drop-shadow-lg">
              Tamil Harmonic
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-white/80 hover:text-white font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              to="/get-started"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10 animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={handleNavClick}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/get-started"
              onClick={handleNavClick}
              className="block px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  const navigationLinks = [
    { label: 'Ana Sayfa', action: scrollToTop },
    { label: 'Uzmanlıklar', action: () => scrollToSection('specialties') },
    { label: 'Hakkımda', action: () => scrollToSection('about') },
    { label: 'Kariyer', action: () => scrollToSection('timeline') },
    { label: 'Yayınlar', action: () => scrollToSection('publications') },
    { label: 'İletişim', action: () => scrollToSection('contact') }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Minimal Text */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-3 group"
          >
            <div className={`font-black text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              İK
            </div>
            <div className={`hidden md:block border-l pl-3 transition-colors duration-300 ${
              isScrolled ? 'border-white/20' : 'border-white/30'
            }`}>
              <div className={`font-bold text-sm leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                Doç. Dr. İlhan Karabıçak
              </div>
              <div className={`text-xs uppercase tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-gray-400' : 'text-gray-300'
              }`}>
                Genel Cerrahi
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('contact')}
              className={`p-2 transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-slate-900 px-6 py-2 font-bold text-sm hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Randevu</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled 
                ? 'text-white' 
                : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-1 border-t border-white/10 bg-slate-900/95 backdrop-blur-lg">
            {navigationLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all duration-300"
              >
                {link.label}
              </button>
            ))}

            <div className="flex gap-2 px-4 pt-4 border-t border-white/10 mt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="flex-1 flex items-center justify-center gap-2 py-3 font-medium text-sm text-white bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Ara
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 bg-white text-slate-900 flex items-center justify-center gap-2 py-3 font-bold text-sm hover:bg-gray-100 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Randevu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navigation;
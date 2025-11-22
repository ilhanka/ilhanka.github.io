import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Twitter
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Instagram className="w-5 h-5" />, 
      label: 'Instagram', 
      color: 'hover:text-pink-500',
      url: 'https://www.instagram.com/doc.dr.ilhankarabicak'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: 'LinkedIn', 
      color: 'hover:text-blue-600',
      url: 'https://www.linkedin.com/in/ilhan-karabicak-md-febs-07112184/?originalSubdomain=tr'
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      label: 'X (Twitter)', 
      color: 'hover:text-gray-400',
      url: 'https://x.com/ilhankarabicak?lang=ar'
    },
    { 
      icon: <Facebook className="w-5 h-5" />, 
      label: 'Facebook', 
      color: 'hover:text-blue-500',
      url: 'https://www.facebook.com/drilhankarabicak'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white flex items-center justify-center">
                  <div className="w-10 h-10 bg-slate-900 flex items-center justify-center text-white font-black text-lg">
                    İK
                  </div>
                </div>
                <div>
                  <div className="font-black text-xl text-white">
                    Doç. Dr. İlhan Karabıçak
                  </div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mt-1">
                    Genel Cerrahi Uzmanı
                  </div>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed max-w-md text-sm">
                20 yılı aşkın deneyimle, hastalarımın sağlığını ve refahını ön planda tutarak, 
                en güncel tıbbi yöntemlerle hizmet vermekteyim.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-black text-white uppercase tracking-wider">Hızlı Bağlantılar</h3>
              <div className="space-y-3">
                {[
                  { label: 'Ana Sayfa', action: scrollToTop },
                  { label: 'Uzmanlıklar', action: () => scrollToSection('specialties') },
                  { label: 'Hakkımda', action: () => scrollToSection('about') },
                  { label: 'Kariyer', action: () => scrollToSection('timeline') },
                  { label: 'Yayınlar', action: () => scrollToSection('publications') },
                  { label: 'İletişim', action: () => scrollToSection('contact') }
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={link.action}
                    className="block text-white/70 hover:text-white transition-colors duration-300 text-left font-medium uppercase tracking-wider text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-black text-white uppercase tracking-wider">İletişim</h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <div className="text-white/80 text-sm leading-relaxed">
                    Medical Park Samsun Hastanesi<br />
                    Mimar Sinan Mahallesi<br />
                    Alpaslan Bulvarı No:17<br />
                    Atakum / Samsun
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-white flex-shrink-0" />
                  <div className="text-white font-bold">
                    +90 533 241 68 95
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-white flex-shrink-0" />
                  <div className="text-white/80 text-sm">
                    ikarabicak@yahoo.com
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <div className="text-white/80 text-sm">
                    <div>Pzt-Cum: 09:00-18:00</div>
                    <div>Cumartesi: 09:00-14:00</div>
                    <div>Pazar: Kapalı</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © {currentYear} Doç. Dr. İlhan Karabıçak. Tüm hakları saklıdır.
              </div>
              
              <div className="flex space-x-8">
                <button className="text-white/60 hover:text-white text-sm transition-colors duration-300 uppercase tracking-wider font-medium">
                  Gizlilik Politikası
                </button>
                <button className="text-white/60 hover:text-white text-sm transition-colors duration-300 uppercase tracking-wider font-medium">
                  Kullanım Koşulları
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
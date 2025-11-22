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
      color: 'hover:text-pink-600',
      url: 'https://www.instagram.com/doc.dr.ilhankarabicak/'
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: 'Facebook',
      color: 'hover:text-blue-600',
      url: 'https://www.facebook.com/drilhankarabicak/'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      color: 'hover:text-blue-700',
      url: 'https://www.linkedin.com/in/ilhan-karabicak-md-febs-07112184/?originalSubdomain=tr'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'X (Twitter)',
      color: 'hover:text-gray-400',
      url: 'https://x.com/ilhankarabicak?lang=ar'
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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  İK
                </div>
                <div>
                  <div className="font-bold text-xl text-white">
                    Doç. Dr. İlhan Karabıçak
                  </div>
                  <div className="text-blue-400">
                    Genel Cerrahi Uzmanı
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                15 yılı aşkın deneyimle, hastalarımın sağlığını ve refahını ön planda tutarak, 
                en güncel tıbbi yöntemlerle hizmet veriyorum. Güven, samimiyet ve başarı.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Hızlı Bağlantılar</h3>
              <div className="space-y-3">
                {[
                  { label: 'Ana Sayfa', action: scrollToTop },
                  { label: 'Hakkımda', action: () => scrollToSection('about') },
                  { label: 'Uzmanlıklar', action: () => scrollToSection('specialties') },
                  { label: 'Hasta Yorumları', action: () => scrollToSection('testimonials') },
                  { label: 'İletişim', action: () => scrollToSection('contact') }
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={link.action}
                    className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">İletişim Bilgileri</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm leading-relaxed">
                    VM Medicalpark Samsun Hastanesi<br />
                    Mimarsinan, Alparslan Blv. No:17<br />
                    55200 Atakum/Samsun
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    (0533) 241 68 95
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    dr.ilhan@medicalpark.com.tr
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <div>Pzt-Cum: 09:00-18:00</div>
                    <div>Cumartesi: 09:00-14:00</div>
                    <div>Pazar: Kapalı</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-center">
              <div className="text-gray-400 text-sm">
                © {currentYear} Doç. Dr. İlhan Karabıçak. Tüm hakları saklıdır.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
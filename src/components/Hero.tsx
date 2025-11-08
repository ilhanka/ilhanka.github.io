import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Phone, Play } from 'lucide-react';
import AppointmentModal from './AppointmentModal';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [yearsRef, yearsCount] = useCounterAnimation({ endValue: 15, suffix: '+', duration: 2000 });
  const [surgeriesRef, surgeriesCount] = useCounterAnimation({ endValue: 1000, suffix: '+', duration: 2500 });
  const [satisfactionRef, satisfactionCount] = useCounterAnimation({ endValue: 98, suffix: '%', duration: 2000 });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-navy-900">
      {/* Diagonal Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(255,255,255,0.05) 50px,
            rgba(255,255,255,0.05) 100px
          )`
        }}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Split Screen Layout */}
      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left Side - Content */}
          <div className="flex items-center justify-center p-12 lg:p-20 text-white relative">
            <div className="max-w-2xl space-y-8">
              {/* Badge */}
              <div className="inline-block">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold uppercase tracking-wider">
                  Genel Cerrahi Uzmanı
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                  Doç. Dr.
                </span>
                <span className="block">İlhan</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                  Karabıçak
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-light max-w-xl">
                15 yılı aşkın deneyimle, modern tıbbi uygulamalar ve bilimsel yaklaşım doğrultusunda 
                hastalarıma en iyi sağlık hizmetini sunmaktayım.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-8 py-4 bg-white text-slate-900 font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    Randevu Al
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>

                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5" />
                  İletişim
                </button>
              </div>

              {/* Stats - Horizontal */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20">
                <div className="space-y-2" ref={yearsRef as React.RefObject<HTMLDivElement>}>
                  <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                    {yearsCount}
                  </div>
                  <div className="text-xs font-medium text-gray-300 uppercase tracking-widest">
                    Yıl Deneyim
                  </div>
                </div>
                <div className="space-y-2" ref={surgeriesRef as React.RefObject<HTMLDivElement>}>
                  <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                    {surgeriesCount}
                  </div>
                  <div className="text-xs font-medium text-gray-300 uppercase tracking-widest">
                    Ameliyat
                  </div>
                </div>
                <div className="space-y-2" ref={satisfactionRef as React.RefObject<HTMLDivElement>}>
                  <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                    {satisfactionCount}
                  </div>
                  <div className="text-xs font-medium text-gray-300 uppercase tracking-widest">
                    Memnuniyet
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-white/20"></div>
          </div>

          {/* Right Side - Image with Overlay */}
          <div className="relative hidden lg:block">
            {/* Diagonal Divider */}
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-navy-900 z-10" 
                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' }}>
            </div>

            {/* Image Container */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50 z-10"></div>
              <img
                src={`${import.meta.env.BASE_URL}ilhan-karabicak.jpg`}
                alt="Doç. Dr. İlhan Karabıçak"
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              
              {/* Overlay Pattern */}
              <div className="absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
              
              {/* Floating Info Card */}
              <div className="absolute bottom-20 right-20 z-30 bg-white/10 backdrop-blur-md p-6 border border-white/20 max-w-xs">
                <div className="text-white space-y-3">
                  <div className="text-2xl font-black">Medical Park</div>
                  <div className="text-sm text-gray-300">Samsun Hastanesi</div>
                  <div className="h-px bg-white/20"></div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Genel Cerrahi Bölümü
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
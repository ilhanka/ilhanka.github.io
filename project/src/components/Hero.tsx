import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, MessageCircle } from 'lucide-react';
import { usePlusCounter, usePercentageCounter } from '../hooks/useCounterAnimation';

interface HeroProps {
  onAppointmentClick: () => void;
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAppointmentClick, onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Counter animations
  const experienceCounter = usePlusCounter(15, { duration: 2000, delay: 1000 });
  const operationsCounter = usePlusCounter(1000, { duration: 2500, delay: 1200 });
  const satisfactionCounter = usePercentageCounter(98, { duration: 2000, delay: 1400 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-emerald-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-emerald-600 font-medium text-lg tracking-wide">Merhaba,</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  ben <span className="text-blue-600 relative">
                    Doç. Dr. İlhan
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200 rounded-full transform scale-x-0 animate-pulse"></div>
                  </span>
                  <br />
                  <span className="text-gray-700">Karabıçak.</span>
                </h1>

                <h2 className="text-xl lg:text-2xl font-semibold text-blue-700 mb-2">
                  Samsun Genel Cerrahi Uzmanı
                </h2>

                <h3 className="text-lg text-emerald-600 font-medium mb-4">
                  Karaciğer Nakli • Pankreas Cerrahisi • Safra Kesesi Ameliyatı
                </h3>

                <div className="space-y-4 text-lg lg:text-xl text-gray-600 leading-relaxed">
                  <p>
                    Genel cerrahi alanında, <span className="font-semibold text-blue-700">15 yılı aşkın süredir</span> 
                    hastalarımın yanında olmaktan onur duyuyorum.
                  </p>
                  <p>
                    Bilimsel bilgiyle birlikte, <span className="text-emerald-700 font-semibold">güven ve samimiyeti</span> ön planda tutuyorum.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <button
                  onClick={onContactClick}
                  className="group bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ease-out hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-95 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  Bilgi Al
                  <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
                
                <button
                  onClick={onAppointmentClick}
                  className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-blue-200 transition-all duration-300 ease-out hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-95 flex items-center justify-center gap-3"
                >
                  <Calendar className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  Konsültasyon Talep Et
                  <div className="absolute inset-0 rounded-2xl bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className={`flex items-center gap-8 pt-6 transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="text-center">
                  <div
                    ref={experienceCounter.ref}
                    className="text-2xl font-bold text-blue-600 tabular-nums"
                  >
                    {experienceCounter.value}
                  </div>
                  <div className="text-sm text-gray-600">Yıl Tecrübe</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div
                    ref={operationsCounter.ref}
                    className="text-2xl font-bold text-emerald-600 tabular-nums"
                  >
                    {operationsCounter.value}
                  </div>
                  <div className="text-sm text-gray-600">Başarılı Ameliyat</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div
                    ref={satisfactionCounter.ref}
                    className="text-2xl font-bold text-red-600 tabular-nums"
                  >
                    {satisfactionCounter.value}
                  </div>
                  <div className="text-sm text-gray-600">Hasta Memnuniyeti</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className={`relative transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <div className="aspect-[4/5] relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src="./ilhan-karabicak.jpg"
                      alt="Doç. Dr. İlhan Karabıçak"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
          <span className="text-sm">Keşfetmeye devam edin</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
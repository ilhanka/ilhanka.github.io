import React from 'react';
import { Activity, Shield, Zap, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SpecialtyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  delay: number;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({
  icon,
  title,
  description,
  features,
  color,
  delay
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-gray-100 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
      
      {/* Icon */}
      <div className={`w-16 h-16 bg-gradient-to-br ${color.replace('to-', 'to-opacity-20 ')} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Features List */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
    </div>
  );
};

interface SpecialtiesProps {
  onAppointmentClick: () => void;
}

const Specialties: React.FC<SpecialtiesProps> = ({ onAppointmentClick }) => {
  const [headerRef, headerVisible] = useScrollAnimation();

  const specialties = [
    {
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      title: "Pankreas Cerrahisi",
      description: "Zorlu ameliyatlarda en güncel yöntemlerle çözüm sunuyorum. Minimal invaziv tekniklerle hastalarımın konforunu önceliklendiriyorum.",
      features: [
        "Minimal invaziv laparoskopik yöntemler",
        "Hızlı iyileşme süreci",
        "Düşük komplikasyon oranı",
        "24/7 takip sistemi"
      ],
      color: "from-blue-500 to-blue-600",
      delay: 100
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Karaciğer Cerrahisi",
      description: "Hassasiyet gerektiren karaciğer operasyonlarında yüksek başarı oranı. Deneyimli ekibimle kompleks vakalarda güvenli çözümler üretiyoruz.",
      features: [
        "İleri görüntüleme teknikleri",
        "Multidisipliner yaklaşım",
        "Yüksek başarı oranı",
        "Kişiselleştirilmiş tedavi planı"
      ],
      color: "from-emerald-500 to-emerald-600",
      delay: 200
    },
    {
      icon: <Zap className="w-8 h-8 text-red-600" />,
      title: "Safra Yolları",
      description: "Minimal invaziv yöntemlerle daha konforlu bir iyileşme süreci. Hastalarımın günlük yaşamlarına en kısa sürede dönmelerini hedefliyoruz.",
      features: [
        "Günübirlik cerrahi imkanı",
        "Minimal skar izi",
        "Hızlı mobilizasyon",
        "Düşük ağrı düzeyi"
      ],
      color: "from-red-500 to-red-600",
      delay: 300
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="specialties">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-emerald-600">Uzmanlıklar</span> - Bilgi Odaklı Sunum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Her alanda en güncel teknikleri kullanarak, hastalarımın en iyi tedaviyi 
              almasını sağlıyorum. Deneyim ve teknolojinin mükemmel birleşimi.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <SpecialtyCard
                key={index}
                {...specialty}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Hangi alanda destek almak istiyorsunuz?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Durumunuzu değerlendirmek ve size en uygun tedavi planını oluşturmak için 
                detaylı bir konsültasyon yapabiliriz.
              </p>
              <button
                onClick={onAppointmentClick}
                className="group bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ease-out hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-95"
              >
                Konsültasyon Talep Et
                <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
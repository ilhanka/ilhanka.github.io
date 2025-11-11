import React from 'react';
import { Activity, Shield, Zap, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SpecialtyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
  image: string;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({
  icon,
  title,
  description,
  features,
  index,
  image
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative min-h-[600px] overflow-hidden ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000`}
    >
      {/* Diagonal Section */}
      <div
        className={`absolute inset-0 ${
          isEven
            ? 'clip-diagonal-left bg-gradient-to-br from-slate-100 to-navy-50'
            : 'clip-diagonal-right bg-gradient-to-bl from-navy-50 to-slate-100'
        }`}
        style={{
          clipPath: isEven
            ? 'polygon(0 0, 85% 0, 100% 100%, 0 100%)'
            : 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
        }}
      >
        <div className="container mx-auto px-6 lg:px-12 h-full">
          <div className={`grid lg:grid-cols-2 h-full items-center gap-12 ${
            isEven ? '' : 'lg:grid-flow-dense'
          }`}>
            {/* Content */}
            <div className={`py-20 space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="inline-flex items-center gap-3">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center text-white">
                  {icon}
                </div>
                <span className="text-sm font-bold text-navy-600 uppercase tracking-widest">
                  Uzmanlık Alanı
                </span>
              </div>

              <h3 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
                {title}
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                {description}
              </p>

              {/* Features */}
              <div className="space-y-4 pt-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-navy-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold hover:bg-navy-600 transition-all duration-300">
                <span>Daha Fazla Bilgi</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Image */}
            <div className={`relative h-full min-h-[400px] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="absolute inset-0">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className={`absolute ${isEven ? 'top-10 right-10' : 'top-10 left-10'} w-32 h-32 border-4 border-navy-600/30`}></div>
              <div className={`absolute ${isEven ? 'bottom-10 left-10' : 'bottom-10 right-10'} w-20 h-20 bg-navy-600/20`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Background (for diagonal effect) */}
      <div className={`absolute inset-0 -z-10 ${
        isEven
          ? 'bg-gradient-to-br from-navy-50 to-slate-100'
          : 'bg-gradient-to-bl from-slate-100 to-navy-50'
      }`}></div>
    </div>
  );
};

const Specialties: React.FC = () => {
  const [headerRef, headerVisible] = useScrollAnimation();

  const specialties = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Pankreas Cerrahisi",
      description: "Zorlu ameliyatlarda en güncel yöntemlerle çözüm sunmaktayım. Minimal invaziv tekniklerle hasta konforunu önceliklendirmekteyim.",
      features: [
        "Minimal invaziv laparoskopik yöntemler",
        "Hızlı iyileşme süreci",
        "Düşük komplikasyon oranı",
        "24/7 takip sistemi"
      ],
      image: `${import.meta.env.BASE_URL}gallery/11fad331-e36b-46a4-8ae6-d7ae5044b7a0.jpeg`
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Karaciğer Cerrahisi",
      description: "Hassasiyet gerektiren karaciğer operasyonlarında yüksek başarı oranı. Kompleks vakalarda güvenli çözümler sunmaktayım.",
      features: [
        "İleri görüntüleme teknikleri",
        "Multidisipliner yaklaşım",
        "Yüksek başarı oranı",
        "Kişiselleştirilmiş tedavi planı"
      ],
      image: `${import.meta.env.BASE_URL}gallery/463b1c90-43a4-4eab-a41e-4a5c98cedeb6.jpeg`
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Safra Yolları",
      description: "Minimal invaziv yöntemlerle daha konforlu bir iyileşme süreci. Hastalarımın günlük yaşamlarına en kısa sürede dönmelerini hedeflemekteyim.",
      features: [
        "Günübirlik cerrahi imkanı",
        "Minimal skar izi",
        "Hızlı mobilizasyon",
        "Düşük ağrı düzeyi"
      ],
      image: `${import.meta.env.BASE_URL}gallery/1.jpeg`
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Mide Cerrahisi",
      description: "Mide hastalıklarının cerrahi tedavisinde modern teknikler ve hasta odaklı yaklaşım ile en iyi sonuçları hedefliyorum.",
      features: [
        "Laparoskopik mide ameliyatları",
        "Minimal invaziv teknikler",
        "Kısa hastane kalış süresi",
        "Deneyimli ekip ile güvenli operasyonlar"
      ],
      image: `${import.meta.env.BASE_URL}ilhankarabicak_photos/mide_cerrahasi.jpg`
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Kalın Bağırsak ve Rektum Cerrahisi",
      description: "Kolorektal cerrahide en ileri tekniklerle tedavi sunuyor, hastalarımın yaşam kalitesini önceliklendiriyorum.",
      features: [
        "Laparoskopik kolon cerrahisi",
        "Minimal invaziv rektum operasyonları",
        "Onkolojik güvenli rezeksiyonlar",
        "Multidisipliner tedavi yaklaşımı"
      ],
      image: `${import.meta.env.BASE_URL}ilhankarabicak_photos/kalin_bagirsak_ve_rektum_cerrahisi.jpg`
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Meme Cerrahisi",
      description: "Meme sağlığı ve estetik sonuçların birlikte değerlendirildiği hassas ve kişiselleştirilmiş cerrahi yaklaşım.",
      features: [
        "Meme koruyucu cerrahi",
        "Onkoplastik teknikler",
        "Sentinel lenf nodu biyopsisi",
        "Estetik odaklı yaklaşım"
      ],
      image: `${import.meta.env.BASE_URL}ilhankarabicak_photos/meme_cerrhaisi.jpg`
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Sıcak Kemoterapi",
      description: "HIPEC (Hipertermik İntraperitoneal Kemoterapi) ile peritoneal karsinomatozis tedavisinde ileri tedavi seçeneği sunuyorum.",
      features: [
        "İntraperitoneal kemoterapi uygulaması",
        "Peritoneal yüzey malignitelerinde etkili tedavi",
        "Multimodal tedavi yaklaşımı",
        "Deneyimli ekip ile güvenli uygulama"
      ],
      image: `${import.meta.env.BASE_URL}ilhankarabicak_photos/sicak_kemoterapi.jpg`
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "İleri Laparoskopik Kanser Cerrahisi",
      description: "Karmaşık kanser vakalarında minimal invaziv tekniklerle tedavi, hastalarımın daha hızlı iyileşmesini sağlıyorum.",
      features: [
        "Gelişmiş laparoskopik onkolojik cerrahi",
        "Minimal invaziv radikal operasyonlar",
        "Hızlı iyileşme ve erken mobilizasyon",
        "Onkolojik güvenlik ile kozmetik sonuç"
      ],
      image: `${import.meta.env.BASE_URL}ilhankarabicak_photos/ileri_lopotpskopik_kanser_cerrahisi.jpg`
    }
  ];

  return (
    <section className="relative bg-white" id="specialties">
      {/* Section Header */}
      <div 
        ref={headerRef}
        className={`container mx-auto px-6 lg:px-12 py-20 transition-all duration-1000 ease-out ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-navy-50 text-navy-700 text-sm font-bold uppercase tracking-widest">
                Uzmanlık Alanları
              </span>
            </div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
            Cerrahi<br />Uzmanlıklarım
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Her alanda en güncel teknikleri kullanarak, hastalarımın en iyi tedaviyi 
            almasını sağlamaktayım. Deneyim ve teknolojinin birleşimi.
          </p>
        </div>
      </div>

      {/* Diagonal Specialty Cards */}
      <div className="relative">
        {specialties.map((specialty, index) => (
          <SpecialtyCard
            key={index}
            {...specialty}
            index={index}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-4xl font-black text-white mb-4">
            Hangi alanda destek almak istiyorsunuz?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Durumunuzu değerlendirmek ve size en uygun tedavi planını oluşturmak için 
            detaylı bir konsültasyon yapabiliriz.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="bg-white text-slate-900 px-10 py-4 font-black text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3"
          >
            <span>Konsültasyon Talep Et</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
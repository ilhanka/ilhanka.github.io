import React, { useRef } from 'react';
import { GraduationCap, Briefcase, Award, Globe, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  location?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  icon,
  location
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex-shrink-0 w-80 bg-white border-2 border-slate-200 hover:border-navy-600 transition-all duration-300 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="p-8 h-full flex flex-col">
        {/* Year Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <Calendar className="w-5 h-5 text-navy-600" />
          <span className="px-3 py-1 bg-navy-50 text-navy-700 text-sm font-bold uppercase tracking-wider">
            {year}
          </span>
        </div>

        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="text-white">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-navy-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            {description}
          </p>
          
          {location && (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          )}
        </div>

        {/* Hover Line */}
        <div className="mt-6 h-1 bg-gradient-to-r from-navy-600 to-navy-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const timelineData: TimelineItemProps[] = [
    {
      year: '1992 - 1998',
      title: 'İstanbul Üniversitesi İstanbul Tıp Fakültesi',
      description: 'Tıp Fakültesi eğitimimi tamamladım ve doktor unvanını aldım.',
      icon: <GraduationCap className="w-8 h-8" />,
      location: 'İstanbul, Türkiye'
    },
    {
      year: '1999 - 2004',
      title: 'İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi',
      description: 'Genel cerrahi asistanlık eğitimimi tamamladım ve uzman unvanını aldım.',
      icon: <Briefcase className="w-8 h-8" />,
      location: 'İstanbul, Türkiye'
    },
    {
      year: '2004 - 2007',
      title: 'New York Üniversitesi Mount Sinai Hastanesi',
      description: 'Karaciğer-böbrek nakli ve karaciğer-pankreas-safra yolları cerrahisi merkezinde çalıştım.',
      icon: <Globe className="w-8 h-8" />,
      location: 'New York, ABD'
    },
    {
      year: '2007',
      title: 'USMLE ve ECFMG Sertifikaları',
      description: 'Amerika Birleşik Devletleri Tıpta uzmanlık sınavlarını (USMLE) geçtim ve ECFMG belgesini aldım.',
      icon: <Award className="w-8 h-8" />,
      location: 'ABD'
    },
    {
      year: '2008',
      title: 'Ondokuz Mayıs Üniversitesi Tıp Fakültesi',
      description: 'Genel Cerrahi Anabilim Dalında yardımcı doçent olarak çalışmaya başladım.',
      icon: <Briefcase className="w-8 h-8" />,
      location: 'Samsun, Türkiye'
    },
    {
      year: '2008 - 2010',
      title: 'New York & SUNY Downstate Medical School',
      description: 'Karaciğer nakli, karaciğer-pankreas safra yolları cerrahisi ve böbrek nakli yan dal eğitimi aldım.',
      icon: <Globe className="w-8 h-8" />,
      location: 'New York, ABD'
    },
    {
      year: '2010',
      title: 'Memorial Sloan Kettering Cancer Center',
      description: 'Karaciğer-pankreas ve kanser cerrahisi ünitesinde gözlemci doktor olarak bulundum.',
      icon: <Globe className="w-8 h-8" />,
      location: 'New York, ABD'
    },
    {
      year: '2012',
      title: 'Doçentlik Unvanı ve FEBS',
      description: 'Genel Cerrahi doçenti oldum. Avrupa Genel Cerrahi bordu sınavını geçerek FEBS ünvanını aldım. OMÜ\'de karaciğer nakli merkezini kurdum.',
      icon: <Award className="w-8 h-8" />,
      location: 'Samsun, Türkiye'
    },
    {
      year: '2016',
      title: 'Kansai Medical University, Japonya',
      description: 'Karaciğer-pankreas cerrahisi bölümünde gözlemci doktor olarak çalıştım.',
      icon: <Globe className="w-8 h-8" />,
      location: 'Japonya'
    },
    {
      year: '2017 - Günümüz',
      title: 'Medical Park Samsun Hastanesi',
      description: 'Genel cerrahi uzmanı olarak çalışmaya devam ediyorum. Laparoskopik karaciğer, pankreas, fıtık ve barsak cerrahisi konusunda birçok ilklere imza attım.',
      icon: <Briefcase className="w-8 h-8" />,
      location: 'Samsun, Türkiye'
    }
  ];

  return (
    <section className="relative bg-slate-50 py-32" id="timeline">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`mb-16 transition-all duration-1000 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-navy-50 text-navy-700 text-sm font-bold uppercase tracking-widest">
                Kariyer
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
              Akademik<br />Yolculuğum
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              30 yılı aşkın eğitim ve deneyim sürecinde edindiğim bilgi birikimi ve uluslararası
              tecrübelerim ile hastalarıma en iyi hizmeti sunmaktayım.
            </p>
          </div>

          {/* Horizontal Scrolling Timeline */}
          <div className="relative">
            {/* Scroll Container */}
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-slate-300 hover:border-navy-600 hover:bg-navy-50 flex items-center justify-center transition-all duration-300 shadow-lg"
                aria-label="Sola kaydır"
              >
                <ChevronLeft className="w-6 h-6 text-slate-700" />
              </button>

              {/* Scroll Container */}
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto pb-8 scrollbar-hide px-12"
              >
                <div className="flex gap-6" style={{ width: 'max-content' }}>
                  {timelineData.map((item, index) => (
                    <TimelineItem key={index} {...item} />
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-slate-300 hover:border-navy-600 hover:bg-navy-50 flex items-center justify-center transition-all duration-300 shadow-lg"
                aria-label="Sağa kaydır"
              >
                <ChevronRight className="w-6 h-6 text-slate-700" />
              </button>
            </div>
          </div>

          {/* Bottom Highlights */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-navy-900 to-navy-700 p-10 text-white text-center">
              <div className="text-5xl font-black mb-4">30+</div>
              <div className="text-white/90 font-bold uppercase tracking-wider text-sm mb-2">Yıllık Deneyim</div>
              <div className="text-white/70 text-sm">Eğitim ve Mesleki Gelişim</div>
            </div>

            <div className="bg-gradient-to-br from-navy-800 to-navy-600 p-10 text-white text-center">
              <div className="text-5xl font-black mb-4">5</div>
              <div className="text-white/90 font-bold uppercase tracking-wider text-sm mb-2">Ülke</div>
              <div className="text-white/70 text-sm">Uluslararası Deneyim</div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-navy-800 p-10 text-white text-center">
              <div className="text-5xl font-black mb-4">İlk</div>
              <div className="text-white/90 font-bold uppercase tracking-wider text-sm mb-2">Başarı</div>
              <div className="text-white/70 text-sm">Orta Karadeniz Karaciğer Nakli</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
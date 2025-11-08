import React from 'react';
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useAnimatedLine } from '../hooks/useAnimatedLine';

const CV: React.FC = () => {
  const [cvRef, cvVisible] = useScrollAnimation();

  // Birleştirilmiş kronolojik timeline data
  const timelineData = [
    {
      year: "2017",
      endYear: "Günümüz",
      title: "Genel Cerrahi Uzmanı",
      institution: "Samsun VM Medikalpark Hastanesi",
      location: "Samsun",
      type: "experience",
      description: "Genel cerrahi alanında uzman hekim olarak görev yapmaktayım.",
      icon: "briefcase"
    },
    {
      year: "2008",
      endYear: "2017",
      title: "Yardımcı Doçent / Doçent",
      institution: "Ondokuz Mayıs Üniversitesi Tıp Fakültesi",
      location: "Samsun",
      type: "experience",
      description: "Akademik kariyer ve cerrahi eğitim faaliyetleri.",
      icon: "briefcase"
    },
    {
      year: "2008",
      endYear: "2010",
      title: "Yan Dal Eğitimi",
      institution: "New York Üniversitesi & SUNY Downstate",
      location: "New York, ABD",
      type: "education",
      description: "Karaciğer nakli ve böbrek nakli yan dal eğitimi.",
      icon: "graduation"
    },
    {
      year: "2005",
      endYear: "2007",
      title: "Araştırmacı/Gözlemci Doktor",
      institution: "Mount Sinai Hastanesi",
      location: "New York, ABD",
      type: "experience",
      description: "Transplantasyon enstitüsünde araştırma ve gözlem.",
      icon: "briefcase"
    },
    {
      year: "1999",
      endYear: "2004",
      title: "Genel Cerrahi Asistanlığı",
      institution: "İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi",
      location: "İstanbul",
      type: "education",
      description: "Genel cerrahi uzmanlık eğitimi.",
      icon: "graduation"
    },
    {
      year: "1992",
      endYear: "1998",
      title: "Tıp Fakültesi",
      institution: "İstanbul Üniversitesi İstanbul Tıp Fakültesi",
      location: "İstanbul",
      type: "education",
      description: "Tıp doktoru eğitimi.",
      icon: "graduation"
    }
  ];

  // useAnimatedLine hook'unu timelineData tanımlandıktan sonra kullan
  const { containerRef, lineHeight, visibleItems, setItemRef } = useAnimatedLine({
    itemCount: timelineData.length,
    itemHeight: 260,
    delay: 200
  });

  const achievementsData = [
    {
      year: "2012",
      title: "FEBS Ünvanı",
      description: "Avrupa Genel Cerrahi Bordu Sınavı"
    },
    {
      year: "2012",
      title: "Doçentlik",
      description: "Genel Cerrahi Doçenti"
    },
    {
      year: "2007",
      title: "USMLE",
      description: "Amerika Birleşik Devletleri Tıpta Uzmanlık Sınavları"
    },
    {
      year: "2012",
      title: "Karaciğer Nakli Merkezi",
      description: "OMÜ'de karaciğer nakli merkezini kurdu"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="cv">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={cvRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              cvVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">Özgeçmiş</span> & Kariyer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto"></div>
          </div>

          {/* Alternating Timeline */}
          <div
            ref={containerRef}
            className={`transition-all duration-1000 delay-200 ease-out ${
              cvVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Kariyer Yolculuğu</h3>
                </div>
              </div>

              <div className="relative max-w-6xl mx-auto">
                {/* Animated Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-gray-200 rounded-full" style={{ height: `${timelineData.length * 260}px` }}>
                  <div
                    className="w-full bg-gradient-to-b from-blue-600 via-emerald-600 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ height: `${lineHeight}px` }}
                  ></div>
                </div>

                <div className="space-y-16">
                  {timelineData.map((item, index) => (
                    <div
                      key={index}
                      ref={setItemRef(index)}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      {/* Content Card */}
                      <div className={`w-5/12 transition-all duration-700 ease-out ${
                        visibleItems[index]
                          ? 'opacity-100 translate-x-0 scale-100'
                          : `opacity-0 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'} scale-95`
                      }`}>
                        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div className="flex flex-col mb-3">
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-3 self-start ${
                              item.type === 'education'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-emerald-100 text-emerald-700'
                            }`}>
                              <Calendar className="w-4 h-4 mr-2" />
                              {item.year} - {item.endYear}
                            </div>
                            <div className="flex items-center text-gray-500 text-sm mb-3">
                              <MapPin className="w-4 h-4 mr-1" />
                              {item.location}
                            </div>
                          </div>

                          <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                          <p className="text-gray-600 font-medium mb-2">{item.institution}</p>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      {/* Timeline Icon */}
                      <div className={`absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-700 ease-out ${
                        item.type === 'education'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                          : 'bg-gradient-to-br from-emerald-500 to-emerald-600'
                      } ${
                        visibleItems[index]
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-0'
                      }`}>
                        {item.icon === 'graduation' ? (
                          <GraduationCap className="w-8 h-8 text-white" />
                        ) : (
                          <Briefcase className="w-8 h-8 text-white" />
                        )}
                      </div>

                      {/* Empty space for alternating layout */}
                      <div className="w-5/12"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className={`mt-12 transition-all duration-1000 delay-600 ease-out ${
            cvVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Başarılar & Sertifikalar</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {achievementsData.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-red-50 p-6 rounded-2xl border border-red-100 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out ${
                      cvVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6'
                    }`}
                    style={{
                      transitionDelay: cvVisible ? `${200 + index * 100}ms` : '0ms'
                    }}
                  >
                    <div className="flex items-center text-sm text-red-600 font-semibold mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.year}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;

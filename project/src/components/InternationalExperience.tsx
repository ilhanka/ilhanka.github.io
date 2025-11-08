import React from 'react';
import { Globe, MapPin, Calendar, Plane, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const InternationalExperience: React.FC = () => {
  const [expRef, expVisible] = useScrollAnimation();

  const experiences = [
    {
      period: "Mayıs-Temmuz 2016",
      title: "Gözlemci Doktor",
      institution: "Kansai Medical University",
      department: "Karaciğer-Pankreas Cerrahisi Bölümü",
      location: "Osaka, Japonya",
      flag: "JP",
      flagIcon: <img src="./flags/japan.svg" alt="Japonya" className="w-20 h-14 md:w-28 md:h-20 lg:w-32 lg:h-22 rounded-lg shadow-lg border border-gray-300 object-cover" />,
      description: "İleri laparoskopik karaciğer ve pankreas cerrahisi teknikleri",
      highlights: ["Robotik cerrahi gözlemi", "Minimal invaziv teknikler", "Hasta bakım protokolleri"]
    },
    {
      period: "Ağustos 2010",
      title: "Gözlemci Doktor",
      institution: "Memorial Sloan Kettering Cancer Center",
      department: "Hepatopancreaticobilier Surgery",
      location: "New York, ABD",
      flag: "US",
      flagIcon: <img src="./flags/usa.svg" alt="Amerika" className="w-20 h-14 md:w-28 md:h-20 lg:w-32 lg:h-22 rounded-lg shadow-lg border border-gray-300 object-cover" />,
      description: "Karaciğer-pankreas ve kanser cerrahisi ünitesinde 2 haftalık gözlem",
      highlights: ["Onkolojik cerrahi", "Multidisipliner yaklaşım", "İleri cerrahi teknikler"]
    },
    {
      period: "Ekim 2008 - Ekim 2010",
      title: "Yan Dal Eğitimi",
      institution: "New York University & SUNY Downstate",
      department: "Karaciğer Nakli ve Böbrek Nakli",
      location: "New York, ABD",
      flag: "US",
      flagIcon: <img src="./flags/usa.svg" alt="Amerika" className="w-20 h-14 md:w-28 md:h-20 lg:w-32 lg:h-22 rounded-lg shadow-lg border border-gray-300 object-cover" />,
      description: "Karaciğer nakli ve böbrek nakli yan dal eğitimi",
      highlights: ["Organ nakli cerrahisi", "Transplantasyon koordinasyonu", "Post-operatif bakım"]
    },
    {
      period: "Kasım 2004 - Haziran 2005",
      title: "Gözlemci",
      institution: "Mount Sinai School of Medicine",
      department: "Recanati-Miller Transplantation Institute",
      location: "New York, ABD",
      flag: "US",
      flagIcon: <img src="./flags/usa.svg" alt="Amerika" className="w-20 h-14 md:w-28 md:h-20 lg:w-32 lg:h-22 rounded-lg shadow-lg border border-gray-300 object-cover" />,
      description: "Transplantasyon enstitüsünde gözlemci olarak çalışma",
      highlights: ["Transplantasyon süreci", "Donor koordinasyonu", "Klinik araştırmalar"]
    },
    {
      period: "Haziran-Ağustos 2003",
      title: "Gözlemci",
      institution: "University of Colorado Medical School",
      department: "Department of Surgery & Transplantation",
      location: "Colorado, ABD",
      flag: "US",
      flagIcon: <img src="./flags/usa.svg" alt="Amerika" className="w-20 h-14 md:w-28 md:h-20 lg:w-32 lg:h-22 rounded-lg shadow-lg border border-gray-300 object-cover" />,
      description: "Cerrahi ve transplantasyon bölümünde gözlem",
      highlights: ["Genel cerrahi", "Transplantasyon cerrahisi", "Araştırma metodolojisi"]
    }
  ];

  const achievements = [
    {
      title: "USMLE Sertifikası",
      year: "2007",
      description: "Amerika Birleşik Devletleri Tıpta Uzmanlık Sınavları",
      icon: Award
    },
    {
      title: "ECFMG Belgesi",
      year: "2007",
      description: "Educational Commission for Foreign Medical Graduates",
      icon: Award
    },
    {
      title: "FEBS Ünvanı",
      year: "2012",
      description: "Fellow of the European Board of Surgery",
      icon: Award
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="international-experience">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={expRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              expVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">Uluslararası</span> Deneyimler
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dünya çapında prestijli tıp merkezlerinde edinilen deneyimler ve uzmanlık eğitimleri
            </p>
          </div>

          {/* Experience Timeline */}
          <div className={`mb-16 transition-all duration-1000 delay-200 ease-out ${
            expVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-700 ease-out ${
                    expVisible
                      ? 'opacity-100 translate-x-0 scale-100'
                      : 'opacity-0 translate-x-8 scale-95'
                  }`}
                  style={{
                    transitionDelay: expVisible ? `${300 + index * 200}ms` : '0ms'
                  }}
                >
                  <div className="grid lg:grid-cols-4 gap-6">
                    {/* Flag and Location */}
                    <div className="lg:col-span-1">
                      <div className="text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start mb-6">
                          {exp.flagIcon || <Globe className="w-12 h-12 text-blue-600" />}
                        </div>
                        <div className="flex items-center justify-center lg:justify-start text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="font-semibold">{exp.location}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start text-blue-600 text-sm font-semibold">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-1">{exp.institution}</h4>
                        <p className="text-gray-600 mb-3">{exp.department}</p>
                        <p className="text-gray-700">{exp.description}</p>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International Achievements */}
          <div className={`transition-all duration-1000 delay-400 ease-out ${
            expVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Uluslararası Sertifikalar</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`text-center p-6 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-700 ease-out ${
                      expVisible
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-6 scale-95'
                    }`}
                    style={{
                      transitionDelay: expVisible ? `${600 + index * 150}ms` : '0ms'
                    }}
                  >
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <achievement.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{achievement.title}</h4>
                    <div className="text-blue-600 font-semibold text-sm mb-2">{achievement.year}</div>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Global Impact Stats */}
          <div className={`mt-16 transition-all duration-1000 delay-600 ease-out ${
            expVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <Globe className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-blue-100">Farklı Ülke</div>
                </div>
                <div>
                  <Plane className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-blue-100">Prestijli Merkez</div>
                </div>
                <div>
                  <Award className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-blue-100">Uluslararası Sertifika</div>
                </div>
                <div>
                  <Calendar className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-blue-100">Yıl Deneyim</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalExperience;

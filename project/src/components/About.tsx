import React from 'react';
import { Award, BookOpen, Heart, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePlusCounter, usePercentageCounter } from '../hooks/useCounterAnimation';

// Schema markup for doctor
const doctorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "İlhan Karabıçak",
  "jobTitle": "Doçent Doktor - Genel Cerrahi Uzmanı",
  "description": "15+ yıl deneyimli genel cerrahi uzmanı. Mount Sinai Hospital ve NYU'da eğitim almış. Karaciğer nakli, pankreas cerrahisi konularında uzman.",
  "url": "https://ilhankarabicak.com",
  "image": "/doctor-photo.jpg",
  "telephone": "+90 362 XXX XX XX",
  "email": "info@ilhankarabicak.com",
  "worksFor": {
    "@type": "MedicalOrganization",
    "name": "VM Medicalpark Samsun Hastanesi",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mimarsinan, Alparslan Blv. No:17",
      "addressLocality": "Atakum",
      "addressRegion": "Samsun",
      "postalCode": "55200",
      "addressCountry": "TR"
    }
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "İstanbul Üniversitesi Tıp Fakültesi"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Mount Sinai Hospital"
    },
    {
      "@type": "EducationalOrganization",
      "name": "New York University"
    }
  ],
  "knowsAbout": [
    "Genel Cerrahi",
    "Karaciğer Nakli",
    "Pankreas Cerrahisi",
    "Safra Kesesi Ameliyatı",
    "Fıtık Ameliyatı",
    "Bariatrik Cerrahi"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Doçentlik",
      "credentialCategory": "Academic Title"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Genel Cerrahi Uzmanlığı",
      "credentialCategory": "Medical Specialty"
    }
  ]
};

const About: React.FC = () => {
  const [aboutRef, aboutVisible] = useScrollAnimation();

  // Counter animations for statistics
  const experienceCounter = usePlusCounter(15, { duration: 2000, delay: 500 });
  const patientsCounter = usePlusCounter(5000, { duration: 2500, delay: 700 });
  const successCounter = usePercentageCounter(98, { duration: 2000, delay: 900 });
  const [statsRef, statsVisible] = useScrollAnimation();

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />

      <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={aboutRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">Samsun'da Deneyimli</span> Genel Cerrahi Uzmanı
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div 
              className={`space-y-6 transition-all duration-1000 delay-200 ease-out ${
                aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <span className="text-blue-700 font-semibold">6 Temmuz 1974</span> tarihinde Giresun'da doğdum.
                  İlkokulu Yeşil Giresun İlkokulu, ortaokul ve liseyi Giresun Hamdi Bozbağ Anadolu Lisesi'nde okudum.
                </p>

                <p>
                  <span className="text-blue-700 font-semibold">İstanbul Üniversitesi İstanbul Tıp Fakültesi'nde</span> (1992-1998)
                  tıp eğitimimi tamamladım. Genel cerrahi asistanlık eğitimini İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi'nde aldım (1999-2004).
                </p>

                <p>
                  <span className="text-emerald-700 font-semibold">2005-2007 yılları arasında New York Üniversitesi Mount Sinai Hastanesinde</span>
                  karaciğer-böbrek nakli ve karaciğer-pankreas cerrahisi merkezinde çalıştım.
                  2007 yılında Amerika Birleşik Devletleri Tıpta uzmanlık sınavlarını (USMLE) geçtim.
                </p>

                <p>
                  <span className="text-red-600 font-semibold">Ondokuz Mayıs Üniversitesi'nde</span> karaciğer nakli merkezini 2012 yılında kurdum.
                  Orta ve Batı Karadeniz Bölgesinde ilk karaciğer naklini yaptım.
                  Dünyada kist hidatik hastalığında tek port laparoskopik cerrahiyi (SILS) ilk ben uyguladım.
                </p>
              </div>

              {/* Achievement Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <Award className="w-8 h-8 text-blue-600 mb-2" />
                  <div className="text-sm font-semibold text-blue-800">Uluslararası Sertifikalar</div>
                  <div className="text-xs text-blue-600">Memorial Sloan Kettering</div>
                </div>
                
                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-emerald-600 mb-2" />
                  <div className="text-sm font-semibold text-emerald-800">Bilimsel Yayınlar</div>
                  <div className="text-xs text-emerald-600">50+ Makale</div>
                </div>
              </div>
            </div>

            {/* Professional Image */}
            <div 
              className={`relative transition-all duration-1000 delay-400 ease-out ${
                aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="./ilhan-karabicak.jpg"
                    alt="Dr. İlhan Karabıçak - Professional"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                {/* Floating Quote */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                  <div className="text-sm text-gray-600 italic leading-relaxed">
                    "Her hasta benim için özeldir. Onların iyileşmesi, benim en büyük başarım."
                  </div>
                  <div className="mt-2 text-xs text-blue-600 font-semibold">
                    - Doç. Dr. İlhan Karabıçak
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div 
            ref={statsRef}
            className={`mt-20 transition-all duration-1000 ease-out ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-blue-50 via-white to-emerald-50 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <div
                    ref={experienceCounter.ref}
                    className="text-3xl font-bold text-blue-600 mb-2 tabular-nums"
                  >
                    {experienceCounter.value}
                  </div>
                  <div className="text-gray-600">Yıllık Tecrübe</div>
                  <div className="text-sm text-gray-500">Genel Cerrahi Alanında</div>
                </div>

                <div className="text-center group">
                  <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div
                    ref={patientsCounter.ref}
                    className="text-3xl font-bold text-emerald-600 mb-2 tabular-nums"
                  >
                    {patientsCounter.value}
                  </div>
                  <div className="text-gray-600">Mutlu Hasta</div>
                  <div className="text-sm text-gray-500">Başarılı Tedavi Süreci</div>
                </div>

                <div className="text-center group">
                  <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-red-600" />
                  </div>
                  <div
                    ref={successCounter.ref}
                    className="text-3xl font-bold text-red-600 mb-2 tabular-nums"
                  >
                    {successCounter.value}
                  </div>
                  <div className="text-gray-600">Başarı Oranı</div>
                  <div className="text-sm text-gray-500">Hasta Memnuniyeti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
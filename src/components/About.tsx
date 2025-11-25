import React from 'react';
import { Award, BookOpen, Heart, Users, Globe, Stethoscope } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

const About: React.FC = () => {
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  const [experienceRef, experienceCount] = useCounterAnimation({ endValue: 20, suffix: '+', duration: 2000 });
  const [patientsRef, patientsCount] = useCounterAnimation({ endValue: 5000, suffix: '+', duration: 2500 });
  const [satisfactionRef, satisfactionCount] = useCounterAnimation({ endValue: 98, suffix: '%', duration: 2000 });

  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-32" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Asymmetric Header */}
          <div 
            ref={aboutRef}
            className={`mb-20 transition-all duration-1000 ease-out ${
              aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-navy-50 text-navy-700 text-sm font-bold uppercase tracking-widest">
                Hakkımda
              </span>
            </div>
                <h2 className="text-5xl lg:text-8xl font-black text-slate-900 mb-6 leading-tight">
                  Mesleki<br />Yolculuğum
                </h2>
              </div>
              <div className="lg:col-span-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  20 yılı aşkın eğitim ve deneyim sürecinde, uluslararası standartlarda 
                  sağlık hizmeti sunmak için sürekli kendimi geliştirmekteyim.
                </p>
              </div>
            </div>
          </div>

          {/* Mosaic Image Grid */}
          <div className="grid lg:grid-cols-12 gap-6 mb-20">
            {/* Large Image */}
            <div className="lg:col-span-8 relative group">
              <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src="/ilhan-karabicak.jpg"
                  alt="Dr. İlhan Karabıçak"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-2xl font-black mb-2">Doç. Dr. İlhan Karabıçak</div>
                  <div className="text-sm text-gray-200">Genel Cerrahi Uzmanı</div>
                </div>
              </div>
            </div>

            {/* Small Images Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-6">
              <div className="relative group">
                <div className="aspect-square overflow-hidden bg-slate-200">
                  <img
                    src="/gallery/11fad331-e36b-46a4-8ae6-d7ae5044b7a0.jpeg"
                    alt="Medical"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300"></div>
              </div>
              <div className="relative group">
                <div className="aspect-square overflow-hidden bg-slate-200">
                  <img
                    src="/gallery/463b1c90-43a4-4eab-a41e-4a5c98cedeb6.jpeg"
                    alt="Medical"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-colors duration-300"></div>
              </div>
              <div className="relative group col-span-2">
                <div className="aspect-[2/1] overflow-hidden bg-slate-200">
                  <img
                    src="/ilhankarabicak_photos/4.jpg
                    alt="Medical"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300"></div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6 text-base text-gray-700 leading-relaxed">
                <p className="leading-relaxed">
                  6 Temmuz 1974 tarihinde Giresun'da doğdum. İlkokulu Yeşil Giresun İlkokulu, ortaokul ve liseyi Giresun Hamdi Bozbağ Anadolu Lisesi'nde okudum.
                </p>

                <p className="leading-relaxed">
                  Tıp Fakültesini <span className="font-bold text-slate-900">İstanbul Üniversitesi İstanbul Tıp Fakültesi'nde</span> (1992 – 1998) okudum. Genel cerrahi asistanlık eğitimini <span className="font-bold text-slate-900">İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi'nde</span> aldım (1999 – 2004).
                </p>

                <p className="leading-relaxed">
                  Aralık 2004 - Temmuz 2007 yılları arasında <span className="font-bold text-slate-900">New York Üniversitesi Mount Sinai Hastanesinde</span> karaciğer-böbrek nakli ve karaciğer–pankreas-safra yolları cerrahisi merkezinde çalıştım.
                </p>

                <p className="leading-relaxed">
                  2007 yılında Amerika Birleşik Devletleri Tıpta uzmanlık sınavlarını (USMLE) geçtim ve ECFMG belgesini aldım.
                </p>

                <p className="leading-relaxed">
                  Eylül 2007 - Nisan 2008 tarihleri arasında Özel İstanbul Merter Dr. Ahmet Ermiş ve Hizmet hastanesinde çalıştım.
                </p>

                <p className="leading-relaxed">
                  Nisan 2008 tarihinde <span className="font-bold text-slate-900">Ondokuz Mayıs Üniversitesi Tıp Fakültesi Genel Cerrahi Anabilim Dalı'nda</span> yardımcı doçent olarak çalışmaya başladım.
                </p>

                <p className="leading-relaxed">
                  Ekim 2008- Ekim 2010 tarihleri arasında New York Üniversitesi Tıp Fakültesinde karaciğer nakli ve karaciğer–pankreas safra yolları cerrahisi bölümünde yan dal eğitimi, State University of New York Downstate Medical School'da böbrek nakli yan dal eğitimi aldım.
                </p>

                <p className="leading-relaxed">
                  Ağustos 2010 tarihinde <span className="font-bold text-slate-900">New York Sloan Kettering Memorial Hospital'da</span> karaciğer-pankreas ve kanser cerrahisi ünitesinde 2 hafta gözlemci doktor olarak bulundum.
                </p>

                <p className="leading-relaxed">
                  Eylül 2012 tarihinde <span className="font-bold text-slate-900">Genel Cerrahi doçenti</span> oldum. 22 Kasım 2012 tarihinde Avrupa Genel Cerrahi bordu sınavını geçerek <span className="font-bold text-slate-900">FEBS ünvanını</span> aldım.
                </p>

                <p className="leading-relaxed">
                  1 Mayıs- 30 Haziran 2016 tarihlerinde <span className="font-bold text-slate-900">Japonya Kansai Medical Universitesi</span> karaciğer-pankreas cerrahisi bölümünde gözlemci doktor olarak çalıştım.
                </p>

                <p className="leading-relaxed">
                  Ondokuz Mayıs Üniversitesi (OMÜ) Tıp Fakültesi'nde karaciğer nakli merkezini 2012 yılında kurdum. <span className="text-navy-600 font-bold">Orta ve Batı Karadeniz Bölgesinde ilk karaciğer naklini yaptım.</span>
                </p>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                <p className="leading-relaxed">
                  Teknolojik gelişmeleri çok yakından takip ediyorum. <span className="text-navy-600 font-bold">Laparoskopik karaciğer, pankreas, fıtık ve barsak cerrahisi konusunda birçok ilklere imza attım.</span> Yaptığım ameliyatları anlatmak üzere uluslararası birçok kongrelerde konuşma yapmak üzere davet edildim.
                </p>

                <p className="leading-relaxed">
                  Dünyada kist hidatik hastalığında (köpek kisti) tek port laparoskopik cerrahiyi (SILS) ilk ben uyguladım ve ilk vaka olarak uluslararası tıbbi dergilerde yayınladım.
                </p>

                <p className="leading-relaxed">
                  SILS karaciğer ve pankreas cerrahisi konusunda Türkiye'deki en büyük, Avrupa'da da önde gelen bir seriye sahibim.
                </p>

                <p className="leading-relaxed">
                  Mart 2017 tarihinden beri <span className="font-bold text-slate-900">Samsun VM Medikalpark hastanesinde</span> çalışıyorum.
                </p>
              </div>

              {/* Quote Card */}
              <div className="bg-gradient-to-br from-navy-900 to-navy-700 p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <Stethoscope className="w-12 h-12 mb-6 text-blue-300" />
                  <p className="text-xl leading-relaxed italic mb-6">
                    "Her hasta için en uygun tedavi yöntemini bilimsel veriler ışığında belirlemek, 
                    mesleki sorumluluğumun temelidir."
                  </p>
                  <div className="text-sm font-bold text-blue-300 uppercase tracking-wider">
                    Doç. Dr. İlhan Karabıçak
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="space-y-6">
              <div className="bg-white p-8 border-2 border-slate-200 hover:border-navy-600 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-black text-slate-900 mb-2">Uluslararası</div>
                <div className="text-sm text-gray-600">New York Üniversitesi, ABD</div>
                <div className="text-sm text-gray-600">State University of New York, ABD</div>
                <div className="text-sm text-gray-600">Memorial Sloan Kettering Kanser Merkezi, ABD</div>
                <div className="text-sm text-gray-600">Kansai Tıp Fakültesi, Osaka, JAPONYA</div>
              </div>
              
              <div className="bg-white p-8 border-2 border-slate-200 hover:border-navy-600 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-700 to-blue-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-black text-slate-900 mb-2">Bilimsel</div>
                <div className="text-sm text-gray-600">45+ Uluslararası Makale</div>
                <div className="text-sm text-gray-600">1000+ Atıf</div>
              </div>

              <div className="bg-white p-8 border-2 border-slate-200 hover:border-navy-600 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-navy-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-black text-slate-900 mb-2">Başarı</div>
                <div className="text-sm text-gray-600">Avrupa Genel Cerrah Board Sertifikası (FEBS)</div>
              </div>
            </div>
          </div>

          {/* Stats Section - Full Width Gradient */}
          <div 
            ref={statsRef}
            className={`bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 p-16 transition-all duration-1000 ease-out ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center" ref={experienceRef as React.RefObject<HTMLDivElement>}>
                <div className="text-7xl font-black text-white mb-4">
                  {experienceCount}
                </div>
                <div className="text-white/90 font-bold mb-2 uppercase tracking-wider text-sm">Yıllık Deneyim</div>
                <div className="text-white/70 text-sm">Genel Cerrahi Alanında</div>
              </div>

              <div className="text-center" ref={patientsRef as React.RefObject<HTMLDivElement>}>
                <div className="text-7xl font-black text-white mb-4">
                  {patientsCount}
                </div>
                <div className="text-white/90 font-bold mb-2 uppercase tracking-wider text-sm">Başarılı Tedavi</div>
                <div className="text-white/70 text-sm">Hasta Sayısı</div>
              </div>

              <div className="text-center" ref={satisfactionRef as React.RefObject<HTMLDivElement>}>
                <div className="text-7xl font-black text-white mb-4">
                  {satisfactionCount}
                </div>
                <div className="text-white/90 font-bold mb-2 uppercase tracking-wider text-sm">Başarı Oranı</div>
                <div className="text-white/70 text-sm">Hasta Memnuniyeti</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
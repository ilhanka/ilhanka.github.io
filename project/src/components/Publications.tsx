import React from 'react';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePlusCounter } from '../hooks/useCounterAnimation';

// Schema markup for publications
const createPublicationSchema = (publications: any[]) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "İlhan Karabıçak",
  "jobTitle": "Doçent Doktor",
  "hasCredential": publications.map(pub => ({
    "@type": "ScholarlyArticle",
    "name": pub.title,
    "author": {
      "@type": "Person",
      "name": "İlhan Karabıçak"
    },
    "datePublished": pub.year,
    "publisher": {
      "@type": "Organization",
      "name": pub.journal
    },
    "about": pub.category,
    "url": pub.link || "#"
  }))
});

const Publications: React.FC = () => {
  const [pubRef, pubVisible] = useScrollAnimation();

  const publications = [
    {
      year: "2022",
      title: "Does Neutrophil-Lymphocyte Ratio Correlate with the Improvement of Hepatosteatosis after Laparoscopic Sleeve Gastrectomy?",
      authors: "Yildirim K, Karabicak İ, Ulu EK, Aktimur R, Gursel MF, Malazgirt Z",
      journal: "Obes Facts",
      volume: "15(5):711-716",
      category: "Bariatrik Cerrahi",
      link: "https://karger.com/ofa/article/15/5/711/828899"
    },
    {
      year: "2022",
      title: "Retrospective analysis of open preperitoneal mesh repair of complex inguinal hernias",
      authors: "Malazgirt Z, Yildirim K, Karabicak I, Gursel MF, Acikgoz A, Ozturk H",
      journal: "Hernia",
      volume: "26(4):1121-1130",
      category: "Fıtık Cerrahisi",
      link: "https://link.springer.com/article/10.1007/s10029-022-02595-w"
    },
    {
      year: "2021",
      title: "Three-year outcome after anterior component separation repair of giant ventral hernias: A retrospective analysis of the original technique without mesh",
      authors: "Kesicioglu T, Yildirim K, Yuruker S, Karabicak I, Koc Z, Erzurumlu K, Malazgirt Z",
      journal: "Asian J Surg",
      volume: "S1015-9584(21)00519-4",
      category: "Fıtık Cerrahisi",
      link: "https://www.sciencedirect.com/science/article/pii/S1015958421005194"
    },
    {
      year: "2017",
      title: "Comparison of surgical outcomes of three different stump closure techniques during distal pancreatectomy",
      authors: "Karabicak I, Satoi S, Yanagimoto H, Yamamoto T, Yamaki S, Kosaka H, Hirooka S, Kotsuka M, Michiura T, Inoue K, Matsui Y, Kon M",
      journal: "Pancreatology",
      volume: "17(3):497-503",
      category: "Pankreas Cerrahisi",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S1424390317300716"
    },
    {
      year: "2017",
      title: "Single-Port Laparoscopic Liver Resection: Largest Turkish Experience",
      authors: "Karabicak I, Karabulut K, Yuruker S, Kesicioglu T, Ozen N",
      journal: "Indian J Surg",
      volume: "79(2):111-115",
      category: "Karaciğer Cerrahisi",
      link: "https://link.springer.com/article/10.1007/s12262-015-1435-0"
    },
    {
      year: "2016",
      title: "Risk factors for latent distant organ metastasis detected by staging laparoscopy in patients with radiologically defined locally advanced pancreatic ductal adenocarcinoma",
      authors: "Karabicak I, Satoi S, Yanagimoto H, Yamamoto T, Hirooka S, Yamaki S, Kosaka H, Inoue K, Matsui Y, Kon M",
      journal: "J Hepatobiliary Pancreat Sci",
      volume: "23(12):750-755",
      category: "Pankreas Cerrahisi",
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jhbp.408"
    },
    {
      year: "2016",
      title: "Acute median arcuate ligament syndrome after pancreaticoduodenectomy",
      authors: "Karabicak I, Satoi S, Yanagimoto H, Yamamoto T, Hirooka S, Yamaki S, Kosaka H, Kotsuka M, Inoue K, Matsui Y, Kon M",
      journal: "Surg Case Rep",
      volume: "2(1):113",
      category: "Pankreas Cerrahisi",
      link: "https://link.springer.com/article/10.1186/s40792-016-0242-6"
    },
    {
      year: "2016",
      title: "Single port laparoscopic liver surgery: A minireview",
      authors: "Karabicak I, Karabulut K",
      journal: "World J Gastrointest Endosc",
      volume: "8(12):444-50",
      category: "Karaciğer Cerrahisi",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4919693/"
    },
    {
      year: "2016",
      title: "Is single-port laparoscopy feasible after liver transplant?",
      authors: "Karabicak I, Karabulut K",
      journal: "Pediatr Transplant",
      volume: "20(5):727-8",
      category: "Karaciğer Nakli",
      link: "https://openurl.ebsco.com/EPDB%3Agcd%3A16%3A5642208/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A116619573&crl=c&link_origin=scholar.google.com"
    }
  ];

  const categories = ["Tümü", "Karaciğer Cerrahisi", "Pankreas Cerrahisi", "Fıtık Cerrahisi", "Bariatrik Cerrahi", "Karaciğer Nakli"];
  const [selectedCategory, setSelectedCategory] = React.useState("Tümü");
  const [showAll, setShowAll] = React.useState(false);

  const filteredPublications = selectedCategory === "Tümü"
    ? publications
    : publications.filter(pub => pub.category === selectedCategory);

  const displayedPublications = showAll ? filteredPublications : filteredPublications.slice(0, 3);

  // Counter animations for summary stats
  const publicationsCounter = usePlusCounter(publications.length, { duration: 2000, delay: 500 });
  const specialtiesCounter = usePlusCounter(5, { duration: 1500, delay: 700 });
  const experienceCounter = usePlusCounter(10, { duration: 1800, delay: 900 });

  return (
    <section className="py-20 bg-white" id="publications">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={pubRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              pubVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">Bilimsel</span> Yayınlar
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Uluslararası dergilerde yayınlanan bilimsel makaleler ve araştırmalar
            </p>
          </div>

          {/* Category Filter */}
          <div className={`mb-12 transition-all duration-1000 delay-200 ease-out ${
            pubVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowAll(false); // Kategori değiştiğinde showAll'ı sıfırla
                  }}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Publications Grid */}
          <div className={`transition-all duration-1000 delay-400 ease-out ${
            pubVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid gap-6">
              {displayedPublications.map((pub, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center text-sm text-blue-600 font-semibold">
                          <Calendar className="w-4 h-4 mr-1" />
                          {pub.year}
                        </div>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                          {pub.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                        {pub.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3">
                        <span className="font-semibold">Yazarlar:</span> {pub.authors}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500">
                        <span className="font-semibold text-blue-600">{pub.journal}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{pub.volume}</span>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => window.open(pub.link, '_blank')}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-semibold">Detay</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {filteredPublications.length > 3 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300"
                >
                  {showAll ? (
                    <>
                      <span>Daha Az Göster</span>
                      <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Daha Fazla Göster ({filteredPublications.length - 3} yayın daha)</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Summary Stats */}
          <div className={`mt-16 transition-all duration-1000 delay-600 ease-out ${
            pubVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-gradient-to-r from-blue-50 via-white to-emerald-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div
                    ref={publicationsCounter.ref}
                    className="text-3xl font-bold text-blue-600 mb-2 tabular-nums"
                  >
                    {publicationsCounter.value}
                  </div>
                  <div className="text-gray-600">Bilimsel Makale</div>
                </div>
                <div>
                  <div
                    ref={specialtiesCounter.ref}
                    className="text-3xl font-bold text-emerald-600 mb-2 tabular-nums"
                  >
                    {specialtiesCounter.value}
                  </div>
                  <div className="text-gray-600">Farklı Uzmanlık Alanı</div>
                </div>
                <div>
                  <div
                    ref={experienceCounter.ref}
                    className="text-3xl font-bold text-red-600 mb-2 tabular-nums"
                  >
                    {experienceCounter.value}
                  </div>
                  <div className="text-gray-600">Yıllık Araştırma Deneyimi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;

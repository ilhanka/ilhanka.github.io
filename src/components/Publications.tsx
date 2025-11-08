import React, { useState } from 'react';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link: string;
}

const Publications: React.FC = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [showAll, setShowAll] = useState(false);

  const publications: Publication[] = [
    {
      title: 'Does Neutrophil-Lymphocyte Ratio Correlate with the Improvement of Hepatosteatosis after Laparoscopic Sleeve Gastrectomy?',
      authors: 'Yildirim K, Karabicak İ, Ulu EK, Aktimur R, Gursel MF, Malazgirt Z',
      journal: 'Obesity Facts, 2022;15(5):711-716',
      year: '2022',
      link: 'https://karger.com/ofa/article/15/5/711/828899'
    },
    {
      title: 'Retrospective analysis of open preperitoneal mesh repair of complex inguinal hernias',
      authors: 'Malazgirt Z, Yildirim K, Karabicak I, Gursel MF, Acikgoz A, Ozturk H',
      journal: 'Hernia, 2022 Aug;26(4):1121-1130',
      year: '2022',
      link: 'https://link.springer.com/article/10.1007/s10029-022-02595-w'
    },
    {
      title: 'Three-year outcome after anterior component separation repair of giant ventral hernias: A retrospective analysis of the original technique without mesh',
      authors: 'Kesicioglu T, Yildirim K, Yuruker S, Karabicak I, Koc Z, Erzurumlu K, Malazgirt Z',
      journal: 'Asian J Surg, 2021 Sep 7:S1015-9584(21)00519-4',
      year: '2021',
      link: 'https://www.sciencedirect.com/science/article/pii/S1015958421005194'
    },
    {
      title: 'Comparison of surgical outcomes of three different stump closure techniques during distal pancreatectomy',
      authors: 'Karabicak I, Satoi S, Yanagimoto H, Yamamoto T, Yamaki S, Kosaka H, Hirooka S, Kotsuka M, Michiura T, Inoue K, Matsui Y, Kon M',
      journal: 'Pancreatology, 2017 May-Jun;17(3):497-503',
      year: '2017',
      link: 'https://www.sciencedirect.com/science/article/abs/pii/S1424390317300716'
    },
    {
      title: 'Single-Port Laparoscopic Liver Resection: Largest Turkish Experience',
      authors: 'Karabicak I, Karabulut K, Yuruker S, Kesicioglu T, Ozen N',
      journal: 'Indian J Surg, 2017 Apr;79(2):111-115',
      year: '2017',
      link: 'https://link.springer.com/article/10.1007/s12262-015-1435-0'
    },
    {
      title: 'Risk factors for latent distant organ metastasis detected by staging laparoscopy in patients with radiologically defined locally advanced pancreatic ductal adenocarcinoma',
      authors: 'Karabicak I, Satoi S, Yanagimoto H, Yamamoto T, Hirooka S, Yamaki S, Kosaka H, Inoue K, Matsui Y, Kon M',
      journal: 'J Hepatobiliary Pancreat Sci, 2016 Dec;23(12):750-755',
      year: '2016',
      link: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/jhbp.408'
    },
    {
      title: 'Acute median arcuate ligament syndrome after pancreaticoduodenectomy',
      authors: 'Karabicak I, Satoi S, Yanagimoto H, Yamamoto T, Hirooka S, Yamaki S, Kosaka H, Kotsuka M, Inoue K, Matsui Y, Kon M',
      journal: 'Surg Case Rep, 2016 Dec;2(1):113',
      year: '2016',
      link: 'https://link.springer.com/article/10.1186/s40792-016-0242-6'
    },
    {
      title: 'Letter to the Editor: Objective Assessment of Surgical Restaging after Concurrent Chemoradiation for Locally Advanced Pancreatic Cancer',
      authors: 'Karabicak I',
      journal: 'J Korean Med Sci, 2016 Sep;31(9):1503-4',
      year: '2016',
      link: 'https://synapse.koreamed.org/articles/1023090'
    },
    {
      title: 'Single port laparoscopic liver surgery: A minireview',
      authors: 'Karabicak I, Karabulut K',
      journal: 'World J Gastrointest Endosc, 2016 Jun 25;8(12):444-50',
      year: '2016',
      link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4919693/'
    },
    {
      title: 'Is single-port laparoscopy feasible after liver transplant?',
      authors: 'Karabicak I, Karabulut K',
      journal: 'Pediatr Transplant, 2016 Aug;20(5):727-8',
      year: '2016',
      link: 'https://openurl.ebsco.com/EPDB%3Agcd%3A16%3A5642208/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A116619573&crl=c&link_origin=scholar.google.com'
    }
  ];

  const displayedPublications = showAll ? publications : publications.slice(0, 6);

  return (
    <section className="py-32 bg-white" id="publications">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`mb-20 transition-all duration-1000 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-navy-50 text-navy-700 text-sm font-bold uppercase tracking-widest">
                Araştırma
              </span>
            </div>
                <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
                  Bilimsel<br />Yayınlarım
                </h2>
              </div>
              <div className="lg:col-span-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Uluslararası saygın dergilerde yayınlanmış, alanımda öncü ve referans olan
                  çalışmalarımdan bazıları.
                </p>
              </div>
            </div>
          </div>

          {/* Grid Layout - 2x3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {displayedPublications.map((pub, index) => (
              <PublicationCard key={index} publication={pub} index={index} />
            ))}
          </div>

          {/* Show More/Less Button */}
          {publications.length > 6 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-4 font-black text-base hover:bg-navy-600 transition-all duration-300"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-5 h-5" />
                    Daha Az Göster
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5" />
                    Tüm Yayınları Göster ({publications.length})
                  </>
                )}
              </button>
            </div>
          )}

          {/* Stats - Gradient Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-navy-900 to-navy-700 p-10 text-white text-center flex flex-col items-center justify-center">
              <BookOpen className="w-12 h-12 mx-auto mb-6 text-blue-300" />
              <div className="text-5xl font-black mb-4">50+</div>
              <div className="text-white/90 font-bold uppercase tracking-wider text-sm mb-2">Bilimsel Makale</div>
              <div className="text-white/70 text-sm">Uluslararası Dergilerde</div>
            </div>

            <div className="bg-gradient-to-br from-navy-800 to-navy-600 p-10 text-white text-center flex flex-col items-center justify-center">
              <div className="text-5xl font-black mb-4">100+</div>
              <div className="text-white/90 font-bold uppercase tracking-wider text-sm mb-2">Atıf Sayısı</div>
              <div className="text-white/70 text-sm">Bilimsel Etki</div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-navy-800 p-10 text-white text-center flex flex-col items-center justify-center">
              <div className="text-5xl font-black mb-4">10+</div>
              <div className="text-white/90 font-bold uppercase tracking-wider text-sm mb-2">Kongre</div>
              <div className="text-white/70 text-sm">Konuşma ve Sunum</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PublicationCardProps {
  publication: Publication;
  index: number;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication, index }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group bg-white border-2 border-slate-200 hover:border-navy-600 transition-all duration-300 p-8 h-full flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Year Badge */}
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-5 h-5 text-navy-600" />
        <span className="px-3 py-1 bg-navy-50 text-navy-700 text-sm font-bold">
          {publication.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-navy-600 transition-colors leading-tight">
        {publication.title}
      </h3>

      {/* Authors */}
      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
        {publication.authors}
      </p>

      {/* Journal */}
      <div className="text-sm text-gray-500 mb-6 font-medium">
        {publication.journal}
      </div>

      {/* Link */}
      <a
        href={publication.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-700 font-bold text-sm uppercase tracking-wider transition-colors group/link"
      >
        <span>Yayını İncele</span>
        <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
      </a>

      {/* Hover Line */}
      <div className="mt-6 h-1 bg-gradient-to-r from-navy-600 to-navy-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
};

export default Publications;
import React, { useState } from 'react';
import { X, Camera } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Photo {
  id: string;
  src: string;
  alt: string;
  orientation: 'portrait' | 'landscape' | 'square';
}

const Gallery: React.FC = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      id: '1',
      src: `${import.meta.env.BASE_URL}gallery/11fad331-e36b-46a4-8ae6-d7ae5044b7a0.jpeg`,
      alt: 'Doç. Dr. İlhan Karabıçak',
      orientation: 'portrait'
    },
    {
      id: '2',
      src: `${import.meta.env.BASE_URL}gallery/463b1c90-43a4-4eab-a41e-4a5c98cedeb6.jpeg`,
      alt: 'Doç. Dr. İlhan Karabıçak',
      orientation: 'landscape'
    },
    {
      id: '3',
      src: `${import.meta.env.BASE_URL}gallery/1.jpeg`,
      alt: 'Doç. Dr. İlhan Karabıçak',
      orientation: 'portrait'
    },
    {
      id: '4',
      src: `${import.meta.env.BASE_URL}gallery/60e08c26-8d84-49c9-9a48-443e4be973bf.jpeg`,
      alt: 'Doç. Dr. İlhan Karabıçak',
      orientation: 'square'
    },
    {
      id: '5',
      src: `${import.meta.env.BASE_URL}gallery/2.jpeg`,
      alt: 'Doç. Dr. İlhan Karabıçak',
      orientation: 'landscape'
    },
    {
      id: '6',
      src: `${import.meta.env.BASE_URL}gallery/72174199-75ca-4772-812b-2908c2c9f207.jpeg`,
      alt: 'Doç. Dr. İlhan Karabıçak',
      orientation: 'portrait'
    },
    {
      id: '7',
      src: `${import.meta.env.BASE_URL}gallery/fead025f-197a-48f9-ba37-66243937f703.jpeg`,
      alt: 'Doç. Dr. İlhan Karabıçak',
      orientation: 'portrait'
    },
    {
      id: '8',
      src: `${import.meta.env.BASE_URL}gallery/4.png`,
      alt: 'Doç. Dr. İlhan Karabıçak',
      orientation: 'landscape'
    }
  ];

  return (
    <>
      <section className="py-32 bg-gray-50" id="gallery">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div
              ref={headerRef}
              className={`text-center mb-16 transition-all duration-1000 ease-out ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="h-1 w-16 bg-navy-600"></div>
              <span className="text-sm font-semibold text-navy-600 uppercase tracking-wider">Galeri</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight text-center">
              Mesleki<br />Hayatımdan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-center">
              Çalışma ortamımdan ve mesleki hayatımdan kareler
            </p>
          </div>

            {/* Symmetric Grid Layout */}
            <div className="space-y-6">
              {/* First Row - 2 photos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {photos.slice(0, 2).map((photo, index) => (
                  <PhotoCard
                    key={photo.id}
                    photo={photo}
                    index={index}
                    onClick={() => setSelectedPhoto(photo)}
                  />
                ))}
              </div>

              {/* Second Row - 3 photos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {photos.slice(2, 5).map((photo, index) => (
                  <PhotoCard
                    key={photo.id}
                    photo={photo}
                    index={index + 2}
                    onClick={() => setSelectedPhoto(photo)}
                  />
                ))}
              </div>

              {/* Third Row - 2 photos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {photos.slice(5, 7).map((photo, index) => (
                  <PhotoCard
                    key={photo.id}
                    photo={photo}
                    index={index + 5}
                    onClick={() => setSelectedPhoto(photo)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

interface PhotoCardProps {
  photo: Photo;
  index: number;
  onClick: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, index, onClick }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden transition-all duration-300 ease-out cursor-pointer border-2 border-gray-200 hover:border-navy-600 bg-white ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative w-full h-full aspect-[4/3]">
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white">
            <Camera className="w-12 h-12 mx-auto mb-3" />
            <span className="text-sm font-bold uppercase tracking-wider">Fotoğrafı Büyüt</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

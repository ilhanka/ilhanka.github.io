import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Testimonial {
  name: string;
  surgery: string;
  content: string;
  rating: number;
  date: string;
}

const Testimonials: React.FC = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      name: "Ebru T.",
      surgery: "Safra Yolu Operasyonu",
      content: "Ameliyat sürecim boyunca, sadece doktor değil; bir güven kaynağı oldunuz. Bilgilendirme konusundaki hassasiyetiniz ve ameliyat sonrası takibinizdeki titizlik gerçekten değerli. Size minnettarım.",
      rating: 5,
      date: "Kasım 2024"
    },
    {
      name: "Mehmet K.",
      surgery: "Karaciğer Cerrahisi",
      content: "Karmaşık bir operasyon geçirdim ama Doç. Dr. Karabıçak'ın deneyimi sayesinde her şey yolunda gitti. Hem kendisinin hem de ekibinin profesyonelliği mükemmeldi. Kesinlikle tavsiye ederim.",
      rating: 5,
      date: "Ekim 2024"
    },
    {
      name: "Ayşe M.",
      surgery: "Pankreas Cerrahisi",
      content: "Zorlu bir süreçti ama doktorumun yaklaşımı ve tedavi kalitesi sayesinde bugün çok daha iyi hissediyorum. İnsan odaklı yaklaşımı ve tıbbi bilgisinin birleşimi harika.",
      rating: 5,
      date: "Eylül 2024"
    },
    {
      name: "Hasan Y.",
      surgery: "Laparoskopik Cerrahi",
      content: "Minimal invaziv yöntemle yapılan ameliyatım çok başarılıydı. İyileşme sürecim beklenenden çok daha hızlı oldu. Doktorumun deneyimi ve modern teknikleri kullanması gerçekten fark yaratıyor.",
      rating: 5,
      date: "Ağustos 2024"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="testimonials">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Hasta <span className="text-blue-600">Geri Bildirimleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Hastalarımın deneyimleri ve geri bildirimleri, 
              çalışmalarımın en değerli ödülüdür.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto mt-6"></div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-8 lg:p-12">
                    <div className="text-center">
                      {/* Quote Icon */}
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Quote className="w-8 h-8 text-blue-600" />
                      </div>

                      {/* Rating Stars */}
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="space-y-2">
                        <div className="text-xl font-semibold text-gray-800">
                          {testimonial.name}
                        </div>
                        <div className="text-blue-600 font-medium">
                          {testimonial.surgery}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Trust Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-emerald-50 px-6 py-3 rounded-full border border-emerald-200">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              <span className="text-emerald-700 font-semibold">
                4.9/5 Ortalama Hasta Memnuniyeti
              </span>
              <span className="text-emerald-600 text-sm">
                (248 değerlendirme)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
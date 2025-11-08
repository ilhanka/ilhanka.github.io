import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Calendar,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { sendContactEmail } from '../services/emailService';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Local Business Schema Markup
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Doç. Dr. İlhan Karabıçak - Genel Cerrahi Uzmanı",
  "description": "Samsun'da genel cerrahi uzmanı. Karaciğer nakli, pankreas cerrahisi, safra kesesi ameliyatı konularında deneyimli doktor.",
  "url": "https://ilhankarabicak.com",
  "telephone": "+90 362 XXX XX XX",
  "email": "info@ilhankarabicak.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mimarsinan, Alparslan Blv. No:17",
    "addressLocality": "Atakum",
    "addressRegion": "Samsun",
    "postalCode": "55200",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.2867",
    "longitude": "36.3300"
  },
  "openingHours": ["Mo-Fr 09:00-17:00"],
  "areaServed": [
    { "@type": "City", "name": "Samsun" },
    { "@type": "City", "name": "Atakum" },
    { "@type": "City", "name": "İlkadım" },
    { "@type": "City", "name": "Canik" },
    { "@type": "City", "name": "Tekkeköy" }
  ],
  "medicalSpecialty": [
    "General Surgery", "Liver Transplantation", "Pancreatic Surgery",
    "Gallbladder Surgery", "Hernia Surgery", "Bariatric Surgery"
  ]
};

const Contact: React.FC = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendContactEmail({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message
      });

      if (success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ name: '', phone: '', email: '', message: '' });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email gönderme hatası:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/VM+Medical+Park+Samsun+Hastanesi/@41.3334995,36.2693414,17z/data=!3m1!4b1!4m6!3m5!1s0x4088790160da9ec9:0x746ff584f05eda61!8m2!3d41.3334955!4d36.2719163!16s%2Fg%2F11c5_r51m_?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  const contactMethods = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "VM Medicalpark Samsun Hastanesi",
      info: "Mimarsinan, Alparslan Blv. No:17",
      detail: "55200 Atakum/Samsun",
      color: "blue",
      action: "Haritada Görüntüle",
      onClick: handleMapClick
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Hastane Randevu Hattı",
      info: "(0362) 311 40 40",
      detail: "7/24 Erişilebilir",
      color: "emerald",
      action: "Hemen Ara"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Doktor İletişim",
      info: "+90 533 241 68 95",
      detail: "Hızlı Yanıt",
      color: "green",
      action: "WhatsApp'ta Yaz"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta Desteği",
      info: "dr.ilhan@medicalpark.com.tr",
      detail: "24 saat içinde yanıt",
      color: "red",
      action: "E-posta Gönder"
    }
  ];

  return (
    <>
      {/* Local Business Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white" id="contact">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-red-600">İletişim</span> - Samimi & Kolay Erişim
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sorularınız için her zaman ulaşılabilir olmaya özen gösteriyorum. 
              Size en uygun iletişim kanalını seçerek bana ulaşabilirsiniz.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Methods */}
            <div
              ref={contactRef}
              className={`space-y-6 transition-all duration-1000 delay-200 ease-out ${
                contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              } relative z-0`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Bana Ulaşın
              </h3>

              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  onClick={method.onClick}
                  className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 cursor-pointer select-none`}
                  style={{
                    pointerEvents: 'auto',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.cursor = 'pointer';
                  }}
                >
                  <div className="flex items-start gap-4 cursor-pointer">
                    <div className={`w-12 h-12 bg-${method.color}-100 rounded-xl flex items-center justify-center text-${method.color}-600 transition-colors duration-300 cursor-pointer`}>
                      {method.icon}
                    </div>

                    <div className="flex-1 cursor-pointer">
                      <h4 className="font-semibold text-gray-800 mb-1 cursor-pointer">
                        {method.title}
                      </h4>
                      <div className={`text-${method.color}-600 font-medium mb-1 cursor-pointer`}>
                        {method.info}
                      </div>
                      <div className="text-sm text-gray-500 mb-3 cursor-pointer">
                        {method.detail}
                      </div>
                      
                      <div className={`inline-flex items-center gap-2 text-${method.color}-600 text-sm font-medium transition-colors duration-300 cursor-pointer`}>
                        <span className="cursor-pointer">{method.action}</span>
                        <ExternalLink className="w-4 h-4 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Working Hours */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-gray-600" />
                  <h4 className="font-semibold text-gray-800">Çalışma Saatleri</h4>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pazartesi - Cuma</span>
                    <span className="font-medium text-gray-800">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cumartesi</span>
                    <span className="font-medium text-gray-800">09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pazar</span>
                    <span className="text-red-600">Kapalı</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <span className="text-emerald-600 text-xs font-medium">
                      * Acil durumlar için 7/24 ulaşılabilir
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className={`transition-all duration-1000 delay-400 ease-out ${
                contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Hızlı İletişim Formu
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                      placeholder="Adınızı ve soyadınızı giriniz"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                      placeholder="+90 5xx xxx xx xx"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Mail Adresiniz
                      <span className="text-gray-400 text-xs ml-1">(Zorunlu Değildir)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                      placeholder="ornek@email.com"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none resize-none"
                      placeholder="Durumunuz hakkında kısaca bilgi veriniz..."
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full py-3 px-6 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                      submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : submitStatus === 'error'
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:scale-105 active:scale-95'
                    } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''} text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Gönderiliyor...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Başarıyla Gönderildi!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        Tekrar Deneyin
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                        Mesaj Gönder
                      </>
                    )}
                    <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </button>
                </form>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 text-center text-green-600 text-sm font-medium">
                    Mesajınız başarıyla gönderildi. 24 saat içinde size dönüş yapılacaktır.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 text-center text-red-600 text-sm font-medium">
                    Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan telefon ile iletişime geçin.
                  </div>
                )}

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Gönderdiğiniz mesajlara <span className="font-semibold text-blue-600">24 saat içinde</span> yanıt veriyorum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="h-80 bg-gray-200 flex items-center justify-center relative">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">VM Medicalpark Samsun Hastanesi</p>
                  <p className="text-sm">Mimarsinan, Alparslan Blv. No:17, 55200 Atakum/Samsun</p>
                  <button
                    onClick={handleMapClick}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Google Maps'te Aç
                  </button>
                </div>

                {/* Custom Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-red-600 rounded-full animate-pulse"></div>
                  <div className="w-12 h-12 bg-red-600 opacity-30 rounded-full absolute -top-3 -left-3 animate-ping"></div>
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

export default Contact;
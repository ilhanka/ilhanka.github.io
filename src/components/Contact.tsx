import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Calendar,
  ExternalLink,
  Send
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';
import Toast from './Toast';

const Contact: React.FC = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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
      await emailjs.send(
        'service_jicp0ow',
        'template_sz27jkh',
        {
          from_name: formData.name,
          phone: formData.phone,
          message: formData.message,
        },
        'qOZwShjgHLeBuUbJk'
      );

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseToast = () => {
    setSubmitStatus('idle');
  };

  const contactMethods = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Medical Park Samsun Hastanesi",
      info: "Mimar Sinan Mahallesi Alpaslan Bulvarı No:17",
      detail: "Atakum / Samsun",
      action: "Haritada Görüntüle",
      link: "https://www.google.com/maps/place/VM+Medical+Park+Samsun+Hastanesi/@41.3334995,36.2693414,17z/data=!3m1!4b1!4m6!3m5!1s0x4088790160da9ec9:0x746ff584f05eda61!8m2!3d41.3334955!4d36.2719163!16s%2Fg%2F11c5_r51m_?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Randevu Hattı",
      info: "444 44 84",
      detail: "7/24 Erişilebilir",
      action: "Hemen Ara"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp İletişim",
      info: "+90 533 241 68 95",
      detail: "Hızlı Yanıt",
      action: "WhatsApp'ta Yaz"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta Desteği",
      info: "ikarabicak@yahoo.com",
      detail: "24 saat içinde yanıt",
      action: "E-posta Gönder"
    }
  ];

  return (
    <>
      {/* Toast Notification */}
      {submitStatus === 'success' && (
        <Toast
          message="Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım."
          type="success"
          onClose={handleCloseToast}
          duration={5000}
        />
      )}

      {submitStatus === 'error' && (
        <Toast
          message="Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya telefon ile iletişime geçin."
          type="error"
          onClose={handleCloseToast}
          duration={5000}
        />
      )}

      <section className="relative bg-gradient-to-b from-slate-50 to-white py-32" id="contact">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div 
              ref={headerRef}
              className={`mb-20 transition-all duration-1000 ease-out ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-navy-50 text-navy-700 text-sm font-bold uppercase tracking-widest">
                İletişim
              </span>
            </div>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
                Bana<br />Ulaşın
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Sorularınız için her zaman ulaşılabilir olmaya özen gösteriyorum. 
                Size en uygun iletişim kanalını seçerek bana ulaşabilirsiniz.
              </p>
            </div>

            {/* Split Screen Layout */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Left Side - Contact Methods */}
              <div 
                ref={contactRef}
                className={`space-y-6 transition-all duration-1000 delay-200 ease-out ${
                  contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="group bg-white p-8 border-2 border-slate-200 hover:border-navy-600 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-black text-slate-900 mb-2 text-lg">
                          {method.title}
                        </h4>
                        <div className="text-navy-600 font-bold mb-2 text-lg">
                          {method.info}
                        </div>
                        <div className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
                          {method.detail}
                        </div>
                        
                        {method.link ? (
                          <a
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-navy-600 text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300"
                          >
                            <span>{method.action}</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <div className="inline-flex items-center gap-2 text-navy-600 text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                            <span>{method.action}</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Working Hours Card */}
                <div className="bg-gradient-to-br from-navy-900 to-navy-700 p-8 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <Clock className="w-6 h-6 text-blue-300" />
                    <h4 className="font-black text-lg">Çalışma Saatleri</h4>
                  </div>
                  
                  <div className="space-y-3 text-base">
                    <div className="flex justify-between border-b border-white/20 pb-2">
                      <span className="text-white/90">Pazartesi - Cuma</span>
                      <span className="font-bold">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-2">
                      <span className="text-white/90">Cumartesi</span>
                      <span className="font-bold">09:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-white/90">Pazar</span>
                      <span className="text-white/70">Kapalı</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div 
                className={`transition-all duration-1000 delay-400 ease-out ${
                  contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="bg-white p-10 border-2 border-slate-200 sticky top-24">
                  <div className="mb-8">
                    <h3 className="text-3xl font-black text-slate-900 mb-3">
                      Hızlı İletişim Formu
                    </h3>
                    <p className="text-gray-600">
                      Formu doldurarak bana ulaşabilirsiniz.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-slate-200 focus:border-navy-600 focus:ring-4 focus:ring-navy-100 transition-all duration-300 outline-none bg-white"
                        placeholder="Adınızı ve soyadınızı giriniz"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                        Telefon Numaranız
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-slate-200 focus:border-navy-600 focus:ring-4 focus:ring-navy-100 transition-all duration-300 outline-none bg-white"
                        placeholder="+90 5xx xxx xx xx"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-5 py-4 border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none resize-none bg-white"
                        placeholder="Durumunuz hakkında kısaca bilgi veriniz..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-slate-900 to-blue-900 text-white py-4 font-black text-base hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                      {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Gönderdiğiniz mesajlara <span className="font-bold text-navy-600">24 saat içinde</span> yanıt vermekteyim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="relative">
              <div className="bg-slate-200 border-2 border-slate-300 overflow-hidden h-96 flex items-center justify-center relative">
                <div className="text-center z-10">
                  <MapPin className="w-16 h-16 mx-auto mb-6 text-navy-600" />
                  <p className="text-2xl font-black text-slate-900 mb-2">Medical Park Samsun Hastanesi</p>
                  <p className="text-base text-gray-600 mb-6">Mimar Sinan Mahallesi Alpaslan Bulvarı No:17, Atakum / Samsun</p>
                  <a
                    href="https://www.google.com/maps/place/VM+Medical+Park+Samsun+Hastanesi/@41.3334995,36.2693414,17z/data=!3m1!4b1!4m6!3m5!1s0x4088790160da9ec9:0x746ff584f05eda61!8m2!3d41.3334955!4d36.2719163!16s%2Fg%2F11c5_r51m_?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-slate-900 text-white px-8 py-3 font-black hover:bg-navy-600 transition-colors duration-300"
                  >
                    Google Maps'te Aç
                  </a>
                </div>
                
                {/* Custom Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-navy-600 animate-pulse"></div>
                  <div className="w-16 h-16 bg-navy-600 opacity-30 absolute -top-4 -left-4 animate-ping"></div>
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
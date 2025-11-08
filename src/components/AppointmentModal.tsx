import React, { useState } from 'react';
import { X, Calendar, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Toast from './Toast';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: ''
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
        'template_g4eleok',
        {
          from_name: formData.name,
          phone: formData.phone,
          reason: formData.reason,
        },
        'qOZwShjgHLeBuUbJk'
      );

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', reason: '' });

      // Close modal after a short delay
      setTimeout(() => {
        onClose();
      }, 1000);
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

  if (!isOpen) return null;

  return (
    <>
      {/* Toast Notification */}
      {submitStatus === 'success' && (
        <Toast
          message="Randevu talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağım."
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

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <div className="relative w-full max-w-3xl bg-white max-h-[90vh] overflow-y-auto border-2 border-slate-200">
          {/* Header Bar - Gradient */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-white mb-2">
                Randevu Talep Formu
              </h2>
              <p className="text-white/80 text-sm">
                Aşağıdaki formu doldurarak randevu talebinde bulunabilirsiniz.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-10">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-black text-slate-900 mb-3 uppercase tracking-wider">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none bg-white"
                  placeholder="Adınızı ve soyadınızı giriniz"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-black text-slate-900 mb-3 uppercase tracking-wider">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none bg-white"
                  placeholder="+90 5xx xxx xx xx"
                  required
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-black text-slate-900 mb-3 uppercase tracking-wider">
                  Randevu Talep Nedeniniz
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  rows={4}
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
                <Calendar className="w-5 h-5" />
                {isSubmitting ? 'Gönderiliyor...' : 'Randevu Talep Et'}
              </button>
            </form>

            {/* Medical Park Direct Link */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 mt-8">
              <h3 className="text-xl font-black text-white mb-3">
                Online Randevu Sistemi
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                Medical Park'ın online randevu sistemi üzerinden de doğrudan randevu oluşturabilirsiniz.
              </p>
              <a
                href="https://www.medicalpark.com.tr/hekimler/ilhan-karabicak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-white/80 font-black uppercase tracking-wider transition-colors duration-300"
              >
                <span>Medical Park Randevu Sistemi</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;

import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_jicp0ow', // Gmail servis ID'si
  TEMPLATE_ID_APPOINTMENT: 'template_g4eleok', // Konsültasyon/Randevu template ID'si
  TEMPLATE_ID_CONTACT: 'template_sz27jkh', // Bilgi Al/Mesaj Gönder template ID'si
  PUBLIC_KEY: 'qOZwShjgHLeBuUbJk' // EmailJS public key
};

// EmailJS'i initialize et
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Randevu talebi email gönderme
export interface AppointmentEmailData {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export const sendAppointmentEmail = async (data: AppointmentEmailData): Promise<boolean> => {
  try {
    const templateParams = {
      to_name: 'Dr. İlhan Karabıçak', // Doktorun adı
      from_name: data.name,
      from_phone: data.phone,
      from_email: data.email || 'Belirtilmedi',
      message: data.message,
      request_type: 'Konsültasyon Talebi',
      date: new Date().toLocaleDateString('tr-TR'),
      time: new Date().toLocaleTimeString('tr-TR')
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_APPOINTMENT,
      templateParams
    );

    console.log('Randevu email gönderildi:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Randevu email gönderme hatası:', error);
    return false;
  }
};

// Bilgi alma talebi email gönderme
export interface ContactEmailData {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export const sendContactEmail = async (data: ContactEmailData): Promise<boolean> => {
  try {
    const templateParams = {
      to_name: 'Dr. İlhan Karabıçak', // Doktorun adı
      from_name: data.name,
      from_phone: data.phone,
      from_email: data.email || 'Belirtilmedi',
      message: data.message,
      request_type: 'Bilgi Alma Talebi',
      date: new Date().toLocaleDateString('tr-TR'),
      time: new Date().toLocaleTimeString('tr-TR')
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_CONTACT,
      templateParams
    );

    console.log('İletişim email gönderildi:', response);
    return response.status === 200;
  } catch (error) {
    console.error('İletişim email gönderme hatası:', error);
    return false;
  }
};

// Test email gönderme (geliştirme aşamasında kullanmak için)
export const sendTestEmail = async (): Promise<boolean> => {
  try {
    const testData: AppointmentEmailData = {
      name: 'Test Kullanıcı',
      phone: '+90 555 123 45 67',
      email: 'test@example.com',
      message: 'Bu bir test mesajıdır. EmailJS entegrasyonu çalışıyor mu kontrol ediyoruz.'
    };

    return await sendAppointmentEmail(testData);
  } catch (error) {
    console.error('Test email gönderme hatası:', error);
    return false;
  }
};
